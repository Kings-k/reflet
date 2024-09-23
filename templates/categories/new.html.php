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
            <h5 class="card-header">Ajouter une nouvelle catégorie</h5>
            <div class="card-body">
                <form action="/categories/new" method="post">
                    <div class="form-outline">
                        <input type="text" name="name" id="name" class="form-control form-control-lg" required />
                        <label for="name" class="form-label">Nom</label>
                    </div>
                    <?php if (isset($violations['name'])): ?>
                        <?php foreach ($violations['name'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <div class="form-outline my-4">
                        <textarea name="description" rows="3" id="description" class="form-control form-control-lg"></textarea>
                        <label for="description" class="form-label">Description</label>
                    </div>
                    <div class="flex-grow-1 my-4">
                        <select name="parent" id="parent" class="select" data-filter="true">
                            <option value="" selected>Aucune</option>
                            <?php foreach ($categories as $category) : ?>
                            <optgroup label="<?= $category->getName() ?>">
                                <option value="<?= $category->getId() ?>"><?= $category->getName() ?></option>
                                <?php if ($children = $category->getChildren()) : ?>
                                    <?php foreach ($children as $child) : ?>
                                        <option value="<?= $child->getId() ?>"><?= $child->getName() ?></option>
                                    <?php endforeach ?>
                                <?php endif ?>
                            </optgroup>
                            <?php endforeach ?>
                        </select>
                        <label for="parent" class="form-label select-label">Catégorie parent</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
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
