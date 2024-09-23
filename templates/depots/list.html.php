<?php $view->extend('layout.html.php') ?>

<?php if ($view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_FINANCE')) : ?>
    <?= $view['slots']->set('action_path', '/depots/new') ?>
    <?= $view['slots']->set('action_text', 'Ajouter dépôt') ?>
<?php endif ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body datatable">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Type</th>
                            <th scope="col">Date de création</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($depotslist as $key => $depot) : ?>
                        <tr>
                            <td><?= $key+1 ?></td>
                            <td><a href="/depots/<?= $depot->getId() ?>"><?= $depot->getName() ?></a></td>
                            <td><?= $depot->getType() == 1 ? 'Groupe' : 'Catégorie' ?></td>
                            <td><?= $depot->getCreatedAt()->format('d/m/Y') ?></td>
                            <td><a href="#" data-delete="/depots/<?= $depot->getId() ?>"><i class="far fa-trash-alt text-danger"></i></a></td>
                        </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
