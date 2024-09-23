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
    <div style="cursor:pointer;" class="text-primary"><span onclick="printelements('synthesetoprint')"><i class="fas fa-print"> Imprimer</i></span></div>
        <div class="card shadow"  id="synthesetoprint">
            <h5 class="card-header">RAPPORT D'EXPERTISE DU VEHICULE </h5>
            <div class="card-body">
                    <div class="row">
                        <div class="col-md-6" style="border: 1px solid black;">
                            <h5>Informations sur le Vehicule</h5>
                            <div>
                                <div><span>Marque &nbsp; : &nbsp; <?= $vehiculesinfos->getMarque() ?></span></div>
                                <div><span>Plaque &nbsp; &nbsp; : &nbsp; <?= $vehiculesinfos->getNumeroDansLaSerie() ?></span></div>
                                <div><span>Kms &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; <?= $vehiculesinfos->getKilometrage() ?></span></div>
                            </div>
                        </div> 
                    </div>
                <br>
                <div class="row">
                    <table style="border: 1px solid black;">
                        <thead><tr><th>ELEMENTS DU CONTROLE</th><th>OBSERVATION</th></tr></thead>
                        <tbody>
                        <?php 
                        $i=0; if($categoriesSent->rowCount()>0){  
                        while($cat=$categoriesSent->fetch()){ $i++; 
                            $sql=$dbsent->getPdo()->prepare("SELECT * FROM details_expertise DE LEFT JOIN service OS ON DE.service_id=OS.id WHERE OS.category_id=? ");
                            $sql->execute(array($cat['id']));
                        ?>
                            <tr style="border: 1px solid black;"><th><?= $i.". ".strtoupper($cat['name']) ?></th><th></th></tr>
                            <?php foreach($categSent=$sql->fetchAll() as $service) : ?>
                                <tr><td><?= $service['name'] ?></td><td><?=$service['observation'] ?></td></tr>
                                <?php endforeach ?>
                        <?php  }}?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
