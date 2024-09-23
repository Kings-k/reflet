<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/depenses/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle dépense') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Motif</th>
                            <th scope="col">Validée</th>
                            <th scope="col">User</th>
                            <th scope="col">Guichet</th>
                            <th scope="col">Pos</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($depenseslist as $key => $depense) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/depenses/<?= $depense->getId() ?>"><?= $depense->getAmount() ?></a></td>
                                <td><a href="/depenses/<?= $depense->getId() ?>"><?= $depense->getMotif() ?></a></td>
                                <td><?= $depense->getIsvalidate() ?></td>
                                <td><?= $depense->getUser() ?></td>
                                <td></td>
                                <td></td>
                                <td><?= $depense->getDoneAt()->format('d-m-Y') ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>