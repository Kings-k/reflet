<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/maison/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter une Maison') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Maison</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">RCCM</th>
                            <th scope="col">Num Impot</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Site</th>
                            <th scope="col">Logos</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($maisonlist as $key => $maison) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/maisons/<?= $maison->getId() ?>"><?= $maison->getNomSociete() ?></a></td>
                                <td><a href="/maisons/<?= $maison->getId() ?>"><?= $maison->getAdressePhysique() ?></a></td>
                                <td><?= $maison->getRegistreCommerce() ?></td>
                                <td><?= $maison->getNumImpot() ?></td>
                                <td><?= $maison->getMail() ?></td>
                                <td><?= $maison->getTelephone() ?></td>
                                <td><?= $maison->getSite() ?></td>
                                <td>
                                    <?php if ($maison->getLogo()) : ?>
                                        <img class="icon-image rounded-circle w-50" src="/uploads/logos/<?= $maison->getLogo() ?>" alt="">
                                    <?php endif ?>
                                </td>
                                <td><a href="#" data-delete="/maisons/<?= $maison->getId() ?>"><i class="feather icon-trash text-danger"></i></a> <a href="/maisons/<?= $maison->getId() ?>"><i class="fas fa-edit text-primary"></i></a></td>
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