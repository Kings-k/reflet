<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<?php if ($view['security']->isGranted('ROLE_ADMIN')) : ?>
    <?= $view['slots']->set('action_path', '/users/'.$currentU->getId().'/reset-password') ?>
    <?= $view['slots']->set('action_text', 'Réinitialiser mot de passe') ?>
    <?= $view['slots']->set('action_icon', 'undo') ?>
<?php endif ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Modification des informations</h5>
            <div class="card-body">
                <form action="/users/<?= $currentU->getId() ?>" method="post" enctype="multipart/form-data">
                    <div class="form-outline my-4">
                        <input type="text" name="username" id="username" class="form-control form-control-lg" value="<?= $currentU->getUsername() ?>" required />
                        <label class="form-label" for="username">Nom d'utilisateur</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="fullName" id="fullName" value="<?= $currentU->getFullName() ?>" class="form-control form-control-lg" />
                        <label class="form-label" for="fullName">Nom complet</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="address" id="address" class="form-control form-control-lg" value="<?= $currentU->getAddress() ?>" />
                        <label class="form-label" for="address">Adresse physique</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="email" name="email" id="email" class="form-control form-control-lg" value="<?= $currentU->getEmail() ?>" />
                        <label class="form-label" for="email">Adresse e-mail</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="phone" name="telephone" id="telephone" class="form-control form-control-lg" value="<?= $currentU->getTelephone() ?>" />
                        <label class="form-label" for="telephone">Téléphone</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="password" name="password" id="password" class="form-control form-control-lg" />
                        <label class="form-label" for="password">Mot de passe</label>
                    </div>
                    <div class="my-4">
                        <?php $roles = ['admin' => 'Admin Système', 'topmanager' => 'Top Manager', 'finance' => 'Manager Finance', 'geststock' => 'Manager Stock', 'reception' => 'Réceptionniste', 'managerpos' => 'Manager Point de vente', 'financepos' => 'Financier Point de vente', 'gestockpos' => 'Gestock Point de vente', 'guichetier' => 'Guichetier', 'super_guichetier' => 'Super Guichetier', 'technicien' => 'Technicien', 'receptionpos' => 'Réceptionniste Point de vente'] ?>
                        <select name="type" id="type" data-filter="true" class="select"<?= $view['security']->isGranted('ROLE_ADMIN') ? '' : ' disabled' ?>>
                            <?php foreach ($roles as $key => $role) : ?>
                            <option value="<?= $key ?>"<?= $key === $currentU->getType() ? ' selected' : '' ?>><?= $role ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="type">Type</label>
                    </div>
                    <div class="my-2">
                        <label class="form-label" for="photo">Photo</label>
                        <input type="file" name="photo" id="photo" class="form-control">
                    </div>
                    <div class="my-4">
                        Roles
                        <?php foreach ($currentU->getRoles() as $role) : ?>
                            <?php if ($role !== 'ROLE_USER') : ?>
                            <div class="badge bg-primary text-white"><?= $role ?></div>
                            <?php endif ?>
                        <?php endforeach ?>
                    </div>
                    <input class="btn btn-primary float-right my-4 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <?php if ($view['security']->isGranted('ROLE_ADMIN')) : ?>
    <div class="col-md-4">
        <h5>Ajoutés récemment</h5>
        <ul class="list-group">
            <?php foreach ($latestUsers as $user) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between<?= $currentU->getId() == $user->getId() ? ' active' : '' ?>" href="/users/<?= $user->getId() ?>">
                    <span><?= trim($user->getFullName()) ? $user->getFullName() : $user->getUsername() ?></span>
                    <?php if ($user->getPhoto()) : ?>
                    <img class="icon-image rounded-circle" src="/uploads/profileimages/<?= $user->getPhoto() ?>" alt="">
                    <?php endif ?>
                </a>
            <?php endforeach ?>
        </ul>
    </div>
    <?php endif ?>
</div>

<?php $view['slots']->start('javascripts') ?>
<script>
    document.querySelector('#username').addEventListener('blur', () => {
        console.log('changed')
    });
</script>
<?php $view['slots']->stop() ?>
