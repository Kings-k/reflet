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
            <h5 class="card-header">Mise à jour Entreprise</h5>
            <div class="card-body">
                <form action="/maisons/<?= $currentM->getId() ?>" method="post" enctype="multipart/form-data">
                    <div class="form-outline my-4">
                        <input type="text" name="nomSociete" id="nomSociete" value="<?= $currentM->getNomSociete() ?>" class="form-control form-control-lg" required autofocus />
                        <label class="form-label" for="nomSociete">Nom Entreprise</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="registreCommerce" id="registreCommerce" value="<?= $currentM->getRegistreCommerce() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="registreCommerce">Registre Commerce</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="idNationnal" id="idNationnal" value="<?= $currentM->getIdNationnal() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="idNationnal">ID NATIONAL</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="numImpot" id="numImpot" class="form-control form-control-lg" value="<?= $currentM->getNumImpot() ?>" />
                        <label class="form-label" for="numImpot">Numero Impot</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="autorisationFct" id="autorisationFct" value="<?= $currentM->getAutorisationFct() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="autorisationFct">Autorisation de Fonctionnement</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="adressePhysique" id="adressePhysique" value="<?= $currentM->getAdressePhysique() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="adressePhysique">Adresse Physique</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="telephone" id="telephone" value="<?= $currentM->getTelephone() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="telephone">Téléphone</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="email" name="mail" id="mail" value="<?= $currentM->getMail() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="mail">Email</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="site" id="site" class="form-control form-control-lg" value="<?= $currentM->getSite() ?>" />
                        <label class="form-label" for="site">Site Web</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="file" name="logo" id="logo" class="form-control form-control-lg">
                        <label class="form-label" for="logo">Logos</label>
                    </div>
                    <input class="btn btn-primary float-right my-2" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutées Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestMaisons as $maison) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/maisons/<?= $maison->getId() ?>">
                    <span><?= $maison->getNomSociete()  ?></span>
                    <?php if ($maison->getLogo()) : ?>
                        <img class="icon-image rounded-circle" src="/uploads/logos/<?= $maison->getLogo() ?>" alt="">
                    <?php endif ?>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>