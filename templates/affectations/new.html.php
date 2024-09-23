<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouvelle Affectation</h5>
            <div class="card-body">
                <form action="/affectations/new" method="post">
                    <div class="my-4">
                        <select name="user" id="user" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un utilisateur</option>
                            <?php foreach ($users as $user) : ?>
                                <?php if (!in_array('ROLE_RECEPTION', $user->getRoles()) && !in_array('ROLE_GESTSTOCK', $user->getRoles()) && !in_array('ROLE_FINANCE', $user->getRoles()) && !in_array('ROLE_TOPMANAGER', $user->getRoles()) && !in_array('ROLE_ADMIN', $user->getRoles()) && !in_array('ROLE_SUPER_ADMIN', $user->getRoles()) && !in_array($user->getId(), $assignedUsersIds)) : ?>
                                <option value="<?= $user->getId() ?>"><?= (trim($user->getFullName()) ? $user->getFullName() : $user->getUsername()).' ('.$user->getType().')' ?></option>
                                <?php endif ?>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="user">Agent</label>
                    </div>
                    <div class="mb-4">
                        <select name="pointofsale" id="pointofsale" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un Point de vente</option>
                            <?php foreach ($pointsOfSale as $pos) : ?>
                            <option value="<?= $pos->getId() ?>"><?= $pos->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="pointofsale">Point de vente</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Anciennes affectations</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>Agent</th>
                    <th>Affecté à</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($latestaffectations as $affectation) : ?>
                <tr>
                    <td><a href="/affectations/<?= $affectation->getId() ?>"><?= trim($affectation->getUser()->getFullName()) ? $affectation->getUser()->getFullName() : $affectation->getUser()->getUsername() ?></a></td>
                    <td><?= $affectation->getPointOfSale()->getName() ?></td>
                </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>
