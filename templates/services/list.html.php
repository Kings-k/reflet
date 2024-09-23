<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/services/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter service') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="services-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script defer>
        const servicesDatatable = document.getElementById('services-datatable');
        let services = <?= json_encode($services) ?>;

        const loadFromServer = async (query) => {
            const q = query.trim();
            const url = `${baseUrl}/services?search=${encodeURI(q)}&limit=200&all=true`;
            let response = await fetch(url, {
                headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
            });
            let data = await response.json();

            return data;
        };

        const setActions = (e) => {
            e.currentTarget.querySelectorAll('tbody > tr').forEach((rowElt, idx) => {
                rowElt.style.cursor = 'pointer';
                rowElt.querySelectorAll('td:last-child > a').forEach(btn => {
                    const path = btn.dataset.delete, entityName = btn.parentNode.parentNode.querySelector('td:nth-of-type(1)').textContent.trim();
                    btn.addEventListener('click', () => {
                        if (confirm(`Voulez-vous vraiment supprimer ${entityName} ?`)) {
                            fetch(`${baseUrl}${path}/delete`, {
                                method: 'DELETE'
                            }).then(resp => {
                                if (resp.ok) {
                                    resp.text().then(data => {
                                        showAlert(JSON.parse(data), 'success');
                                    });
                                }
                            });
                        }
                    });
                });
            });
        };

        const setServices = (services) => {
            return services.map(row => {
                return {
                    ...row,
                    service: `<a href="/services/${row.id}">${row.name}</a>`,
                    unitPrice: row.unitPrice.toFixed(2),
                    type: (row.type === 1 ? 'service' : 'article'),
                    action: `<a href="#" data-delete="/services/${row.id}"><i class="far fa-trash-alt text-danger"></i></a>`
                }
            });
        };

        const servicesTableInstance = new mdb.Datatable(servicesDatatable, {
            columns: [
                { label: 'Nom', field: 'service' },
                { label: 'Code manuel', field: 'id' },
                { label: 'Type', field: 'type' },
                { label: 'Prix', field: 'unitPrice' },
                { label: 'Points', field: 'points' },
                { label: 'Catégorie', field: 'category' },
                { label: 'Action', field: 'action' }
            ],
            rows: setServices(services)
        }, { loading: false });

        const loadData = (value) => {
            const filteredServices = services.filter(service => service.name.trim().toLowerCase().indexOf(value) > -1);
            const updateTable = (data) => {
                servicesTableInstance.update({ rows: setServices(data) }, { loading: false });
            }
            loadFromServer(value).then((data) => {
                if (filteredServices.length < data.length) {
                    updateTable(data);
                }
                services = data;
            });
            updateTable(filteredServices);
        };

        servicesDatatable.addEventListener('render.mdb.datatable', setActions);

        document.getElementById('datatable-search-input').addEventListener('input', (event) => {
            const value = event.currentTarget.value;
            if (value.length > 1) {
                servicesTableInstance.update(null, { loading: true });
                loadData(value);
            }
        });
    </script>
    <script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
