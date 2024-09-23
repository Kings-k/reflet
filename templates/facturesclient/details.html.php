<?php $view->extend('layout.html.php') ?>

<div class="card">
    <div class="card-header">Facture N° <?= $facture->getId() ?></div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Article / Service</td>
                    <td>Qté</td>
                    <td>Prix unitaire</td>
                    <td>Prix total</td>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($histories as $key => $history) : ?>
                    <tr>
                        <td><?= $key+1 ?></td>
                        <td><?= $history->getService()->getName() ?></td>
                        <td><?= abs($history->getQuantity()) ?></td>
                        <td><?= $history->getPrice() ?></td>
                        <td><?= abs($history->getQuantity() * $history->getPrice()) ?></td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>

