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
            <h5 class="card-header">Modifier expertise</h5>
            <div class="card-body">
                <form action="/expertise/<?= $currentE->getId() ?>" method="post">
                    <div class="my-4">
                        <select name="vehicule" id="vehicule" class="select" data-filter="true">
                            <?php foreach ($lastestVehicules as $vehicule) : ?>
                                <option value="<?= $vehicule->getId() ?>"<?= $currentE->getId() == $vehicule->getId() ? ' selected' : '' ?>><?= $vehicule->getGenre()." (".$vehicule->getNumeroImmatriculation().") ".$vehicule->getClient()->getNomClient() ?></option>
                            <?php  endforeach ?>
                        </select>
                        <label class="form-label select-label" for="vehicule">Vehicule</label>
                    </div> 
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Créées Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestExpertises as $expertise) : ?>
                <a class="text-primary list-group-item list-group-item-action d-flex justify-content-between" href="/expertise/<?= $expertise->getId() ?>">
                <span><?= $expertise->getCreatedAt()->format('d-m-Y')." (".$expertise->getVehicule()->getNumeroImmatriculation()." ".$expertise->getVehicule()->getGenre().") :".$expertise->getVehicule()->getClient()->getNomClient() ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
