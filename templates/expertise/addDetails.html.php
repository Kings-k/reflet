<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Creer une nouvelle expertise</h5>
            <div class="card-body">
                <?php $idsent=$currentE->getId(); $elements=$currentE->getDetailsExpertises(); if(count($elements)>0){echo "<span text-warning>Expertise deja cloturee...</span><br><span class='text-primary'><a href='/expertise/synthese/$idsent'>Visualiser les details?</a></span>";}else{ ?>
                <form action="/expertise/validatedDetail/<?= $currentE->getId() ?>" method="post">
                    <div class="d-flex justify-content-between">
                        <div class="ml-1">ANOMALIES CONSTATEES</div>
                        <div class="mr-1">OBSERVATION</div>
                    </div>
                    <input type="text" value="<?= count($categoriesSent) ?>" name="length" hidden>
                    <div class="accordion" id="accordion-ct">
                        <?php foreach ($categoriesSent as $key => $categ) : ?>
                            <div class="accordion-item">
                                <?php $services = $categ->getServices(); ?>
                                <?php if ($categ->getServices()) : ?>
                                    <div class="accordion-header my-2" id="heading-<?= $key + 1 ?>">
                                        <button class="w-100 btn btn-outline-primary border border-primary d-flex justify-content-between accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapse-<?= $key + 1 ?>" aria-expanded="false" aria-controls="collapse-<?= $key + 1 ?>">
                                            <span><?= $key + 1 ?>. <?= $categ->getName()?></span>
                                            <span sytle="cursor: pointer;">
                                                <i data-category="<?= $categ->getId() ?>" class="fas fa-plus-circle text-primary addNewItem"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div id="collapse-<?= $key + 1 ?>" class="p-2 accordion-collapse collapse" aria-labelledby="heading-<?= $key + 1 ?>" data-parent="#accordion-ct">
                                        <div class="accordion-body">
                                            <?php foreach ($services as $idx => $service): ?>
                                            <div class="d-flex justify-content-between" id="wheretoappend<?= '-' . ($key + 1) . '-' . ($idx + 1) ?>">
                                                <div>
                                                    <input type="checkbox" name="servicecheck<?= $key ?>" value="<?= $service->getId() ?>" class="form-check-input" />
                                                    <label for="<?= $service->getId() ?>" class="ml-1"><?= $service->getName() ?></label>
                                                </div>
                                                <select name="observation_<?= $service->getId() ?>" class="select">
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
                                                    <option value="A supprimer" >A supprimer</option></option>
                                                    <option value="Egratignure" >+ (Egratignure)</option>
                                                </select>
                                            </div>
                                            <?php endforeach ?>
                                        </div>
                                    </div>
                                <?php endif ?>
                            </div>
                        <?php endforeach ?>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Valider">
                </form>
            <?php } ?>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/add-panne.js" defer></script>
<?= $view['slots']->stop() ?>
