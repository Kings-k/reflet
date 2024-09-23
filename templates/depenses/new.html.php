<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouvelle Dépense</h5>
            <div class="card-body">
                <form action="/depenses/new" method="post">
                    <div class="form-outline my-4">
                        <input type="number" name="amount" id="amount" class="form-control form-control-lg" min="0" step="0.00001" required autofocus />
                        <label class="form-label" for="amount">Montant</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="motif" id="motif" class="form-control form-control-lg" />
                        <label class="form-label" for="motif">Motif</label>
                    </div>
                    <div class="form-group my-4">
                        <select name="type_depense" id="type_depense" class="select" data-filter="true">
                            <?php foreach ($typesSortie as $type) : ?>
                                <option value="<?= $type->getId() ?>"> <?= $type->getCompte() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="type_depense">Type</label>
                    </div>
                    <input class="btn btn-primary float-right mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment faites</h5>
        <div class="list-group">
            <?php foreach ($latestDepenses as $depense) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/plancomptes/<?= $depense->getId() ?>">
                    <span class="badge bg-secondary text-white rounded-pill d-flex align-items-center">
                        <?php
                        switch ($depense->getTypeDepense()):
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
