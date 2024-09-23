<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Ajouter un nouveau taux</h5>
            <div class="card-body">
                <form action="/taux/new" method="post">
                    <div class="form-outline my-4">
                        <input type="number" step="0.01" name="tauxChange" id="tauxChange" class="form-control form-control-lg">
                        <label class="form-label" for="tauxChange">Nouveau taux</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>Taux</th>
                    <th>Du</th>
                    <th>Au</th>
                </tr>
            </thead>
            <tbody>

                <?php foreach ($latestTaux as $taux) : ?>
                    <tr>
                        <td><a href="/taux/<?= $taux->getId() ?>"></a><?= $taux->getTauxChange() ?></td>
                        <td><?= $taux->getDu()->format('d-m-Y') ?></td>
                        <td><?= $taux->getAu() != null ? $taux->getAu()->format('d-m-Y') : '00-00-0000' ?></td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>
