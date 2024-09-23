<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->start('stylesheets') ?>
<style>
    .card-body > form > div {
        margin-right: 1em;
    }
</style>
<?= $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <form action="/rapportscloture/filtre" method="POST" class="d-flex justify-content-between">
                    <div class="form-outline datepicker shadow-sm" data-format="dd mmm yyyy">
                        <input type="text" max="<?= (new DateTime())->format('Y-m-d') ?>" name="datedebut" id="datedebut" class="form-control">
                        <label class="form-label" for="datedebut">Du</label>
                    </div>
                    <div class="form-outline datepicker shadow-sm" data-format="dd mmm yyyy">
                        <input type="text" name="datefin" id="datefin" class="form-control">
                        <label class="form-label" for="datefin">Au</label>
                    </div>
                    <div class="shadow-sm">
                        <select name="pos" id="pos" class="select" data-filter="true">
                            <option disabled selected value="0">Sélectionner POS</option>
                            <?php foreach ($listpos as $pos) : ?>
                            <option value="<?= $pos->getId() ?>"><?= $pos->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="pos">POS</label>
                    </div>
                    <div class="shadow-sm">
                        <select name="guichet" id="guichet" class="select" data-filter="true">
                            <option disabled selected value="0">Sélectionner guichet</option>
                            <?php foreach ($listguichets as $guichet) : ?>
                            <option value="<?= $guichet['id'] ?>"><?= $guichet['nom_guichet'] ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="guichet">Guichet</label>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-eye"></i></button>
                </form>
            </div>
        </div>
        <div class="card shadow-sm mt-2">
            <div class="card-body datatable">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Guichetier</th>
                            <th scope="col">Montant du</th>
                            <th scope="col">Montant verse</th>
                            <th scope="col">Solde</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php 
                        if($cloturesSent!=null){
                            foreach ($cloturesSent as $key => $cloture) : ?>
                                <tr>
                                    <td><?= $key+1?></td>
                                    <td><?= $cloture['created_at']?></td>
                                    <td><?= $cloture['full_name'] ?></td>
                                    <td><?= $cloture['montant_du'] ?> $</td>
                                    <td><?= $cloture['montant_verse'] ?> $</td>
                                    <td><?= $cloture['solde'] ?> $</td>   
                                </tr>
                                <?php endforeach?>
                    <?php
                        }
                        else{
                            ?>
                            <tr><td colspan="7">Aucune donnee envoyee....</td></tr>
                            <?php
                        }
                       ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="6">TOTAL GENERAL</th><th>0 $</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/dettes.js" defer></script>
<?= $view['slots']->stop() ?>
