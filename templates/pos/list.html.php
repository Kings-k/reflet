<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/pos/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter point de vente') ?>

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
                            <th scope="col">Ajouté par</th>
                            <th scope="col">Bonus</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($poslist as $key => $pos) : ?>
                        <tr>
                            <td><?= $key+1 ?></td>
                            <td><a href="/pos/<?= $pos->getId() ?>"><?= $pos->getName() ?></a></td>
                            <td><?= $pos->getType() == 1 ? 'Groupe' : 'Catégorie' ?></td>
                            <td><?= $pos->getCreatedAt()->format('d/m/Y') ?></td>
                            <td><?= $pos->getUser()->getFullName() ?? $pos->getUser()->getUsername() ?></td>
                            <td class="text-center"><?= $pos->getNbSalesBonus() ? '>= '.$pos->getNbSalesBonus().' élts' : '-' ?></td>
                            <td><a href="#" data-delete="/pos/<?= $pos->getId() ?>"><i class="far fa-trash-alt text-danger"></i></a></td>
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
