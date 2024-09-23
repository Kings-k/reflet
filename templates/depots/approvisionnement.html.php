<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
    <link rel="stylesheet" href="/assets/styles/new-approvisionnement.css">
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-6 mb-4">
        <div class="card shadow">
            <div class="card-header">
                <h5>Approvisionnement <?= $view['security']->isGranted('ROLE_GESTSTOCK') ? 'Dépôt' : 'Point de vente' ?></h5>
            </div>
            <div class="card-body">
                <form action="/depots/approvisionnement" method="post">
                    <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                    <div class="my-4">
                        <select name="depot" id="depot" class="select" data-filter="true">
                            <?php foreach ($depots as $depot) : ?>
                            <option value="<?= $depot['typeDepot'].'-'.$depot['id'] ?>"><?= $depot['name'].' ('.$depot['typeDepot'].')' ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="depot">Dépôt à approvisionner</label>
                    </div>
                    <?php endif ?>
                    <div class="form-outline">
                        <input type="text" name="service" id="service" class="form-control form-control-lg" required>
                        <label class="form-label" for="service">Article</label>
                    </div>
                    <div id="service-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                    <div class="dropdown w-100 mt-0">
                        <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="service-dropdown"></ul>
                    </div>
                    <div class="d-flex justify-content-between w-100 mt-4">
                        <div class="form-outline mb-4 flex-grow-1">
                            <input type="number" min="1" name="quantity" id="quantity" class="form-control form-control-lg" required>
                            <label class="form-label" for="quantity">Quantité entrée</label>
                        </div>
                        <div class="form-outline mb-4 ml-3 flex-grow-1">
                            <input type="number" min="0" step="0.00001" name="unitPrice" id="unitPrice" class="form-control form-control-lg" required>
                            <label class="form-label" for="unitPrice">Prix unitaire d'achat</label>
                        </div>
                    </div>
                    <div class="form-outline mb-4 datepicker" data-format="dd mmm yyyy">
                        <input type="text" min="<?= (new DateTime('tomorrow'))->format('Y-m-d') ?>" name="expirationDate" id="expirationDate" class="form-control form-control-lg">
                        <label class="form-label" for="expirationDate">Date de péremption</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" name="codeBar" id="codeBar" class="form-control form-control-lg">
                        <label class="form-label" for="codeBar">Code bar</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Enregistrer stock">
                    <button type="button" class="btn float-right my-2 mr-2" id="cancelBtn">Effacer</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <h5>Historique de réception <?= $view['security']->isGranted('ROLE_GESTSTOCK') ? 'Dépôt' : 'Point de vente' ?></h5>
        <small>Les informations sur les stocks réçus et encore disponibles</small>
        <div class="table-responsive mt-2" style="height: 50vh !important;">
            <table class="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">Article</th>
                        <th scope="col" class="text-center">Entrée</th>
                        <th scope="col" class="text-center">Dispo</th>
                        <th scope="col" class="text-center">Prix</th>
                        <th scope="col">Péremption</th>
                        <th scope="col"><?= $view['security']->isGranted('ROLE_GESTSTOCK') ? 'Dépôt' : 'Provenance' ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($stockDispo as $stock) : ?>
                        <?php if ($stock['quantity'] > 0) : ?>
                        <tr>
                            <td><?= $stock['article'] ?></td>
                            <td class="text-center"><?= $stock['quantity'].' '.($stock['uomSymbol'] ?? $stock['uomName'].($stock['quantity'] > 1 ? 's' : '')) ?></td>
                            <td class="text-center"><?= $stock['depotDetailQuantity'].' '.($stock['uomSymbol'] ?? $stock['uomName'].($stock['depotDetailQuantity'] > 1 ? 's' : '')) ?></td>
                            <td class="text-center"><?= $stock['price'] ?></td>
                            <td><?= $stock['expirationDate'] ? $stock['expirationDate']->format('d/m/Y') : '-' ?></td>
                            <td><?= $view['security']->isGranted('ROLE_GESTSTOCK') ? $stock['storeName'] : ($stock['fullName'] ?? $stock['username']) ?></td>
                        </tr>
                        <?php endif ?>
                    <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
<script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/new-approvisionnement.js"></script>
<?php $view['slots']->stop() ?>
