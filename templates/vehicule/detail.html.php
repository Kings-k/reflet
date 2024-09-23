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
            <h5 class="card-header">Ajouter un nouveau Vehicule</h5>
            <div class="card-body">
                <form action="/vehicule/<?= $currentV->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="numeroImmatriculation" id="numeroImmatriculation" class="form-control"  value="<?= $currentV->getNumeroImmatriculation() ?>" disabled/>
                        <label class="form-label" for="numeroImmatriculation">Numero Immatriculation</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="anneeFabrication" id="anneeFabrication" class="form-control" value="<?= $currentV->getAnneeFabrication() ?>" />
                        <label class="form-label" for="anneeFabrication">Anne Fabrication</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="dateMiseEnCirculation" id="dateMiseEnCirculation" class="form-control" value="<?= $currentV->getDateMiseEnCirculation() ?>" />
                        <label class="form-label" for="dateMiseEnCirculation">Date mise en circulation</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="genre" id="genre" class="form-control"  value="<?= $currentV->getGenre() ?>" />
                        <label class="form-label" for="genre">Genre</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="marque" id="marque" class="form-control" value="<?= $currentV->getMarque() ?>" />
                        <label class="form-label" for="marque">Marque</label>
                    </div> 
                    <div class="form-outline my-4">
                        <input type="text" name="typeOuModele" id="typeOuModele" class="form-control" value="<?= $currentV->getTypeOuModele() ?>" />
                        <label class="form-label" for="typeOuModele">Type Ou Modele</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="puissance" id="puissance" class="form-control" value="<?= $currentV->getPuissance() ?>" />
                        <label class="form-label" for="puissance">Puissance</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="numeroDansLaSerie" id="numeroDansLaSerie" class="form-control" value="<?= $currentV->getNumeroDansLaSerie() ?>" />
                        <label class="form-label" for="numeroDansLaSerie">Numero Dans La Serie</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="energie" id="energie" class="form-control" value="<?= $currentV->getEnergie() ?>"/>
                        <label class="form-label" for="energie">Energie</label>
                    </div> 
                    <div class="form-outline my-4">
                        <input type="text" name="kilometrage" id="kilometrage" class="form-control" value="<?= $currentV->getKilometrage() ?>" />
                        <label class="form-label" for="kilometrage">Kilometrage</label>
                    </div>
                    <div class="my-4">
                        <select name="usageVehicule" id="usageVehicule" class="select">
                            <option value="<?= $currentV->getUsageVehicule() ?>" selected><?= $currentV->getUsageVehicule() ?></option>
                        </select>
                        <label class="form-label select-label" for="type">Usage du Vehicule</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="couleur" id="couleur" class="form-control" value="<?= $currentV->getCouleur() ?>" />
                        <label class="form-label" for="couleur">Couleur</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="numeroChassis" id="numeroChassis" class="form-control" value="<?= $currentV->getNumeroChassis() ?>" />
                        <label class="form-label" for="numeroChassis">Numero Chassis</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="numeroMoteur" id="numeroMoteur" class="form-control" value="<?= $currentV->getNumeroMoteur() ?>" />
                        <label class="form-label" for="numeroMoteur">Numero Moteur</label>
                    </div>
                    <div class="my-4">
                        <select name="client" id="client" class="select">
                            <option value="<?= $currentV->getClient()->getId() ?>" selected><?= $currentV->getClient()->getNomClient() ?></option>
                        </select>
                        <label class="form-label select-label" for="client">Proprietaire</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutés Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestVehicules as $vehicule) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/vehicule/<?= $vehicule->getId() ?>">
                    <span><?= $vehicule->getGenre()." (".$vehicule->getNumeroImmatriculation().")" ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
