<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/clients/new') ?>
<?= $view['slots']->set('action_text', 'Nouveau Client') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card border border-primary shadow">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Rechercher un client ...</label>
                </div>
                <div id="clients-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script>
        const clients = <?= json_encode($clients) ?>;
        const clientsDatatable = document.getElementById('clients-datatable');

        const clientsTableInstance = new mdb.Datatable(clientsDatatable, {
            columns: [
                { label: 'Noms', field: 'nomClient' },
                { label: 'Sexe', field: 'sexe' },
                { label: 'Téléphone', field: 'telephone' },
                { label: 'Plainte', field: 'mail' },
                { label: 'Adresse', field: 'adressePhys' },
                { label: 'Type', field: 'typeClient' },
                { label: 'Catégorie', field: 'category' },
                { label: 'Num dossier', field: 'plainteMalade' }
            ],
            rows: clients.map(row => {
                return {
                    ...row,
                    nomClient: `<a href="${baseUrl}/clients/${row.id}">${row.nomClient}</a>`,
                    typeClient: `Personne ${row.typeClient}`
                }
            })
        }, { hover: true });

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            clientsTableInstance.search(e.target.value);
        });
    </script>
<?php $view['slots']->stop('javascripts') ?>
