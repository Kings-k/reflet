<?php $view->extend('layout.html.php') ?>

<div class="row"></div>

<template id="step1">
    <div class="col-md-6 mb-4">
        <div class="card shadow">
            <div class="card-header">
                <h5>Étape 1</h5>
            </div>
            <div class="card-body">
                <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                    <label class="form-label select-label" for="depot">Dépôt à approvisionner</label>
                    <select name="depot" id="depot" class="form-select">
                        <?php foreach ($depots as $depot) : ?>
                        <option value="<?= $depot->getId() ?>"><?= $depot->getName() ?></option>
                        <?php endforeach ?>
                    </select>
                <?php endif ?>
                <input type="text" name="blivraison" id="blivraison" class="form-control form-control-lg my-4"" placeholder="Numéro du bon de livraison recue" required>
                <button type="button" class="btn btn-primary float-right my-2 mr-0" id="nextBtn">Suivant</button>
                <!-- <button type="button" class="btn float-right mr-2 my-2" id="cancelBtn">Effacer</button> -->
            </div>
        </div>
    </div>
</template>

<template id="step2">
    <div class="col-md-12 mb-4">
        <div class="card shadow">
            <div class="card-header">
                <h5>Étape 2</h5>
            </div>
            <div class="card-body">
                <form autocomplete="off">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Article</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Prix d'achat</th>
                                    <th scope="col">Date d'expiration</th>
                                    <th scope="col">Code bar</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary" id="addBtn">Ajouter article</button>
                        <button type="button" class="btn btn-primary" id="saveBtn">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<template id="inputRow">
    <tr>
        <td></td>
        <td>
            <input type="text" name="service" id="service" class="service form-control form-control-lg" required>
            <div id="service-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
            <div class="position-absolute">
                <ul class="dropdown-menu border shadow-sm mt-0" id="service-dropdown" style="position: relative; top: 0; left: 0; z-index: 100;"></ul>
            </div>
        </td>
        <td>
            <input type="number" min="1" class="quantity form-control form-control-lg" placeholder="Le nombre d'unités recues" required>
        </td>
        <td>
            <input type="number" min="0" step="0.00001" class="unitPrice form-control form-control-lg" placeholder="À combien avez-vous eu une unité ? (USD)" required>
        </td>
        <td>
            <input type="date" min="<?= (new DateTime('tomorrow'))->format('Y-m-d') ?>" class="expirationDate form-control form-control-lg">
        </td>
        <td>
            <input type="text" class="codeBar form-control form-control-lg">
        </td>
    </tr>
</template>

<?php $view['slots']->start('stylesheets') ?>
<link rel="stylesheet" href="/public/build/app.css" />
<link rel="stylesheet" href="/assets/jquery-ui-1.12.1.custom/jquery-ui.min.css">
<?php $view['slots']->stop() ?>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/jquery.js"></script>
<script src="/assets/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script defer>
    const step1fragment = document.importNode(document.querySelector('#step1').content, true), row = document.querySelector('.row:nth-of-type(2)');
    let rank = 1;
    let items = <?= json_encode($services) ?>;
    const servicesFilter = async (query) => {
        const url = `${baseUrl}/depots/blivraison?search=${encodeURI(query.trim())}`;
        const response = await fetch(url, {
            headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
        });
        const data = await response.json();
        return data;
    };

    function selectItem(event) {
        const currentTarget = event.currentTarget;
        const dropdown = currentTarget.parentNode;
        const rank = dropdown.id.split('-').pop();
        document.querySelector('#service-' + rank).value = currentTarget.textContent;
        dropdown.style.display = 'none';
    }

    row.appendChild(step1fragment);
    document.getElementById('nextBtn').addEventListener('click', () => {
        const blNumber = document.getElementById('blivraison').value;
        const depotId = !!document.getElementById('depot') ? document.getElementById('depot').value : null;

        if (blNumber.length > 0) {
            const step2fragment = document.importNode(document.querySelector('#step2').content, true);
            const inputRow = document.querySelector('#inputRow').content;

            function addRow(fragment, input, rank) {
                const serviceAutocomplete = fragment.querySelector(`[id^="service"]`);
                const dropdownMenu = fragment.querySelector(`[id^="service-dropdown"]`);
                const serviceSpinner = fragment.querySelector(`[id^="service-spinner"]`);

                serviceAutocomplete.id = 'service-' + rank;
                serviceAutocomplete.name = 'service-' + rank;
                dropdownMenu.id = 'service-dropdown-' + rank;
                dropdownMenu.name = 'service-dropdown-' + rank;
                serviceSpinner.id = 'service-spinner-' + rank;
                serviceSpinner.name = 'service-spinner-' + rank;
                fragment.querySelector('tr > td').textContent = rank;
                document.querySelector('tbody').appendChild(document.importNode(fragment, true));

                document.querySelector('#service-' + rank).addEventListener('keyup', (e) => {
                    const currentTarget = e.currentTarget;
                    const searchQuery = currentTarget.value;
                    const dropdown = document.querySelector('#service-dropdown-' + rank);

                    if (searchQuery.length > 1) {
                        const spinner = document.querySelector('#service-spinner-' + rank);
                        spinner.removeAttribute('hidden');
                        servicesFilter(searchQuery).then(data => {
                            spinner.setAttribute('hidden', 'hidden');
                            dropdown.style.display = 'block';
                            if (data.length > 0) {
                                let listItems = '';
                                data.forEach(item => {
                                    listItems += `<li class="dropdown-item" onclick="selectItem(event)" style="cursor: pointer">${item.name}</li>`;
                                });
                                dropdown.innerHTML = listItems;
                            } else {
                                dropdown.innerHTML = '<li class="dropdown-item">No results found</li>';
                            }
                        });
                    } else {
                        dropdown.style.display = 'none';
                    }
                });
            }
            
            step2fragment.querySelector('.card-header > h5').textContent = 'Bon de livraison N° '+ blNumber;
            row.innerHTML = '';
            row.appendChild(step2fragment);
            addRow(inputRow, `tbody > tr:nth-child(1) > td > .service`, 1);
            document.getElementById('addBtn').addEventListener('click', () => {
                rank += 1;
                addRow(inputRow, `tbody > tr:nth-child(${rank}) > td > .service`, rank);
            });
            document.getElementById('saveBtn').addEventListener('click', () => {
                const data = [];
                for (let i = 0; i < rank; i++) {
                    data.push({});
                }
                for (const className of ['service', 'quantity', 'unitPrice', 'expirationDate', 'codeBar']) {
                    const inputs = document.querySelectorAll('.' + className);
                    for (let i = 0; i < rank; i++) {
                        data[i][className] = inputs[i].value;
                    }
                }
                fetch(`${baseUrl}/depots/blivraison`, {
                    method: 'POST',
                    body: JSON.stringify([depotId, blNumber, data]),
                    headers: new Headers({'Content-Type': 'application/json'})
                })
                .then(resp => {
                    if (resp.ok) {
                        resp.text().then(data => {
                            showAlert(JSON.parse(data), 'success');
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        });
                    }
                });
            });
        }
    });
    // document.getElementById('cancelBtn').addEventListener('click', () => {
    //     document.querySelectorAll('input:not([type="submit"])').forEach(input => {
    //         input.value = '';
    //     });
    // });

</script>
<?php $view['slots']->stop() ?>
