<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Détails sur l'unité de mesure</h5>
            <div class="card-body">
                <form action="/uom/<?= $currentU->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" value="<?= $currentU->getName() ?>">
                        <label for="name" class="form-label">Nom</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="symbol" id="symbol" class="form-control form-control-lg" value="<?= $currentU->getSymbol() ?>">
                        <label for="symbol" class="form-label">Symbole</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <div class="list-group">
            <?php foreach ($latestUnitsofmeasure as $uom) : ?>
            <a class="list-group-item list-group-item-action d-flex justify-content-between<?= $currentU->getId() == $uom->getId() ? ' active' : '' ?>" href="/uom/<?= $uom->getId() ?>">
                <span><?= $uom->getName() ?></span>
                <?php if ($uom->getSymbol()) : ?>
                <span class="badge bg-<?= $currentU->getId() == $uom->getId() ? 'light text-dark' : 'secondary text-white' ?> rounded-pill d-flex align-items-center"><?= $uom->getSymbol() ?></span>
                <?php endif ?>
            </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
