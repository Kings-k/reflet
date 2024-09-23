<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/entries/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle entrée') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Provenance</th>
                            <th scope="col">Motif</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($entrieslist as $key => $entry) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/entries/<?= $entry->getId() ?>"><?= $entry->getAmount() ?> $</a></td>
                                <td><?= $entry->getProvenance() ?></td>
                                <td><?= $entry->getMotif() ?></td>
                                <td><?= $entry->getDoneAt()->format('d-m-Y') ?></td>
                                <td><a href="/entries/<?= $entry->getId() ?>/delete"><i class="feather icon-trash text-danger"></i></a></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>