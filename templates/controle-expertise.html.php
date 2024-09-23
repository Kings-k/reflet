<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<!-- PrintJS -->
<link rel="stylesheet" href="/assets/styles/print.min.css" />
<style>
    .icon-image {
        width: 25px;
    }
    input[type="checkbox"] + label:hover {
        cursor: pointer;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <?php $view['slots']->output('vehicle-data') ?>
        <div id="controls" hidden><?= json_encode($controls) ?></div>
        <div id="maison" hidden><?= json_encode($maison) ?></div>
        <div class="card shadow">
            <div class="card-header d-flex justify-content-between align-items-center">
                <span class="h5 font-weight-bold" id="main-title"><?php $view['slots']->output('process-type') ?>&nbsp;<?= (!in_array($vehicule['marque'], ['', null]) ? $vehicule['marque'].' ' : '').$vehicule['typeOuModele'] ?> (<?= $vehicule['numeroImmatriculation'] ?>), <?= mb_strimwidth($client, 0, 20, '...') ?></span>
                <button class="btn btn-primary" id="register-issues-button"><?= count($controls) > 0 ? 'Modifier contrôles' : 'Enregistrer pannes' ?></button>
            </div>
            <div class="card-body">
                <form id="vehicle-form">
                    <div class="form-outline">
                        <input type="text" name="numeroImmatriculation" id="numeroImmatriculation" class="form-control form-control-lg" value="<?= $vehicule['numeroImmatriculation'] ?>" disabled />
                        <label class="form-label" for="numeroImmatriculation">Numéro d'immatriculation</label>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                        <div class="form-outline w-50 mr-2">
                            <input type="text" name="anneeFabrication" id="anneeFabrication" class="form-control form-control-lg" value="<?= $vehicule['anneeFabrication'] ?>" />
                            <label class="form-label" for="anneeFabrication">Année de fabrication</label>
                        </div>
                        <div class="form-outline w-50 ml-2">
                            <input type="text" name="dateMiseEnCirculation" id="dateMiseEnCirculation" class="form-control form-control-lg" value="<?= $vehicule['dateMiseEnCirculation'] ?>" />
                            <label class="form-label" for="dateMiseEnCirculation">Date de mise en circulation</label>
                        </div>
                    </div>
                    <div class="form-outline my-3">
                        <input type="text" name="couleur" id="couleur" class="form-control form-control-lg" value="<?= $vehicule['couleur'] ?>">
                        <label class="form-label" for="couleur">Couleur</label>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                        <div class="form-outline flex-grow-1 mr-2">
                            <input type="text" name="genre" id="genre" class="form-control form-control-lg" value="<?= $vehicule['genre'] ?>" />
                            <label class="form-label" for="genre">Genre</label>
                        </div>
                        <div class="form-outline flex-grow-1 mx-2">
                            <input type="text" name="marque" id="marque" class="form-control form-control-lg" value="<?= $vehicule['marque'] ?>" />
                            <label class="form-label" for="marque">Marque</label>
                        </div> 
                        <div class="form-outline flex-grow-1 ml-2">
                            <input type="text" name="typeOuModele" id="typeOuModele" class="form-control form-control-lg" value="<?= $vehicule['typeOuModele'] ?>" disabled />
                            <label class="form-label" for="typeOuModele">Type ou Modèle</label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between w-100 my-3">
                        <div class="flex-grow-1 mr-2">
                            <div class="form-outline">
                                <input type="text" class="form-control form-control-lg" name="usageVehicule" id="usageVehicule" value="<?= $vehicule['usageVehicule'] ?>">
                                <label class="form-label" for="type">Usage du véhicule</label>
                            </div>
                            <div id="usage-vehicule-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                            <div class="dropdown mt-0">
                                <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="usage-vehicule-dropdown"></ul>
                            </div>
                        </div>
                        <div class="flex-grow-1 ml-2">
                            <div class="form-outline">
                                <input type="text" class="form-control form-control-lg" name="client" id="client" data-client-id="<?= $vehicule['client'] ?>" value="<?= $client ?>" disabled>
                                <label class="form-label" for="client">Propriétaire</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                        <div class="form-outline flex-grow-1 mr-2">
                            <input type="text" name="puissance" id="puissance" class="form-control form-control-lg" value="<?= $vehicule['puissance'] ?>" />
                            <label class="form-label" for="puissance">Puissance</label>
                        </div>
                        <div class="form-outline flex-grow-1 mx-2">
                            <input type="text" name="energie" id="energie" class="form-control form-control-lg" value="<?= $vehicule['energie'] ?>" />
                            <label class="form-label" for="energie">Energie</label>
                        </div> 
                        <div class="form-outline flex-grow-1 ml-2">
                            <input type="text" name="kilometrage" id="kilometrage" class="form-control form-control-lg" value="<?= $vehicule['kilometrage'] ?>" />
                            <label class="form-label" for="kilometrage">Kilométrage</label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                        <div class="form-outline flex-grow-1 mr-2">
                            <input type="text" name="numeroDansLaSerie" id="numeroDansLaSerie" class="form-control form-control-lg" value="<?= $vehicule['numeroDansLaSerie'] ?>" />
                            <label class="form-label" for="numeroDansLaSerie">Numéro dans la série</label>
                        </div>
                        <div class="form-outline flex-grow-1 mx-2">
                            <input type="text" name="numeroChassis" id="numeroChassis" class="form-control form-control-lg" value="<?= $vehicule['numeroChassis'] ?>">
                            <label class="form-label" for="numeroChassis">Numéro chassis</label>
                        </div>
                        <div class="form-outline flex-grow-1 ml-2">
                            <input type="text" name="numeroMoteur" id="numeroMoteur" class="form-control form-control-lg" value="<?= $vehicule['numeroMoteur'] ?>">
                            <label class="form-label" for="numeroMoteur">Numéro moteur</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" tabindex="-1" aria-labelledby="register-issues" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content px-3">
            <div class="modal-header border-bottom border-primary">
                <h5 class="modal-title font-weight-bold" id="clotureModalLabel"><?php $view['slots']->output('process-type') ?>&nbsp;<?= (!in_array($vehicule['marque'], ['', null]) ? $vehicule['marque'].' ' : '').$vehicule['typeOuModele'] ?> (<?= $vehicule['numeroImmatriculation'] ?>), <?= mb_strimwidth($client, 0, 35, '...') ?></h5>
                <d class="flex-justify-content-end align-items-center">
                    <i class="fas fa-2x fa-print mr-4" id="print-btn" style="color: #777; cursor: pointer"></i>
                    <i class="far fa-2x fa-save mr-4 text-primary" id="submit-issues-btn" style="cursor: pointer"></i>
                    <!-- <i class="fas fa-2x fa-pause mr-4 text-secondary" style="cursor: pointer"></i> -->
                    <i class="fas fa-2x fa-times text-danger p-0" data-dismiss="modal" aria-label="Close" style="cursor: pointer; width: 18px; height: 18px;"></i>
                </d>
            </div>
            <div class="modal-body w-100">
                <div class="input-group">
                    <div class="form-outline flex-grow-1" id="category-autocomplete">
                        <input type="text" class="form-control bg-light" id="category" placeholder="Recherche modèle du véhicule">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addCategory()">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>
                <div id="category-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                <div class="dropdown w-100 mt-0">
                    <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="category-dropdown"></ul>
                </div>
                <div class="d-flex justify-content-between border-bottom pt-3 pb-2 mb-3" style="border-color: #bbb !important;">
                    <h3 id="category-name"></h3>
                    <div class="d-flex justify-content-right align-items-center">
                        <div class="form-outline">
                            <input type="text" class="form-control bg-light" id="expert" name="expert" value="<?= count($controls) > 0 ? $controls[0]['expert'] : '' ?>" required>
                            <label for="expert" class="form-label">Nom de l'expert</label>
                        </div>
                        <button class="btn btn-primary float-right ml-2" id="add-issue-btn" onclick="addNewItem(event)" hidden>Ajouter panne</button>
                    </div>
                </div>
                <div class="container">
                    <div class="row" id="issues"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="rapport-controle-technique" hidden></div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/globals.js"></script>
<script src="/assets/usage-vehicule-autocomplete.js"></script>
<!-- PrintJS -->
<script src="/assets/print.min.js"></script>
<script>
    const maison = JSON.parse(document.querySelector('#maison').textContent);
    let categories = JSON.parse(localStorage.getItem('categories')) ?? [];
    const vehicleElt = document.querySelector('#vehicle');
    const issuesElt = document.querySelector('#issues');
    let isUpdate;
    const isControle = 'undefined' !== typeof vehicleElt.dataset.invoiceCount;
    let controls = JSON.parse(document.querySelector('#controls').textContent);
    const dbCategory = vehicleElt.dataset.dbCategory;
    let issues = [];
    let vehicle = JSON.parse(vehicleElt.textContent);
    const licenseId = Number.parseInt(vehicleElt.dataset.licenseId, 10);
    const registerIssuesModalElt = document.querySelector('.modal');
    const spinner = document.querySelector('#spinner');
    const registerIssuesModal = new mdb.Modal(registerIssuesModalElt);
    const options = [
        {value: 'En bon etat', content: 'V (En bon état)'},
        {value: 'Bosses', content: 'B (Bosses)'},
        {value: 'A remplacer', content: 'X (A remplacer)'},
        {value: 'A reparer', content: 'A (A réparer)'},
        {value: 'A regler', content: 'R (A régler)'},
        {value: 'A serrer', content: 'S (A serrer)'},
        {value: 'A nettoyer', content: 'T (A nettoyer)'},
        {value: 'A lubrifier', content: 'C (A lubrifier)'},
        {value: 'Mauvais', content: 'M (Mauvais)'},
        {value: 'Neant', content: '// (Néant)'},
        {value: 'A supprimer', content: 'A supprimer'},
        {value: 'Egratignure', content: '+ (Egratignure)'},
        {value: 'A reviser', content: 'A reviser'},
        {value: 'A mettre', content: 'A mettre'},
        {value: 'A augmenter', content: 'A augmenter'},
        {value: 'A stabiliser', content: 'A stabiliser'},
        {value: 'A eliminer', content: 'A éliminer'},
        {value: 'A tarer', content: 'A tarer'},
        {value: 'A souder', content: 'A souder'},
        {value: 'A renforcer', content: 'A renforcer'},
        {value: 'A purger', content: 'A purger'}
    ];

    const categoriesFilter = async (value) => {
        const query = value.trim().toLowerCase();
        const filteredCategories = categories.filter(category => category.name.trim().toLowerCase().indexOf(query) > -1);

        if (filteredCategories.length > 0) {
            return new Promise((resolve) => {
                resolve(filteredCategories);
            });
        }

        const response = await fetch(`${baseUrl}/categories?search=${encodeURI(query)}&limit=10`, {
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        });
        const data = await response.json();
        categories = data.data;

        return data.data;
    };

    function getIssue(service, index) {
        let selectInnerHTML = '';

        options.forEach(option => {
            selectInnerHTML += `<option value="${option.value}"${service.observation === option.value ? ' selected' : ''}>${option.content}</option>`;
        });

        return `
            <div class="d-flex justify-content-between align-items-center pl-4 pr-2 py-1 my-3 border border-primary shadow-sm" style="border-radius: 4px;">
                <div class="form-check" style="width: 60%">
                    <input data-index="${index}" class="form-check-input" type="checkbox" id="issue-${service.id}"${service.checked ? ' checked' : ''} />
                    <label class="form-check-label" for="issue-${service.id}">${service.name}</label>
                </div>
                <div class="d-flex flex-row" style="width: 40%">
                    <input data-index="${index}" type="number" class="form-control mr-2" id="quantity-${service.id}" name="quantity-${service.id}" value="${service.quantity}" min="1" style="border-color: #aaa !important;" style="width: 50%">
                    <select data-index="${index}" id="observation-${service.id}" name="observation-${service.id}" class="select" style="border-color: #aaa !important; border-radius: 4px;">${selectInnerHTML}</select>
                </div>
            </div>
        `;
    }

    function attachChangeEvent(element) {
        element.addEventListener('change', (e) => {
            const currentTarget = e.currentTarget;
            const serviceId = currentTarget.id.split('-')[1];
            const checkbox = document.querySelector(`#issue-${serviceId}`);
            const select = document.querySelector(`#observation-${serviceId}`);
            const qtyInput = document.querySelector(`#quantity-${serviceId}`);
            const anomalie = { id: Number.parseInt(serviceId, 10), name: checkbox.parentNode.querySelector('label').textContent, observation: select.value, quantity: Number.parseInt(qtyInput.value, 10), checked: checkbox.checked };
            issues.splice(Number.parseInt(currentTarget.dataset.index, 10), 1, anomalie);
        });
    }

    function addNewItem(event) {
        const category = document.querySelector('#category').dataset.categoryId;
        const service = prompt("Entrer le nom de la nouvelle panne");
        
        if (!!service && typeof category === 'string') {
            // window.scrollTo(0, 0);
            spinner.removeAttribute('hidden');

            fetch(`${baseUrl}/services/addnewpanne`, {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}),
                body: JSON.stringify({ category, service })
            }).then(resp => {
                spinner.setAttribute('hidden', 'hidden');

                if (resp.ok) {
                    resp.text().then(respBody => {
                        const { data } = JSON.parse(respBody);

                        if (data.serviceId > 0) {
                            const newIssue = { id: data['serviceId'], name: data['name'], observation: options[0]['value'], quantity: 1, checked: true };
                            issues.unshift(newIssue);
                            populateCheckboxList(issues);
                            showAlert('Panne ajoutée avec succès', 'success', false);
                        } else {
                            showAlert('Ajout échoué', 'danger', false);
                        }
                    });
                } else {
                    resp.text().then(respBody => {
                        let message = '';
                        const { errors } = JSON.parse(respBody);
                        issuesElt.innerHTML = '';
                        populateCheckboxList(issues);

                        for (const key in errors) {
                            errors[key].forEach(error => {
                                message += error.message;
                            });
                        }

                        showAlert(0 < message.length ? message : 'Une erreur est survenue', 'danger', false);
                    });
                }
            });
        }
    }

    function populateCheckboxList(issues) {
        const issuesNumber = issues.length;
        let issuesInnerHtml = '';
        issuesElt.innerHTML = '';

        if (issuesNumber > 0) {
            const mean = Math.ceil(issuesNumber / 2);

            for (let i = 0; i < mean; i++) {
                issuesInnerHtml += getIssue(issues[i], i);
            }

            issuesInnerHtml = '<div class="col-sm-12 col-md-6">' + issuesInnerHtml + '</div>';
            issuesElt.innerHTML = issuesInnerHtml;

            if (issuesNumber > 1) {
                issuesInnerHtml = '';

                for (let i = mean; i < issuesNumber; i++) {
                    issuesInnerHtml += getIssue(issues[i], i);
                }

                issuesInnerHtml = '<div class="col-sm-12 col-md-6">' + issuesInnerHtml + '</div>';
                issuesElt.innerHTML += issuesInnerHtml;
            }

            document.querySelectorAll(`[id^="issue-"], [id^="quantity-"], [id^="observation-"]`).forEach(elt => {
                attachChangeEvent(elt);
            });
        }
    }

    function fetchServices(event = null, category = null) {
        let currentCategory;
        const localStorageCategories = localStorage.getItem('categories');

        if (null !== event) {
            const currentTarget = event.currentTarget;
            currentCategory = { id: Number.parseInt(currentTarget.dataset.id), name: currentTarget.textContent };
        } else {
            currentCategory = category;
        }

        if (!localStorageCategories) {
            localStorage.setItem('categories', JSON.stringify([currentCategory]));
        } else {
            const cats = JSON.parse(localStorageCategories);
            if (cats.length === 100) {
                cats.pop();
            }
            if ('undefined' === typeof cats.find(cat => cat.id === currentCategory.id)) {
                cats.unshift(currentCategory);
                localStorage.setItem('categories', JSON.stringify(cats));
            }
        }

        spinner.removeAttribute('hidden');

        fetch(`${baseUrl}/services?c=${currentCategory.id}`, {
            method: 'GET',
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        }).then(response => {
            document.querySelector(`#category-dropdown`).style.display = 'none';

            if (response.ok) {
                response.text().then(respBody => {
                    const { data } = JSON.parse(respBody);
                    spinner.setAttribute('hidden', 'hidden');
                    document.querySelector('#category').dataset.categoryId = currentCategory.id;
                    updateVehicle(currentCategory.name, false);
                    document.querySelector('#add-issue-btn').removeAttribute('hidden');

                    if (data.length > 0) {
                        const completeIssue = (item) => {
                            Object.assign(item, { observation: options[0]['value'], quantity: 1, checked: false });
                            return item;
                        };

                        if (controls.length > 0) {
                            issues = data.map(issue => {
                                const match = controls.find(control => control.id === issue.id);
                                if ('undefined' !== typeof match) {
                                    const result = { id: match.id, name: match.name, observation: match.observation, quantity: match.quantity, checked: true };
                                    return result;
                                }
                                return completeIssue(issue);
                            });
                        } else {
                            issues = data.map(issue => completeIssue(issue));
                        }
                    }

                    populateCheckboxList(issues);
                });
            }
        });
    }

    function addCategory(categoryName = null) {
        const name = (categoryName ?? prompt("Entrer le modèle du véhicule")).trim();

        if (!!name) {
            spinner.removeAttribute('hidden');

            fetch(`${baseUrl}/categories/new`, {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }),
                body: JSON.stringify({ name })
            }).then(response => {
                spinner.setAttribute('hidden', 'hidden');

                if (response.ok) {
                    response.text().then(respBody => {
                        const { data, message } = JSON.parse(respBody);
                        const categoryInput = document.querySelector('#category');
                        issues = [];
                        populateCheckboxList(issues);
                        categoryInput.value = '';
                        categoryInput.dataset.categoryId = data['id'];
                        updateVehicle(data['name'], false);
                        document.querySelector('#add-issue-btn').removeAttribute('hidden');
                        showAlert(message, 'success', false);
                    });
                } else {
                    response.text().then(respBody => {
                        const { errors } = JSON.parse(respBody);
                        let message = '';
                        for (const key in errors) {
                            const errorsByPath = errors[key];
                            errorsByPath.forEach(error => {
                                message += error['message'];
                            });
                            showAlert(message, 'danger', false);
                        }
                    });
                }
            });
        } else {
            showAlert(`Le nom "${name}" que vous avez saisi n'est pas valide.`, 'danger', false);
        }
    }

    function updateVehicle(modele = null, vehicleAlert = true) {
        if (null !== modele) {
            const title = `${isControle ? 'Contrôle technique' : 'Expertise de vehicule'} ${modele} (${vehicle['numeroImmatriculation']}), ${document.querySelector('#client').value}`;
            document.querySelector('#typeOuModele').value = modele;
            document.querySelector('#category-name').textContent = modele;
            document.querySelector('#clotureModalLabel').textContent = title;
            document.querySelector('#main-title').textContent = title;
            vehicle['typeOuModele'] = modele;
        }

        fetch(`${baseUrl}/vehicule/${vehicle['id']}`, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}),
            body: JSON.stringify(vehicle)
        }).then(response => {
            if (response.ok) {
                response.text().then(respBody => {
                    if (vehicleAlert) {
                        const { message } = JSON.parse(respBody);
                        showAlert(message, 'success', false);
                    }
                });
            }
        });
    }

    function printControleTechnique() {
        const controleTechniqueTemplate = document.querySelector('#rapport-controle-technique');
        let tbody = '';
        let table;
        const footer = `
            <div id="rapport-controle-technique-footer">
                <div class="text-right mt-3">Fait à Goma, ${(new Date()).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="text-right mt-5">Nom et signature de l'expert</div>
                <div class="text-right mt-2 font-weight-bold">${document.querySelector('#expert').value.trim()}</div>
            </div>
        `;

        controls.forEach((control, index, arr) => {
            tbody += `
                <tr>
                    <td class="text-center">${index + 1}</td>
                    <td>${control.name}</td>
                    <td class="text-center">${control.quantity}</td>
                    <td>${control.observation}</td>
                </tr>
            `;
        });

        table = `
            <div class="border border-dark pb-2">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="font-weight-bold text-center">N°</th>
                            <th class="font-weight-bold">ANOMALIES&nbsp;CONSTATEES</th>
                            <th class="font-weight-bold text-center">QTE</th>
                            <th class="font-weight-bold">OBSERVATION</th>
                        </tr>
                    </thead>
                    <tbody>${tbody}</tbody>
                </table>
            </div>
        `;

        controleTechniqueTemplate.innerHTML = table + footer;
        controleTechniqueTemplate.removeAttribute('hidden');

        printJS({
            printable: 'rapport-controle-technique',
            type: 'html',
            header: `
                <div id="rapport-controle-technique-logo">
                    ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" class="w-25">' : '<h2 class="w-25">' + maison['nomSociete'] + '</h2>'}
                </div>
                <h4 class="text-center font-weight-bold my-3 pb-1 border-bottom border-dark w-100">RAPPORT ${isControle ? 'CONTROLE TECHNIQUE' : 'EXPERTISE'} DU VEHICULE</h4>
                <div class="d-flex flex-row mb-3">
                    <table class="mr-5">
                        <tr><td>Genre</td><td>:</td><td class="font-weight-bold">${vehicle['genre']}</td></tr>
                        <tr><td>Marque</td><td>:</td><td class="font-weight-bold">${vehicle['marque']}</td></tr>
                        <tr><td>Modèle</td><td>:</td><td class="font-weight-bold">${vehicle['typeOuModele']}</td></tr>
                    </table>
                    <table class="ml-5">
                        <tr><td>Plaque</td><td>:</td><td class="font-weight-bold">${vehicle['numeroImmatriculation']}</td></tr>
                        <tr><td>Kilométrage</td><td>:</td><td class="font-weight-bold">${vehicle['kilometrage']}</td></tr>
                        <tr><td>Client</td><td>:</td><td class="font-weight-bold">${document.querySelector('#client').value}</td></tr>
                    </table>
                </div>
            `,
            css: ['/public/build/app.css', '/assets/css/controle-technique.css']
        });

        controleTechniqueTemplate.setAttribute('hidden', 'hidden');
    }

    if (isControle) {
        isUpdate = Number.parseInt(vehicleElt.dataset.invoiceCount, 10) > 0;
    } else {
        isUpdate = 'undefined' !== typeof controls.find(control => null !== control.updatedAt);
    }

    document.querySelectorAll('#vehicle-form input').forEach(input => {
        input.addEventListener('change', (event) => {
            const currentTarget = event.currentTarget;
            vehicle[currentTarget.id] = currentTarget.id === 'client' ? currentTarget.dataset.clientId : currentTarget.value;
            updateVehicle(currentTarget.id === 'typeOuModele' ? currentTarget.value : null);
        });
    });

    document.querySelector('#category').addEventListener('keyup', (event) => {
        const searchQuery = event.currentTarget.value;
        const dropdownMenu = document.querySelector('#category-dropdown');
        if (searchQuery.length > 1) {
            const spinner = document.querySelector('#category-spinner');
            spinner.removeAttribute('hidden');
            categoriesFilter(searchQuery).then(data => {
                spinner.setAttribute('hidden', 'hidden');
                dropdownMenu.style.display = 'block';
                if (data.length > 0) {
                    let listItems = '';
                    data.forEach(item => {
                        listItems += `<li class="dropdown-item" data-id="${item.id}" onclick="fetchServices(event)">${item.name}</li>`;
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

    document.querySelector('#print-btn').addEventListener('click', printControleTechnique);

    document.querySelector('#submit-issues-btn').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const expertInput = document.querySelector('#expert');
        // window.scrollTo(0, 0);

        if (!(expertInput.value.trim())) {
            showAlert('Le nom de l\'expert est obligatoire.', 'danger', false);
        } else {
            const url = baseUrl + (isControle ? `/controletechnique${isUpdate ? '' : '/new'}/${licenseId}` : `/expertises/${isUpdate ? 'updateissues' : 'addissues'}/${licenseId})`);
            spinner.removeAttribute('hidden');

            fetch(url, {
                headers: new Headers({'Content-Type': 'application/json'}),
                method: 'POST',
                body: JSON.stringify({ issues: issues.filter(issue => issue.checked), expert: expertInput.value.trim() })
            }).then(response => {
                spinner.setAttribute('hidden', 'hidden');
                if (response.ok) {
                    response.text().then(resp => {
                        const data = JSON.parse(resp);
                        isUpdate = true;
                        controls = data.controls;
                        showAlert('Opération effectuée avec succès', 'success', false);
                        setTimeout(() => {
                            printControleTechnique();
                        }, 5000);
                    });
                } else {
                    showAlert('Une erreur est survenue', 'danger', false);
                }
            });
        }
    });

    registerIssuesModalElt.addEventListener('shown.bs.modal', (e) => {
        const categoryName = [null, undefined].indexOf(dbCategory) === -1 && ('string' === typeof dbCategory && '' !== dbCategory.trim())
            ? dbCategory
            : document.querySelector('#typeOuModele').value
        ;
        spinner.removeAttribute('hidden');

        fetch(`${baseUrl}/categories?search=${encodeURI(categoryName.trim())}&limit=1`, {
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        }).then(response => {
            if (response.ok) {
                response.text().then(respBody => {
                    const { data } = JSON.parse(respBody);
                    spinner.setAttribute('hidden', 'hidden');
                    if (data.length === 1) {
                        fetchServices(null, data[0]);
                    } else {
                        const name = prompt(`Le modèle "${categoryName}" n'existe pas dans le système. Voulez-vous l'ajouter ?`, categoryName);
                        if ('string' === typeof name) {
                            addCategory(name.trim());
                        }
                    }
                });
            }
        });
    });

    registerIssuesModalElt.addEventListener('hidden.bs.modal', (e) => {
        console.log('hey');
    });

    document.querySelector('#register-issues-button').addEventListener('click', () => {
        registerIssuesModal.show();
    });
</script>
<?= $view['slots']->stop() ?>
