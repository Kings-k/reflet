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
            <h5 class="card-header">Ajouter un nouvel utilisateur</h5>
            <div class="card-body">
                <form action="/users/new" method="post" enctype="multipart/form-data">
                    <div class="form-outline my-4">
                        <input type="text" name="username" id="username" class="form-control form-control-lg" required />
                        <label class="form-label" for="username">Nom d'utilisateur</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="fullName" id="fullName" class="form-control form-control-lg" />
                        <label class="form-label" for="fullName">Nom complet</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="address" id="address" class="form-control form-control-lg" />
                        <label class="form-label" for="address">Adresse physique</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="email" name="email" id="email" class="form-control form-control-lg" />
                        <label class="form-label" for="email">Adresse e-mail</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="phone" name="telephone" id="telephone" class="form-control form-control-lg" />
                        <label class="form-label" for="telephone">Téléphone</label>
                    </div>
                    <div class="my-2">
                        <select name="type" id="type" class="select" data-filter="true">
                            <option value="" selected>Sélectionner une catégorie</option>
                            <option value="admin">Admin Système</option>
                            <option value="topmanager">Top Manager</option>
                            <option value="finance">Manager Finance</option>
                            <option value="geststock">Manager Stock</option>
                            <option value="reception">Réceptionniste</option>
                            <option value="managerpos">Manager Point de vente</option>
                            <option value="financepos">Financier Point de vente</option>
                            <option value="gestockpos">Gestock Point de vente</option>
                            <option value="guichetier">Guichetier</option>
                            <option value="super_guichetier">Super Guichetier</option>
                            <option value="technicien">Technicien</option>
                            <option value="receptionpos">Réceptionniste Point de vente</option>
                        </select>
                        <label class="form-label select-label" for="type">Type</label>
                    </div>
                    <div class="my-2">
                        <label class="form-label" for="photo">Photo</label>
                        <input type="file" name="photo" id="photo" class="form-control">
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutés Récemment</h5>
        <div class="list-group">
            <?php foreach ($latestUsers as $user) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/users/<?= $user->getId() ?>">
                    <span><?= trim($user->getFullName()) ? $user->getFullName() : $user->getUsername() ?></span>
                    <?php if ($user->getPhoto()) : ?>
                    <img class="icon-image rounded-circle" src="/uploads/profileimages/<?= $user->getPhoto() ?>" alt="">
                    <?php endif ?>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
