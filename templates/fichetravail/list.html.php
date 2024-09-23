<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/fichetravail/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle Fiche') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body datatable">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Numero Fiche</th>
                            <th scope="col">Vehicule</th>
                            <th scope="col">Proprietaire</th>
                            <th scope="col">Creee le</th>
                            <th scope="col">Responsable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($fichetravaillist as  $key => $fiche) : ?>
                            <tr>
                                <td><a href="/fichedetravail/items/<?= $fiche->getId() ?>" class="text text-primary fas fa-folder-open"></a> &nbsp; <a href="/fichedetravail/<?= $fiche->getId() ?>" class="text text-info fas fa-eye"></a></td>
                                <td><?= $fiche->getVehicule()->getNumeroImmatriculation()." (".$fiche->getVehicule()->getGenre()." )" ?></td>
                                <td><?= $fiche->getVehicule()->getClient()->getNomClient() ?></td>
                                <td><?= $fiche->getCreatedAt()->format('d-m-Y')  ?></td>
                                <td><?php if($fiche->getResponsable()){$fiche->getResponsable()->getUserName();}else{}  ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
