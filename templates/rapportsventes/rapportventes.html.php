<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/rapportventes') ?>
<?= $view['slots']->set('action_text', 'Trier') ?>

<div class="row">
    <div class="col-md-12 mb-4">
    <div style="cursor:pointer;" class="text-primary"><span onclick="printElementsWithHead('synthesetoprint')"><i class="fas fa-print"> Imprimer</i></span></div>
            <br>
        <div class="card" id="synthesetoprint">
            <div id="divHead"></div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Guichetier</th>
                            <th scope="col">Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                        $totalgeneal=0;
                        if($rapportventsSent!=null){
                         foreach ($rapportventsSent as $key => $vente) : $totalgeneal +=$vente['total']; ?>
                            <tr>
                                <td><?= $key + 1 ?></td>
                                <td><?= $vente['full_name'] ?></td>
                                <td><?= $vente['total'] ?> $</td>
                            </tr>
                        <?php endforeach?> <?php }else{}?>

                    </tbody>
                    <tfoot>
                        <tr style="font-size: 1.5em;">
                            <th colspan="2">TOTAL GENERAL</th><th ><?= $totalgeneal ?> $</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
