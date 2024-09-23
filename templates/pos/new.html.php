<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Ajouter un point de vente</h5>
            <div class="card-body">
                <form action="/pos/new" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="name" id="name" class="form-control form-control-lg">
                        <label class="form-label" for="name">Nom du point de vente</label>
                    </div>
                    <div class="form-outline my-4">
                        <textarea name="description" rows="3" id="description" class="form-control form-control-lg"></textarea>
                        <label class="form-label" for="description">Description</label>
                    </div>
                    <div class="my-4 d-flex justify-content-between">
                        <div class="form-outline d-flex justify-content-between w-100 mr-3">
                            <input type="number" min="0" name="nbSalesBonus" id="nbSalesBonus" class="form-control form-control-lg" />
                            <label for="nbSalesBonus" class="form-label">Bonus applicable à des ventes multiples de</label>
                        </div>
                        <div class="form-outline w-100">
                            <input type="number" min="0" step="0.01" class="form-control form-control-lg" id="bonus-percentage" name="bonus-percentage">
                            <label for="bonus-percentage" class="form-label">Pourcentage du bonus</label>
                        </div>
                    </div>
                    <div class="my-4 form-outline">
                        <input type="number" class="form-control form-control-lg" id="workforce-percent" name="workforce-percent">
                        <label for="workforce-percent" class="form-label">Pourcentage de la main d'oeuvre</label>
                    </div>
                    <div class="my-2 mb-4">
                        <select name="type" id="type" class="select">
                            <option value="1">Groupe</option>
                            <option value="2">Catégorie</option>
                        </select>
                        <label class="form-label select-label" for="type">Type</label>
                    </div>
                    <?php foreach ($categories as $category) : ?>
                    <div class="form-outline form-check mt-3 ml-3" hidden>
                        <input type="checkbox" class="form-check-input" id="category<?= $category->getId() ?>" name="category<?= $category->getId() ?>">
                        <label class="form-check-label" for="category<?= $category->getId() ?>"><?= $category->getName() ?></label>
                    </div>
                    <?php endforeach ?>
                    <button class="btn btn-primary float-right my-2 mr-0">Ajouter</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <div class="list-group">
            <?php foreach ($latestPos as $pos) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/pos/<?= $pos->getId() ?>">
                    <span><?= $pos->getName() ?></span>
                    <span class="badge bg-secondary text-white rounded-pill d-flex align-items-center"><?= $pos->getType() == 1 ? 'Groupe' : 'Catégorie' ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/toggle-categories.js" defer></script>
<?php $view['slots']->stop() ?>
