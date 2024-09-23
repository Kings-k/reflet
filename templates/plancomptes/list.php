<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/plancomptes/new') ?>
<?= $view['slots']->set('action_text', 'Nouveau Compte') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Compte</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($plancompteslist as $key => $compte) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/plancomptes/<?= $compte->getId() ?>"><?= $compte->getCompte() ?></a></td>
                                <td><a href="/plancomptes/<?= $compte->getId() ?>"><?= $compte->getTypeCompte() == 1 ? 'Bilan' : ($compte->getTypeCompte() == 2 ? 'Gestion' : 'Approvisionnement')  ?></a></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>