<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Détails</h5>
            <div class="card-body">
                <form action="/categorieclient/<?= $currentC->getId() ?>" method="post">
                    <div class="form-outline">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" value="<?= $currentC->getName() ?>" />
                        <label for="name" class="form-label">Nom</label>
                    </div>
                    <?php if (isset($violations['name'])): ?>
                        <?php foreach ($violations['name'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <div class="d-flex align-items-center mt-4">
                        <input type="checkbox" class="form-check-input mt-0" name="discount" id="discount" <?= $currentC->isDiscountApplicable() ? ' checked' : '' ?>>
                        <label for="discount" class="cr ml-1 mb-0">&nbsp;Appliquer la réduction automatiquement</label>
                    </div>
                    <div class="my-4">
                        <select name="discountables[]" id="discountables" class="select" data-filter="true" multiple>
                            <?php $discountables = $currentC->getDiscountables()->toArray() ?>
                            <?php foreach ($services as $service) : ?>
                                <option value="<?= $service->getId() ?>"<?= in_array($service, $discountables) ? ' selected' : '' ?>><?= $service->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="select-label form-label" for="discountables">Services et/ou articles sur lesquels on doit appliquer la reduction</label>
                    </div>
                    <input class="btn btn-primary float-right my-4 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutées Récemment</h5>
        <div class="list-group">
        <?php foreach ($latestCategories as $category) : ?>
            <a class="list-group-item list-group-item-action d-flex justify-content-between<?= $currentC->getId() == $category->getId() ? ' active' : '' ?>" href="/categorieclient/<?= $category->getId() ?>">
                <span><?= $category->getName() ?></span>
            </a>
        <?php endforeach ?>
        </div>
    </div>
</div>
