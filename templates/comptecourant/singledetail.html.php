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
            <h5 class="card-header">Compte Courant Client <?= $datasent['client']->getNomClient() ?></h5>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th colspan="3">CREDIT</th>
                            <th colspan="3">PAIEMENT</th>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <th>Facture</th>
                            <th>Montant</th>
                            <th>Date</th>
                            <th>Facture</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="2">Sous Total</th>
                            <th></th>
                            <th colspan="2">Sous Total</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th colspan="5">Solde</th>
                            <th>0</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>