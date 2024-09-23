<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/guichets/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter guichet') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body datatable">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Point de vente</th>
                            <th scope="col">Type de vente</th>
                            <th scope="col">Date d'ajout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($guichetslist as $key => $guichet) : ?>
                            <tr>
                                <td><?= $key + 1 ?></td>
                                <td><a href="/guichets/<?= $guichet->getId() ?>"><?= $guichet->getNomGuichet() ?></a></td>
                                <td><?= $guichet->getPos()->getName() ?></td>
                                <td><?= $guichet->getTypevente() ?></td>
                                <td><?= $guichet->getCreatedAt()->format('d/m/Y') ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>