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
            <h5 class="card-header">Configuration Entreprise</h5>
            <div class="card-body">
                <form action="/maisons/new" method="post" enctype="multipart/form-data">
                    <div class="form-group my-2">
                        <label for="nomSociete">Nom Entreprise</label>
                        <input type="text" name="nomSociete" id="nomSociete" class="form-control" required autofocus />
                    </div>
                    <div class="form-group my-2">
                        <label for="registreCommerce">Registre Commerce</label>
                        <input type="text" name="registreCommerce" id="registreCommerce" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="idNationnal">ID NATIONAL</label>
                        <input type="text" name="idNationnal" id="idNationnal" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="numImpot">Numero Impot</label>
                        <input type="text" name="numImpot" id="numImpot" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="autorisationFct">Autorisation de Fonctionnement</label>
                        <input type="text" name="autorisationFct" id="autorisationFct" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="adressePhysique">Adresse Physique</label>
                        <input type="text" name="adressePhysique" id="adressePhysique" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="telephone">Téléphone</label>
                        <input type="text" name="telephone" id="telephone" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="mail">Email</label>
                        <input type="email" name="mail" id="mail" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="site">Site Web</label>
                        <input type="text" name="site" id="site" class="form-control" />
                    </div>
                    <div class="form-group my-2">
                        <label for="logo">Logos</label>
                        <input type="file" name="logo" id="logo" class="form-control">
                    </div>
                    <input class="btn btn-primary float-right my-2" type="submit" value="Creer">
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