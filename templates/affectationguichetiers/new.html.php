<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouvelle Affectation</h5>
            <div class="card-body">
                <form action="/affectationsguichetiers/new" method="post">
                    <div class="my-4">
                        <select name="user" id="user" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un utilisateur</option>
                            <?php foreach ($users as $user) : ?>
                                <?php if ((in_array('ROLE_GUICHETIER', $user['roles']) || in_array('ROLE_SUPER_GUICHETIER', $user['roles'])) && !in_array($user['id'], $assignedUsersIds)) : ?>
                                <option value="<?= $user['id'] ?>"><?= ($user['fullName'] ? $user['fullName'] : $user['username']) . ' (' . $user['type'] . ')' ?></option>
                                <?php endif ?>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="user">Agent</label>
                    </div>
                    <div class="my-4">
                        <select name="guichet" id="guichet" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un guichet</option>
                            <?php foreach ($guichets as $guichet) : ?>
                                <?php if (!in_array($guichet->getId(), $assignedGuichetsIds)) : ?>
                                <option value="<?= $guichet->getId() ?>"><?= $guichet->getNomGuichet() ?></option>
                                <?php endif ?>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="guichet">Guichet</label>
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
                        <td><a href="/affectationsguichetiers/<?= $affectation['id'] ?>"><?= $affectation['username'] ?></a></td>
                        <td><?= $affectation['nomGuichet'] ?></td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>