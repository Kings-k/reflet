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
            <h5 class="card-header">Ajouter un nouveau service / article</h5>
            <div class="card-body">
                <form action="/services/new" method="post" enctype="multipart/form-data">
                    <div class="form-outline mt-4">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" required />
                        <label class="form-label" for="name">Nom</label>
                    </div>
                    <?php if (isset($violations['name'])): ?>
                        <?php foreach ($violations['name'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <!-- <div class="form-outline my-4">
                        <input type="text" name="codeManuel" id="codeManuel" class="form-control form-control-lg" />
                        <label class="form-label" for="codeManuel">Code manuel</label>
                    </div> -->
                    <div class="my-4">
                        <select name="type" id="type" class="select">
                            <option value="1">Service</option>
                            <option value="2">Article</option>
                        </select>
                        <label class="form-label select-label" for="type">Type</label>
                    </div>
                    <div class="my-4">
                        <select name="uom" id="uom" class="select" data-filter="true">
                            <option>Sélectionner une unité de mesure</option>
                            <?php foreach ($unitsOfMeasure as $uom) : ?>
                            <option value="<?= $uom->getId() ?>"><?= $uom->getName().($uom->getSymbol() ? sprintf(' (%s)', $uom->getSymbol()) : '') ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="uom">Unité de mesure</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="number" min="0" step="0.00001" name="unitPrice" id="unitPrice" class="form-control form-control-lg">
                        <label class="form-label" for="unitPrice">Prix unitaire</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="number" min="0" step="0.00001" name="wholesalePrice" id="wholesalePrice" class="form-control form-control-lg">
                        <label class="form-label" for="wholesalePrice">Prix de gros</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="number" min="0" step="0.00001" name="deflatedPrice" id="deflatedPrice" class="form-control form-control-lg">
                        <label class="form-label" for="deflatedPrice">Prix cassé</label>
                    </div>
                    <div class="form-outline my-4">
                        <textarea name="description" rows="3" id="description" class="form-control form-control-lg"></textarea>
                        <label class="form-label" for="description">Description</label>
                    </div>
                    <div class="mt-4">
                        <select name="category" id="category" class="select" data-filter="true">
                            <option value="" selected>Sélectionner une catégorie</option>
                            <?php foreach ($categories as $category) : ?>
                                <?php //if (count($category->getChildren()) == 0) : ?>
                                <option value="<?= $category->getId() ?>"><?= $category->getName() ?></option>
                                <?php //endif ?>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="category">Catégorie</label>
                    </div>
                    <?php if (isset($violations['category'])): ?>
                        <?php foreach ($violations['category'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <div class="my-4">
                        <label class="form-label" for="photo">Photo</label>
                        <input type="file" name="photo" id="photo" class="form-control">
                    </div>
                    <div class="d-flex justify-content-between my-4">
                        <div class="form-outline w-50 mr-2">
                            <input type="number" name="point" id="point" class="form-control form-control-lg" step="0.1" >
                            <label class="form-label" for="point">Points</label>
                        </div>
                        <div class="form-outline w-50">
                            <input type="number" name="nbrgros" id="nbrgros" class="form-control form-control-lg" step="1" >
                            <label class="form-label" for="nbrgros">Ventes pour passer en gros</label>
                        </div>
                    </div>
                    <div class="form-outline form-check my-4 ml-2">
                        <input type="checkbox" class="form-check-input" id="bonusApplicable" name="bonusApplicable">
                        <label class="form-check-label" for="bonusApplicable">Appliquer le système de bonus</label>
                    </div>
                    <input class="btn btn-primary float-right my-4 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutés Récemment</h5>
        <h6>SERVICES</h6>
        <div class="list-group mb-3">
        <?php foreach ($latestServices as $service) : ?>
            <?php if ($service->getType() == '1') : ?>
            <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/services/<?= $service->getId() ?>">
                <span><?= $service->getName() ?></span>
                <?php if ($service->getPhoto()) : ?>
                <img class="icon-image rounded-circle" src="../uploads/serviceimages/<?= $service->getPhoto() ?>" alt="">
                <?php endif ?>
            </a>
            <?php endif ?>
        <?php endforeach ?>
        </div>
        <h6>ARTICLES</h6>
        <div class="list-group">
        <?php foreach ($latestServices as $produit) : ?>
            <?php if ($produit->getType() == '2') : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/services/<?= $produit->getId() ?>">
                    <span><?= $produit->getName() ?></span>
                    <?php if ($produit->getPhoto()) : ?>
                    <img class="icon-image rounded-circle" src="../uploads/serviceimages/<?= $produit->getPhoto() ?>" alt="">
                    <?php endif ?>
                </a>
            <?php endif ?>
        <?php endforeach ?>
        </divul>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/toggle-categories.js" defer></script>
<?php $view['slots']->stop() ?>
