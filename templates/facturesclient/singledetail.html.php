<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>
<div class="row">
    <div class="col-md-12">
        <div class="card shadow">
            <h5 class="card-header">Factures pour client <?= $datasent['client']->getNomClient() ?></h5>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Facture</th>
                            <th>Type</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($datasent['facturesclient'] as $facture) : ?>
                        <tr>
                            <td><?= $facture->getDateFact()->format('d-M-Y') ?></td>
                            <td><a href="/factures/<?= $facture->getId() ?>">000<?= $facture->getId() ?></a></td>
                            <td><?= $facture->getTypeFacture() ?></td>
                            <td><?= $facture->getTotal() ?> $</td>
                        </tr>
                        <?php endforeach ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">TOTAL GENERAL</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>