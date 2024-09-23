<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Ajouter un compte</h5>
            <div class="card-body">
                <form action="/plancomptes/new" method="post">
                    <div class="form-group my-2">
                        <label for="name">Nom</label>
                        <input type="text" name="compte" id="compte" class="form-control" required />
                        <input type="hidden" name="dispo" id="dispo" class="form-control" value="1" />
                    </div>
                    <div class="form-group my-2">
                        <label for="typeCompte">Type</label>
                        <select name="typeCompte" rows="3" id="typeCompte" class="form-control">
                            <option>Sélectionnez un type</option>
                            <option value="1">Compte Bilan (Compte Banque, Caisse) </option>
                            <option value="2">Compte de Gestion (Autres Charges) </option>
                            <option value="3">Achat Marchandises (Approvisionnement) </option>
                        </select>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <div class="list-group">
            <?php foreach ($latestPlancomptes as $compte) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/plancomptes/<?= $compte->getId() ?>">
                    <span><?= $compte->getCompte() ?></span>
                    <span class="badge bg-secondary text-white rounded-pill d-flex align-items-center">
                    <?php
                    switch ($compte->getTypeCompte()):
                        case 1:
                            echo 'Bilan';
                            break;
                        case 2:
                            echo 'Gestion';
                            break;
                        case 3:
                            echo 'Approvisionnement';
                            break;
                    endswitch
                    ?>
                    </span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>
