const user = JSON.parse(document.getElementById('db-user').textContent);
let categories = JSON.parse(document.getElementById('db-categories').textContent);
let services = JSON.parse(document.getElementById('db-services').textContent).map(service => Object.assign(service, {selectedPrice: service.unitPrice}));
const discountables = JSON.parse(document.getElementById('db-discountables').textContent);
const bonusThreshold = Number.parseInt(JSON.parse(document.getElementById('db-nb-sales-bonus').textContent), 10);
const bonusPercentage = Number.parseFloat(JSON.parse(document.getElementById('db-bonus-percentage').textContent));
const maison = JSON.parse(document.getElementById('db-maison').textContent);
const pos = document.getElementById('db-pos').textContent;
const permissions = JSON.parse(document.getElementById('db-permissions').textContent);
let cloture = JSON.parse(document.getElementById('db-cloture').textContent);

let exchangeRate = ((rate) => {
    if (typeof rate === 'string') {
        rate = Number.parseFloat(rate);
    }
    return rate;
})(JSON.parse(document.getElementById('db-exchange-rate').textContent));

let clients = JSON.parse(document.getElementById('db-clients').textContent).map(client => {
    client.totalFactures = Number.parseInt(client.totalFactures, 10);
    client.totalBonus = Number.parseFloat(client.totalBonus);
    client.totalCaution = Number.parseFloat(client.totalCaution);
    return client;
});

let workforcePercent = Number.parseFloat(document.getElementById('db-workforce-percent').textContent);
let vehicles = JSON.parse(document.getElementById('db-vehicles').textContent);
let usagesVehicule = ['Usage personnel', 'Transport des personnes', 'Transport des biens', 'Usage humanitaire', 'Véhicules spéciaux'];

let currency = localStorage.getItem('currency') ?? '$',
    total = 0,
    workforce = 0,
    discount = 0,
    net = 0,
    client = { id: null },
    licenseId = 0,
    currentService,
    currentInvoice = { id: null, client: { id: null }, articles: {}, services: {}, total: 0, workforce: 0, discount: 0 },
    selectedDebts = [],
    amountPaid = 0,
    amountDueSold,
    amountPaidDebts = 0,
    clotureElts = [],
    licenses = [],
    expertises = []
;

const clientAutocomplete = document.querySelector('#client-autocomplete'),
    clientDropdownMenu = document.querySelector('#client-dropdown')
    serviceAutocomplete = document.querySelector('#service-autocomplete'),
    usageVehiculeDropdownMenu = document.querySelector('#usage-vehicule-dropdown'),
    immatriculationAutocompletes = document.querySelectorAll('#numeroImmatriculation, #vehicule-controle, #vehicule-expertise'),
    grid = document.querySelector('#grid'),
    gridContent = document.querySelector('#gridContent'),
    newCustomerForm = document.querySelector('#newCustomerForm'),
    priceSelectModalElt = document.querySelector('#price-select-modal'),
    priceSelectModal = new mdb.Modal(priceSelectModalElt),
    cautionDepositModal = new mdb.Modal(document.getElementById('caution-deposit-modal')),
    depenseModal = new mdb.Modal(document.getElementById('newDepense'), {}),
    printReceiptModal = new mdb.Modal(document.getElementById('confirm-print-receipt'), {}),
    newControleModal = new mdb.Modal(document.querySelector('#new-ct-modal'), {}),
    newExpertiseModal = new mdb.Modal(document.querySelector('#new-expertise-modal'), {}),

    clientsFilter = async (value) => {
        const query = value.trim().toLowerCase();
        const filteredClients = clients.filter(client => client.nomClient.toLowerCase().includes(query));

        loadClientsFromServer(query).then((data) => {
            // clients.splice(0, data.length, ...data);
            clients = data;
        });

        return filteredClients;
    },

    usagesVehiculeFilter = async (value) => usagesVehicule.filter(u => u.toLowerCase().includes(value.trim().toLowerCase())),

    vehiclesFilter = async (value) => {
        const query = value.trim().toLowerCase();
        const filteredVehicles = vehicles.filter(vehicle => vehicle.numeroImmatriculation.toLowerCase().includes(query));

        loadVehiclesFromServer(query).then((data) => {
            vehicles = data.matches;
        });

        return filteredVehicles;
    },

    servicesFilter = (value) => {
        const query = value.trim().toLowerCase();
        const filteredServices = services.filter(service => (null !== service.codeBars && service.codeBars?.includes(query)) || service.name.trim().toLowerCase().indexOf(query) > -1);

        loadFromServer(query).then((data) => {
            if (services.length < data.length) {
                updateGrid(data.map(serv => {
                    if (serv.type === 2) {
                        const service = findServiceById(serv.serviceId);
                        if ('undefined' !== typeof service) {
                            Object.assign(serv, {quantity: service.quantity});
                        }
                    }
                    return Object.assign(serv, {selectedPrice: serv.unitPrice});
                }));
            }
            if (data.length > 0 && data[0].codeBars?.includes(sessionStorage.getItem('barcode'))) {
                currentInvoice = addToCart(data[0].serviceId, 1, currentInvoice);
                document.getElementById('serviceinputautofocus').value = '';
                document.getElementById('serviceinputautofocus').focus();
            }
        });

        updateGrid(filteredServices);

        return filteredServices;
    },

    loadFromServer = async (query) => {
        const q = query.trim();
        sessionStorage.setItem('barcode', q);
        const response = await fetch(`${baseUrl}/services?search=${encodeURI(q)}&limit=24`, {
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        });
        const data = await response.json();
        return data;
    },

    loadClientsFromServer = async (searchQuery) => {
        const q = searchQuery.trim();
        const url = `${baseUrl}/clients?search=${encodeURI(q)}`;
        const response = await fetch(url, {
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        });
        const data = await response.json();
        return data.data;
    },

    loadVehiclesFromServer = async (searchQuery) => {
        const q = searchQuery.trim();
        const url = `${baseUrl}/vehicules?search=${encodeURI(q)}`;
        const response = await fetch(url, {
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        });
        const data = await response.json();
        return data.data;
    },

    disableCustomerDetailsButtons = (detailsBtn, cautionBtn) => {
        document.querySelector('#' + detailsBtn).disabled = 'disabled';
        document.querySelector('#' + cautionBtn).disabled = 'disabled';
    },

    enableCustomerDetailsButtons = (detailsBtn, cautionBtn) => {
        document.querySelector('#' + detailsBtn).removeAttribute('disabled');
        document.querySelector('#' + cautionBtn).removeAttribute('disabled');
    },

    showLatestVehicles = (vehiclesList) => {
        let vehiclesListElt = document.querySelector('#vehicles-modal .modal-content > .modal-body > .tab-content > .tab-pane:first-child > div:last-child > .list-group');
        // vehiclesList = vehiclesList.slice(0, 15);
        vehiclesListElt.innerHTML = '';
        for (let idx = 0; idx < 12; idx++) {
            if (typeof vehiclesList[idx] !== 'undefined') {
                vehiclesListElt.innerHTML += `
                    <a class="list-group-item list-group-item-action d-flex justify-content-between" href="#">
                        <span>${vehiclesList[idx]['genre']} (${vehiclesList[idx]['numeroImmatriculation']})</span>
                    </a>
                `;
            }
        }
    },

    populateLicensesTable = (data) => {
        const datatable = document.querySelector('#ct-pill-content > .card > .datatable');
        const rows = [];
        licenses = data;

        if (licenses.length > 0) {
            for (const idx in licenses) {
                rows.push([
                    Number.parseInt(idx, 10) + 1,
                    licenses[idx].numeroPv,
                    `${licenses[idx].numeroImmatriculation} (${licenses[idx].genre})`,
                    licenses[idx].nomClient,
                    (new Date(licenses[idx].createdAt.date)).toLocaleDateString('fr-Fr', { year: 'numeric', month: 'short', day: 'numeric' }),
                    (new Date(licenses[idx].prochainevisite.date)).toLocaleDateString('fr-Fr', { year: 'numeric', month: 'short', day: 'numeric' }),
                    `<i class="fas fa-eye" style="cursor: pointer"></i>`
                ]);
            }
        }

        datatable.innerHTML = '';
        datatable.dataset.maxHeight = 400;

        const ctDatatableInstance = new mdb.Datatable(datatable, {
            columns: ['#', 'Numéro PV', 'Véhicule', 'Propriétaire', 'Création', 'Expiration', 'Action'],
            rows: rows
        });

        document.getElementById('ct-search-input').addEventListener('input', (e) => {
            ctDatatableInstance.search(e.target.value);
        });
    },

    populateExpertisesTable = (data) => {
        const datatable = document.querySelector('#ev-pill-content > .card > .datatable');
        const rows = [];
        expertises = data;

        if (expertises.length > 0) {
            for (const idx in expertises) {
                rows.push([
                    Number.parseInt(idx, 10) + 1,
                    (new Date(expertises[idx].createdAt.date)).toLocaleDateString('fr-Fr', { year: 'numeric', month: 'short', day: 'numeric' }),
                    `${expertises[idx].numeroImmatriculation} (${expertises[idx].genre})`,
                    expertises[idx].nomClient,
                    expertises[idx].username,
                    `<i class="fas fa-eye" style="cursor: pointer"></i>`
                ]);
            }
        }
        datatable.innerHTML = '';
        datatable.dataset.maxHeight = 400;

        const evDatatableInstance = new mdb.Datatable(datatable, {
            columns: ['#', 'Date', 'Véhicule', 'Propriétaire', 'Faite par', 'Action'],
            rows: rows
        });

        document.getElementById('ev-search-input').addEventListener('input', (e) => {
            evDatatableInstance.search(e.target.value);
        });
    },

    showVehiclesModal = () => {
        let options = '';
        const spinner = document.querySelector('#spinner');
        const newVehicleModal = new mdb.Modal(document.querySelector('#vehicles-modal'), {});
        // const clientSelect = document.querySelector('#client');
        const vehicleSelect = document.querySelector('#vehicule-controle');

        // populate client select
        // clients.forEach(c => {
        //     options += `<option value="${c.id}"${Number.parseInt(clientSelect.value) === c.id ? ' selected' : ''}>${c.nomClient}</option>`;
        // });
        // clientSelect.innerHTML = options;

        spinner.removeAttribute('hidden');
        // fetch vehicles
        fetch(`${baseUrl}/vehicules`, {
            method: 'GET',
            headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseBody => {
                    const { latest, matches } = JSON.parse(responseBody).data;
                    vehicles = matches;
                    // populate vehicle select
                    options = '';
                    latest.forEach(v => {
                        options += `<option value="${v.id}"${Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : ''}>${v.genre} (${v.numeroImmatriculation})</option>`;
                    });
                    vehicleSelect.innerHTML = options;
                    // fetch licenses
                    fetch(`${baseUrl}/licences`, {
                        method: 'GET',
                        headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
                    }).then(resp => {
                        if (resp.ok) {
                            resp.text().then(responseBody => {
                                licenses = JSON.parse(responseBody).data;
                                // fetch expertises
                                fetch(`${baseUrl}/expertises`, {
                                    method: 'GET',
                                    headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
                                }).then(resp => {
                                    if (resp.ok) {
                                        resp.text().then(responseBody => {
                                            expertises = JSON.parse(responseBody).data;
                                            populateExpertisesTable(expertises);
                                            // showLatestLicenses(licenses);
                                        });
                                    }
                                });
                                populateLicensesTable(licenses);
                            });
                        }
                    });

                    showLatestVehicles(latest);
                    spinner.setAttribute('hidden', 'hidden');
                    newVehicleModal.show();
                });
            }
        });
    },

    resetVehicleForm = (event) => {
        event.preventDefault();
        document.querySelector('#numeroImmatriculation').removeAttribute('data-id');
        document.querySelector('#client').removeAttribute('data-client-id');
        document.querySelectorAll('#new-vehicle-form input').forEach(input => {
            input.value = '';
        });
    },

    saveVehicle = () => {
        const immatriculationInput = document.querySelector('#numeroImmatriculation');
        const clientInput = document.querySelector('#client');

        if (immatriculationInput.value.trim() === '') {
            showAlert('Le numéro d\'immatriculation est obligatoire', 'danger', false);
        } else if (clientInput.value.trim() === '' || clientInput.dataset.clientId.trim() == '' || typeof clientInput.dataset.clientId === 'undefined') {
            showAlert('Le nom du client est obligatoire', 'danger', false);
        } else {
            const payload = {};
            const vehicleId = immatriculationInput.dataset.id;
            const spinner = document.querySelector('#spinner');
            for (const pair of (new FormData(document.querySelector('#new-vehicle-form'))).entries()) {
                Object.assign(payload, {
                    [pair[0]]: (pair[0] === 'client' ? clientInput.dataset.clientId : pair[1])
                });
            }
            spinner.removeAttribute('hidden');
            fetch(`${baseUrl}/vehicule/${'undefined' === typeof vehicleId ? 'new' : vehicleId}`, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }),
                body: JSON.stringify(payload)
            }).then(response => {
                if (response.ok) {
                    response.text().then(responseBody => {
                        const { message, data } = JSON.parse(responseBody);
                        // vehicles.unshift(vehicle);
                        spinner.setAttribute('hidden', 'hidden');
                        showLatestVehicles(data);
                        showAlert(message, 'success', false);
                    });
                }
            });
        }
    },

    savePv = () => {
        const payload = {
            vehicule: document.querySelector('#vehicule-controle').dataset.id,
            article: document.getElementById('article-controle').value
        };
        const spinner = document.querySelector('#spinner');
        spinner.removeAttribute('hidden');

        fetch(`${baseUrl}/licence/new`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }),
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                response.text().then(responseBody => {
                    const data = JSON.parse(responseBody);
                    const divtoprint = document.querySelector('#recu-controle-technique');
                    // const vehicle = vehicles.find(v => v.id === Number.parseInt(payload.vehicule, 10));
                    divtoprint.innerHTML = `
                        <div id="recu-controle-technique-body">
                            <div>Client : ${data.data.nomClient}</div>
                            <div>Modèle : ${data.data.typeOuModele}</div>
                            <div>Marque : ${data.data.marque}</div>
                            <div class="font-weight-bold">Plaque : ${data.data.numeroImmatriculation}</div>
                            <div class="font-weight-bold">Montant payé : ${data.sommesent * getRate(currency)} ${currency}</div>
                            <div>Reçu par : ${data.doneby}</div>
                            <div>Date : ${data.createdat}</div>
                            <div class="text-center pt-2 border-top-dashed">MERCI !</div>
                        </div>
                    `;
                    spinner.setAttribute('hidden', 'hidden');
                    newControleModal.hide();
                    licenses.unshift(data.data);
                    populateLicensesTable(licenses);
                    divtoprint.removeAttribute('hidden');

                    printJS({
                        printable: 'recu-controle-technique',
                        type: 'html',
                        header: `
                            ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="width: 320px">' : '<h1>' + maison['nomSociete'] + '</h1>'}
                            <div class="text-center">
                                <div><small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small></div>
                                <div><small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small></div>
                            </div>
                            <h3 class="text-center border">REÇU N° ${data.data.id}</h3>
                            <h3 class="text-center border-bottom-dashed">PV CONTRÔLE TECHNIQUE</h3>
                        `,
                        css: ['/assets/styles/print-receipt-pv-controle.css']
                    });

                    divtoprint.setAttribute('hidden', 'hidden');
                    showAlert(data.message, 'success', false);
                });
            }
        });
    },

    saveExpertise = () => {
        const payload = { vehicule: document.getElementById('vehicule-expertise').dataset.id };
        const spinner = document.querySelector('#spinner');
        spinner.removeAttribute('hidden');

        fetch(`${baseUrl}/expertises/new`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }),
            body: JSON.stringify(payload)
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseBody => {
                    const data = JSON.parse(responseBody);
                    const divtoprint = document.querySelector('#recu-expertise');
                    spinner.setAttribute('hidden', 'hidden');
                    newExpertiseModal.hide();
                    expertises.unshift(data.data);
                    populateExpertisesTable(expertises);

                    divtoprint.innerHTML = `
                        <div id="recu-expertise-body">
                            <div>Client : ${data.data.nomClient}</div>
                            <div>Modèle : ${data.data.typeOuModele}</div>
                            <div>Marque : ${data.data.marque}</div>
                            <div class="font-weight-bold">Plaque : ${data.data.numeroImmatriculation}</div>
                            <div class="font-weight-bold">Montant payé : ${data.amountPaid * getRate(currency)} ${currency}</div>
                            <div>Reçu par : ${data.data.user}</div>
                            <div>Date : ${(new Date(data.data.createdAt.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                            <div class="text-center pt-2 border-top-dashed">MERCI !</div>
                        </div>
                    `;

                    divtoprint.removeAttribute('hidden');

                    printJS({
                        printable: 'recu-expertise',
                        type: 'html',
                        header: `
                            ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="width: 320px">' : '<h1>' + maison['nomSociete'] + '</h1>'}
                            <div class="text-center">
                                <div><small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small></div>
                                <div><small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small></div>
                            </div>
                            <h3 class="text-center border">REÇU N° ${data.data.id}</h3>
                            <h3 class="font-weight-bold text-center border-bottom-dashed mb-2">EXPERTISE DE VÉHICULE</h3>
                        `,
                        css: ['/assets/styles/print-receipt-expertise.css']
                    });

                    divtoprint.setAttribute('hidden', 'hidden');
                    showAlert(data.message, 'success', false);
                });
            }
        });
    },

    setPhysicalPersonInputs = (index = 0) => {
        let options = `
            <label for="employeur">Employeur</label>
            <select name="employeur" id="employeur" class="form-control">
                <option value="0"${0 === index ? ' selected' : ''}>Aucun</option>
        `;

        clients.filter(c => c.typeClient === 'morale').forEach(client => {
            options += `
                <option value="${client['nomClient']}"${1 === index && client.nomClient === currentInvoice.client.employeur ? ' selected' : ''}>
                    ${client['nomClient']}
                </option>
            `;
        });
        options += '</select>';
        document.querySelector('#gender-section').innerHTML = `
            <div class="form-group my-2 w-50 mr-2">
                <label for="sexe">Sexe</label>
                <select type="text" name="sexe" id="sexe" class="form-control">
                    <option value="Aucun">Aucun</option>
                    <option value="H"${1 === index && 'H' === currentInvoice.client.sexe ? ' selected' : ''}>Homme</option>
                    <option value="F"${1 === index && 'F' === currentInvoice.client.sexe ? ' selected' : ''}>Femme</option>
                </select>
            </div>
            <div class="form-group my-2 w-50 ml-2">
                <label for="etatCivil">Etat civil</label>
                <select name="etatCivil" id="etatCivil" class="form-control">
                    <option value="Aucun">Aucun</option>
                    <option value="celibataire"${1 === index && 'celibataire' === currentInvoice.client.etatCivil ? ' selected' : ''}>Célibataire</option>
                    <option value="marie"${1 === index && 'marie' === currentInvoice.client.etatCivil ? ' selected' : ''}>Marié(e)</option>
                    <option value="divorce"${1 === index && 'divorce' === currentInvoice.client.etatCivil ? ' selected' : ''}>Divorcé(e)</option>
                    <option value="veuf"${1 === index && 'veuf' === currentInvoice.client.etatCivil ? ' selected' : ''}>Veuf(ve)</option>
                </select>
            </div>
        `;
        document.querySelector('#employer-section').innerHTML = options;
    },

    removePhysicalPersonInputs = () => {
        document.querySelector('#gender-section').innerHTML = '';
        document.querySelector('#employer-section').innerHTML = '';
    },

    serviceExistence = (arr, fn) => {
        for (const value of arr) {
            if (fn(value)) {
                return value;
            }
        }
        return false;
    };

function getRate(c) {
    return c === '$' ? 1 : exchangeRate;
}

function changeCurrency(event) {
    const currencyChangeInvoice = {};
    Object.assign(currencyChangeInvoice, currentInvoice);

    for (const key in currentInvoice.articles) {
        const article = currentInvoice.articles[key];
        addToCart(article.serviceId, (0 - article.nbUnites), currentInvoice, article.selectedPrice);
    }

    for (const key in currentInvoice.services) {
        const service = currentInvoice.services[key];
        addToCart(service.serviceId, (0 - service.nbUnites), currentInvoice, service.selectedPrice);
    }

    if (currency === '$') {
        currency = 'Fc';
        event.currentTarget.innerHTML = 'Fc';
    } else {
        currency = '$';
        event.currentTarget.innerHTML = `<i class="fas fa-dollar-sign"></i>`;
    }

    updateGrid(services);
    localStorage.setItem('currency', currency);
    document.querySelector('#total-bonus').textContent = ((currentInvoice.client.totalBonus ?? 0) * getRate(currency)).toFixed(2);
    document.querySelector('#total-caution').textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);

    for (const key in currencyChangeInvoice.articles) {
        const article = currencyChangeInvoice.articles[key];
        addToCart(article.serviceId, (0 - article.nbUnites), currentInvoice, article.selectedPrice);
    }

    for (const key in currencyChangeInvoice.services) {
        const service = currencyChangeInvoice.services[key];
        addToCart(service.serviceId, (0 - service.nbUnites), currentInvoice, service.selectedPrice);
    }
}

function displayGrid (container, content, client = {id: null}) {
    const categoriesFragment = content.querySelector('#categories');
    const servicesFragment = content.querySelector('#services');

    if (client['id'] === null) {
        disableCustomerDetailsButtons('customerDetails', 'customerCaution');
    }

    categoriesFragment.innerHTML = '';
    servicesFragment.innerHTML = '';

    for (let i = -1; i < 5; i++) {
        categoriesFragment.innerHTML += `
            <div class="col-md-2">
                <div class="card bg-${i === -1 ? 'success' : 'primary'} text-light">
                    <div id="hold-invoice" class="card-body category" title="${i === -1 ? 'Mettre la facture en pause' : (typeof categories[i] !== 'undefined' ? categories[i]['name'] : '')}">${i === -1 ? '<i class="fas fa-pause fa-2x text-center text-dark"></i>' : (typeof categories[i] !== 'undefined' ? (categories[i]['name'].length > 25 ? categories[i]['name'].slice(0, 25) + '...' : categories[i]['name']) : '')}</div>
                </div>
            </div>
        `;
    }

    for (let i = 0; i < 24; i++) {
        const serviceExists = typeof services[i] !== 'undefined';
        servicesFragment.innerHTML += `
            <div class="col-md-2">
                <div class="card bg-accent text-light service" data-depot-details-id="${serviceExists && typeof services[i]['id'] !== 'undefined' ? services[i]['id'] : ''}" data-service-id="${serviceExists ? services[i]['serviceId'] : ''}" data-service-type="${serviceExists ? services[i]['type'] : ''}" data-quantity="${serviceExists && typeof services[i]['quantity'] !== 'undefined' ? services[i]['quantity'] : ''}" data-price="${serviceExists ? services[i]['unitPrice'] : ''}">
                    <div class="card-body position-relative">
                        <div class="h6" title="${serviceExists ? services[i]['name'] : ''}">${serviceExists ? (services[i]['name'].length > 25 ? services[i]['name'].slice(0, 25) + '...' : services[i]['name']) : ''}</div>
                        <div>${serviceExists ? (services[i]['unitPrice'] * getRate(currency)).toFixed(2) + ' ' + currency : ''}</div>
                        <div class="position-absolute badge bg-primary text-light" style="padding: 0.3em;">${serviceExists && typeof services[i]['quantity'] !== 'undefined' ? services[i]['quantity'] : ''}</div>
                    </div>
                </div>
            </div>
        `;
    }

    container.appendChild(document.importNode(content, true));

    document.querySelectorAll('.service').forEach((serv) => {
        serv.addEventListener('click', () => {
            const serviceId = Number.parseInt(serv.dataset.serviceId, 10);
            const service = services.find(s => s.serviceId === serviceId);
            if ('undefined' !== typeof service) {
                currentInvoice = addToCart(service.serviceId, 1, currentInvoice);
                document.getElementById('serviceinputautofocus').value = "";
                document.getElementById('serviceinputautofocus').focus();
            }
        });
    });

    document.querySelector('#hold-invoice').addEventListener('click', () => {
        sell('hold', currentInvoice);
    });

    document.querySelector('#print-receipt').addEventListener('click', () => {
        if (permissions.includes('recu')) {
            printInvoice('REÇU', permissions);
        } else {
            showAlert('Vous n\'êtes pas autorisé à imprimer un reçu.', 'warning', false);
        }
    });

    document.querySelector('#print-invoice').addEventListener('click', () => {
        if (permissions.includes('duplicata')) {
            printInvoice('FACTURE DUPLICATA', permissions);
        } else {
            showAlert('Vous n\'êtes pas autorisé à faire une facture proforma.', 'warning', false);
        }
    });

    document.querySelector('#proforma').addEventListener('click', () => {
        sell('proforma', currentInvoice);
    });

    document.querySelector('#pay').addEventListener('click', () => {
        sell('sale', currentInvoice);
    });

    document.querySelectorAll('#createCustomer, #customerDetails').forEach((editBtn, idx) => {
        editBtn.addEventListener('click', () => {
            // Save article quantities in the session storage
            document.querySelectorAll('.service').forEach(service => {
                if (Number.parseInt(service.dataset.serviceType, 10) === 2) {
                    sessionStorage.setItem(service.dataset.depotDetailsId, service.dataset.quantity);
                }
            });

            grid.innerHTML = '';
            grid.appendChild(document.importNode(newCustomerForm.content, true));

            document.querySelector('#type-section').innerHTML = `
                <label for="typeClient">Type</label>
                <select name="typeClient" id="typeClient" class="form-control">
                    <option value="physique">Personne physique</option>
                    <option value="morale"${idx === 1 && currentInvoice.client.typeClient === 'morale' ? ' selected' : ''}>Personne morale</option>
                </select>
            `;

            document.querySelector('#typeClient').addEventListener('change', (event) => {
                event.currentTarget.value === 'morale' ? removePhysicalPersonInputs() : setPhysicalPersonInputs();
            });

            if (document.querySelector('#type-section > select').value === 'physique') {
                setPhysicalPersonInputs(idx);
            }

            if (idx === 1) {
                const toExclude = ['id', 'categoryId', 'categoryName', 'totalFactures', 'totalBonus', 'totalCaution'];
                const selects = ['sexe', 'etatCivil', 'employeur'];
                if (currentInvoice.client.typeClient === 'morale') {
                    toExclude.push(selects);
                    removePhysicalPersonInputs();
                }
                document.querySelector('#newCustomerTitle').textContent = `Détails ${currentInvoice.client['sexe'] === 'F' ? 'de la cliente' : 'du client'} ${(null !== currentInvoice.client || 'undefined' !== typeof currentInvoice.client) && 'undefined' !== typeof currentInvoice.client.nomClient ? currentInvoice.client['nomClient'] : ''}`;
                for (const prop in currentInvoice.client) {
                    if (selects.indexOf(prop) > -1 || toExclude.indexOf(prop) === -1) {
                        const propInput = document.querySelector('#' + prop);
                        if (propInput !== null) {
                            propInput.value = currentInvoice.client[prop];
                        } else {
                            currentInvoice.client[prop] = '';
                        }
                    }
                    if (prop === 'categoryId') {
                        document.querySelector('#category').value = currentInvoice.client['categoryId'];
                    }
                }
                if (currentInvoice.client.typeClient === 'physique') {
                    document.querySelectorAll('#employeur > option').forEach(option => {
                        if (option.textContent === currentInvoice.client.employeur) {
                            option.setAttribute('selected', 'selected');
                        }
                    });
                }
                document.querySelectorAll('#category > option').forEach(option => {
                    if (option.value === '0') {
                        document.querySelector('#category').removeChild(option);
                    }
                    if (option.value === currentInvoice.client.category) {
                        option.setAttribute('selected', 'selected');
                    }
                });
                document.querySelector('#addCustomer').textContent = 'Modifier';
            }
            
            document.querySelector('#addCustomer').addEventListener('click', (event) => {
                const isValid = validateForm(event.currentTarget.parentNode, event);

                if (isValid) {
                    const clientForm = document.querySelector('form');
                    const formData = new FormData(clientForm),
                        headers = new Headers();

                    if (idx === 0) {
                        currentInvoice.client = { id: null };
                    }

                    for (const pair of formData.entries()) {
                        Object.assign(currentInvoice.client, {
                            [pair[0]]: pair[1]
                        });
                    }

                    headers.append('Content-Type', 'application/json');
                    headers.append('X-Requested-With', 'XMLHttpRequest');
                    document.querySelector('#spinner').removeAttribute('hidden');

                    fetch(`${baseUrl}/clients/${currentInvoice.client.id ?? 'new'}`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(currentInvoice.client)
                    }).then(resp => {
                        document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                        document.querySelectorAll('#client-form .form-control').forEach(formControl => {
                            formControl.classList = 'was-validated form-control';
                        });
                        if (resp.ok) {
                            resp.text().then(responseBody => {
                                const data = JSON.parse(responseBody).data;
                                const verb = currentInvoice.client.id === null ? 'créé' : 'modifié';
                                const form = document.querySelector('#client-form');
                                const isNewClient = null === currentInvoice.client.id;

                                form.querySelectorAll('.error-message').forEach(elt => {
                                    elt.textContent = '';
                                });

                                currentInvoice.client.id = data.id;
                                currentInvoice.client.discountApplicable = data.discountApplicable;
                                currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : ('string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures);
                                currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : ('string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus);
                                currentInvoice.client.totalCaution = isNaN(currentInvoice.client.totalCaution) || 'undefined' === currentInvoice.client.totalCaution || null === currentInvoice.client.totalCaution ? 0 : ('string' === typeof currentInvoice.client.totalCaution ? Number.parseFloat(currentInvoice.client.totalCaution) : currentInvoice.client.totalCaution);
                                showAlert(`Client${currentInvoice.client.sexe === 'F' ? 'e' : ''} ${currentInvoice.client.nomClient} ${verb}${currentInvoice.client.sexe === 'F' ? 'e' : ''} avec succès`, 'success', false);
                                document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
                                document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
                                document.querySelector('#total-bonus').textContent = ((currentInvoice.client.totalBonus ?? 0) * getRate(currency)).toFixed(2);
                                document.querySelector('#total-caution').textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);
                                enableCustomerDetailsButtons('customerDetails', 'customerCaution');
                                // updateTotalElements(total, client.discountApplicable);

                                // Send SMS if new client
                                // if (isNewClient) {
                                //     fetch(`${baseUrl}/sms/sendtonewclient/${data.id}`, {
                                //         method: 'GET'
                                //     }).then(response => {
                                //         if (response.ok) {
                                //             response.text().then(respBody => {
                                //                 showAlert(JSON.parse(respBody).message, 'success', false);
                                //             });
                                //         } else {
                                //             showAlert('Erreur lors de l\'envoi du message.', 'danger', false);
                                //         }
                                //     });
                                // }
                            });
                        } else {
                            resp.text().then(respBody => {
                                const { message, errors } = JSON.parse(respBody);

                                // if (errors.length > 0) {
                                    const form = document.querySelector('#client-form');
                                    let formInput;

                                    form.querySelectorAll('form-group, form-outline').forEach(formGroup => {
                                        formGroup.classList = formGroup.classList.replace('my-2', 'my-0');
                                    });

                                    form.querySelectorAll('.error-message').forEach(elt => {
                                        elt.textContent = '';
                                    });

                                    for (const propertyPath in errors) {
                                        formInput = form.querySelector('#' + propertyPath);
                                        const errorBlock = form.querySelector('#' + propertyPath + ' + .error-message');
                                        errorBlock.style.fontSize = 'smaller';
                                        errorBlock.innerHTML = '';

                                        errors[propertyPath].forEach(error => {
                                            errorBlock.innerHTML += error.message + '<br>';
                                        });
                                    }

                                    showAlert(message, 'danger', false);
                                // } else {
                                //     showAlert('Une erreur est survenue', 'danger', false);
                                // }
                            });
                        }
                    });
                } else {
                    showAlert('Ce formulaire contient des erreurs', 'danger', false);
                }
            });

            document.querySelector('#close').addEventListener('click', () => {
                grid.innerHTML = '';
                displayGrid(grid, gridContent.content, currentInvoice.client);
                document.querySelectorAll('.service').forEach(service => {
                    if (Number.parseInt(service.dataset.serviceType, 10) === 2) {
                        const qty = sessionStorage.getItem(service.dataset.depotDetailsId);
                        service.dataset.quantity = qty;
                        service.querySelector('.card-body > div:last-child').textContent = qty;
                    }
                });
            });
        });
    });

    document.querySelector('#customerCaution').addEventListener('click', () => {
        cautionDepositModal.show();
    });

    document.querySelector('#createDepense').addEventListener('click', (event) => {
        const parentNode = event.currentTarget.parentNode.parentNode;
        fetch(`${baseUrl}/sales/clotures/new`, {
            method: 'GET',
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseBody => {
                    clotureElts = JSON.parse(responseBody).data;
                    if (Number.parseFloat(clotureElts.cash.total ?? 0) + Number.parseFloat(clotureElts.paiementsDettes ?? 0) > Number.parseFloat(parentNode.querySelector('#amount').value)) {
                        const formData = new FormData(parentNode.querySelector('form')),
                            headers = new Headers({
                                'X-Requested-With': 'XMLHttpRequest'
                            });
                        fetch(`${baseUrl}/depenses/new`, {
                            method: 'POST',
                            headers: headers,
                            body: formData
                        }).then(resp => {
                            if (resp.ok) {
                                resp.text().then(data => {
                                    showAlert(JSON.parse(data), 'success', false);
                                });
                            }
                        });
                    } else {
                        showAlert('Vous ne pouvez pas dépenser un montant supérieur au solde de votre caisse.', 'warning', false);
                    }
                });
            }
        });
    });

    document.querySelector('#toggleNewDepense').addEventListener('click', (e) => {
        if (permissions.includes('depense')) {
            cloture === null ? depenseModal.show() : showAlert('Impossible d\'effectuer une dépense ! Vous avez déjà clôturé la journée.', 'warning', false);
        } else {
            showAlert('Vous n\'êtes pas autorisé à faire une dépense.', 'warning', false);
        }
    });

    document.querySelector('#toggle-paiement-dettes').addEventListener('click', () => {
        if (cloture === null) {
            if (currentInvoice.client.id !== null) {
                const debtPaymentModal = new mdb.Modal(document.getElementById('paiement-dettes'), {});
                debtPaymentModal.show();
            } else {
                showAlert('Veuillez sélectionner un client', 'warning', false);
            }
        } else {
            showAlert('Impossible d\'effectuer l\'opération ! Vous avez déjà clôturé la journée.', 'warning', false);
        }
    });

    document.querySelector('#cloturer').addEventListener('click', () => {
        fetch(`${baseUrl}/sales/clotures/new`, {
            method: 'GET',
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseBody => {
                    clotureElts = JSON.parse(responseBody).data;
                    const ventes = Number.parseFloat(clotureElts.ventes.total ?? 0) + Number.parseFloat(clotureElts.ventes.workforce ?? 0) - Number.parseFloat(clotureElts.ventes.discount ?? 0);
                    const cash = Number.parseFloat(clotureElts.cash.total ?? 0) + Number.parseFloat(clotureElts.cash.workforce ?? 0) - Number.parseFloat(clotureElts.cash.discount ?? 0);
                    const credits = Number.parseFloat(clotureElts.credits.total ?? 0) + Number.parseFloat(clotureElts.credits.workforce ?? 0) - Number.parseFloat(clotureElts.credits.discount ?? 0);
                    const paiementsDettes = Number.parseFloat(clotureElts.paiementsDettes ?? 0);
                    const depenses = Number.parseFloat(clotureElts.depenses ?? 0);
                    const paiementsParBonus = Number.parseFloat(clotureElts.paiementsParBonus ?? 0);
                    document.querySelector('#ventes > td:nth-child(2)').textContent = (ventes * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#cash > td:nth-child(2)').textContent = (cash * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#credits > td:nth-child(2)').textContent = (credits * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#ventes-par-bonus > td:nth-child(2)').textContent = (paiementsParBonus * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#dettes > td:nth-child(2)').textContent = (paiementsDettes * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#depenses > td:nth-child(2)').textContent = (depenses * getRate(currency)).toFixed(2) + ' ' + currency;
                    document.querySelector('#totalVentes > td:nth-child(2)').textContent = `${((cash + paiementsDettes - depenses - paiementsParBonus) * getRate(currency)).toFixed(2)} ${currency}`;
                });
            }
        });
    });

    document.querySelector('#listfactures').addEventListener('click', () => {
        const datatable = document.querySelector('#factureslist .modal-body > .datatable');
        datatable.innerHTML = '';
        const invoicesTableInstance = new mdb.Datatable(datatable, {
            columns: [
                { label: 'Date', field: 'dateFact' },
                { label: 'N° facture', field: 'id' },
                { label: 'Type', field: 'typeFacture' },
                { label: 'Client', field: 'nomClient' },
                { label: 'Montant', field: 'amount' },
                { label: 'Réduction', field: 'discount' }
            ]
        }, { loading: true });

        datatable.removeAttribute('hidden');

        fetch(`${baseUrl}/factures/vente/guichetier`, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    sessionStorage.setItem('invoiceItems', data);

                    const setActions = (e) => {
                        e.currentTarget.querySelectorAll('tbody > tr').forEach((rowElt) => {
                            rowElt.style.cursor = 'pointer';
                            rowElt.addEventListener('click', (event) => {
                                const invoiceItems = JSON.parse(sessionStorage.getItem('invoiceItems'));
                                const index = Number.parseInt(event.currentTarget.dataset.index);
                                populatechartboad(invoiceItems[index]);
                                currentInvoice.type = invoiceItems[index].typeFacture;
                            });
                        });
                    };

                    const invoiceSearch = (event) => {
                        invoicesTableInstance.search(event.target.value);
                    };

                    datatable.addEventListener('render.mdb.datatable', setActions);

                    invoicesTableInstance.update({
                        rows: JSON.parse(sessionStorage.getItem('invoiceItems')).map(row => {
                            return {
                                ...row,
                                dateFact: `${(new Date(row.dateFact.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}`,
                                amount: `${((row.total + ('number' === typeof row.workforce ? row.workforce : 0)) * getRate(currency)).toFixed(2)} ${currency}`,
                                discount: `${((row.discount ?? 0) * getRate(currency)).toFixed(2)} ${currency}`
                            };
                        }),
                    }, { loading: false, hover: true });

                    document.getElementById('invoice-search-input').addEventListener('input', invoiceSearch); // removeEventListener: pending
                });
            }
        });
    });

    document.querySelectorAll('.confirm-cloture').forEach(elt => {
        cloture !== null ? elt.setAttribute('hidden', 'hidden') : elt.removeAttribute('hidden');
    });

    initDebtPayment('paiement-dettes');
    initDebtPayment('paiement-dettes-employees', '/employes');

    oneTimePayment();
    oneTimePayment('-employees');
}

function updateGrid (servs) {
    services = servs;
    document.querySelector('#grid').innerHTML = '';
    displayGrid(grid, gridContent.content, currentInvoice.client);
}

function validateForm(form, event) {
    let isValid = true;
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        isValid = false;
    }
    form.classList.add('was-validated');
    form.querySelectorAll('#form-control').forEach(formControl => {
        formControl.style.marginBottom = '0';
    });

    return isValid;
}

function emptyInput(input) {
    input.value = '';
}

function addToCart(serviceId, qty, invoice, selectedPrice = null) { // removeEventListener: pending
    const isDiscountApplicable = invoice.client.id !== null && invoice.client.discountApplicable;
    const names = document.querySelectorAll('.table > tbody > tr > td:first-child');
    const s = findServiceById(serviceId);

    if (qty > 0 && s.quantity <= 0) {
        showAlert('Stock insuffisant', 'warning', false);
    } else if ('undefined' !== typeof s) {
        const serviceExists = serviceExistence(names, (n) => s.name == n.textContent);
        const serviceType = s.type === 1 ? 'service' : 'article';

        if (((serviceType === 'service' || qty > 0) && qty > 0) || qty < 0) {
            const key = s.type === 1 ? s.serviceId : s.id;
            // Verifier si le nom du service existe dans la colonne des noms. Si oui, ajouter la quantite ; sinon ajouter une nouvelle ligne.
            if (!!serviceExists) {
                const qtyElt = serviceExists.parentNode.querySelector('td:nth-of-type(2)');
                const priceElt = serviceExists.parentNode.querySelector('td:nth-of-type(3)');
                qtyElt.textContent = (null === selectedPrice ? Number.parseInt(qtyElt.textContent, 10) : 0) + qty;
                priceElt.textContent = (null === selectedPrice ? (Number.parseFloat(priceElt.textContent) + qty * s.selectedPrice * getRate(currency)) : qty * selectedPrice * getRate(currency)).toFixed(2);
            } else {
                const cartItem = document.querySelector('#cartItem').content;
                cartItem.querySelector('tr').dataset.serviceId = serviceId;
                cartItem.querySelector('td').textContent = s.name;
                cartItem.querySelector('td:nth-of-type(2)').textContent = qty;
                cartItem.querySelector('td:nth-of-type(3)').textContent = (qty * s.selectedPrice * getRate(currency)).toFixed(2);
                document.querySelector('#cart > tbody').appendChild(document.importNode(cartItem, true));
                document.querySelector('tr:last-of-type > td > .btn-group > button').addEventListener('click', () => {
                    currentInvoice = addToCart(s.serviceId, 1, currentInvoice);
                });
                document.querySelector('tr:last-of-type > td > .btn-group > button:nth-child(2)').addEventListener('click', (event) => {
                    const ancestor = event.currentTarget.parentNode.parentNode.parentNode;
                    currentInvoice = addToCart(s.serviceId, -1, currentInvoice);
                    if (Number.parseInt(ancestor.querySelector('td:nth-of-type(2)').textContent, 10) === 0) {
                        document.querySelector('#cart > tbody').removeChild(ancestor);
                    }
                });
                document.querySelector('tr:last-of-type > td > .btn-group > button:last-child').addEventListener('click', (event) => {
                    const ancestor = event.currentTarget.parentNode.parentNode.parentNode;
                    currentInvoice = addToCart(s.serviceId, -1 * Number.parseInt(ancestor.querySelector('td:nth-of-type(2)').textContent, 10), currentInvoice);
                    document.querySelector('#cart > tbody').removeChild(ancestor);
                });
            }

            if (null === selectedPrice) {
                invoice.total += qty * s.selectedPrice;
            } else {
                const service = findServiceById(serviceId);
                invoice.total += qty * selectedPrice - service.nbUnites * service.selectedPrice;
            }

            if (isDiscountApplicable && discountables.indexOf(s.serviceId) > -1 && s.selectedPrice === s.unitPrice) {
                // if (null === selectedPrice) {
                //     invoice.discount -= qty * (Math.abs(s.unitPrice - s.deflatedPrice));
                // } else {
                    invoice.discount += qty * (Math.abs(s.unitPrice - s.deflatedPrice));
                // }
            }

            // Update total elements
            updateTotalElements(invoice.total, invoice.discount);

            // Diminuer ou augmenter la quantite de l'article
            if (serviceType === 'article') {
                const serviceElt = document.querySelector(`#services > div > [data-service-id="${s.serviceId}"]`);

                if (null === selectedPrice || qty !== s.nbUnites) {
                    s.quantity -= qty;
                }

                if (serviceElt !== null) {
                    serviceElt.dataset.quantity = s.quantity;
                    serviceElt.querySelector('.card-body > .badge').textContent = s.quantity;
                }
            }

            if ('undefined' !== typeof invoice[serviceType + 's'] && invoice[serviceType + 's'].hasOwnProperty(key)) {
                if (null !== selectedPrice) {
                    invoice[serviceType + 's'][key]['nbUnites'] = qty;
                    invoice[serviceType + 's'][key]['selectedPrice'] = selectedPrice;
                } else {
                    invoice[serviceType + 's'][key]['nbUnites'] += qty;
                }
            } else {
                if ('undefined' === typeof invoice[serviceType + 's']) {
                    Object.assign(invoice, {[serviceType + 's']: {}});
                }
                Object.assign(invoice[serviceType + 's'], {
                    [key]: {
                        id: s.id,
                        serviceId: s.serviceId,
                        category: s.category,
                        codeBars: s.codeBars,
                        depotId: s.depotId,
                        depotName: s.depotName,
                        nbUnites: qty,
                        quantity: s.quantity,
                        name: s.name,
                        photo: s.photo,
                        unitPrice: s.unitPrice,
                        deflatedPrice: s.deflatedPrice,
                        wholesalePrice: s.wholesalePrice,
                        selectedPrice: (selectedPrice ?? s.selectedPrice),
                        type: s.type,
                        bonusApplicable: s.bonusApplicable
                    }
                });
            }

            if (0 === invoice[serviceType + 's'][key]['nbUnites']) {
                delete invoice[serviceType + 's'][key];
                services = services.map(serv => {
                    if (serv.serviceId === s.serviceId) {
                        serv.selectedPrice = serv.unitPrice;
                    }
                    return serv;
                });
            }
        }
    }

    return invoice;
}

function findServiceById(serviceId) {
    for (const key in currentInvoice.articles) {
        if (Object.hasOwnProperty.call(currentInvoice.articles, key) && serviceId === currentInvoice.articles[key].serviceId) {
            return currentInvoice.articles[key];
        }
    }

    for (const key in currentInvoice.services) {
        if (Object.hasOwnProperty.call(currentInvoice.services, key) && serviceId === currentInvoice.services[key].serviceId) {
            return currentInvoice.services[key];
        }
    }

    return services.find(service => service.serviceId === Number.parseInt(serviceId, 10));
}

function editQuantity(e) {
    const currentTarget = e.currentTarget;
    const serviceId = Number.parseInt(currentTarget.parentNode.dataset.serviceId, 10);
    const quantity = Number.parseInt(prompt("Quantité"), 10);

    if (!isNaN(quantity) && typeof quantity === 'number') {
        const service = findServiceById(serviceId);
        const oldQty = service.nbUnites;
        const available = service.quantity + oldQty;
        const newQty = (quantity > available ? available : quantity) - oldQty;
        currentInvoice = addToCart(serviceId, newQty, currentInvoice);
    }
}

function updateTotalElements(total, discountAmount = 0) {
    const discountElt = document.querySelector('#discount');
    const workforceElt = document.querySelector('#workforce');
    const workforceAmount = 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * total : 0;
    document.querySelector('#total').textContent = currency + ' ' + (Math.abs(total) * getRate(currency)).toFixed(2);
    if (null !== discountElt) {
        discountElt.textContent = currency + ' ' + (discountAmount * getRate(currency)).toFixed(2);
    }
    if (null !== workforceElt) {
        workforceElt.textContent = currency + ' ' + (workforceAmount * getRate(currency)).toFixed(2);
    }
    document.querySelector('#net').textContent = currency + ' ' + (Math.abs(total + workforceAmount - discountAmount) * getRate(currency)).toFixed(2);
}

function resetCart() {
    document.querySelectorAll('tr > td > .btn-group > button:last-child').forEach(removeBtn => {
        removeBtn.click();
    });

    document.querySelectorAll('#sale-amount, #sale-workforce').forEach(amountElt => {
        amountElt.value = 0;

        if (amountElt.id === 'workforce') {
            amountElt.parentNode.hidden = 'hidden';
        }
    });

    document.querySelector('#sale-total > span:last-child').textContent = 0;

    updateTotalElements(0);

    document.querySelector('#customerName').textContent = 'Client anonyme';
    document.querySelector('#total-factures').textContent = 0;
    document.querySelector('#total-bonus').textContent = 0.00;
    document.querySelector('#total-caution').textContent = 0.00;

    currentInvoice = { id: null, client: { id: null }, articles: {}, services: {}, total: 0, workforce: 0, discount: 0 };
    licenseId = 0;
    amountPaid = 0;
    amountPaidDebts = 0;
}

function applyDiscount(invoice, discountables) {
    invoice.discount = 0;

    for (const idx in invoice.services) {
        const service = invoice.services[idx];
        if (discountables.indexOf(service.id) > -1) {
            invoice.discount += service.nbUnites * Math.abs(service.unitPrice - service.deflatedPrice);
            invoice.services[idx].unitPrice = service.deflatedPrice;
        }
    }

    for (const idx in invoice.articles) {
        const article = invoice.articles[idx];
        if (discountables.indexOf(article.id) > -1) {
            invoice.discount += article.nbUnites * Math.abs(article.unitPrice - article.deflatedPrice);
            invoice.articles[idx].unitPrice = article.deflatedPrice;
        }
    }

    return invoice;
}

function removeDiscount(invoice) {
    invoice.discount = 0;

    for (const idx in invoice.services) {
        // const service = services.find(s => s.serviceId === invoice.services[idx].serviceId);
        const service = findServiceById(invoice.services[idx].serviceId);
        invoice.services[idx].unitPrice = service.unitPrice;
    }

    for (const idx in invoice.articles) {
        // const article = services.find(s => s.serviceId === invoice.articles[idx].serviceId);
        const article = findServiceById(invoice.articles[idx].serviceId);
        invoice.articles[idx].unitPrice = article.unitPrice;
    }

    return invoice;
}

function proceedToSell(saleType, paymentMode = null, netAmount = null, saleModal = null, saleModalContainer = null, montantPaye = null, isDiscountApplicable = false) {
    let invoice = currentInvoice;
    const saleTotal = invoice.total + invoice.workforce - invoice.discount;

    if (!(['proforma', 'hold'].includes(saleType)) && !permissions.includes('credit') && montantPaye < saleTotal) {
        showAlert('Vous n\'êtes pas autorisé à faire une vente à crédit.', 'warning', false);
    } else if (!(['proforma', 'hold'].includes(saleType)) && !permissions.includes('cash') && montantPaye >= saleTotal) {
        showAlert('Vous n\'êtes pas autorisé à faire une vente cash.', 'warning', false);
    } else if (invoice.total > 0) {
        if (!(['proforma', 'hold'].includes(saleType)) && 'undefined' !== typeof netAmount && montantPaye < saleTotal && typeof invoice.client['id'] !== 'number') {
            showAlert('Veuillez sélectionner un client pour continuer.', 'warning', false);
        } else {
            const dateTosentElt = document.querySelector('#dateretraitinput');
            let dateTosent = '';
            let payload;

            if (dateTosentElt !== null) {
                dateTosent = dateTosentElt.value;
            }

            if ('' === dateTosent) {
                // echeance de 7 jours par defaut
                dateTosent = (new Date(Date.now() + 604800000)).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
            }

            document.querySelector('#spinner').removeAttribute('hidden');
            payload = { sourceInvoiceId: invoice?.id, client: invoice.client['id'], saleType: saleType, paymentMode: paymentMode, amountPaid: montantPaye, total: invoice.total, workforce: (invoice.workforce === 0 && 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * invoice.total : invoice.workforce), workforcePercent: workforcePercent, discount: invoice.discount, details: invoice, licenseId: licenseId, date: dateTosent };

            // console.log(payload.licenseId);
            fetch(`${baseUrl}/sales/new`, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(payload)
            }).then(resp => {
                const saleButton = saleModalContainer?.querySelector('.modal-footer > button:nth-child(2)');
                if (resp.ok) {
                    resp.text().then(respBody => {
                        const parsedBody = JSON.parse(respBody);
                        const totalFacturesElt = document.querySelector('#total-factures');
                        const clientId = parsedBody.clientId;

                        sessionStorage.setItem('invoiceId', parsedBody.invoiceId);
                        invoice.id = parsedBody.invoiceId;
                        invoice.type = saleType;

                        if (['cash', 'credit', 'caution'].indexOf(saleType) > -1) {
                            if (clientId !== null) {
                                const totalBonusElt = document.querySelector('#total-bonus');
                                const totalCautionElt = document.querySelector('#total-caution');

                                currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus ? 0 : ('string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus);
                                currentInvoice.client.totalCaution = isNaN(currentInvoice.client.totalCaution) || 'undefined' === currentInvoice.client.totalCaution ? 0 : ('string' === typeof currentInvoice.client.totalCaution ? Number.parseFloat(currentInvoice.client.totalCaution) : currentInvoice.client.totalCaution);
                                totalBonusElt.textContent = ((currentInvoice.client.totalBonus ?? 0) * getRate(currency)).toFixed(2);
                                totalCautionElt.textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);

                                document.querySelector('#spinner').setAttribute('hidden', 'hidden');

                                const bonuses = parsedBody.bonuses;
                                const totalBonus = bonuses.length > 0 ? bonuses.reduce((accu, next) => accu + next, 0) : 0;
                                let suffixe = '';

                                if (totalBonus > 0) {
                                    suffixe = ` Le client vient de gagner ${(totalBonus * getRate(currency)).toFixed(2)} ${currency} en bonus.`;
                                    currentInvoice.client.totalBonus += totalBonus;
                                    totalBonusElt.textContent = (Number.parseFloat(totalBonusElt.textContent) + (totalBonus * getRate(currency))).toFixed(2);
                                }

                                showAlert(`Vente ${saleType} effectuée avec succès !${suffixe}`, 'success', false);

                            } else {
                                document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                                showAlert(`Vente ${saleType} effectuée avec succès !`, 'success', false);
                            }
                        } else if (saleType === 'proforma') {
                            document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                            showAlert('Facture proforma enregistrée', 'success', false);
                        } else if (saleType === 'hold') {
                            document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                            showAlert('Facture mise en pause', 'success', false);
                        }

                        if (clientId !== null) {
                            totalFacturesElt.textContent = Number.parseInt(totalFacturesElt.textContent, 10) + 1;
                        }

                        // reset the selected price for all services
                        services = services.map(service => Object.assign(service, {selectedPrice: service.unitPrice}));
                    });

                } else {
                    resp.text().then(responseBody => {
                        showAlert(JSON.parse(responseBody).message, 'danger', false);
                    });
                }

                if (null !== saleButton && !(['proforma', 'hold'].includes(saleType))) {
                    saleButton.removeEventListener('click', proceedToSell, false);
                }
            });

            if (!(['proforma', 'hold'].includes(saleType))) {
                saleModal.hide();
            }

            sessionStorage.setItem('invoice', JSON.stringify(payload));
            resetCart();

            if (null !== saleModal) {
                saleModal.hide();
            }

            window.location.reload();
        }
    }
}

function sell(type, invoice) {
    if (cloture === null) {

        if (!permissions.includes('proforma') && type === 'proforma') {
            showAlert('Vous n\'êtes pas autorisé à faire une facture proforma.', 'warning', false);
        } else if (invoice.total > 0) {
            let montantPaye = null;
            let saleType = type;
            let paymentMode = 1;
            let isDiscountApplicable = false;
            let netAmount = invoice.total - invoice.discount;

            invoice.workforce = 0;

            if (saleType === 'sale') {
                const saleModalElt = document.querySelector('#sale-modal');
                const saleModal = new mdb.Modal(saleModalElt);
                let paymentModeSelect = saleModalElt.querySelector('#payment-mode');
                let saleModalContainer;
                let amountElt;
                let saleTotalElt;

                if (!isNaN(currentInvoice.client.totalBonus) && currentInvoice.client.totalBonus >= netAmount + invoice.workforce) {
                    paymentModeSelect.removeAttribute('disabled');
                    paymentModeSelect.addEventListener('change', (e) => {
                        paymentMode = Number.parseFloat(e.currentTarget.value);
                    });
                } else if (!isNaN(currentInvoice.client.totalCaution) && currentInvoice.client.totalCaution >= netAmount + invoice.workforce) {
                    paymentModeSelect.removeAttribute('disabled');
                    paymentModeSelect.addEventListener('change', (e) => {
                        paymentMode = Number.parseFloat(e.currentTarget.value);
                    });
                }

                isDiscountApplicable = currentInvoice.client.id !== null && currentInvoice.client.discountApplicable && [1, 3].includes(paymentMode);

                saleModalElt.addEventListener('shown.bs.modal', (e) => {
                    saleModalContainer = e.currentTarget;
                    amountElt = saleModalContainer.querySelector('#sale-amount');
                    saleTotalElt = saleModalContainer.querySelector('#sale-total > span:nth-child(2)');
                    amountElt.dataset.netAmount = netAmount;
                    amountElt.value = (netAmount * getRate(currency)).toFixed(2);
                    montantPaye = netAmount;
                    saleTotalElt.dataset.montantPaye = montantPaye;
                    saleTotalElt.textContent = (montantPaye * getRate(currency)).toFixed(2);

                    if ('number' === typeof workforcePercent && workforcePercent > 0) {
                        const workforceElt = saleModalContainer.querySelector('#sale-workforce');
                        const workforceData = null === workforcePercent ? 0 : netAmount * workforcePercent;
                        workforceElt.dataset.workforce = workforceData;
                        workforceElt.value = workforceData * getRate(currency);

                        const updateSaleTotal = (currentTarget) => {
                            if (!Number.parseFloat(workforceElt.value)) {
                                workforceElt.dataset.workforce = 0;
                                workforceElt.value = 0;
                            }

                            if ('undefined' !== typeof currentTarget) {
                                if (currentTarget.id === 'sale-workforce') {
                                    workforceElt.dataset.netAmount = workforceElt.value / getRate(currency);
                                    invoice.workforce = Number.parseFloat(workforceElt.dataset.workforce);
                                } else {
                                    amountElt.dataset.netAmount = amountElt.value / getRate(currency);
                                    netAmount = Number.parseFloat(amountElt.dataset.netAmount);
                                }
                            }

                            montantPaye = netAmount + Number.parseFloat(invoice.workforce);
                            saleTotalElt.dataset.montantPaye = montantPaye;
                            saleTotalElt.textContent = (montantPaye * getRate(currency)).toFixed(2);

                            if (!isNaN(currentInvoice.client.totalBonus) || !isNaN(currentInvoice.client.totalCaution)) {
                                if (montantPaye <= currentInvoice.client.totalBonus || montantPaye <= currentInvoice.client.totalCaution) {
                                    paymentModeSelect.removeAttribute('disabled');
                                } else {
                                    paymentMode = 1;
                                    paymentModeSelect.setAttribute('disabled', 'disabled');
                                }
                            }
                        };

                        invoice.workforce = ((workforcePercent ?? 0.2) * netAmount).toFixed(2);

                        if (null !== workforceElt) {
                            workforceElt.dataset.workforce = invoice.workforce;
                            workforceElt.value = invoice.workforce * getRate(currency);
                        }

                        updateSaleTotal();

                        if (null !== workforceElt) {
                            workforceElt.parentNode.removeAttribute('hidden');
                        }
    
                        [amountElt, workforceElt].forEach(elt => {
                            elt.addEventListener('blur', (e) => {
                                const currentTarget = e.currentTarget;
                                updateSaleTotal(currentTarget);
                            });
                            elt.addEventListener('keypress', (e) => {
                                const currentTarget = e.currentTarget;
                                setTimeout(() => {
                                    updateSaleTotal(currentTarget);
                                }, 10);
                            });
                        });
                    } else {
                        const updateSaleTotal = (currentTarget) => {
                            if ('undefined' !== typeof currentTarget) {
                                amountElt.dataset.netAmount = amountElt.value / getRate(currency);
                                netAmount = Number.parseFloat(amountElt.dataset.netAmount);
                            }

                            montantPaye = netAmount;
                            saleTotalElt.dataset.montantPaye = montantPaye;
                            saleTotalElt.textContent = (montantPaye * getRate(currency)).toFixed(2);

                            if (!isNaN(currentInvoice.client.totalBonus) || !isNaN(currentInvoice.client.totalCaution)) {
                                if (montantPaye <= currentInvoice.client.totalBonus || montantPaye <= currentInvoice.client.totalCaution) {
                                    paymentModeSelect.removeAttribute('disabled');
                                } else {
                                    paymentMode = 1;
                                    paymentModeSelect.setAttribute('disabled', 'disabled');
                                }
                            }
                        };

                        amountElt.addEventListener('blur', (e) => {
                            const currentTarget = e.currentTarget;
                            updateSaleTotal(currentTarget);
                        });
                        amountElt.addEventListener('keypress', (e) => {
                            const currentTarget = e.currentTarget;
                            setTimeout(() => {
                                updateSaleTotal(currentTarget);
                            }, 10);
                        });
                    }

                    saleModalContainer.querySelector('#sale-modal-close').addEventListener('click', () => {
                        resetCart();
                        saleModal.hide();
                        window.location.reload();
                    });

                    sessionStorage.setItem('invoice', JSON.stringify(invoice));

                    saleModalContainer.querySelector('.modal-footer > button:first-child').addEventListener('click', () => {
                        currentInvoice = JSON.parse(sessionStorage.getItem('invoice'));
                        sessionStorage.removeItem('invoice');
                        saleType = montantPaye < invoice.total + invoice.workforce - invoice.discount ? 'credit' : 'cash';
                        proceedToSell(saleType, paymentMode, netAmount, saleModal, saleModalContainer, montantPaye, isDiscountApplicable);
                    });
                });

                saleModal.show();

            } else {
                if ('number' === typeof workforcePercent && workforcePercent > 0) {
                    if (saleType === 'proforma') {
                        const proformaModalElt = document.querySelector('#proforma-modal');
                        const proformaModal = new mdb.Modal(proformaModalElt);
                        const workforceValue = (workforcePercent ?? 0) * currentInvoice.total;

                        proformaModalElt.addEventListener('shown.bs.modal', (e) => {
                            const proformaModalContainer = e.currentTarget;

                            proformaModalElt.querySelector('#proforma-workforce-input').value = (getRate(currency) * workforceValue).toFixed(2);
                            proformaModalElt.querySelector('#discount-proforma').textContent = (getRate(currency) * currentInvoice.discount).toFixed(2);
                            proformaModalElt.querySelector('#total-proforma').textContent = (getRate(currency) * currentInvoice.total).toFixed(2);
                            proformaModalElt.querySelector('#net-proforma').textContent = (getRate(currency) * (workforceValue + currentInvoice.total - currentInvoice.discount)).toFixed(2);

                            proformaModalContainer.querySelector('#proforma-modal-close').addEventListener('click', () => {
                                resetCart();
                                proformaModal.hide();
                                window.location.reload();
                            });

                            sessionStorage.setItem('invoice', JSON.stringify(invoice));

                            proformaModalContainer.querySelector('.modal-footer > button').addEventListener('click', () => {
                                currentInvoice = JSON.parse(sessionStorage.getItem('invoice'));
                                sessionStorage.removeItem('invoice');
                                proformaModal.hide();
                                // sessionStorage.setItem('facture', JSON.stringify(currentInvoice));
                                proceedToSell('proforma');
                            });
                        });
                        proformaModal.show();
                    } else {
                        proceedToSell('hold');
                    }

                } else {
                    proceedToSell(saleType);
                }
            }
        }

    } else {
        showAlert('Vous avez déjà clôturé la journée', 'warning', false);
    }
}

function payerDettes(employes = '') {
    const spinnerElt = document.getElementById('spinner');

    document.querySelector('#confirm-print-receipt .modal-body > div:last-child > button:first-child').addEventListener('click', () => {
        printReceiptModal.hide();
    });

    if (amountPaidDebts > 0) {
        fetch(`${baseUrl}/dettes/${currentInvoice.client.id}/paiement${employes === '' ? '' : '/employees'}?amount=${amountPaidDebts}`, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    spinnerElt.setAttribute('hidden', 'hidden');
                    document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(2) > div:last-child').textContent = (amountPaidDebts * getRate(currency)).toFixed(2);
                    document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(3) > div:last-child').textContent = ((amountDueSold - amountPaidDebts) * getRate(currency)).toFixed(2);
                    printReceiptModal.show();
                });
            }
        });

    } else if (selectedDebts.length > 0) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const debts = selectedDebts.map(debt => {
            return {
                id: debt.id,
                amountPaid: Number.parseFloat(document.querySelector(`#debts-table${employes} tbody > tr:nth-child(${debt.rowIndex + 1}) > td:nth-child(6)`).textContent) / getRate(currency)
            };
        });

        fetch(`${baseUrl}/dettes/${currentInvoice.client.id}/paiement`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(debts)
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    spinnerElt.setAttribute('hidden', 'hidden');
                    amountPaidDebts = debts.reduce((accu, debt) => accu + debt.amountPaid, 0);
                    document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(2) > div:last-child').textContent = (amountPaidDebts * getRate(currency)).toFixed(2);
                    document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(3) > div:last-child').textContent = ((amountDueSold - amountPaidDebts) * getRate(currency)).toFixed(2);
                    printReceiptModal.show();
                });
            }
        });
    }

    spinnerElt.removeAttribute('hidden');
}

function initDebtPayment(modalId, urlFragment = '') {
    document.getElementById(modalId).addEventListener('shown.bs.modal', () => {
        const datatable = document.querySelector(`#${modalId} .modal-body > .datatable`);
        const payForEmployeesBtn = document.querySelector('#paiement-dettes .modal-footer button:first-child');
        let isEnterprise;
        const columns = [
            { label: 'Date d\'octroi', field: 'dateOctroi' },
            { label: 'Echéance', field: 'echeance' },
            { label: 'Crédit', field: 'amount' },
            { label: 'Déjà payé', field: 'paid' },
            { label: 'A payer', field: 'sold' },
            { label: 'Solde', field: 'remainder' },
            { label: 'ID', field: 'id', sort: false }
        ];

        if (!!urlFragment) {
            columns.push({ label: 'Employé', field: 'nomClient' });
        }

        datatable.removeAttribute('hidden');
        datatable.innerHTML = '';
        datatable.dataset.maxHeight = 400;

        const debtsTableInstance = new mdb.Datatable(datatable, {
            columns: columns
        }, { loading: true });

        if (currentInvoice.client.typeClient === 'morale') {
            payForEmployeesBtn.removeAttribute('hidden');
            isEnterprise = true;
        } else {
            payForEmployeesBtn.setAttribute('hidden', 'hidden');
            isEnterprise = false;
        }

        document.querySelector('#paiementDettesModalLabel > span').textContent = currentInvoice.client.nomClient;

        fetch(`${baseUrl}/dettes/${currentInvoice.client.id}${urlFragment}`, {
            method: 'GET'
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseBody => {
                    const body = JSON.parse(responseBody);
                    const dettes = body.data.debts;
                    const total = dettes.reduce((accu, next) => accu + next.sold, 0);

                    const setDynamicParts = () => {
                        amountDueSold = total + (isEnterprise && urlFragment === '' ? (!!body.data.totalEmployees ? Number.parseFloat(body.data.totalEmployees) : 0) : 0);
                        document.querySelector(`#${modalId} .modal-footer > div:first-child > div > span:nth-child(2)`).textContent = (amountDueSold * getRate(currency)).toFixed(2);
    
                        document.querySelectorAll('#paiement-dettes .modal-footer > div:first-child > div > span:not(:first-child):not(:nth-child(2))').forEach(span => {
                            isEnterprise ? span.removeAttribute('hidden') : span.setAttribute('hidden', 'hidden');
                        });
                        document.querySelector('#enterprise-debts').textContent = ((isEnterprise ? total : 0) * getRate(currency)).toFixed(2);
                        document.querySelector('#employees-debts').textContent = ((isEnterprise ? (!!body.data.totalEmployees ? Number.parseFloat(body.data.totalEmployees) : 0) : 0) * getRate(currency)).toFixed(2);
    
                        datatable.querySelectorAll('tbody > tr > td:nth-child(8), thead > tr > th:nth-child(8)').forEach(idElt => {
                            idElt.setAttribute('hidden', 'hidden');
                        });
    
                        datatable.querySelectorAll('tbody > tr').forEach(rowElt => {
                            rowElt.style.cursor = 'pointer';
                        });
    
                        datatable.querySelectorAll('tbody > tr > td:nth-child(6)').forEach(elt => {
                            const amountDue = Number.parseFloat(elt.textContent);
                            // Number.parseFloat(elt.parentNode.querySelector('td:nth-child(5)').textContent)
                            elt.setAttribute('contenteditable', true);
                            elt.addEventListener('keyup', () => {
                                const eltContent = Number.parseFloat(elt.textContent);
                                const pay = isNaN(eltContent) ? 0 : eltContent;
                                const diff = amountDue - pay;
                                if (pay >= 0 && diff >= 0) {
                                    elt.parentNode.querySelector('td:nth-child(7)').textContent = diff.toFixed(2);
                                } else {
                                    elt.blur();
                                    elt.textContent = amountDue.toFixed(2);
                                    elt.parentNode.querySelector('td:nth-child(7)').textContent = (0).toFixed(2);
                                }
                            });
                        });
    
                        datatable.addEventListener('selectRows.mdb.datatable', e => {
                            const payBtn = document.getElementById('payer-dettes' + (modalId === 'paiement-dettes' ? '' : '-employees'));
                            e.selectedIndexes.length > 0 ? payBtn.removeAttribute('disabled') : payBtn.setAttribute('disabled', 'disabled');
                            selectedDebts = e.selectedRows;
                            amountPaidDebts = 0;
                        });
                    };

                    datatable.addEventListener('render.mdb.datatable', setDynamicParts);

                    debtsTableInstance.update({
                        rows: dettes.map(row => {
                            const newRow = {
                                ...row,
                                dateOctroi: `${(new Date(row.dateOctroi.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}`,
                                echeance: `${(new Date(row.echeance.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}`,
                                amount: `${(row.amount * getRate(currency)).toFixed(2)}`,
                                paid: `${((row.amount - row.sold) * getRate(currency)).toFixed(2)}`,
                                sold: `${(row.sold * getRate(currency)).toFixed(2)}`,
                                remainder: `${(0).toFixed(2)}`,
                            };

                            if (!!urlFragment) {
                                Object.assign(newRow, { nomClient: row.nomClient });
                            }

                            return newRow;
                        }),
                    }, { loading: false, hover: true });
                });
            }
        });

        document.getElementById((modalId.indexOf('employees') === -1 ? '' : 'employees-') + 'debt-search-input').addEventListener('input', (e) => {
            debtsTableInstance.search(e.target.value);
        });
    });
}

function oneTimePayment(suffixe = '') {
    document.getElementById(`debt-amount${suffixe}`).addEventListener('keyup', (event) => {
        const payBtn = document.getElementById(`payer-dettes${suffixe}`);
        const checkboxes = document.querySelectorAll(`#paiement-dettes${suffixe} .modal-body > .datatable .form-check-input`);
        const inputValue = event.currentTarget.value;

        if (inputValue.trim() !== '') {
            amountPaidDebts = Number.parseFloat(inputValue) / getRate(currency);
        }

        if (amountPaidDebts > 0) {
            payBtn.removeAttribute('disabled');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.setAttribute('disabled', 'disabled');
            });
        } else {
            payBtn.setAttribute('disabled', 'disabled');
            checkboxes.forEach(checkbox => {
                checkbox.removeAttribute('disabled');
            });
        }
    });
}

function printInvoice(printType, permissions, facture = null) {
    const invoice = facture ?? currentInvoice;

    if (null !== invoice.id) {
        const invoiceTemplate = document.querySelector('#invoice-template');
        const invoiceTableBody = document.querySelector('#invoice-table-body');
        const invoiceFooter = document.getElementById('invoice-footer');
        const invoiceTotals = document.getElementById('invoice-totals');
        let servicesForBonus = [];
        let dateRetrait;
        const headers = new Headers({'Content-Type': 'application/json'});   
        const dateTosentElt = document.querySelector('#dateretraitinput');
        let dateTosent = '';

        if (dateTosentElt !== null) {
            dateTosent = dateTosentElt.value;
        }

        fetch(`${baseUrl}/facturedateretrait`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ factureId: invoice.id, date: dateTosent })
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(responseData => {
                    const data = JSON.parse(responseData);
                    const dbInvoice = data.invoice;
                    const client = data.client;
                    const marque = data.marque;
                    const typeOuModele = data.typeOuModele;
                    const numeroImmatriculation = data.numeroImmatriculation;
                    // const kilometrage = data.kilometrage;
                    let invoiceNet;
                    const fullySpelledOut = new FullySpelledOut();

                    invoice.id = dbInvoice.id;
                    invoice.total = dbInvoice.total;
                    invoice.discount = dbInvoice.discount;
                    invoice.amountPaid = dbInvoice.amountPaid;
                    invoice.workforce = dbInvoice.workforce;
                    invoice.workforcePercent = dbInvoice.workforcePercent;
                    invoice.type = dbInvoice.type;
                    invoice.paymentMode = dbInvoice.paymentMode;
                    invoice.date = dbInvoice.date;
                    // sessionStorage.setItem('invoicePrint', invoice);
                    // JSON.parse(sessionStorage.getItem('invoicePrint'))

                    invoiceNet = invoice.total + invoice.workforce - (client.id !== null ? invoice.discount : 0);
                    dateRetrait = data.dateRetrait;
                    licenseId = dbInvoice.licenseId ?? 0;

                    if (permissions.includes('facture-controle-technique')) {
                        document.querySelector('#invoice-client').innerHTML =
                            `
                                <div class="w-100 d-flex justify-content-between text-left border-dark">
                                    <div class="p-1 w-50 border-right">
                                        <div class="w-100 bg-yellow font-weight-bold">${maison['nomSociete']}</div>
                                        <div class="w-100">${maison['adressePhysique']}</div>
                                        <div class="w-100">N° Impôt :&nbsp;${maison['numImpot']}&nbsp;/&nbsp;Id.Nat. :&nbsp;${maison['idNationnal']}</div>
                                        <div class="w-100">RCCM :&nbsp;${maison['registreCommerce']}</div>
                                        <div class="w-100">Téléphone :&nbsp;${maison['telephone']}</div>
                                        <div class="w-100">E-mail :&nbsp;${maison['mail']}</div>
                                    </div>
                                    <div class="p-1 w-50">
                                        <div class="w-100 bg-yellow">
                                            <span>À&nbsp;:&nbsp;</span>
                                            <span>${client.nomClient}</span>
                                        </div>
                                        <div>
                                            <span>Adresse&nbsp;:&nbsp;</span>
                                            <span>${client.adressePhys}</span>
                                        </div>
                                        <div>
                                            <span>Plaque&nbsp;:&nbsp;</span>
                                            <span>${numeroImmatriculation ?? ''}</span>
                                        </div>
                                        <div>
                                            <span>Véhicule&nbsp;:&nbsp;</span>
                                            <span>${marque ?? ''} ${typeOuModele ?? ''}</span>
                                        </div>
                                        <div>
                                            <span>Téléphone&nbsp;:&nbsp;</span>
                                            <span>${client.telephone}</span>
                                        </div>
                                        <div>
                                            <span>Code&nbsp;client&nbsp;:&nbsp;</span>
                                            <span>${client.id}</span>
                                        </div>
                                    </div>
                                </div>
                            `
                        ;
                    } else {
                        document.querySelector('#invoice-client').innerHTML = `${client.id === null ? '' : '<b>Client : ' + client.nomClient}</b>`;
                    }

                    invoiceTableBody.innerHTML = '';

                    for (const key in invoice.articles) {
                        const selectedPrice = invoice.articles[key].selectedPrice;
                        const totalPrice = Number.parseInt(invoice.articles[key].nbUnites, 10) * selectedPrice;
                        invoiceTableBody.innerHTML += `
                            <tr>
                                <td class="${permissions.includes('facture-controle-technique') ? 'border-right ' : ''}text-right">${invoice.articles[key].nbUnites}</td>
                                <td class="${permissions.includes('facture-controle-technique') ? 'border-right' : ''}">${invoice.articles[key].name}</td>
                                ${permissions.includes('facture-controle-technique') ? '<td class="border-right text-right">' + (selectedPrice * getRate(currency)).toFixed(2) + '</td>' : ''}
                                <td class="text-right">${(totalPrice * getRate(currency)).toFixed(2)}</td>
                            </tr>
                        `;
                    }

                    for (const key in invoice.services) {
                        const selectedPrice = invoice.services[key].selectedPrice;
                        const totalPrice = Number.parseInt(invoice.services[key].nbUnites, 10) * selectedPrice;
                        invoiceTableBody.innerHTML += `
                            <tr>
                                <td class="${permissions.includes('facture-controle-technique') ? 'border-right ' : ''}text-right">${invoice.services[key].nbUnites}</td>
                                <td class="${permissions.includes('facture-controle-technique') ? 'border-right' : ''}">${invoice.services[key].name}</td>
                                ${permissions.includes('facture-controle-technique') ? '<td class="border-right text-right">' + (selectedPrice * getRate(currency)).toFixed(2) + '</td>' : ''}
                                <td class="text-right">${(totalPrice * getRate(currency)).toFixed(2)}</td>
                            </tr>
                        `;
                    }

                    for (const idx in invoice.articles) {
                        if (invoice.articles[idx].bonusApplicable) {
                            servicesForBonus.push(invoice.articles[idx]);
                        }
                    }

                    for (const idx in invoice.services) {
                        if (invoice.services[idx].bonusApplicable) {
                            servicesForBonus.push(invoice.services[idx]);
                        }
                    }

                    invoiceTotals.innerHTML = '';

                    if (servicesForBonus.length > 0) {
                        if (bonusThreshold > 1) {
                            invoiceTotals.innerHTML = `<small><em>N.B.: Pour ${bonusThreshold} éléments de même nature, on vous accorde un bonus.</em></small>`;
                        } else if (bonusThreshold === 1) {
                            invoiceTotals.innerHTML = `<small><em>N.B.: Vous bénéficiez de ${(bonusPercentage * 100).toFixed(2)} % de bonus pour tout achat.</em></small>`;
                        }
                    }

                    invoiceTotals.innerHTML += `
                        <br><br>
                        <span>Total&nbsp;:&nbsp;${(invoice.total * getRate(currency)).toFixed(2)}&nbsp;${currency}</span>
                    `;

                    if ('number' === typeof invoice.discount) {
                        invoiceTotals.innerHTML += `<br><em><small>Réduction : ${(invoice.discount * getRate(currency)).toFixed(2)} ${currency}</small></em>`;
                    }

                    if ('number' === typeof invoice.workforce && invoice.workforce > 0) {
                        invoiceTotals.innerHTML += `<br><em><small>Main d'oeuvre : ${(invoice.workforce * getRate(currency)).toFixed(2)} ${currency}</small></em>`;
                    }

                    invoiceTotals.innerHTML += `<br><b>Total net : ${(invoiceNet * getRate(currency)).toFixed(2)} ${currency}</b>`;

                    if (null !== client && 'number' === typeof client.totalBonus && client.totalBonus > 0) {
                        invoiceTotals.innerHTML += `<br>Bonus : ${(client.totalBonus * getRate(currency)).toFixed(2)} ${currency}`;
                    }

                    if (permissions.includes('facture-controle-technique')) {
                        const wholePart = Math.floor(invoiceNet);
                        const decimalPart = Math.round(100 * (invoiceNet % 1));
                        let invoiceNetInFull = fullySpelledOut.writeInFull(wholePart);
                        if (0 < decimalPart) {
                            invoiceNetInFull += ' et ' + fullySpelledOut.writeInFull(decimalPart) + ' centimes';
                        }
                        invoiceTotals.innerHTML += `<br><br><b><em><small>Nous disons dollars américains ${invoiceNetInFull}</small></em></b>`;
                    }

                    if (invoice.type === 'credit' && invoiceNet > invoice.amountPaid) {
                        invoiceTotals.innerHTML += `
                            <br>Avance : ${(invoice.amountPaid * getRate(currency)).toFixed(2)} ${currency}
                            <br>Reste à payer : ${((invoiceNet - invoice.amountPaid) * getRate(currency)).toFixed(2)} ${currency}
                        `;
                    }

                    if ('undefined' !== typeof dateRetrait && ((permissions.indexOf('facture-controle-technique') === -1 && permissions.indexOf('pv-controle-technique') === -1 && !invoice.type.startsWith('proforma')) || invoice.type === 'credit')) {
                        const today = (new Date()).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'});
                        const rendezVous = new Date(dateRetrait.date);
                        const rendezVousShort = rendezVous.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'});
                        invoiceTotals.innerHTML += `<br><br><em>Rendez-vous : ${rendezVous.toLocaleDateString('fr-FR', today === rendezVousShort ? {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'} : 'Aujourd\'hui')}</em>`;
                    }

                    invoiceFooter.innerHTML = permissions.includes('facture-controle-technique')
                        ? `
                            <div class="d-flex justify-content-between w-100">
                                <div class="flex-grow-1">
                                    <em>
                                        <b>Merci ${invoice.type === 'proforma' ? 'de nous retourner cette facture proforma signée avec la mention "bon pour accord"' : 'pour votre confiance'}</b>
                                    </em>
                                </div>
                                <div class="flex-grow-1 text-right">
                                    <em class="text-right">Le centre de contrôle technique</em>
                                </div>
                            </div>
                        `
                        : `
                            Fait par : ${user}<br>
                            <b>Date : ${(new Date()).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</b>
                        `
                    ;

                    invoiceTemplate.removeAttribute('hidden');

                    printJS({
                        printable: 'invoice-template',
                        type: 'html',
                        header: `
                            <div id="invoice-header">
                                ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="width: 320px">' : '<h1>' + maison['nomSociete'] + '</h1>'}
                                <div>
                                    <div><small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small></div>
                                    <div><small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small></div>
                                </div>
                                <h3>${printType} N°${invoice.id}${invoice.type === 'proforma' ? (printType === 'FACTURE' ? ' (PROFORMA)' : '') : ''}</h3>
                            </div>
                        `,
                        css: ['assets/styles/print-invoice.css']
                    });

                    sessionStorage.removeItem('invoiceId');
                    invoiceTemplate.setAttribute('hidden', 'hidden');
                });
            }
        });

    } else {
        showAlert('Aucune facture à imprimer !', 'warning', false);
    }
}

function cloturer(event, divToPrint = '') {
    const headers = new Headers();
    event.target.removeAttribute('hidden');
    headers.append('Content-Type', 'application/json');
    fetch(`${baseUrl}/sales/clotures/new`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(clotureElts)
    }).then(resp => {
        if (resp.ok) {
            resp.text().then(responseBody => {
                const {message, data} = JSON.parse(responseBody);
                const rapportClotureTemplate = document.getElementById('rapport-cloture-template');

                rapportClotureTemplate.removeAttribute('hidden');

                rapportClotureTemplate.innerHTML = `
                    <table class="w-100">
                        <tr>
                            <td>Ventes</td>
                            <td>${currency}${(((('string' === typeof data.ventes.total ? Number.parseFloat(data.ventes.total) : (null === data.ventes.total ? 0 : data.ventes.total))) + ('string' === typeof data.ventes.workforce ? Number.parseFloat(data.ventes.workforce) : (null === data.ventes.workforce ? 0 : data.ventes.workforce)) - ('string' === typeof data.ventes.discount ? Number.parseFloat(data.ventes.discount) : (null === data.ventes.discount ? 0 : data.ventes.discount))) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Cash</td>
                            <td>${currency}${(('string' === typeof data.cash.amountPaid ? Number.parseFloat(data.cash.amountPaid) : (null === data.cash.amountPaid ? 0 : data.cash.amountPaid)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Crédits</td>
                            <td>${currency}${((('string' === typeof data.credits.total ? Number.parseFloat(data.credits.total) : (null === data.credits.total ? 0 : data.credits.total)) + ('string' === typeof data.credits.workforce ? Number.parseFloat(data.credits.workforce) : (null === data.credits.workforce ? 0 : data.credits.workforce)) - ('string' === typeof data.credits.discount ? Number.parseFloat(data.credits.discount) : (null === data.credits.discount ? 0 : data.credits.discount))) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Paiements dettes</td>
                            <td>${currency}${(('string' === typeof data.paiementsDettes ? Number.parseFloat(data.paiementsDettes) : (null === data.paiementsDettes ? 0 : data.paiementsDettes)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Dépenses</td>
                            <td>${currency}${(('string' === typeof data.depenses ? Number.parseFloat(data.depenses) : (null === data.depenses ? 0 : data.depenses)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Paiements par bonus</td>
                            <td>${currency}${(('string' === typeof data.paiementsParBonus ? Number.parseFloat(data.paiementsParBonus) : (null === data.paiementsParBonus ? 0 : data.paiementsParBonus)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Montant du</td>
                            <td>${currency}${(('string' === typeof data.montantDu ? Number.parseFloat(data.montantDu) : (null === data.montantDu ? 0 : data.montantDu)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Montant versé</td>
                            <td>${currency}${(('string' === typeof data.montantVerse ? Number.parseFloat(data.montantVerse) : (null === data.montantVerse ? 0 : data.montantVerse)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Solde</td>
                            <td>${currency}${(('string' === typeof data.solde ? Number.parseFloat(data.solde) : (null === data.solde ? 0 : data.solde)) * getRate(currency)).toFixed(2)}</td>
                        </tr>
                    </table>
                    <div class="w-90 text-right mt-3">Fait par ${data.doneBy.fullName ?? data.doneBy.username}</div>
                    <div class="w-90 text-right">Le ${data.createdAt}</div>
                `;

                cloture = data;

                setTimeout(() => {
                    printJS({
                        printable: 'rapport-cloture-template',
                        type: 'html',
                        header: `
                            <div class="w-90 text-center">
                                ${maison['logo'] !== null ? '<img class="w-100" src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise">' : '<h1>' + maison['nomSociete'] + '</h1>'}
                                <div class="text-center border-bottom-dashed">
                                    <small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small><br>
                                    <small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small>
                                </div>
                                <h3 class="w-100 text-center border">RAPPORT DE CLOTURE</h3>
                            </div>
                        `,
                        css: ['assets/styles/rapport-cloture.css']
                    });
                    rapportClotureTemplate.setAttribute('hidden', 'hidden');
                }, 2000);
                showAlert(message, 'success', false);
            });
        }
    });
}

function populatechartboad(invoice) {
    const invoiceId = invoice.id;

    fetch(`${baseUrl}/factures/${invoiceId}/populate/cartboard`, {
        method: 'GET'
    }).then(resp => {
        if (resp.ok) {
            resp.text().then(data => {
                const invoiceData = JSON.parse(data).data;
                const workforceElt = document.querySelector('#workforce');
                const discountElt = document.querySelector('#discount');

                for (const idx in currentInvoice.services) {
                    const service = currentInvoice.services[idx];
                    currentInvoice = addToCart(service.serviceId, (0 - Math.abs(service.quantity)), currentInvoice);
                }

                for (const idx in currentInvoice.articles) {
                    const article = currentInvoice.articles[idx];
                    currentInvoice = addToCart(article.serviceId, (0 - Math.abs(article.quantity)), currentInvoice);
                }

                document.querySelectorAll('#cart > tbody > tr').forEach((rowElt) => {
                    rowElt.parentNode.removeChild(rowElt);
                });

                invoice = { id: invoiceId, articles: {}, services: {}, total: 0, discount: 0 };
                // Update total elements
                document.querySelector('#total').textContent = currency + ' 0.00';
                if (null !== discountElt) {
                    discountElt.textContent = currency + ' 0.00';
                }
                if (null !== workforceElt) {
                    workforceElt.textContent = currency + ' 0.00';
                }
                document.querySelector('#net').textContent = currency + ' 0.00';

                invoice.type = invoiceData.typeFacture;
                invoice.workforce = invoiceData.workforce;
                invoice.workforcePercent = invoiceData.workforcePercent;

                Object.assign(currentInvoice, invoice);
                updateClientDetails(currentInvoice);
                updateGrid(invoiceData.services);

                invoiceData.services.forEach(serv => {
                    currentInvoice = addToCart(serv.serviceId, Math.abs(serv.qty), currentInvoice);
                });
            });
        }
    });
}

function updateClientDetails(invoice) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(`${baseUrl}/factures/updatetotalelements/${invoice.id}`, {
        method: 'GET',
        headers: headers
    }).then(resp => {
        if (resp.ok) {
            resp.text().then(jsonData => {
                const data = JSON.parse(jsonData);
                const clientInput = document.querySelector('#client-autocomplete > input');
                const c = clients.find(client => client.id === ('string' === typeof data.clientId ? Number.parseInt(data.clientId, 10) : data.clientId));

                clientInput.value = '';
                currentInvoice.client = typeof c === 'undefined' ? { id: null, nomClient: 'Client anonyme', totalFactures: 0, totalBonus: 0.00, totalCaution: 0.00 } : c;
                currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : ('string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures);
                currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : ('string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus);
                currentInvoice.client.totalCaution = isNaN(currentInvoice.client.totalCaution) || 'undefined' === currentInvoice.client.totalCaution || null === currentInvoice.client.totalCaution ? 0 : ('string' === typeof currentInvoice.client.totalCaution ? Number.parseFloat(currentInvoice.client.totalCaution) : currentInvoice.client.totalCaution);
                document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
                document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
                document.querySelector('#total-bonus').textContent = ((currentInvoice.client.totalBonus ?? 0) * getRate(currency)).toFixed(2);
                document.querySelector('#total-caution').textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);

                console.log(data.licenseId)
                invoice.licenseId = data.licenseId ?? 0;
                licenseId = invoice.licenseId;
            });
        }
    });
}

function printReceipt() {
    const receiptContainer = document.querySelector('#debt-payment-receipt');

    receiptContainer.innerHTML = `
        <div id="debt-payment-receipt-body">
            <div>Client : ${currentInvoice.client.nomClient}</div>
            <div class="font-weight-bold">Montant payé : ${(amountPaidDebts * getRate(currency)).toFixed(2) + ' ' + currency}</div>
            <div class="font-weight-bold">Solde : ${((amountDueSold - amountPaidDebts) * getRate(currency)).toFixed(2) + ' ' + currency}</div>
            <div>Reçu par : ${user}</div>
            <div>Date : ${(new Date()).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
            <div class="text-center pt-2 border-top-dashed">MERCI !</div>
        </div>
    `;

    receiptContainer.removeAttribute('hidden');
    printReceiptModal.hide();
    printJS({
        printable: 'debt-payment-receipt',
        type: 'html',
        header: `
            ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="width: 320px">' : '<h1>' + maison['nomSociete'] + '</h1>'}
            <div class="text-center">
                <div><small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small></div>
                <div><small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small></div>
            </div>
            <h3 class="text-center border">REÇU DE PAIEMENT DETTE</h3>
        `,
        css: ['/assets/styles/print-receipt-debt.css']
    });
    receiptContainer.setAttribute('hidden', 'hidden');
}

function selectClientItem(event) {
    const currentItem = event.currentTarget;
    const client = clients.find(c => c.nomClient === currentItem.textContent);
    const clientInput = document.querySelector('#client');
    clientInput.value = client['nomClient'];
    clientInput.dataset.clientId = client['clientId'] ?? client['id'];
    clientDropdownMenu.style.display = 'none';
}

function selectUsageVehiculeItem(event) {
    const currentItem = event.currentTarget;
    const usageVehicule = usagesVehicule.find(u => u === currentItem.textContent);
    const usageVehiculeInput = document.querySelector('#usageVehicule');
    usageVehiculeInput.value = usageVehicule;
    usageVehiculeInput.dataset.usageVehicule = usageVehicule;
    usageVehiculeDropdownMenu.style.display = 'none';
}

function selectVehicleItem(event) {
    const currentItem = event.currentTarget;
    const vehicle = vehicles.find(v => v.id === Number.parseInt(currentItem.dataset.id, 10));
    const autocompleteId = currentItem.parentNode.id.includes('vehicle-') ? 'vehicule-' + currentItem.parentNode.id.split('-')[1] : 'numeroImmatriculation';
    const prefix = currentItem.parentNode.id.includes('vehicle-') ? 'vehicle-' + currentItem.parentNode.id.split('-')[1] : 'immatriculation';
    document.querySelector('#' + autocompleteId).dataset.id = vehicle['id'];

    if (prefix === 'immatriculation') {
        for (const key in vehicle) {
            let elt = document.querySelector('#' + key);
            if (null !== elt) {
                elt.value = vehicle[key];
            }
            if (key === 'clientId') {
                elt = document.querySelector('#client');
                elt.value = vehicle['nomClient'];
                elt.dataset.clientId = vehicle[key];
            }
        }
    } else {
        const vehicleDetails = [vehicle.genre, vehicle.marque, vehicle.typeOuModele];
        document.querySelector('#vehicule-' + currentItem.parentNode.id.split('-')[1]).value = vehicle.numeroImmatriculation + ' (' + vehicleDetails.join(' - ') + ')';
    }

    // immatriculationDropdownMenu = document.querySelector('#immatriculation-dropdown')
    document.querySelector('#' + prefix + '-dropdown').style.display = 'none';
}

function newControle() {
    // let options = '';
    let optionsArticle = '';
    // const vehicleSelect = document.querySelector('#vehicule-controle');
    const articleSelect = document.querySelector('#article-controle');

    // vehicles.forEach(v => {
    //     options += `<option value="${v.id}"${Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : ''}>${v.genre} (${v.numeroImmatriculation})</option>`;
    // });

    services.filter(service => service.type === 2).forEach(article => {
        optionsArticle += `<option value="${article.serviceId}"${Number.parseInt(articleSelect.value) === article.serviceId ? ' selected' : ''}>${article.name}</option>`;
    });

    // vehicleSelect.innerHTML = options;
    articleSelect.innerHTML = optionsArticle;
    newControleModal.show();
}

function newExpertise() {
    let options = '';
    const vehicleSelect = document.querySelector('#vehicule-expertise');

    vehicles.forEach(v => {
        options += `<option value="${v.id}"${Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : ''}>${v.genre} (${v.numeroImmatriculation})</option>`;
    });

    vehicleSelect.innerHTML = options;
    newExpertiseModal.show();
}

function newControleGarage() {
    if (document.querySelector('#pill-tab-ct').classList.value.indexOf('active') > -1) {
        newControle();
    } else if (document.querySelector('#pill-tab-ev').classList.value.indexOf('active') > -1) {
        newExpertise();
    }
}

function printDailyReport(e) {
    if (permissions.includes('rapport')) {
        fetch(`${baseUrl}/invoices/dailyreport`, {
            method: 'GET',
            headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    const { invoices, debtPayments, stock } = JSON.parse(data).data;
                    const dailyReport = document.querySelector('#daily-report');
                    let index = 0;
                    let totalInvoices = 0;
                    let totalDebtPayments = 0;
                    let totalInvoiceAdvances = 0;
                    let totalInvoiceSolds = 0;
                    let procurements = '';

                    let dailyInvoices = `
                        <table>
                            <thead>
                                <tr>
                                    <th class="text-center" colspan="7">Factures émises</th>
                                </tr>
                                <tr>
                                    <th class="text-right">#</th>
                                    <th>Client</th>
                                    <th>Montant</th>
                                    <th>Avance</th>
                                    <th>Reste à payer</th>
                                    <th>Rendez-vous de paiement</th>
                                    <th>N° de téléphone</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    let dailyDebtPayments = `
                        <table>
                            <thead>
                                <tr>
                                    <th class="text-center" colspan="4">Factures payées</th>
                                </tr>
                                <tr>
                                    <th class="text-right">#</th>
                                    <th>Client</th>
                                    <th>N°&nbsp;Facture</th>
                                    <th>Montant</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    let dailyInvoiceAdvances = `
                        <table>
                            <thead>
                                <tr>
                                    <th class="text-center" colspan="4">Avances sur factures émises</th>
                                </tr>
                                <tr>
                                    <th class="text-right">#</th>
                                    <th>Client</th>
                                    <th>N°&nbsp;Facture</th>
                                    <th>Montant</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    if (stock.procurements.length > 0) {
                        procurements = `
                            <table>
                                <thead>
                                    <tr>
                                        <th class="text-center" colspan="7">Rapport stock</th>
                                    </tr>
                                    <tr>
                                        <th class="text-right">#</th>
                                        <th>Article</th>
                                        <th>Entrées</th>
                                        <th>Sorties</th>
                                        <th>Ventes</th>
                                        <th>Aujourd'hui</th>
                                        <th>Solde</th>
                                    </tr>
                                </thead>
                                <tbody>
                        `;
                    }

                    invoices.forEach((invoice, idx) => {
                        const invoiceSold = invoice['total'] - (invoice['amountPaid'] ?? 0);
                        totalInvoices += invoice['total'];
                        totalInvoiceSolds += invoiceSold;
                        dailyInvoices += `
                            <tr>
                                <td class="text-right">${idx + 1}</td>
                                <td>${invoice['nomClient']}</td>
                                <td class="text-right">${currency} ${(invoice['total'] * getRate(currency))?.toFixed(2)}</td>
                                <td class="text-right">${currency} ${((invoice['amountPaid'] ?? 0) * getRate(currency)).toFixed(2)}</td>
                                <td class="text-right">${currency} ${(invoiceSold * getRate(currency))?.toFixed(2)}</td>
                                <td></td>
                                <td>${invoice['telephone']}</td>
                            </tr>
                        `;
                        if (invoice['amountPaid'] > 0) {
                            totalInvoiceAdvances += invoice['amountPaid'];
                            index++;
                            dailyInvoiceAdvances += `
                                <tr>
                                    <td class="text-right">${index}</td>
                                    <td>${invoice['nomClient']}</td>
                                    <td>${invoice['id']}</td>
                                    <td class="text-right">${currency} ${(invoice['amountPaid'] * getRate(currency))?.toFixed(2)}</td>
                                </tr>
                            `;    
                        }
                    });

                    debtPayments.forEach((debtPayment, idx) => {
                        totalDebtPayments += debtPayment['montantPaye'];
                        dailyDebtPayments += `
                            <tr>
                                <td>${idx + 1}</td>
                                <td>${debtPayment['nomClient']}</td>
                                <td>${debtPayment['invoiceId']}</td>
                                <td class="text-right">${currency} ${(debtPayment['montantPaye'] * getRate(currency))?.toFixed(2)}</td>
                            </tr>
                        `;
                    });

                    if (debtPayments.length > index) {
                        for (let i = 0, count = debtPayments.length - index; i < count; i++) {
                            dailyInvoiceAdvances += `
                                <tr>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                </tr>      
                            `;
                        }
                    }

                    if (debtPayments.length < index) {
                        for (let i = 0, count = index - debtPayments.length; i < count; i++) {
                            dailyDebtPayments += `
                                <tr>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                </tr>      
                            `;
                        }
                    }

                    if (stock.procurements.length > 0) {
                        const groupedProcurements = groupArrayOfObjects(stock.procurements, 'article');
                        let groupedSales;
                        let idx = 0;

                        if (stock.sales.length > 0) {
                            groupedSales = groupArrayOfObjects(stock.sales, 'article');
                        }
                        if (stock.todaySales.length > 0) {
                            groupedTodaySales = groupArrayOfObjects(stock.todaySales, 'article');
                        }
                        if (stock.outOfStock.length > 0) {
                            groupedOutOfStock = groupArrayOfObjects(stock.outOfStock, 'article');
                        }

                        for (const key in groupedProcurements) {
                            const posDetail = stock.posDetails.find(detail => detail.article === key);
                            idx++;
                            procurements += `
                                <tr>
                                    <td class="text-right">${idx}</td>
                                    <td>${key}</td>
                                    <td class="text-right">${groupedProcurements[key].reduce((accu, next) => accu + next['quantity'], 0)}</td>
                            `;

                            procurements += '<td class="text-right">' + ((typeof groupedOutOfStock !== 'undefined' && Object.keys(groupedOutOfStock).indexOf(key) > -1) ? groupedOutOfStock[key].reduce((accu, next) => accu + Math.abs(next['quantity']), 0) : 0) + '</td>';
                            procurements += '<td class="text-right">' + ((typeof groupedSales !== 'undefined' && Object.keys(groupedSales).indexOf(key) > -1) ? groupedSales[key].reduce((accu, next) => accu + Math.abs(next['quantity']), 0) : 0) + '</td>';
                            procurements += '<td class="text-right">' + ((typeof groupedTodaySales !== 'undefined' && Object.keys(groupedTodaySales).indexOf(key) > -1) ? groupedTodaySales[key].reduce((accu, next) => accu + Math.abs(next['quantity']), 0) : 0) + '</td>';

                            procurements += `
                                    <td class="text-right">${typeof posDetail !== 'undefined' && posDetail !== null ? posDetail.quantity : 0}</td>
                                </tr>
                            `;
                        }

                        procurements += `
                                </tbody>
                            </table>
                        `;
                    }

                    dailyInvoices += `
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2"><b>TOTAL (1)</b></td>
                                    <td class="text-right"><b>${currency} ${(totalInvoices * getRate(currency))?.toFixed(2)}</b></td>
                                    <td class="text-right"><b>${currency} ${(totalInvoiceAdvances * getRate(currency))?.toFixed(2)}</b></td>
                                    <td class="text-right"><b>${currency} ${(totalInvoiceSolds * getRate(currency))?.toFixed(2)}</b></td>
                                    <td class="text-center"><b>-</b></td>
                                    <td class="text-center"><b>-</b></td>
                                </tr>
                            </tfoot>
                        </table><br>
                    `;

                    dailyInvoiceAdvances += `
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3"><b>TOTAL (3)</b></td>
                                    <td class="text-right"><b>${currency} ${(totalInvoiceAdvances * getRate(currency))?.toFixed(2)}</b></td>
                                </tr>
                            </tfoot>
                        </table><br>
                    `;

                    dailyDebtPayments += `
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3"><b>TOTAL (2)</b></td>
                                    <td class="text-right"><b>${currency} ${(totalDebtPayments * getRate(currency))?.toFixed(2)}</b></td>
                                </tr>
                            </tfoot>
                        </table>
                    `;

                    dailyReport.innerHTML = dailyInvoices + `<div class="d-flex flex-column mb-5" id="daily-payments-section"><div class="d-flex flex-row justify-content-between" id="daily-payments">` + dailyDebtPayments + dailyInvoiceAdvances + `</div><div class="border border-dark w-100 mt-2" id="daily-report-totals-2-3"><b>TOTAUX (2) + (3) : ${currency} ${((totalDebtPayments + totalInvoiceAdvances) * getRate(currency))?.toFixed(2)}</b></div>` + '</div>' + procurements;
                    dailyReport.innerHTML += `<br><br><div class="text-right w-100">${user}</div>`;
                    dailyReport.removeAttribute('hidden');

                    printJS({
                        printable: 'daily-report',
                        type: 'html',
                        header: `
                            <div class="d-flex justify-content-between" id="daily-report-header">
                                <div id="daily-report-logo">
                                    ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" class="w-25">' : '<h2 class="w-25">' + maison['nomSociete'] + '</h2>'}
                                </div>
                                <div>${(new Date()).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                            <h4 class="text-center font-weight-bold">Rapport journalier <span>${pos}</span></h4>
                        `,
                        css: ['public/build/app.css', 'assets/styles/print-daily-report.css']
                    });

                    dailyReport.setAttribute('hidden', 'hidden');
                });
            }
        });
    } else {
        showAlert('Vous n\'êtes pas autorisé à voir le rapport.', 'warning', false);
    }
}

function logout() {
    window.location.assign(`${baseUrl}/logout`);
}

function selectPrice(event) {
    const totalPriceElt = event.currentTarget;
    const serviceId = Number.parseInt(totalPriceElt.parentNode.dataset.serviceId, 10);
    const quantity = Number.parseInt(totalPriceElt.parentNode.querySelector('td:nth-of-type(2)').textContent, 10);
    const service = findServiceById(serviceId);
    const retailPriceElt = priceSelectModalElt.querySelector('#retail-price');
    const wholesalePriceElt = priceSelectModalElt.querySelector('#wholesale-price');
    const discountPriceElt = priceSelectModalElt.querySelector('#deflated-price');
    const changedPriceElt = priceSelectModalElt.querySelector('#changed-price');

    retailPriceElt.value = service.unitPrice * getRate(currency);
    retailPriceElt.dataset.price = service.unitPrice;
    retailPriceElt.parentNode.querySelector('label').innerHTML = 'Détail<br>' + (service.unitPrice * getRate(currency)).toFixed(2);
    wholesalePriceElt.value = service.wholesalePrice * getRate(currency);
    wholesalePriceElt.dataset.price = service.wholesalePrice;
    wholesalePriceElt.parentNode.querySelector('label').innerHTML = 'Gros<br>' + (service.wholesalePrice * getRate(currency)).toFixed(2);
    discountPriceElt.value = service.deflatedPrice * getRate(currency);
    discountPriceElt.dataset.price = service.deflatedPrice;
    discountPriceElt.parentNode.querySelector('label').innerHTML = 'Cassé<br>' + (service.deflatedPrice * getRate(currency)).toFixed(2);
    retailPriceElt.checked = 'on';
    changedPriceElt.value = service.unitPrice * getRate(currency);

    [retailPriceElt, wholesalePriceElt, discountPriceElt].forEach(input => {
        input.addEventListener('click', (e) => {
            changedPriceElt.dataset.price = e.currentTarget.dataset.price;
            changedPriceElt.value = e.currentTarget.value;
        });
    });

    document.querySelector('#validate-price-change').addEventListener('click', () => {
        currentInvoice = addToCart(serviceId, quantity, currentInvoice, Number.parseFloat(changedPriceElt.dataset.price ?? changedPriceElt.value));
        delete changedPriceElt.dataset.price;
        priceSelectModal.hide();
    }, {once: true});

    priceSelectModal.show();
}

document.querySelector('#currency-change').innerHTML = localStorage.getItem('currency') === 'Fc' ? 'Fc' : `<i class="fas fa-dollar-sign"></i>`;

document.querySelectorAll('#total, #workforce, #discount, #net').forEach(total => {
    total.textContent = currency + ' 0.00';
});

document.querySelector('#caution-deposit-modal').addEventListener('shown.bs.modal', (e) => {
    const cautionDepositBody = e.currentTarget.querySelector('.modal-body');
    const spinner = document.querySelector('#spinner');
    const clientControlOption = cautionDepositBody.querySelector('#caution-client > option');
    const cautionDepositSubmit = e.currentTarget.querySelector('#caution-deposit-submit');

    const validateAndSubmit = (event) => {
        spinner.removeAttribute('hidden');

        if (validateForm(event.currentTarget.parentNode, event)) {
            fetch(`${baseUrl}/cautions/new`, {
                method: 'POST',
                headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }),
                body: JSON.stringify({ client: currentInvoice.client.id, amount: (Number.parseFloat(document.querySelector('#caution-amount').value) / getRate(currency)) })
            }).then(resp => {
                if (resp.ok) {
                    resp.text().then(respBody => {
                        const responseBody = JSON.parse(respBody);
                        const data = responseBody.data;
                        spinner.setAttribute('hidden', 'hidden');
                        cautionDepositBody.querySelectorAll('.error-message').forEach(elt => {
                            elt.textContent = '';
                        });
                        cautionDepositModal.hide();
                        currentInvoice.client.totalCaution = data.totalCaution;
                        document.querySelector('#total-caution').textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);

                        setTimeout(() => {
                            const totalAmount = data.amount * getRate(currency);
                            const roundedAmount = Math.floor(totalAmount);
                            let decimals = ((totalAmount % roundedAmount).toFixed(2)) * 100;
                            const receiptCautionDepositTemplate = document.querySelector('#receipt-caution-deposit-template');
                            const fullySpelledOut = new FullySpelledOut();
                            receiptCautionDepositTemplate.removeAttribute('hidden');
                            receiptCautionDepositTemplate.innerHTML = `
                                <div class="w-100">Reçu de ${data.client}<br><br>
                                La somme de ${fullySpelledOut.writeInFull(roundedAmount)} ${currency === '$' ? 'dollars américains' : 'francs congolais'}${decimals > 0 ? ' et ' + fullySpelledOut.writeInFull(decimals) + ' centimes' : ''} (${roundedAmount + (decimals > 0 ? '.' + decimals : '')}${currency})<br>
                                Pour Caution<br>
                                <div class="w-100 mt-3">Reçu par ${data.user}, ${(new Date(data.createdAt.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                            `;

                            printJS({
                                printable: 'receipt-caution-deposit-template',
                                type: 'html',
                                header: `
                                    <div>
                                        ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="width: 320px">' : '<h1 class="text-center">' + maison['nomSociete'] + '</h1>'}
                                        <div class="text-center border-bottom-dashed">
                                            <small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small><br>
                                            <small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small>
                                        </div>
                                        <h3 class="w-100 text-center border">REÇU CAUTION N°${data.cautionId}</h3>
                                    </div>
                                `,
                                css: ['assets/styles/print-receipt-caution.css']
                            });
                            receiptCautionDepositTemplate.setAttribute('hidden', 'hidden');
                        }, 2000);
                        showAlert(responseBody.message, 'success', false);
                    });
                } else {
                    resp.text().then(respBody => {
                        const { message, errors } = JSON.parse(respBody);
                        spinner.setAttribute('hidden', 'hidden');

                        for (const propertyPath in errors) {
                            const error = errors[propertyPath];
                            const errorElt = cautionDepositBody.querySelector('#caution-' + propertyPath + '-control + .error-message');
                            errorElt.style.fontSize = 'smaller';
                            error.forEach(err => {
                                errorElt.textContent += err.message + ' ';
                            });
                        }

                        showAlert(message, 'danger', false);
                    });
                }
                cautionDepositSubmit.removeEventListener('click', validateAndSubmit);
            });
        } else {
            spinner.setAttribute('hidden', 'hidden');
            showAlert('Le formulaire contient des erreurs.', 'danger', false);
        }
    };

    cautionDepositBody.querySelector('#caution-amount').addEventListener('input', (event) => {
        const errorElt = document.querySelector('#caution-amount-control + .error-message');
        errorElt.style.fontSize = 'smaller';
        errorElt.textContent = event.currentTarget.validity.valid ? '' : 'Veuillez entrer un montant valide (positif et maximum 5 chiffres après la virgule).';
    });

    clientControlOption.value = currentInvoice.client.id;
    clientControlOption.textContent = currentInvoice.client.nomClient;
    cautionDepositSubmit.addEventListener('click', validateAndSubmit);
});

window.addEventListener('DOMContentLoaded', () => {
    const jsonSessionInvoice = sessionStorage.getItem('invoice');

    if (null !== jsonSessionInvoice) {
        const sessionInvoice = JSON.parse(jsonSessionInvoice);
        if (null !== sessionInvoice.client) {
            client = clients.find(c => c.id === sessionInvoice.client);
        }

        licenseId = sessionInvoice.licenseId ?? 0;

        currentInvoice.id = sessionStorage.getItem('invoiceId');
        currentInvoice.type = sessionInvoice.saleType;
        currentInvoice.date = sessionInvoice.date;
        currentInvoice.total = sessionInvoice.total;
        currentInvoice.discount = sessionInvoice.discount;
        currentInvoice.workforce = sessionInvoice.workforce;
        currentInvoice.workforcePercent = sessionInvoice.workforcePercent;
        currentInvoice.paymentMode = sessionInvoice.paymentMode;
        currentInvoice.articles = sessionInvoice.details?.articles;
        currentInvoice.services = sessionInvoice.details?.services;
        sessionInvoice.id = currentInvoice.id;

        if (currentInvoice.type !== 'hold') {
            printInvoice('FACTURE', permissions, currentInvoice);
            currentInvoice = { id: null, client: { id: null }, articles: {}, services: {}, total: 0, workforce: 0, discount: 0 };
        }

        currentInvoice.total = 0;
        sessionStorage.removeItem('invoice');
        // sessionStorage.removeItem('invoicePrint');
        // sessionStorage.removeItem('invoiceId');
    }
});

new mdb.Autocomplete(clientAutocomplete, {
    filter: clientsFilter,
    displayValue: value => {
        currentInvoice.client = value;
        currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : ('string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures);
        currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : ('string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus);
        currentInvoice.client.totalCaution = isNaN(currentInvoice.client.totalCaution) || 'undefined' === currentInvoice.client.totalCaution || null === currentInvoice.client.totalCaution ? 0 : ('string' === typeof currentInvoice.client.totalCaution ? Number.parseFloat(currentInvoice.client.totalCaution) : currentInvoice.client.totalCaution);
        document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
        document.querySelector('#total-bonus').textContent = ((currentInvoice.client.totalBonus ?? 0) * getRate(currency)).toFixed(2);
        document.querySelector('#total-caution').textContent = ((currentInvoice.client.totalCaution ?? 0) * getRate(currency)).toFixed(2);
        return value.nomClient;
    }
});

new mdb.Autocomplete(serviceAutocomplete, {
    filter: servicesFilter,
    threshold: 2,
    displayValue: value => {
        currentService = value;
        return value.name;
    },
    noResults: ''
});

immatriculationAutocompletes.forEach(input => {
    input.addEventListener('keyup', (e) => {
        const searchQuery = e.currentTarget.value;
        const prefix = input.id === 'numeroImmatriculation' ? 'immatriculation' : 'vehicle-' + input.id.split('-')[1];
        const dropdownMenu = document.querySelector(`#${prefix}-dropdown`);
    
        if (searchQuery.length > 1) {
            const spinner = document.querySelector(`#${prefix}-spinner`);
            spinner.removeAttribute('hidden');
            vehiclesFilter(searchQuery).then(data => {
                spinner.setAttribute('hidden', 'hidden');
                dropdownMenu.style.display = 'block';
                if (data.length > 0) {
                    let listItems = '';
                    data.forEach(item => {
                        const vehicleDetails = [item.genre, item.marque, item.typeOuModele];
                        listItems += `<li class="dropdown-item" data-id="${item.id}" onclick="selectVehicleItem(event)">${item.numeroImmatriculation}${prefix !== 'immatriculation' ? ' (' + vehicleDetails.join(' - ') + ')' : ''}</li>`;
                    });
                    dropdownMenu.innerHTML = listItems;
                } else {
                    dropdownMenu.innerHTML = '<li class="dropdown-item">No results found</li>';
                }
            });
        } else {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.querySelector('#client').addEventListener('keyup', (e) => {
    const searchQuery = e.currentTarget.value;
    const removeClientIdAttribute = () => {
        document.querySelector('#client').removeAttribute('data-client-id');
    };
    removeClientIdAttribute();

    if (searchQuery.length > 1) {
        const spinner = document.querySelector('#client-spinner');
        spinner.removeAttribute('hidden');
        clientsFilter(searchQuery).then(data => {
            spinner.setAttribute('hidden', 'hidden');
            clientDropdownMenu.style.display = 'block';
            if (data.length > 0) {
                let listItems = '';
                data.forEach(item => {
                    listItems += `<li class="dropdown-item" onclick="selectClientItem(event)">${item.nomClient}</li>`;
                });
                clientDropdownMenu.innerHTML = listItems;
            } else {
                removeClientIdAttribute();
                clientDropdownMenu.innerHTML = '<li class="dropdown-item">No results found</li>';
            }
        });
    } else {
        clientDropdownMenu.style.display = 'none';
    }
});

document.querySelector('#usageVehicule').addEventListener('keyup', (e) => {
    const searchQuery = e.currentTarget.value;

    if (searchQuery.length > 1) {
        const spinner = document.querySelector('#usage-vehicule-spinner');
        spinner.removeAttribute('hidden');
        usagesVehiculeFilter(searchQuery).then(data => {
            spinner.setAttribute('hidden', 'hidden');
            usageVehiculeDropdownMenu.style.display = 'block';
            if (data.length > 0) {
                let listItems = '';
                data.forEach(item => {
                    listItems += `<li class="dropdown-item" onclick="selectUsageVehiculeItem(event)">${item}</li>`;
                });
                usageVehiculeDropdownMenu.innerHTML = listItems;
            } else {
                usageVehiculeDropdownMenu.innerHTML = '<li class="dropdown-item">No results found</li>';
            }
        });
    } else {
        usageVehiculeDropdownMenu.style.display = 'none';
    }
});

[clientAutocomplete, serviceAutocomplete].forEach((elt, idx) => {
    elt.addEventListener('itemSelect.mdb.autocomplete', (event) => {
        if (idx === 0) {
            setTimeout(() => {
                const isDiscountApplicable = currentInvoice.client.id !== null && currentInvoice.client.discountApplicable;
                const discountAmount = (isDiscountApplicable ? applyDiscount(currentInvoice, discountables) : removeDiscount(currentInvoice)).discount;
                const workforceAmount = 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * currentInvoice.total : 0;
                const discountElt = document.querySelector('#discount');
                const workforceElt = document.querySelector('#workforce');

                document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
                enableCustomerDetailsButtons('customerDetails', 'customerCaution');
                if (null !== discountElt) {
                    discountElt.textContent = currency + ' ' + (getRate(currency) * discountAmount).toFixed(2);
                }
                if (null !== workforceElt) {
                    workforceElt.textContent = currency + ' ' + (getRate(currency) * workforceAmount).toFixed(2);
                }
                document.querySelector('#net').textContent = currency + ' ' + (getRate(currency) * Math.abs(currentInvoice.total + workforceAmount - discountAmount)).toFixed(2);
            }, 10);
        } else {
            setTimeout(() => {
                currentInvoice = addToCart(currentService.serviceId, 1, currentInvoice);
            }, 10);
        }

        setTimeout(() => {
            const input = elt.querySelector('input');
            emptyInput(input);
            input.blur();
        }, 1000);
    });
});

displayGrid(grid, gridContent.content);
