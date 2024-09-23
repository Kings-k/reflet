<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/categories/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter catégorie') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card shadow border">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="categories-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script defer>
        const categoriesDatatable = document.getElementById('categories-datatable');
        const categories = <?= json_encode($categories) ?>;

        const categoriesTableInstance = new mdb.Datatable(categoriesDatatable, {
            columns: [
                { label: 'Nom', field: 'category' },
                { label: 'Sous-categories', field: 'subCategoriesCount' },
                { label: 'Description', field: 'description' },
                { label: 'Action', field: 'action' }
            ],
            rows: categories.map(row => {
                return {
                    ...row,
                    category: `<a href="/categories/${row.id}">${row.name}</a>`,
                    action: `<a href="#" data-delete="/categories/${row.id}"><i class="far fa-trash-alt text-danger"></i></a>`
                }
            },
            { hover: true })
        },);

        const setActions = (e) => {
            e.currentTarget.querySelectorAll('tbody > tr').forEach((rowElt, idx) => {
                rowElt.style.cursor = 'pointer';
                rowElt.querySelectorAll('td:last-child > a').forEach(btn => {
                    const path = btn.dataset.delete, entityName = btn.parentNode.parentNode.querySelector('td:nth-of-type(1)').textContent.trim();
                    btn.addEventListener('click', () => {
                        if (confirm(`Voulez-vous vraiment supprimer ${entityName} ?`)) {
                            fetch(`${baseUrl}${path}/delete`, {
                                method: 'DELETE'
                            })
                            .then(resp => {
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

        categoriesDatatable.addEventListener('render.mdb.datatable', setActions);

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            categoriesTableInstance.search(e.target.value);
        });
    </script>
    <script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
