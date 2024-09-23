<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/facturesclient/new') ?>
<?= $view['slots']->set('action_text', 'Filtrer') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client</th>
                            <th scope="col">Nb Factures</th>
                            <th scope="col">Cash</th>
                            <th scope="col">Dettes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($latestClients as $key => $client) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/facturesclients/<?= $client->getId() ?>"><?= $client->getNomClient() ?></a></td>
                                <td><?= count($client->getFactures()) ?></td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>