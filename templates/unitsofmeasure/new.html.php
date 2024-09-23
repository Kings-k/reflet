<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Ajouter une unité de mesure</h5>
            <div class="card-body">
                <form action="/uom/new" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="name" id="name" class="form-control form-control-lg">
                        <label for="name" class="form-label">Nom de l'unité de mesure</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="symbol" id="symbol" class="form-control form-control-lg">
                        <label for="symbol" class="form-label">Symbole</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutées</h5>
        <div class="list-group">
            <?php foreach ($latestUnitsofmeasure as $uom) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/uom/<?= $uom->getId() ?>">
                    <span><?= $uom->getName() ?></span>
                    <?php if ($uom->getSymbol()) : ?>
                    <span class="badge bg-secondary text-white rounded-pill d-flex align-items-center"><?= $uom->getSymbol() ?></span>
                    <?php endif ?>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
