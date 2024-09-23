<?php $view->extend('layout.html.php') ?>

<?php
function displayCategories($cat) {
?>
    <li>
        <?php if ($children = $cat->getChildren()) : ?>
            <span class="box"><?= $cat->getName() ?></span>
            <ul class="nested">
                <?php
                foreach ($children as $child) {
                    displayCategories($child);
                }
                ?>
            </ul>
        <?php else : ?>
            <?php
                echo $cat->getName();
                return;
            ?>
        <?php endif ?>
    </li>
<?php
}
?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Détails</h5>
            <div class="card-body">
                <form action="/categories/<?= $currentC->getId() ?>" method="post" class="form-horizontal">
                    <div class="form-outline">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" value="<?= $currentC->getName() ?>" />
                        <label for="name" class="form-label">Nom</label>
                    </div>
                    <?php if (isset($violations['name'])): ?>
                        <?php foreach ($violations['name'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <div class="form-outline my-4">
                        <textarea name="description" rows="3" id="description" class="form-control form-control-lg"><?= $currentC->getDescription() ?></textarea>
                        <label for="description" class="form-label">Description</label>
                    </div>
                    <div class="my-4">
                        <select name="parent" id="parent" class="select" data-filter="true">
                            <option value=""<?= !is_object($currentC->getParent()) ? ' selected' : '' ?>>Aucune</option>
                            <?php foreach ($categories as $category) : ?>
                                <?php if ($category->getId() != $currentC->getId() && !in_array($category, $currentC->getChildren()->toArray())) : ?>
                                <optgroup label="<?= $category->getName() ?>">
                                    <option value="<?= $category->getId() ?>"<?= is_object($currentC->getParent()) && $currentC->getParent()->getId() == $category->getId() ? ' selected' : '' ?>><?= $category->getName() ?></option>
                                    <?php if ($children = $category->getChildren()) : ?>
                                        <?php foreach ($children as $child) : ?>
                                            <?php if ($child->getId() != $currentC->getId()) : ?>
                                            <option value="<?= $child->getId() ?>"><?= $child->getName() ?></option>
                                            <?php endif ?>
                                        <?php endforeach ?>
                                    <?php endif ?>
                                </optgroup>
                                <?php endif ?>
                            <?php endforeach ?>
                        </select>
                        <label for="parent" class="form-label select-label">Catégorie parent</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    <h5>Ajoutées Récemment</h5>
        <ul id="latest">
        <?php
        foreach ($latestCategories as $category) {
            displayCategories($category);
        }
        ?>
        </ul>
    </div>
</div>

<?php $view['slots']->start('stylesheets') ?>
<link rel="stylesheet" href="/assets/category-tree.css">
<?php $view['slots']->stop() ?>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/category-tree.js"></script>
<?php $view['slots']->stop() ?>
