<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Synthese</h5>
            <div class="card-body">
                <div class="row">
                    <table class="table">
                        <tr><th>Identification du proprietaire</th><th>:</th> <td><?= $clientinfos->getNomClient() ?></td></tr>
                        <tr><th>Tel</th><th>:</th> <td><?= $clientinfos->getTelephone() ?></td></tr>
                        <tr><th>Plaque</th><th>:</th> <td><?= $vehiculesinfos->getNumeroDansLaSerie() ?></td></tr>
                        <tr><th>Marque</th><th>:</th> <td><?= $vehiculesinfos->getMarque() ?></td></tr>
                        <tr><th>Genre</th><th>:</th> <td><?= $vehiculesinfos->getGenre() ?></td></tr>
                        <tr><th>Type</th><th>:</th> <td><?= $vehiculesinfos->getTypeOuModele() ?> </td></tr>
                        <tr><th>Chassis</th><th>:</th> <td><?= $vehiculesinfos->getNumeroChassis() ?> </td></tr>
                        <tr><th>Moteur</th><th>:</th> <td><?= $vehiculesinfos->getNumeroMoteur() ?></td></tr>
                        <tr><th>Annee de Fabrication</th><th>:</th> <td><?= $vehiculesinfos->getAnneeFabrication() ?></td></tr>
                        <tr><th>Kms</th><th>:</th> <td><?= $vehiculesinfos->getKilometrage() ?> </td></tr>
                        <tr><th>Usage du Vehicule</th><th>:</th> <td><?= $vehiculesinfos->getUsageVehicule() ?> </td></tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
