<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/comptecourant/new') ?>
<?= $view['slots']->set('action_text', 'Filtrer') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Noms</th>
                            <th scope="col">Sexe</th>
                            <th scope="col">Etat Civil</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Personne Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($latestClients as $key => $client) : ?>
                            <tr>
                                <th scope="row"><?= $key + 1 ?></th>
                                <td><a href="/comptecourant/<?= $client->getId() ?>"><?= $client->getNomClient() ?></a></td>
                                <td><a href="/comptecourant/<?= $client->getId() ?>"><?= $client->getSexe() ?></a></td>
                                <td><?= $client->getEtatCivil() ?></td>
                                <td><?= $client->getTelephone() ?></td>
                                <td><?= $client->getMail() ?></td>
                                <td><?= $client->getadressePhys() ?></td>
                                <td><?= $client->getPersonneContact() ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>