<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Ajouter un nouvel article</h5>
            <div class="card-body">
                <form action="/pv" method="post">
                    <div class="my-4">
                        <select name="service" id="service" class="select form-control-lg">
                            <option value="" selected>Sélectionner un article</option>
                           <?php foreach($servicesSent as $service){
                               ?>
                                <option value="<?= $service->getId() ?>"><?= $service->getName() ?></option>
                              <?php 
                           } ?>
                        </select>
                        <label class="form-label select-label" for="service">Service</label>
                    </div> 
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Creer">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Services deja ajoutés</h5>
        <div class="list-group">
            <?php $tot=0; foreach ($AddedAlready as $pv) : $tot +=$pv->getService()->getUnitPrice();?>
                <span class="text-primary list-group-item list-group-item-action d-flex justify-content-between">
                    <span><?= $pv->getService()->getName() ?> (<?= $pv->getService()->getUnitPrice() ?> $) <a href="/pv/<?= $pv->getId() ?>"><i class="fas fa-trash text-danger"></i></a></span>
                </span>
            <?php endforeach ?>
            <hr>
            <span>TOTAL GENERAL : <?= $tot ?> $</span>
        </div>
    </div>
</div>
