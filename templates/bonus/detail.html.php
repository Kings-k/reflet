<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-6">
        <div class="card shadow">
            <h5 class="card-header">Bonus Client</h5>
            <div class="card-body">
                <form action="/bonus/detail" method="post">
                    <div class="form-group my-2">
                        <label for="employeur">Client</label>
                        <select name="client" id="client" class="form-control">
                            <?php foreach ($latestClients as $cl) : ?>
                                <option value="<?= $cl->getId() ?>">
                                    <?= $cl->getNomClient() ?>
                                </option>
                            <?php endforeach ?>
                        </select>
                    </div>

                    <div class="d-md-flex justify-content-between">
                        <div class="form-group my-2 flex-grow-1 mr-md-3">
                            <label for="du">Du</label>
                            <input type="date" name="du" id="du" class="form-control" required />
                        </div>
                        <div class="form-group my-2 flex-grow-1">
                            <label for="au">Au</label>
                            <input type="date" name="au" id="au" class="form-control" required />
                        </div>
                    </div>


                    <input class="btn btn-primary my-2 ml-0" type="submit" value="Afficher">
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card shadow">
            <h5 class="card-header">Situation Bonus pour le Client <?= $datasent['client']->getNomClient() ?></h5>
            <div class="card-body">
                <h6>Période Allant du <?= $datasent['datedebut'] ?> au <?= $datasent['datefin'] ?></h6>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Facture</th>
                            <th>Montant</th>
                            <th>Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="2">TOTAL</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>