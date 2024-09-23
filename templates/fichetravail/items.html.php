<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-5 mb-2">
        <div class="card shadow">
            <h5 class="card-header"></h5>
            <div class="card-body">
                <form action="/fichetravail/additem/<?= $fichesent ?>" method="post">
                    <div class="my-4">
                        <input type="text" name="ficheget" hidden value="<?= $fichesent  ?>">
                        <select name="service" id="vehicule" class="select" data-filter="true">
                            <option value="" selected>Sélectionner un vehicule</option>
                           <?php foreach($servicesSent as $service){
                               ?>
                                <option value="<?= $service->getId() ?>"><?= $service->getName() ?></option>
                              <?php 
                           } ?>
                        </select>
                        <label class="form-label select-label" for="service">Service</label>
                    </div> 
                    <div class="form-outline my-4">
                        <input type="number" name="qty" id="qty" class="form-control form-control-lg" />
                        <label class="form-label" for="qty">Qte</label>
                    </div>
                    <div class="my-4">
                        <select name="travail" id="travail" class="select">
                            <option value="En bon etat" >V (En bon etat)</option>
                            <option value="Bosses" >B (Bosses)</option>
                            <option value="A remplacer" >X (A remplacer)</option>
                            <option value="A reparer" >A (A reparer)</option>
                            <option value="A regler" >R (A regler)</option>
                            <option value="A serrer" >S (A serrer)</option>
                            <option value="A nettoyer" >T (A nettoyer)</option>
                            <option value="A lubrifier" >C (A lubrifier)</option>
                            <option value="Mauvais" >M (Mauvais)</option>
                            <option value="Neant" >// (Nean)</option>
                            <option value="Egratignure" >+ (Egratignure)</option>
                        </select>
                        <label class="form-label select-label" for="resultat">Travail a effectuer</label>
                    </div>
                   
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-7">
        <h5>Ajoutés Récemment</h5>
        <table class="table table-striped">
                           <thead><tr><th>N</th><th>Qte</th><th>Designation</th><th>Travail a effectuer</th></tr></thead>
                           <tbody>
            <?php if($lastestItems->rowCount()>0){ $i=0;
                while($service=$lastestItems->fetch()){ $i++;?>
                <tr><td><?= $i ?></td> <td><?= $service['qty'] ?></td> <td><?= $service['name'] ?></td> <td><?= $service['travail'] ?></td></tr>
            <?php  }} ?>
            </tbody>
        </table>
    </div>
</div>
