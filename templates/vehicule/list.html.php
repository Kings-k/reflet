<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/vehicule/new') ?>
<?= $view['slots']->set('action_text', 'Nouveau Vehicule') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="vehicles-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script defer>
        const vehiclesDatatable = document.getElementById('vehicles-datatable');
        const vehicles = <?= json_encode($vehicles) ?>;

        const vehiclesTableInstance = new mdb.Datatable(vehiclesDatatable, {
            columns: [
                { label: 'Immatriculation', field: 'numeroImmatriculation' },
                { label: 'Fabrication', field: 'anneeFabrication' },
                { label: 'En circulation', field: 'dateMiseEnCirculation' },
                { label: 'Genre', field: 'genre' },
                { label: 'Marque', field: 'marque' },
                { label: 'Type', field: 'typeOuModele' },
                { label: 'Puissance', field: 'puissance' },
                { label: 'Num. série', field: 'numeroDansLaSerie' },
                { label: 'Energie', field: 'energie' },
                { label: 'Kilométrage', field: 'kilometrage' },
                { label: 'Usage', field: 'usageVehicule' },
                { label: 'Couleur', field: 'couleur' },
                { label: 'Chassis', field: 'numeroChassis' },
                { label: 'Moteur', field: 'numeroMoteur' },
                { label: 'Client', field: 'nomClient' }
            ],
            rows: vehicles.map(row => {
                return {
                    ...row,
                    numeroImmatriculation: `<a href="/vehicule/${row.id}">${row.numeroImmatriculation}</a>`
                }
            },
            { hover: true })
        },);

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            vehiclesTableInstance.search(e.target.value);
        });
    </script>
<?= $view['slots']->stop() ?>
