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
        <div><span class="btn btn-primary" id="print"><i class="fa fa-print mr-2"></i>Imprimer</span></div>
        <div id="printSection">
            <div id="divHead"></div>
            <div class="card shadow-sm mt-2">
                <div class="card-header"><h2><?= $titlesent ?></h2></div>
                <div class="card-body">
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
                            $totalamount=0;
                            $totalverse=0;
                            $totalsold=0;
                            if($cloturesSent!=null){
                                foreach ($cloturesSent as $key => $cloture) : $totalamount+=$cloture['montant_du'];$totalverse+=$cloture['montant_verse'];$totalsold+=$cloture['solde'];?>
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
                                <th colspan="3">TOTAL GENERAL</th><th><?= $totalamount ?> $</th><th><?= $totalverse ?> $</th><th><?= $totalsold ?> $</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/dettes.js" defer></script>
<script src="/assets/print.js" defer></script>
<script>
    document.querySelector('#print').addEventListener('click', () => {
        printElementsWithHead(document.querySelector('#printSection'));
    });
</script>
<?= $view['slots']->stop() ?>
