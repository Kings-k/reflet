<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Effectuer une Sortie</h5>
            <div class="card-body">
                <form action="/sortiecash/new" method="post">
                    <div class="form-outline my-4">
                        <input type="number" name="montant" id="montant" class="form-control form-control-lg" placeholder="Montant en $" required autofocus />
                        <label class="form-label" for="montant">Montant</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="piece" id="piece" class="form-control form-control-lg" />
                        <label class="form-label" for="piece">Pièce Justificative</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="motif" id="motif" class="form-control form-control-lg" />
                        <label class="form-label" for="type">Motif</label>
                    </div>
                    <div class="mt-2 mb-4">
                        <select name="typesortie" id="typesorite" class="select" data-filter="true">
                            <?php foreach ($typesSortie as $type) : ?>
                                <option value="<?= $type->getId() ?>"> <?= $type->getCompte() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="typesortie">Type</label>
                    </div>
                    <button class="btn btn-primary float-right my-2 mr-0">Ajouter</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment effectuées</h5>
        <div class="list-group">
            <?php foreach ($latestSorties as $sort) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/sortiecash/<?= $sort['id'] ?>">
                    <span><?= $sort['montant'] ?> $</span>
                    <span><?= $sort['createdAt']->format('d-m-Y') ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>