<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/categorieclient/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle catégorie') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body datatable">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Reduction applicable</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($categoriesclientslist as $key => $categ) : ?>
                            <tr>
                                <td><?= $key + 1 ?></td>
                                <td><a href="/categorieclient/<?= $categ->getId() ?>"><?= $categ->getName() ?></a></td>
                                <td><?= $categ->isDiscountApplicable() ? 'Oui' : 'Non' ?></td>
                                <td><a href="#" data-delete="/categorieclient/<?= $categ->getId() ?>"><i class="far fa-trash-alt text-danger"></i></a></td>
                            </tr>
                            <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script type="text/javascript" src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
