<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div id="selected-from" hidden><?= json_encode($from) ?></div>
        <div id="selected-to" hidden><?= json_encode($to) ?></div>
        <div id="selected-depot" hidden><?= json_encode($selectedDepot) ?></div>
        <div id="selected-stock-manager" hidden><?= json_encode($selectedStockManager) ?></div>
        <div id="is-super" hidden><?= $view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_FINANCE') ?></div>
        <div id="stock-dispo" hidden><?= json_encode($procurements) ?></div>
        <div class="card">
            <div class="card-body">
                <form action="/stock/approvisionnements" method="POST" class="d-flex justify-content-between">
                    <div class="form-outline datepicker shadow-sm flex-grow-1 mr-2" data-format="dd mmm yyyy">
                        <input type="text" max="<?= (new DateTime())->format('Y-m-d') ?>" value="<?= $from ?? '' ?>" name="start-date" id="start-date" class="form-control">
                        <label class="form-label" for="start-date">Du</label>
                    </div>
                    <div class="form-outline datepicker shadow-sm flex-grow-1 mr-2" data-format="dd mmm yyyy">
                        <input type="text" value="<?= $to ?? '' ?>" name="end-date" id="end-date" class="form-control">
                        <label class="form-label" for="end-date">Au</label>
                    </div>
                    <div class="shadow-sm flex-grow-1 mr-2">
                        <select name="depot" id="depot" class="select" data-filter="<?= count($depots) > 1 ? 'true' : 'false' ?>">
                            <?php if (count($depots) > 1) : ?>
                                <option value="<?= $selectedDepot !== null ? $selectedDepot['id'] : null ?>"<?= $selectedDepot !== null ? '' : 'disabled' ?> selected><?= $selectedDepot !== null ? $selectedDepot['name'] : 'Sélectionner Dépôt' ?></option>
                                <?php foreach ($depots as $depot) : ?>
                                    <?php if ($selectedDepot === null || ($selectedDepot !== null && $selectedDepot['id'] !== $depot['id'])) : ?>
                                    <option value="<?= $depot['id'] ?>"><?= $depot['name'] ?></option>
                                    <?php endif ?>
                                <?php endforeach ?>
                            <?php elseif (count($depots) === 1) : ?>
                                <option value="<?= $depots[0]['id'] ?>" selected><?= $depots[0]['name'] ?></option>
                            <?php endif ?>
                        </select>
                        <label class="form-label select-label" for="depot">Dépôt</label>
                    </div>
                    <div class="shadow-sm flex-grow-1 mr-2">
                        <select name="stock-manager" id="stock-manager" class="select" data-filter="<?= count($stockManagers) > 1 ? 'true' : 'false' ?>">
                            <?php if (count($stockManagers) > 1) : ?>
                                <option value="<?= $selectedStockManager !== null ? $selectedStockManager['id'] : null ?>"<?= $selectedStockManager !== null ? '' : 'disabled' ?> selected><?= $selectedStockManager !== null ? $selectedStockManager['username'] : 'Sélectionner Gestock' ?></option>
                                <?php foreach ($stockManagers as $stockManager) : ?>
                                    <?php if ($selectedStockManager === null || ($selectedStockManager !== null && $selectedStockManager['id'] !== $stockManager['id'])) : ?>
                                    <option value="<?= $stockManager['id'] ?>"><?= $stockManager['username'] ?></option>
                                    <?php endif ?>
                                <?php endforeach ?>
                            <?php elseif (count($stockManagers) === 1) : ?>
                                <option value="<?= $stockManagers[0]['id'] ?>" selected><?= $stockManagers[0]['username'] ?></option>
                            <?php endif ?>
                        </select>
                        <label class="form-label select-label" for="stock-manager">Gestionnaire de stock</label>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-eye"></i></button>
                </form>
            </div>
        </div>
        <div class="card shadow-sm my-2">
            <div class="card-body datatable">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Article</th>
                            <th scope="col">Date d'appro.</th>
                            <th scope="col" class="text-center">Qté entrée</th>
                            <th scope="col" class="text-center">Qté disponible</th>
                            <th scope="col" class="text-center">Prix d'achat</th>
                            <th scope="col">Péremption</th>
                            <?php if ($view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_FINANCE')) : ?>
                            <th scope="col">Dépôt</th>
                            <th scope="col">Gestionnaire</th>
                            <?php endif ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($procurements as $idx => $procurement) : ?>
                            <?php if ($procurement['quantity'] > 0) : ?>
                            <tr>
                                <td><?= $idx + 1 ?></td>
                                <td><?= $procurement['article'] ?></td>
                                <td><?= $procurement['createdAt']->format('d M Y') ?></td>
                                <td class="text-center"><?= $procurement['quantity'].' '.($procurement['uomSymbol'] ?? $procurement['uomName'].(!is_null($procurement['uomName']) && $procurement['quantity'] > 1 ? 's' : '')) ?></td>
                                <td class="text-center"><?= $procurement['depotDetailQuantity'].' '.($procurement['uomSymbol'] ?? $procurement['uomName'].($procurement['depotDetailQuantity'] > 1 ? 's' : '')) ?></td>
                                <td class="text-center"><?= $procurement['price'] ?></td>
                                <td><?= $procurement['expirationDate'] ? $procurement['expirationDate']->format('d M Y') : '-' ?></td>
                                <?php if ($view['security']->isGranted('ROLE_GESTSTOCK') || $view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                                <td><?= $procurement['storeName'] ?></td>
                                <td><?= $procurement['stockManager'] ?></td>
                                <?php endif ?>
                            </tr>
                            <?php endif ?>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary float-right" id="print"><i class="fa fa-print mr-2"></i>Imprimer</button>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/print.js" defer></script>
<script src="/assets/approvisionnements.js" defer></script>
<?= $view['slots']->stop() ?>
