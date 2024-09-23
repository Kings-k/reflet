<div class="modal fade" id="vehicles-modal" tabindex="-1" aria-labelledby="newVehicle" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content px-3" style="background-color: #efefef">
            <div class="modal-header border-bottom border-primary">
                <div class="d-flex justify-content-between w-100 mr-5">
                    <h5 class="modal-title" id="clotureModalLabel">Contrôle technique et Garage</h5>
                    <button type="button" class="btn border border-primary" onclick="newControleGarage()"><i class="fas fa-plus-circle mr-2"></i>Ajouter</button>
                </div>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body w-100">
                <ul class="block nav nav-pills nav-justified mb-3" id="controle-et-garage" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#vehicle-pill-content" class="nav-link active border border-primary" id="pill-tab-vehicle" data-toggle="pill" aria-controls="vehicle-pill-content" aria-selected="true">
                            Enregistrer un véhicule
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#ct-pill-content" class="nav-link border border-primary" id="pill-tab-ct" data-toggle="pill" aria-controls="ct-pill-content" aria-selected="false">
                            PV de Contrôle technique
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#ev-pill-content" class="nav-link border border-primary" id="pill-tab-ev" data-toggle="pill" aria-controls="ev-pill-content" aria-selected="false">
                            Expertise de véhicules
                        </a>
                    </li>
                </ul>
                <div class="tab-content position-relative">
                    <div class="tab-pane fade show active d-flex justify-content-between position-absolute w-100" id="vehicle-pill-content">
                        <div class="card border shadow-sm w-75 mr-3">
                            <div class="card-body">
                                <form id="new-vehicle-form">
                                    <div class="form-outline mt-3">
                                        <input type="text" name="numeroImmatriculation" id="numeroImmatriculation" class="form-control form-control-lg" required />
                                        <label class="form-label" for="numeroImmatriculation">Numéro d'immatriculation</label>
                                    </div>
                                    <div id="immatriculation-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                                    <div class="dropdown w-100 mt-0">
                                        <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="immatriculation-dropdown"></ul>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <div class="form-outline w-50 mr-2">
                                            <input type="text" name="anneeFabrication" id="anneeFabrication" class="form-control form-control-lg" />
                                            <label class="form-label" for="anneeFabrication">Année de fabrication</label>
                                        </div>
                                        <div class="form-outline w-50 ml-2">
                                            <input type="text" name="dateMiseEnCirculation" id="dateMiseEnCirculation" class="form-control form-control-lg" />
                                            <label class="form-label" for="dateMiseEnCirculation">Date de mise en circulation</label>
                                        </div>
                                    </div>
                                    <div class="form-outline my-3">
                                        <input type="text" name="couleur" id="couleur" class="form-control form-control-lg">
                                        <label class="form-label" for="couleur">Couleur</label>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <div class="form-outline flex-grow-1 mr-2">
                                            <input type="text" name="genre" id="genre" class="form-control form-control-lg" />
                                            <label class="form-label" for="genre">Genre</label>
                                        </div>
                                        <div class="form-outline flex-grow-1 mx-2">
                                            <input type="text" name="marque" id="marque" class="form-control form-control-lg" />
                                            <label class="form-label" for="marque">Marque</label>
                                        </div> 
                                        <div class="form-outline flex-grow-1 ml-2">
                                            <input type="text" name="typeOuModele" id="typeOuModele" class="form-control form-control-lg" />
                                            <label class="form-label" for="typeOuModele">Type ou Modèle</label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between w-100 my-3">
                                        <div class="flex-grow-1 mr-2">
                                            <div class="form-outline">
                                                <input type="text" class="form-control form-control-lg" name="usageVehicule" id="usageVehicule">
                                                <label class="form-label" for="type">Usage du véhicule</label>
                                            </div>
                                            <div id="usage-vehicule-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                                            <div class="dropdown mt-0">
                                                <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="usage-vehicule-dropdown"></ul>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ml-2">
                                            <div class="form-outline">
                                                <input type="text" class="form-control form-control-lg" name="client" id="client"><!-- Liste des clients -->
                                                <label class="form-label" for="client">Propriétaire</label>
                                            </div>
                                            <div id="client-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                                            <div class="dropdown mt-0">
                                                <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="client-dropdown"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <div class="form-outline flex-grow-1 mr-2">
                                            <input type="text" name="puissance" id="puissance" class="form-control form-control-lg" />
                                            <label class="form-label" for="puissance">Puissance</label>
                                        </div>
                                        <div class="form-outline flex-grow-1 mx-2">
                                            <input type="text" name="energie" id="energie" class="form-control form-control-lg" />
                                            <label class="form-label" for="energie">Energie</label>
                                        </div> 
                                        <div class="form-outline flex-grow-1 ml-2">
                                            <input type="text" name="kilometrage" id="kilometrage" class="form-control form-control-lg" />
                                            <label class="form-label" for="kilometrage">Kilométrage</label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between my-3">
                                        <div class="form-outline flex-grow-1 mr-2">
                                            <input type="text" name="numeroDansLaSerie" id="numeroDansLaSerie" class="form-control form-control-lg" />
                                            <label class="form-label" for="numeroDansLaSerie">Numéro dans la série</label>
                                        </div>
                                        <div class="form-outline flex-grow-1 mx-2">
                                            <input type="text" name="numeroChassis" id="numeroChassis" class="form-control form-control-lg">
                                            <label class="form-label" for="numeroChassis">Numéro chassis</label>
                                        </div>
                                        <div class="form-outline flex-grow-1 ml-2">
                                            <input type="text" name="numeroMoteur" id="numeroMoteur" class="form-control form-control-lg">
                                            <label class="form-label" for="numeroMoteur">Numéro moteur</label>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-primary" onclick="resetVehicleForm(event)">Réinitialiser</button>
                                    <button type="button" class="btn btn-primary float-right mr-0" onclick="saveVehicle()">
                                        <i class="fa fa-save"></i>&nbsp;Enregistrer
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="w-25 ml-3">
                            <h5>Derniers véhicules enregistrés</h5>
                            <div class="list-group"></div><!-- Liste de vehicules -->
                        </div>
                    </div>
                    <div class="tab-pane fade position-absolute w-100" id="ct-pill-content">
                        <div class="card shadow-sm">
                            <div class="card-header">
                                <div class="form-outline w-100">
                                    <input type="text" class="form-control" id="ct-search-input" />
                                    <label class="form-label" for="ct-search-input">Recherche ...</label>
                                </div>
                            </div>
                            <div class="card-body datatable"></div>
                        </div>
                    </div>
                    <div class="tab-pane fade position-absolute w-100" id="ev-pill-content">
                        <div class="card shadow-sm">
                            <div class="card-header">
                                <div class="form-outline w-100">
                                    <input type="text" class="form-control" id="ev-search-input" />
                                    <label class="form-label" for="ev-search-input">Recherche ...</label>
                                </div>
                            </div>
                            <div class="card-body datatable"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="new-ct-modal" data-backdrop="static" tabindex="-1" aria-labelledby="newControle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border border-primary shadow">
            <div class="modal-header py-2">
                <div class="modal-title">Créer un nouveau PV de contrôle technique</div>
                <button class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="new-ct-form">
                    <div class="form-outline mt-4">
                        <input type="text" name="vehicule" id="vehicule-controle" class="form-control">
                        <label class="form-label" for="vehicule-controle">Véhicule</label>
                    </div>
                    <div id="vehicle-controle-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                    <div class="dropdown w-100 mt-0">
                        <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="vehicle-controle-dropdown"></ul>
                    </div>
                    <div class="my-4">
                        <select name="article" id="article-controle" class="select" data-container="#new-ct-modal" data-filter="true"></select>
                        <label class="form-label select-label" for="article-controle">Article</label>
                    </div>
                    <button type="button" class="btn btn-primary float-right my-2 mr-0" onclick="savePv()">Créer</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="new-expertise-modal" data-backdrop="static" tabindex="-1" aria-labelledby="newExpertise" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border border-primary shadow">
            <div class="modal-header py-2">
                <div class="modal-title">Créer une nouvelle expertise</div>
                <button class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="new-expertise-form">
                    <div class="form-outline mt-4">
                        <input name="vehicule" id="vehicule-expertise" class="form-control">
                        <label class="form-label" for="vehicule-expertise">Véhicule</label>
                    </div>
                    <div id="vehicle-expertise-spinner" class="spinner-border float-right position-relative" style="top: -38px; right: 10px" role="status" hidden></div>
                    <div class="dropdown w-100 mt-0">
                        <ul class="dropdown-menu border shadow-sm w-100 mt-0" id="vehicle-expertise-dropdown"></ul>
                    </div>
                    <button type="button" class="btn btn-primary float-right my-2 mr-0" onclick="saveExpertise()">Créer</button>
                </form>
            </div>
        </div>
    </div>
</div>
