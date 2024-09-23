<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-<?= in_array('ROLE_GESTSTOCK', $user['roles']) ? '12' : '8' ?>">
        <div class="card">
            <div class="card-header">
                <?php if (!in_array('ROLE_GESTSTOCK', $user['roles'])): ?>
                <h5 class="card-title">Approvisionnement point de vente</h5>
                <?php endif ?>
            </div>
            <div class="card-body">
                <?php if (in_array('ROLE_GESTSTOCK', $user['roles'])): ?>
                    <div class="form-outline mb-4">
                        <input type="text" class="form-control" id="datatable-search-input" />
                        <label class="form-label" for="datatable-search-input">Recherche ...</label>
                    </div>
                    <div id="procurements-datatable"></div>
                <?php else: ?>
                    <form autocomplete="off">
                        <div class="form-outline my-4" id="article-autocomplete">
                            <input type="search" id="product" name="product" class="form-control form-control-lg" placeholder="Tapez le nom de l'article à approvisionner" required>
                            <label for="product" class="form-label">Article</label>
                        </div>
                        <div class="form-outline my-4">
                            <input type="number" class="form-control form-control-lg" id="quantity" name="quantity">
                            <label for="quantity" class="form-label">Quantité</label>
                        </div>
                        <button type="button" class="btn btn-primary float-right mr-0 mb-2" id="procurement">Envoyer</button>
                    </form>
                <?php endif ?>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script defer>
    const roles = <?= json_encode($user['roles']) ?>;
    const articles = <?= json_encode($articles) ?>;
    let procurementRequests = <?= json_encode($procurementRequests) ?>;
    const spinner = document.querySelector('#spinner');

    if (roles.indexOf('ROLE_GESTSTOCK') !== -1) {
        const procurementsDatatable = document.getElementById('procurements-datatable');
        const getRows = (procReqs) => {
            return procReqs.map(row => {
                const grantedQuantity = [undefined, null].includes(row.grantedQuantity) ? row.quantity : row.grantedQuantity;
                return {
                    ...row,
                    quantity: `<span>${row.quantity}${row.uomName === null || typeof row.uomName === 'undefined' ? '' : (' ' + row.uomName.toLowerCase() + (row.quantity > 1 ? 's' : ''))}</span>`,
                    grantedQuantity: `<span data-quantity="${row.quantity}" data-granted-quantity="${grantedQuantity}" data-uom-name="${row.uomName}" onclick="editQuantity(event)">${grantedQuantity}${row.uomName === null || typeof row.uomName === 'undefined' ? '' : (' ' + row.uomName.toLowerCase() + (typeof grantedQuantity === 'number' && grantedQuantity > 1 ? 's' : ''))}</span>`,
                    status: `<span class="badge bg-${row.status === 0 ? 'info' : (row.status === 1 ? 'success' : 'danger')} rounded-pill">${(row.status === 0 ? 'En attente' : (row.status === 1 ? 'Approuvée' : 'Annulée'))}</span>`,
                    date: (new Date(row.createdAt.date)).toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: 'numeric'}),
                    action: `
                        <a href="#" class="btn btn-sm btn-outline-primary" data-action="approve" data-procurement="${row.id}"><i class="fas fa-check"></i></a>
                        <a href="#" class="btn btn-sm btn-outline-danger" data-action="cancel" data-procurement="${row.id}"><i class="fas fa-times"></i></a>
                    `
                }
            },
            { hover: true })
        };

        const procurementsTableInstance = new mdb.Datatable(procurementsDatatable, {
            columns: [
                { label: 'Produit', field: 'serviceName' },
                { label: 'Qté demandée', field: 'quantity' },
                { label: 'Qté fournie', field: 'grantedQuantity' },
                { label: 'Demandeur', field: 'username' },
                { label: 'Date', field: 'date' },
                { label: 'Statut', field: 'status' },
                { label: 'Action', field: 'action' }
            ],
            rows: getRows(procurementRequests)
        },);

        const setActions = (event) => {
            event.currentTarget.querySelectorAll('tbody > tr > td > a').forEach(btn => {
                btn.style.cursor = 'pointer';
                btn.addEventListener('click', () => {
                    const productName = btn.parentNode.parentNode.querySelector('[data-field=serviceName]').textContent.trim();
                    const quantity = Number.parseInt(btn.parentNode.parentNode.querySelector('[data-field=grantedQuantity] > span').dataset.grantedQuantity, 10);
                    const action = btn.dataset.action;
                    const procurementId = Number.parseInt(btn.dataset.procurement, 10);
                    // if (confirm(`Voulez-vous vraiment ${action === 'approve' ? 'approuver' : 'annuler'} la demande de ${quantity} ${productName} ?`)) {
                    if (confirm(`Voulez-vous vraiment ${action === 'approve' ? 'approuver' : 'annuler'} cette demande ?`)) {
                        const status = action === 'approve' ? 1 : 2;
                        spinner.removeAttribute('hidden');

                        fetch(`${baseUrl}/depots/demandeapprovisionnement`, {
                            method: 'PATCH',
                            body: JSON.stringify({ procurementId, status, quantity })
                        }).then(resp => {
                            spinner.setAttribute('hidden', 'hidden');
                            if (resp.ok) {
                                resp.text().then(respBody => {
                                    const { message, data } = JSON.parse(respBody);
                                    // console.log(data['test'])
                                    // TODO: Replace the concerned line in procumentRequests by the one coming from the server, then update the table.
                                    procurementRequests = procurementRequests.map(procurementRequest => procurementRequest.id === procurementId ? data : procurementRequest);
                                    procurementsTableInstance.update({ rows: getRows(procurementRequests) }, { loading: false, hover: true });
                                    showAlert(message, 'success', false);
                                });
                            } else {
                                resp.text().then(respBody => {
                                    showAlert(JSON.parse(respBody).message, 'danger', false);
                                });
                            }
                        });
                    }
                });
            });
        };

        function editQuantity(event) {
            const stringQuantity = prompt('Modifier la quantité');
            if ('string' === typeof stringQuantity) {
                const quantity = Number.parseInt(stringQuantity, 10);
                if (quantity > 0) {
                    const quantityElt = event.currentTarget;
                    const uomName = quantityElt.dataset.uomName;
                    quantityElt.dataset.grantedQuantity = quantity;
                    quantityElt.textContent = `${quantity}${[null, 'null'].includes(uomName) || typeof uomName === 'undefined' ? '' : (' ' + uomName.toLowerCase() + (quantity > 1 ? 's' : ''))}`;
                }
            }
        }

        procurementsDatatable.addEventListener('render.mdb.datatable', setActions);
        document.querySelector('thead > tr > th:nth-child(4)').click();

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            procurementsTableInstance.search(e.target.value);
        });
    } else {
        const articleAutocomplete = document.querySelector('#article-autocomplete');

        const articlesFilter = value => {
            return articles.filter(article => {
                return article.name.toLowerCase().includes(value.toLowerCase());
            });
        };

        document.querySelectorAll('#close, #cancel').forEach(elt => {
            elt.addEventListener('click', () => {
                window.location.reload();
            });
        });

        new mdb.Autocomplete(articleAutocomplete, {
            filter: articlesFilter,
            displayValue: value => {
                return value.name;
            }
        });

        document.getElementById('procurement').addEventListener('click', (event) => {
            const jsonHeaders = new Headers();
            const payload = { product: document.querySelector('#product').value, quantity: Number.parseInt(document.querySelector('#quantity').value, 10) };
            jsonHeaders.append('Content-Type', 'application/json');
            spinner.removeAttribute('hidden');

            fetch(`${baseUrl}/depots/demandeapprovisionnement`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: jsonHeaders
            }).then(resp => {
                spinner.setAttribute('hidden', 'hidden');
                if (resp.ok) {
                    resp.text().then(respBody => {
                        showAlert(JSON.parse(respBody).message, 'success', false);
                    });
                } else {
                    resp.text().then(respBody => {
                        showAlert(JSON.parse(respBody).message, 'danger', false);
                    });
                }
            });
        });
    }
</script>
<?php $view['slots']->stop() ?>
