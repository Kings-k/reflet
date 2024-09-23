<?php $view->extend('layout.html.php') ?>
<!--<script language="JavaScript" src="../../assets/IDAutomation_JavaScriptBarcode_C39_Demo.js"></script>-->
<script language="JavaScript" src="/assets/jscodebar.js"></script>
<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouvelle Carte</h5>
            <div class="card-body">
                <form onsubmit="return false;">
                    <div class="form-group my-2">
                        <label for="clientid">Choisissez un CLient</label>
                        <select name="clientid" id="clientid" class="form-control" onchange="barrecodegenerator()"> 
                            <option value="0" selected>Sélectionner dans la liste</option>
                            <?php foreach ($clientslist as $key => $client) : ?>
                            <option value="<?= $client->getId() ?>"><?= $client->getNomClient() ?></option>
                        <?php endforeach ?>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    <div class="d-flex justifiy-content-right text-primary" style="cursor:pointer;"><i onclick="printelements('printcarteblock')" class="fas fa-print"> Imprimer</i></div>
    <br>
    <div id="printcarteblock">    
    <div class="card" >
                            
            <div class="card-header"><h5>Carte de Fidelite</h5></div>
            <div class="card-body d-flex justify-content-center flex-column align-items-center">
            <img style="width:70px;" class="icon-image rounded wd-75" src="/uploads/logos/<?= $logo ?>">
            <br>
            <svg id="SVG_Barcode">
            </svg>
            </div>
            <div class="card-footer"></div>
    </div>
    </div>     
    </div>
</div>
<script type="text/javascript">
function barrecodegenerator(){
    
    var DataToEncode=document.getElementById('clientid').value;
    JsBarcode("#SVG_Barcode",DataToEncode);
    
}
</script> 