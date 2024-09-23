<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">GESTION DE MESSAGERIE</h5>
            <div class="card-body">
                <!-- BODY FOR MESSAGING -->
                <ul class="nav nav-pills p-1" id="pills-tab-categories" role="tablist">
                    <li class="nav-item text-center text-break" role="presentation">
                        <button type="button" class="nav-link active btn btn-secondary" id="pills-tab" data-toggle="pill" href="#individuel" role="tab" aria-controls="pills-1" aria-selected="true">Individuel</button>
                    </li>
                    <li class="nav-item text-center text-break" role="presentation">
                        <button type="button" class="nav-link btn btn-warning" id="pills-tab" data-toggle="pill" href="#categoriediv" role="tab" aria-controls="pills-2" aria-selected="false">Categories</button>
                    </li>
                    <li class="nav-item text-center text-break" role="presentation">
                        <button type="button" class="nav-link btn btn-success" id="pills-tab" data-toggle="pill" href="#tousdiv" role="tab" aria-controls="pills-3" aria-selected="false">Tous</button>
                    </li>
                </ul>
        <!-- </div> -->
        <div class="tab-content" id="pills-tabContent">
            
                <div class="tab-pane fade show active" id="individuel" role="tabpanel" aria-labelledby="pills-1-tab">
                  
                   <form action="/sendindividualsms" class="form-horizontal" method="POST">
                
                    <div class="form-outline my-4">
                        <textarea name="messageindiv" rows="3" id="messageindiv" class="form-control"></textarea>
                        <label class="form-label" for="messageindiv">Message client</label>
                    </div>
                    <div class="my-4">
                        <select name="clientindiv" id="clientindiv" class="select" data-filter="true">
                            <option value="0" selected>Sélectionner un client</option>
                            <?php foreach ($clients as $cl) : ?>
                               
                                <option value="<?= $cl->getId() ?>"><?= $cl->getNomClient() ?></option>
                              
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="clientindiv">Client</label>
                    </div>
                    <button class="btn btn-primary float-right my-2 mr-0">Envoyer</button>
                </form>               
                </div>
                
                <div class="tab-pane fade" id="categoriediv" role="tabpanel" aria-labelledby="pills-2-tab">
                  
                   <form action="/sendcategsms" class="form-horizontal" method="POST">
                
                    <div class="form-outline my-4">
                        <textarea name="messagecateg" rows="3" id="messagecateg" class="form-control"></textarea>
                        <label class="form-label" for="messagecateg">Message pour la categorie</label>
                    </div>
                    <div class="my-4">
                        <select name="categorychoice" id="categorychoice" class="select" data-filter="true">
                            <option value="0" selected>Sélectionner une categorie</option>
                            <?php foreach ($categories as $categ) : ?>
                               <option value="<?= $categ->getId() ?>"><?= $categ->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="categorychoice">Categorie</label>
                    </div>
                    <button class="btn btn-warning float-right my-2 mr-0">Envoyer</button>
                </form>               
                </div>

                <div class="tab-pane fade" id="tousdiv" role="tabpanel" aria-labelledby="pills-1-tab">
                  
                  <form action="/sendsmstoall" class="form-horizontal" method="POST">
                   <div class="form-outline my-4">
                       <textarea name="messageall" rows="3" id="messageall" class="form-control"></textarea>
                       <label class="form-label" for="messageall">Message pour tous les clients</label>
                   </div>
                   <button class="btn btn-success float-right my-2 mr-0">Envoyer</button>
               </form>               
               </div>
        </div>
            </div>
        </div>
    </div>
</div>
