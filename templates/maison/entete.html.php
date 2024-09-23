<div class="row">
    <div class="col-md-12 mb-6">
        <div style="text-align: center;">
            <span><img style="width:50px;" class="icon-image rounded-circle wd-75" src="/uploads/logos/<?= $currentM->getLogo() ?>" alt=""></span>
            <span><?= $currentM->getNomSociete() ?></span>
            <br>
            <span><?= $currentM->getRegistreCommerce().", ".$currentM->getIdNationnal().", ".$currentM->getNumImpot().", ".$currentM->getAutorisationFct() ?></span><br>
            <span><?= $currentM->getAdressePhysique().", ".$currentM->getTelephone().", ".$currentM->getMail().", ".$currentM->getSite() ?></span>
        </div>  
        <hr>   
    </div>
</div>