<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Action</th>
                            <th scope="col">#</th>
                            <th scope="col">Date clôture</th>
                            <th scope="col">Guichetier</th>
                            <th scope="col">Guichet</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Versé</th>
                            <th scope="col">Solde</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($listclotures as $key => $cloture) : ?>
                        <tr>
                            <td><a href="/cloture/reception/<?=$cloture->getId() ?>"><?php if($cloture->getSolde()>0){ echo "Receptionner";}  ?></a></td>
                            <td class="text-center text-uppercase table-secondary"><?= $key+1 ?></td>
                            <td><?= $cloture->getCreatedAt()->format('d-m-Y') ?></td>
                            <td><?= $cloture->getDoneBy() ?></td>
                            <td></td>
                            <td><?= $cloture->getMontantDu() ?> $</td>
                            <td><?= $cloture->getMontantVerse() ?> $</td>
                            <td><?= $cloture->getSolde() ?> $</td>  
                        </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
