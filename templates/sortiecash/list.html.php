<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/sortiecash/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle Sortie') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Date</th>
                            <th scope="col">Motif</th>
                            <th scope="col">Compte</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($latestSortiesCash as $key => $sortie) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/sortiecash/<?= $sortie['id'] ?>"><?= $sortie['montant'] ?> $</a></td>
                                <td><?= $sortie['createdAt']->format('d-m-Y') ?></td>
                                <td><?= $sortie['motif'] ?></td>
                                <td><?= $sortie['compte'] ?></td>
                                <td><a href="/sortiecash/<?= $sortie['id'] ?>/delete"><i class="feather icon-trash text-danger"></i></a></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/js/pages/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>