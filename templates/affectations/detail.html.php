<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Changer l'affectation</h5>
            <div class="card-body">
                <form action="/affectations/<?= $currentA->getId() ?>" method="post">
                    <div class="my-4">
                        <select name="user" id="user" class="select" disabled>
                            <option value="<?= $currentA->getUser()->getId() ?>"><?= $currentA->getUser()->getFullName() ? $currentA->getUser()->getFullName() : $currentA->getUser()->getUsername() ?></option>
                        </select>
                        <label class="form-label select-label" for="user">Agent</label>
                    </div>
                    <div class="mb-4">
                        <select name="pointofsale" id="pointofsale" class="select" data-filter="true">
                            <?php foreach ($pointsOfSale as $pos) : ?>
                            <option value="<?= $pos->getId() ?>"<?= $currentA->getPointOfSale()->getId() == $pos->getId() ? ' selected' : '' ?>><?= $pos->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="pointofsale">Point de vente</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
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
                    <td><a href="/affectations/<?= $affectation->getId() ?>"><?= $affectation->getUser()->getFullName() ? $affectation->getUser()->getFullName() : $affectation->getUser()->getUsername() ?></a></td>
                    <td><?= $affectation->getPointOfSale()->getName() ?></td>
                </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>
