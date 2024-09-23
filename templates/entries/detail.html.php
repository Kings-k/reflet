<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Effectuer une entrée</h5>
            <div class="card-body">
                <form action="/entries/<?= $currentE->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="number" name="amount" id="amount" class="form-control form-control-lg" placeholder="Montant en $" value="<?= $currentE->getAmount() ?>" required autofocus />
                        <label class="form-label" for="amount">Montant</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="provenance" id="provenance" class="form-control form-control-lg" value="<?= $currentE->getProvenance() ?>" />
                        <label class="form-label" for="provenance">Provenance</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="motif" id="motif" class="form-control form-control-lg" value="<?= $currentE->getMotif() ?>" />
                        <label class="form-label" for="motif">Motif</label>
                    </div>
                    <button class="btn btn-primary float-right my-2 mr-0">Modifier</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment effectuées</h5>
        <div class="list-group">
            <?php foreach ($latestEntries as $entry) : ?>
                <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/entries/<?= $entry->getId() ?>">
                    <span><?= $entry->getAmount() ?> $</span>
                    <span><?= $entry->getDoneAt()->format('d-m-Y') ?></span>
                </a>
            <?php endforeach ?>
        </div>
    </div>
</div>