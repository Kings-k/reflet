<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Reception Versement</h5>
            <div class="card-body">
                <form action="/cloture/versement/<?= $cloture->getId() ?>" method="post">
                    <div class="visually-hidden">
                        <input  value="<?= $cloture->getSolde() ?>" id="maxvalue"  class="visually-hidden" />
                    </div> 
                    <div class="form-outline my-4">
                        <input onkeyup="autocompleteinput('montantrecu','montantdollar')" type="text" name="montantrecu" id="montantrecu" class="form-control form-control-lg" value="<?= $cloture->getSolde() ?>"  max="<?= $cloture->getSolde() ?>" required>
                        <label class="form-label" for="name">Total Montant Recu</label>
                    </div>
                    <div class="form-outline my-4">
                        <input onkeyup="getsumincdf('montantdollar','montantfranc')" type="text" name="montantdollar" id="montantdollar" class="form-control form-control-lg" value="<?= $cloture->getSolde() ?>" max="<?= $cloture->getSolde() ?>" required>
                        <label class="form-label" for="name">en $</label>
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" name="montantfrancvalue" id="montantfranc" class="form-control form-control-lg" value="<?= 0 ?>" disabled>
                        <label class="form-label" for="name">en CDF</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Valider Versement">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment Verses</h5>
        <ul class="list-group">
            <?php foreach ($versements as $versement) : ?>
                <li class="list-group-item">
                    <?= $versement->getMontantRecu() ?> $
                </li>
            <?php endforeach ?>
        </ul>
    </div>
</div>

<script>

    document.getElementById("maxvalue").style.display="none";

    function autocompleteinput(el,eltofill){

        var totalrecu=document.getElementById(el).value,totalendollar=document.getElementById(eltofill).value,maxvalue=document.getElementById('maxvalue').value;

        if(totalrecu>maxvalue){
            document.getElementById("montantrecu").value=maxvalue;
        }
        else if(totalrecu<=totalendollar || totalrecu==maxvalue){
            document.getElementById(eltofill).value=document.getElementById(el).value;
        }else{

        }
       
        getsumincdf(eltofill,'montantfranc');
    }


    function getsumincdf(el,eltofill){
        fetch(`${baseUrl}/clotures/getRate/`, {
                method: 'GET',
            }).then(resp => {
                if (resp.ok) {
                    resp.text().then(data => {
                        rate = JSON.parse(data);
                        console.log(rate.ratesent);
                        var dollardata=document.getElementById(el).value, montantTotal=document.getElementById('montantrecu').value;
                        
                        if(dollardata>montantTotal){

                            document.getElementById("montantdollar").value=montantTotal;
                            document.querySelector('#montantfranc').value =0;
                        }
                        else{
                            document.querySelector('#'+eltofill).value =((montantTotal - dollardata)*rate.ratesent);
                        }
                         
                    });
                }
            });
    }
</script>
