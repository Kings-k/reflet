<?php $view->extend('layout.html.php') ?>
<?php $totalGeneral = 0 ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card shadow-sm my-2">
            <div class="card-body datatable">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Article</th>
                            <th scope="col" class="text-center">Qté disponible</th>
                            <th scope="col" class="text-center">Prix unitaire</th>
                            <th scope="col" class="text-center">Prix total</th>
                            <?php if ($view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_FINANCE')) : ?>
                            <th scope="col">Dépôt</th>
                            <?php endif ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($stocks as $idx => $stock) : ?>
                            <?php if ($stock['quantity'] > 0) : ?>
                            <?php $total = $stock['quantity'] * $stock['unitPrice'] ?>
                            <tr>
                                <td><?= $idx + 1 ?></td>
                                <td><?= $stock['article'] ?></td>
                                <td class="text-center"><?= $stock['quantity'].' '.($stock['uomSymbol'] ?? $stock['uomName'].(!is_null($stock['uomName']) && $stock['quantity'] > 1 ? 's' : '')) ?></td>
                                <td class="text-center"><?= $stock['unitPrice'] ?></td>
                                <td class="text-center"><?= $total ?></td>
                                <?php if ($view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                                <td><?= $stock['storeName'].' ('.$stock['typeDepot'].')' ?></td>
                                <?php endif ?>
                                <?php $totalGeneral += $total ?>
                            </tr>
                            <?php endif ?>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="total-general" data-total-general="<?= $totalGeneral ?>" hidden></div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script>
    const totalElt = document.createElement('div');
    const total = Number.parseFloat(document.querySelector('#total-general').dataset.totalGeneral);

    totalElt.style.flexGrow = '1';
    totalElt.style.marginLeft = '1.5em';
    totalElt.textContent = `Total général : ${total.toFixed(2)} $`;

    document.querySelector('.datatable-pagination').prepend(totalElt);
    document.querySelector('.datatable-pagination').style.justifyContent = 'space-between';
</script>
<?= $view['slots']->stop() ?>
