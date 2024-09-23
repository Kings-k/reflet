<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/uom/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter unité de mesure') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card shadow border">
            <div class="card-body datatable">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Symbole</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($unitsofmeasure as $key => $uom) : ?>
                        <tr>
                            <td><?= $key+1 ?></td>
                            <td><a href="/uom/<?= $uom->getId() ?>"><?= $uom->getName() ?></a></td>
                            <td><?= $uom->getSymbol() ?></td>
                            <td><a href="#" data-delete="/uom/<?= $uom->getId() ?>"><i class="far fa-trash-alt text-danger"></i></a></td>
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
