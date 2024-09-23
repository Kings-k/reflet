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
            <h5 class="card-header">Editer P.V</h5>
            <div class="card-body">
                <form action="/licence/<?= $currentL->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="numeroPv" id="numeroPv" class="form-control form-control-lg" value="<?= $currentL->getNumeroPv() ?>" />
                        <label class="form-label" for="numeroPv">Numero PV</label>
                    </div>
                    <div class="my-4">
                        <select name="vehicule" id="vehicule" class="select" data-filter="true">
                            <option value="<?= $currentL->getVehicule()->getId() ?>" selected hidden><?= $currentL->getVehicule()->getGenre()." (".$currentL->getVehicule()->getNumeroImmatriculation().")" ?></option>
                           <?php foreach($lastestVehicules as $vehicule){
                               ?>
                                <option value="<?= $vehicule->getId() ?>"><?= $vehicule->getGenre()." (".$vehicule->getNumeroImmatriculation().")" ?></option>
                              <?php 
                           } ?>
                        </select>
                        <label class="form-label select-label" for="vehicule">Vehicule</label>
                    </div>
                    <div class="my-4">
                        <select name="resultat" id="resultat" class="select form-control-lg">
                            <option value="<?= $currentL->getResultat() ?>" selected hidden></option>
                            <option value="Bon">En bon etat et conforme aux regles de securite</option></option>
                            <option value="A reparer" >Nécessite encore des reparations</option>
                            <option value="A reparer et non conforme aux regles de securite" >A reparer et non conforme aux regles de securite</option>
                        </select>
                        <label class="form-label select-label" for="resultat">Resultat</label>
                    </div>
                    <div class="my-4">
                        <select name="accepte" id="accepte" class="select form-control-lg">
                        <option value="<?= $currentL->getVehiculeaccepte() ?>" selected hidden></option>
                            <option value="oui" >Oui</option>
                            <option value="non" >Non</option>
                        </select>
                        <label class="form-label select-label" for="resultat">Vehicule accepte?</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="ctao" id="ctao" class="form-control form-control-lg" value="<?= $currentL->getCtao() ?>" />
                        <label class="form-label" for="ctao">CTAO</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Créées Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestLicences as $licence) : ?>
                <a class="text-primary list-group-item list-group-item-action d-flex justify-content-between" href="/licence/<?= $licence->getId() ?>">
                    <span><?= $licence->getNumeroPv()." (".$licence->getVehicule()->getNumeroImmatriculation()." ".$licence->getVehicule()->getGenre().") :".$licence->getVehicule()->getClient()->getNomClient() ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
