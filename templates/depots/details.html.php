<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Détails sur le dépôt</h5>
            <div class="card-body">
                <form action="/depots/<?= $currentD->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" value="<?= $currentD->getName() ?>" required>
                        <label class="form-label" for="name">Nom</label>
                    </div>
                    <div class="form-outline mb-4">
                        <textarea class="form-control form-control-lg" name="description" id="description" rows="3"><?= $currentD->getDescription() ?></textarea>
                        <label class="form-label" for="description">Description</label>
                    </div>
                    <div class="d-md-flex flex-md-row-reverse justify-content-md-between">
                        <div class="my-3 my-md-2 flex-md-grow-1">
                            <select name="type" id="type" class="select">
                                <option value="1"<?= $currentD->getType() == 1 ? ' selected' : '' ?>>Groupe</option>
                                <option value="2"<?= $currentD->getType() == 2 ? ' selected' : '' ?>>Catégorie</option>
                            </select>
                            <label class="form-label select-label" for="type">Type de dépôt</label>
                        </div>
                    </div>
                    <?php foreach ($categories as $category) : ?>
                    <div class="form-outline form-check mt-3 ml-3" hidden>
                        <input type="checkbox" class="form-check-input" id="category<?= $category->getId() ?>" name="category<?= $category->getId() ?>"<?= in_array($category, $currentCategories) ? ' checked' : '' ?>>
                        <label class="form-check-label" for="category<?= $category->getId() ?>"><?= $category->getName() ?></label>
                    </div>
                    <?php endforeach ?>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <ul class="list-group">
            <?php foreach ($latestDepots as $depot) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/depots/<?= $depot->getId() ?>">
                    <span><?= $depot->getName() ?></span>
                    <span class="badge bg-secondary text-white rounded-pill d-flex align-items-center"><?= $depot->getType() == 1 ? 'Groupe' : 'Catégorie' ?></span>
                </a>
            <?php endforeach ?>
        </ul>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/toggle-categories.js" defer></script>
<?php $view['slots']->stop() ?>
