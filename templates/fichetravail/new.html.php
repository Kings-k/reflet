<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouvelle Fiche de Travail</h5>
            <div class="card-body">
                <form action="/fichetravail/new" method="post">
                    <div class="my-4">
                        <select name="vehicule" id="vehicule" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un vehicule</option>
                           <?php foreach($lastestVehicules as $vehicule){
                               ?>
                                <option value="<?= $vehicule->getId() ?>"><?= $vehicule->getGenre()." (".$vehicule->getNumeroImmatriculation()." : ".$vehicule->getClient()->getNomClient().")" ?></option>
                              <?php 
                           } ?>
                        </select>
                        <label class="form-label select-label" for="vehicule">Vehicule</label>
                    </div> 
                    <div class="my-4">
                        <select name="responsable" id="responsable" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un responsable</option>
                           <?php foreach($lastestUsers as $user){
                               ?>
                                <option value="<?= $user->getId() ?>"><?= $user->getUsername()?></option>
                              <?php 
                           } ?>
                        </select>
                        <label class="form-label select-label" for="vehicule">Responsable</label></label>
                    </div> 
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Creer">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Créées Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestFichesdetravail as $fiche) : ?>
                <a class="text-primary list-group-item list-group-item-action d-flex justify-content-between" href="/fichetravail/<?= $fiche->getId() ?>">
                <span><?= $fiche->getId()." (".$fiche->getVehicule()->getNumeroImmatriculation()." ".$fiche->getVehicule()->getGenre().") :".$fiche->getVehicule()->getClient()->getNomClient() ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
