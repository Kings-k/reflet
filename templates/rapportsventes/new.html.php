<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<?= $view['slots']->set('action_path', '/rapportventes') ?>
<?= $view['slots']->set('action_text', 'Réinitialiser') ?>
<?= $view['slots']->set('action_icon', 'undo') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div id="selected-from" hidden><?= json_encode($from) ?></div>
        <div id="selected-to" hidden><?= json_encode($to) ?></div>
        <div id="selected-pos" hidden><?= json_encode($selectedPos) ?></div>
        <div id="selected-guichet" hidden><?= json_encode($selectedGuichet) ?></div>
        <div id="selected-client" hidden><?= json_encode($selectedClient) ?></div>
        <div id="sales" hidden><?= json_encode($sales) ?></div>
        <div class="card">
            <div class="card-body">
                <form action="/rapportventes" method="POST" class="d-flex justify-content-between">
                    <div class="form-outline datepicker shadow-sm flex-grow-1 mr-2" data-format="dd mmm yyyy">
                        <input type="text" max="<?= (new DateTime())->format('Y-m-d') ?>" value="<?= $from ?? '' ?>" name="start-date" id="start-date" class="form-control">
                        <label class="form-label" for="start-date">Du</label>
                    </div>
                    <div class="form-outline datepicker shadow-sm flex-grow-1 mr-2" data-format="dd mmm yyyy">
                        <input type="text" value="<?= $to ?? '' ?>" name="end-date" id="end-date" class="form-control">
                        <label class="form-label" for="end-date">Au</label>
                    </div>
                    <div class="shadow-sm flex-grow-1 mr-2">
                        <select name="pos" id="pos" class="select" data-filter="<?= count($pointsOfSale) > 1 ? 'true' : 'false' ?>">
                            <?php if (count($pointsOfSale) > 1) : ?>
                                <option value="<?= $selectedPos !== null ? $selectedPos['id'] : null ?>"<?= $selectedPos !== null ? '' : 'disabled' ?> selected><?= $selectedPos !== null ? $selectedPos['name'] : 'Sélectionner POS' ?></option>
                                <?php foreach ($pointsOfSale as $pos) : ?>
                                    <?php if ($selectedPos === null || ($selectedPos !== null && $selectedPos['id'] !== $pos['id'])) : ?>
                                    <option value="<?= $pos['id'] ?>"><?= $pos['name'] ?></option>
                                    <?php endif ?>
                                <?php endforeach ?>
                            <?php elseif (count($pointsOfSale) === 1) : ?>
                                <option value="<?= $pointsOfSale[0]['id'] ?>" selected><?= $pointsOfSale[0]['name'] ?></option>
                            <?php endif ?>
                        </select>
                        <label class="form-label select-label" for="pos">POS</label>
                    </div>
                    <div class="shadow-sm flex-grow-1 mr-2">
                        <select name="guichet" id="guichet" class="select" data-filter="<?= count($guichets) > 1 ? 'true' : 'false' ?>">
                            <?php if (count($guichets) > 1) : ?>
                                <option value="<?= $selectedGuichet !== null ? $selectedGuichet['id'] : null ?>"<?= $selectedGuichet !== null ? '' : 'disabled' ?> selected><?= $selectedGuichet !== null ? $selectedGuichet['nomGuichet'] : 'Sélectionner guichet' ?></option>
                                <?php foreach ($guichets as $guichet) : ?>
                                    <?php if ($selectedGuichet === null || ($selectedGuichet !== null && $selectedGuichet['id'] !== $guichet['id'])) : ?>
                                    <option value="<?= $guichet['id'] ?>" data-pos="<?= $guichet['posId'] ?>"><?= $guichet['nomGuichet'] ?></option>
                                    <?php endif ?>
                                <?php endforeach ?>
                            <?php elseif (count($guichets) === 1) : ?>
                                <option value="<?= $guichets[0]['id'] ?>" selected><?= $guichets[0]['nomGuichet'] ?></option>
                            <?php endif ?>
                        </select>
                        <label class="form-label select-label" for="guichet">Guichet</label>
                    </div>
                    <div class="shadow-sm flex-grow-1 mr-2">
                        <select name="client" id="client" class="select" data-filter="<?= count($clients) > 1 ? 'true' : 'false' ?>">
                            <?php if (count($clients) > 1) : ?>
                                <option value="<?= $selectedClient !== null ? $selectedClient['id'] : null ?>"<?= $selectedClient !== null ? '' : 'disabled' ?> selected><?= $selectedClient !== null ? $selectedClient['nomClient'] : 'Sélectionner client' ?></option>
                                <?php foreach ($clients as $client) : ?>
                                    <?php if ($selectedClient === null || ($selectedClient !== null && $selectedClient['id'] !== $client['id'])) : ?>
                                    <option value="<?= $client['id'] ?>"><?= $client['nomClient'] ?></option>
                                    <?php endif ?>
                                <?php endforeach ?>
                            <?php elseif (count($clients) === 1) : ?>
                                <option value="<?= $clients[0]['id'] ?>" selected><?= $clients[0]['nomClient'] ?></option>
                            <?php endif ?>
                        </select>
                        <label class="form-label select-label" for="client">Client</label>
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
                            <th scope="col">Date</th>
                            <th scope="col">Service/Article</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Total</th>
                            <th scope="col">Type vente</th>
                            <th scope="col">Client</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($sales as $key => $sale) : ?>
                        <tr>
                            <td><?= $key + 1 ?></td>
                            <td><?= $sale['createdAt']->format('d M Y') ?></td>
                            <td><?= $sale['serviceName'] ?></td>
                            <td><?= abs($sale['quantity']) ?></td>
                            <td><?= round(abs($sale['quantity'] * $sale['price']), 2) ?></td>
                            <td><?= $sale['typeFacture'] ?></td>
                            <td><?= $sale['nomClient'] ?></td>
                        </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary border border-primary float-right" id="print"><i class="fa fa-print mr-2"></i>Imprimer</button>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/print.js" defer></script>
<script src="/assets/salesreport.js" defer></script>
<?= $view['slots']->stop() ?>
