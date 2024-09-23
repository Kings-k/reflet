<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title><?php $view['slots']->output('title', 'Reflet'); ?></title>
    <!-- MDB icon -->
    <link rel="icon" href="/assets/img/mdb-favicon.ico" type="image/x-icon" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="/assets/fontawesome/css/all.css" />
    <!-- Google Fonts Roboto -->
    <link rel="stylesheet" href="/assets/styles/fonts.css" />
    <!-- MDB -->
    <link rel="stylesheet" href="/public/build/app.css" />
    <!-- PrintJS -->
    <link rel="stylesheet" href="/assets/styles/print.min.css" />
    <!-- Custom styles -->
    <link rel="stylesheet" href="/assets/styles/sale.css" />
    <style>
        .card {
            border: 2px solid #bbb !important;
            border-radius: 10px !important;
            padding: 2px;
        }
        .btn {
            border: 1px solid rgb(34, 95, 95) !important;
        }
    </style>
</head>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
    </svg>

    <div id="top" style="width: 0; height: 0;"></div>

    <div id="jsAlert" class="d-flex justify-content-center position-relative" style="z-index: 1200" hidden></div>

    <div id="spinner" class="position-absolute vw-100 vh-100" hidden>
        <div class="spinner-border text-light position-absolute" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 position-fixed div-to-print" id="sidebar">
                <div class="d-flex flex-column justify-content-between">
                    <?php include_once dirname(__DIR__).'/header-to-print.html.php' ?>
                    <div class="d-flex justify-content-between position-relative to-hide">
                        <div class="form-outline mr-1 flex-grow-1" id="client-autocomplete">
                            <input type="text" class="form-control" value=" ">
                            <label class="form-label" for="client-autocomplete">Client</label>
                        </div>
                        <div class="form-outline ml-1 flex-grow-1" id="service-autocomplete">
                            <input type="text" class="form-control" value=" " id="serviceinputautofocus" autofocus>
                            <label class="form-label" for="service-autocomplete">Article ou service</label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start my-3 to-hide">
                        <div class="my-3" id="createCustomer" title="Créer un client"><i class="fa fa-plus-circle fa-3x text-muted"></i></div>
                        <div class="m-3 w-100">
                            <h5 class="font-weight-bold" id="customerName">Client anonyme</h5>
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <div class="small">Programme de fidélité</div>
                                <div class="d-flex align-items-center">
                                    <small>Devise&nbsp;</small>
                                    <button class="btn btn-sm btn-outline-primary btn-rounded" id="currency-change" onclick="changeCurrency(event)">Fc</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="border border-primary mb-2"></div> -->
                    <div class="row mx-2 to-hide">
                        <div class="col">
                            <h6 class="small text-muted">FACTURES</h6>
                            <div class="text-right font-weight-bold h5 mb-0" id="total-factures">0</div>
                        </div>
                        <div class="col border-left border-right">
                            <h6 class="small text-muted">POINTS</h6>
                            <div class="text-right font-weight-bold h5 mb-0" id="total-points">0.00</div>
                        </div>
                        <div class="col border-right">
                            <h6 class="small text-muted">BONUS</h6>
                            <div class="text-right font-weight-bold h5 mb-0" id="total-bonus">0.00</div>
                        </div>
                        <div class="col">
                            <h6 class="small text-muted">CAUTION</h6>
                            <div class="text-right font-weight-bold h5 mb-0" id="total-caution">0.00</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between to-hide">
                        <button class="btn btn-warning text-dark flex-grow-1 mr-1 my-3" id="customerDetails" type="button">Détails</button>
                        <button class="btn btn-warning text-dark flex-grow-1 ml-1 my-3" id="customerCaution" type="button">Caution</button>
                    </div>
                    <div class="">
                        <table id="cart" class="invoice-table table table-striped table-hover">
                            <thead class="bg-primary text-light">
                                <tr>
                                    <th>Nom</th>
                                    <th>Qté</th>
                                    <th>Prix</th>
                                    <th class="to-hide">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Invoice items -->
                            </tbody>
                        </table>
                        <div id="print-footer" class="d-flex flex-column w-100"></div>
                        <?php include_once dirname(__DIR__).'/footer-to-print.html.php' ?>
                        <!-- <div id="invoices-header" hidden>Factures</div> -->
                    </div>
                    <div class="row">
                        <div id="footer" class="col-md-4 position-fixed d-flex flex-column">
                            <!-- <div class="d-flex justify-content-between border-top pt-2 px-4">
                                <span>TOTAL</span>
                                <span id="total">$0.00</span>
                            </div> -->
                            <div class="d-flex justify-content-between border-top border-primary pt-2 px-4">
                                <h5 class="font-weight-bold">TOTAL</h5>
                                <h5 class="font-weight-bold" id="total"></h5>
                            </div>
                            <?php if (is_numeric($pos->getWorkforcePercent()) && $pos->getWorkforcePercent() > 0): ?>
                                <div class="d-flex justify-content-between px-4">
                                    <h6>Main d'oeuvre</h6>
                                    <h6 id="workforce"></h6>
                                </div>
                            <?php else: ?>
                                <div class="d-flex justify-content-between px-4">
                                    <h6>Réduction</h6>
                                    <h6 id="discount"></h6>
                                </div>
                            <?php endif ?>
                            <div class="d-flex justify-content-between px-4 small text-primary pt-2">
                                <h5 class="font-weight-bold">NET À PAYER</h5>
                                <h5 class="font-weight-bold" id="net"></h5>
                            </div>
                        </div>
                    </div>
                    <div hidden></div>
                </div>
            </div>
            <div class="col-md-8 position-fixed" id="grid">
                <!-- Grid content -->
            </div>
        </div>
    </div>

    <!--  modal pour la liste des factures  -->

    <div class="modal fade border border-primary" id="factureslist" tabindex="-1" aria-labelledby="facturesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content px-3">
                <div class="modal-header border-bottom border-accent py-3">
                    <div class="d-flex justify-content-between align-items-center" style="width: 95%">
                        <h5 class="modal-title" id="facturesModalLabel">Liste des factures</h5>
                        <div class="form-outline w-50">
                            <input type="text" class="form-control" id="invoice-search-input" />
                            <label class="form-label" for="invoice-search-input">Rechercher une facture ...</label>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="datatable" data-clickable-rows="true" data-max-height="400" data-fixed-header="true" data-loading="true" hidden></div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal liste des factures -->
    <div class="modal fade" id="cloture" tabindex="-1" aria-labelledby="clotureModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="clotureModalLabel">Clôture de la journée</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-striped table-bordered" id="clotureTable">
                        <tbody id="clotureBody">
                            <tr id="ventes" class="h5">
                                <td>Total ventes</td>
                                <td></td>
                            </tr>
                            <tr id="cash">
                                <td>Ventes cash</td>
                                <td></td>
                            </tr>
                            <tr id="credits">
                                <td>Ventes crédit</td>
                                <td></td>
                            </tr>
                            <tr id="ventes-par-bonus">
                                <td>Ventes bonus</td>
                                <td></td>
                            </tr>
                            <tr id="dettes">
                                <td>Paiements dettes</td>
                                <td></td>
                            </tr>
                            <tr id="depenses">
                                <td>Dépenses</td>
                                <td></td>
                            </tr>
                            <tr id="totalVentes" class="h5">
                                <td>Total à verser à la caisse</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Annuler</button>
                    <div>
                        <button type="button" class="btn btn-outline-primary confirm-cloture" onclick="cloturer(event, '#clotureTable')" data-dismiss="modal" hidden>Clôturer et imprimer</button>
                        <button type="button" class="btn btn-primary confirm-cloture" onclick="cloturer(event)" data-dismiss="modal" hidden>Clôturer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="newDepense" tabindex="-1" aria-labelledby="newDepenseModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newDepenseModalLabel">Nouvelle dépense</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-outline my-4">
                            <input type="number" min="0" name="amount" id="amount" class="form-control form-control-lg" required autofocus />
                            <label class="form-label" for="amount">Montant</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="text" name="motif" id="motif" class="form-control form-control-lg" />
                            <label class="form-label" for="motif">Motif</label>
                        </div>
                        <div class="mb-4">
                            <select name="type_depense" id="type_depense" class="select">
                                <?php foreach ($typesSortie as $type) : ?>
                                    <option value="<?= $type->getId() ?>"> <?= $type->getCompte() ?></option>
                                <?php endforeach ?>
                            </select>
                            <label class="form-label select-label" for="type_depense">Type</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary float-right my-2 mr-0" id="createDepense" data-dismiss="modal">Ajouter</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade border border-primary" id="paiement-dettes" tabindex="-1" aria-labelledby="paiementDettesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content px-3">
                <div class="modal-header d-flex justify-content-between border-bottom border-accent py-3">
                    <h5 class="modal-title flex-grow-1" id="paiementDettesModalLabel">Dettes du client&nbsp;<span></span></h5>
                    <div class="form-outline w-25 mx-3">
                        <input type="text" class="form-control" id="debt-search-input" />
                        <label class="form-label" for="debt-search-input">Rechercher une dette ...</label>
                    </div>
                    <div class="form-outline w-25 mx-5">
                        <input type="text" class="form-control" id="debt-amount" min="0" placeholder="Entrer le montant à payer" onfocus="emptyInput(event)">
                        <label for="debt-amount" class="form-label">Montant à payer</label>
                    </div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="datatable" id="debts-table" data-clickable-rows="true" data-selectable="true" data-multi="true" data-loading="true" hidden></div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <div>
                        <div>
                            <span class="h5">Somme due :&nbsp;</span>
                            <span class="h5">0</span>
                            <span hidden>&nbsp;&nbsp;|&nbsp;&nbsp;Entreprise&nbsp;:&nbsp;</span>
                            <span id="enterprise-debts" class="badge bg-dark" hidden>0</span>
                            <span hidden>&nbsp;&nbsp;|&nbsp;&nbsp;Employés&nbsp;:&nbsp;</span>
                            <span id="employees-debts" class="badge bg-dark" hidden>0</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-secondary mr-2" data-target="#paiement-dettes-employees" data-toggle="modal" data-dismiss="modal" hidden>Payer pour les employés</button>
                        <button type="button" class="btn btn-primary" id="payer-dettes" onclick="payerDettes()" data-dismiss="modal" disabled>Payer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade border border-primary" id="paiement-dettes-employees" tabindex="-1" aria-labelledby="paiementDettesEmployesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content px-3">
                <div class="modal-header d-flex justify-content-between border-bottom border-accent py-3">
                    <h5 class="modal-title flex-grow-1" id="paiementDettesEmployesModalLabel">Dettes des employés</h5>
                    <div class="form-outline w-50 mx-5">
                        <input type="text" class="form-control" id="employees-debt-search-input" />
                        <label class="form-label" for="employees-debt-search-input">Rechercher une dette ...</label>
                    </div>
                    <div class="form-outline w-25 mx-5">
                        <input type="text" class="form-control" id="debt-amount-employees" min="0" placeholder="Entrer le montant à payer" onfocus="emptyInput(event)">
                        <label for="debt-amount-employees" class="form-label">Montant à payer</label>
                    </div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="datatable" id="debts-table-employes" data-clickable-rows="true" data-selectable="true" data-multi="true" data-loading="true" hidden></div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-outline-primary mr-5" style="float: left" data-target="#paiement-dettes" data-toggle="modal" data-dismiss="modal">
                            <i class="fa fa-arrow-left mr-2"></i>
                            Retour
                        </button>
                        <div class="h5 mb-0"><span>Somme due&nbsp;:&nbsp;</span><span>0</span></div>
                    </div>
                    <button type="button" class="btn btn-primary float-right" id="payer-dettes-employees" onclick="payerDettes('-employes')" data-dismiss="modal" disabled>Payer</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="confirm-print-receipt" tabindex="-1" aria-labelledby="confirmPrintReceipt" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div>Paiement dettes</div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center">
                        <span class="fas fa-check-circle fa-2x mr-2 text-success"></span>
                        <span class="text-success h4 my-0">Paiement effectué avec succès !</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="font-weight-bold">Montant payé :&nbsp;</div>
                        <div class="font-weight-bold"></div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="font-weight-bold">Solde :&nbsp;</div>
                        <div class="font-weight-bold"></div>
                    </div>
                    <p class="text-center py-2"> Voulez-vous imprimer un reçu ?</p>
                    <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-sm mr-2">Annuler</button>
                        <button type="button" class="btn btn-sm btn-primary" onclick="printReceipt()">Imprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade border border-primary" id="proforma-modal" tabindex="-1" aria-labelledby="proformaModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-bottom border-accent py-3">
                    <h5 class="modal-title" id="proformaModalLabel">Facture proforma</h5>
                    <button type="button" class="btn-close" id="proforma-modal-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <?php if (is_numeric($pos->getWorkforcePercent()) && $pos->getWorkforcePercent() > 0): ?>
                        <div class="form-outline">
                            <input type="number" class="form-control" id="proforma-workforce-input" disabled>
                            <label for="proforma-workforce-input" class="form-label">Main d'oeuvre</label>
                        </div>
                    <?php endif ?>
                    <div class="my-3">
                        <span>Réduction :&nbsp;</span>
                        <span id="discount-proforma"></span>
                    </div>
                    <div class="my-3">
                        <span>Total :&nbsp;</span>
                        <span id="total-proforma"></span>
                    </div>
                    <div class="my-3">
                        <span>Total net :&nbsp;</span>
                        <span class="font-weight-bold" id="net-proforma"></span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary my-3 float-right">Soumettre</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade border border-primary" id="sale-modal" tabindex="-1" aria-labelledby="saleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-bottom border-accent py-3">
                    <h5 class="modal-title" id="saleModalLabel">Payer facture</h5>
                    <button type="button" class="btn-close" id="sale-modal-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <select name="payment-mode" id="payment-mode" class="select" disabled>
                            <option value="1">Cash</option>
                            <option value="2">Bonus</option>
                            <option value="3">Caution</option>
                        </select>
                        <label for="payment-mode" class="form-label select-label">Mode de paiement</label>
                    </div>
                    <div class="form-outline my-3">
                        <input type="text" class="form-control" name="amount" id="sale-amount">
                        <label for="amount" class="form-label">Montant</label>
                    </div>
                    <?php if (is_numeric($pos->getWorkforcePercent()) && $pos->getWorkforcePercent() > 0): ?>
                        <div class="form-outline my-3">
                            <input type="number" class="form-control" name="workforce" id="sale-workforce" value="0">
                            <label for="workforce" class="form-label"><?= 'Main d\'oeuvre (calculée à '.($pos->getWorkforcePercent() !== null ? $pos->getWorkforcePercent() * 100 : 20).'% par défaut)' ?></label>
                        </div>
                    <?php endif ?>
                    <div id="sale-total" class="my-3">
                        <span>Montant total payé :</span>
                        <span></span>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-start align-items-center flex-row-reverse">
                    <button type="button" class="btn btn-primary">Payer</button>
                    <?php if (is_numeric($pos->getWorkforcePercent()) && $pos->getWorkforcePercent() > 0): ?>
                        <button type="button" class="btn" hidden>Appliquer main d'oeuvre</button>
                    <?php endif ?>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade border border-primary" id="caution-deposit-modal" tabindex="-1" aria-labelledby="cautionDepositModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content px-3">
                <div class="modal-header border-bottom border-accent py-3">
                    <div class="d-flex justify-content-between align-items-center" style="width: 95%">
                        <h5 class="modal-title" id="cautionDepositLabel">Déposer une caution</h5>
                    </div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div id="caution-client-control">
                            <select name="client" id="caution-client" class="select" data-filter="true" required disabled>
                                <option value=""></option>
                            </select>
                            <label for="caution-client" class="form-label select-label">Client</label>
                        </div>
                        <div class="error-message text-danger mt-0 mb-4"></div>
                        <div class="form-outline" id="caution-amount-control">
                            <input type="number" name="amount" id="caution-amount" class="form-control" min="0" step="0.00001" required>
                            <label for="caution-amount" class="form-label">Montant</label>
                        </div>
                        <div class="error-message text-danger mt-0 mb-4"></div>
                        <button class="btn btn-primary float-right my-2 mr-0" id="caution-deposit-submit" type="button">Déposer</button>    
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade border border-primary" id="price-select-modal" tabindex="-1" aria-labelledby="priceSelectModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content px-3">
                <div class="modal-header border-bottom border-accent py-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="modal-title" id="priceSelectLabel">Choisir un prix</h5>
                    </div>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="change-price-buttons">
                        <div class="d-flex justify-content-around">
                            <div class="form-check-inline">
                                <input type="radio" name="price-select" id="retail-price" class="form-check-input" />
                                <label for="retail-price" class="form-check-label">Détail</label>
                            </div>
                            <div class="form-check-inline">
                                <input type="radio" name="price-select" id="wholesale-price" class="form-check-input" />
                                <label for="wholesale-price" class="form-check-label">Gros</label>    
                            </div>
                            <div class="form-check-inline">
                                <input type="radio" name="price-select" id="deflated-price" class="form-check-input" />
                                <label for="deflated-price" class="form-check-label">Cassé</label>
                            </div>
                        </div>
                        <input type="number" class="form-control" name="changed-price" id="changed-price"<?= in_array('ROLE_SUPER_GUICHETIER', $app->getUser()->getRoles()) ? '' : ' disabled' ?>>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary float-right" id="validate-price-change">Valider</button>
                </div>
            </div>
        </div>
    </div>

    <div id="invoice-template" hidden>
        <div class="w-100" id="invoice-client"></div>
        <br>
        <table class="w-100" id="invoice-table">
            <thead class="border border-dark" id="invoice-table-header">
                <tr class="bg-yellow">
                    <th class="<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'border-right ' : '' ?>text-right">Qté</th>
                    <th class="<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'border-right ' : '' ?>">Désignation</th>
                    <?php if (count($permissions) > 0 && in_array('facture-controle-technique', $permissions)): ?>
                    <th class="<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'border-right ' : '' ?>text-right">PU</th>
                    <?php endif ?>
                    <th class="text-right"><?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'Montant' : 'S-Tot' ?></th>
                </tr>
            </thead>
            <tbody class="border border-dark" id="invoice-table-body"></tbody><!-- invoice table body: Invoice items -->
        </table>
        <div class="my-0 py-0<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? ' d-flex flex-column' : '' ?>">
            <div class="<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'd-flex flex-row-reverse justify-content-between align-items-center w-100' : '' ?>">
                <div class="<?= count($permissions) > 0 && in_array('facture-controle-technique', $permissions) ? 'text-right ' : '' ?>w-50" id="invoice-totals"></div>
                <?php if (count($permissions) > 0 && in_array('facture-controle-technique', $permissions)): ?>
                <div class="text-left w-50"><b>Règlement :&nbsp;</b>espèces</div>
                <?php endif ?>
            </div>
            <div id="invoice-footer"></div>
        </div>
    </div>

    <div id="receipt-caution-deposit-template" hidden></div>

    <div id="daily-report" hidden></div>

    <div id="invoice-to-print" hidden></div>

    <div id="rapport-cloture-template" hidden></div>

    <?php include_once __DIR__.'/vehicles.html.php' ?>

    <div id="db-user" hidden><?= json_encode($user) ?></div>
    <div id="db-categories" hidden><?= json_encode($categories) ?></div>
    <div id="db-services" hidden><?= json_encode($services) ?></div>
    <div id="db-discountables" hidden><?= json_encode($discountables) ?></div>
    <div id="db-nb-sales-bonus" hidden><?= json_encode($pos->getNbSalesBonus() ?? 0) ?></div>
    <div id="db-bonus-percentage" hidden><?= json_encode($pos->getBonusPercentage() ?? 0) ?></div>
    <div id="db-maison" hidden><?= json_encode($maison) ?></div>
    <div id="db-pos" hidden><?= json_encode($pos->getName()) ?></div>
    <div id="db-permissions" hidden><?= json_encode($permissions) ?></div>
    <div id="db-cloture" hidden><?= json_encode($cloture) ?></div>
    <div id="db-exchange-rate" hidden><?= json_encode($exchangeRate) ?></div>
    <div id="db-clients" hidden><?= json_encode($clients) ?></div>
    <div id="db-workforce-percent" hidden><?= json_encode($pos->getWorkforcePercent()) ?></div>
    <div id="db-vehicles" hidden><?= json_encode($vehicles) ?></div>
    <div id="debt-payment-receipt" hidden></div>
    <div id="recu-controle-technique" hidden></div>
    <div id="recu-expertise" hidden></div>

    <template id="cartItem">
        <tr>
            <td></td>
            <td style="cursor: pointer;" onclick="editQuantity(event)"></td>
            <td style="cursor: pointer;" onclick="selectPrice(event)"></td>
            <td class="to-hide">
                <div class="btn-group" role="group">
                    <button class="btn btn-sm btn-outline-info">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-info">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    </template>
    <template id="invoices">
        <tr>
            <td>Numéro facture</td>
            <td>Montant</td>
            <td>Client</td>
        </tr>
    </template>
    <template id="gridContent">
        <div class="row" id="categories"></div>
        <div class="row" id="services"></div>
        <div class="row">
            <div class="col-md-2">
                <?php if (in_array('pv-controle-technique', $permissions)) : ?>
                    <div class="card bg-primary text-light" id="vehicules" onclick="showVehiclesModal()">
                        <div class="card-body" title="Garage et Contrôle technique">Garage et Contrôle</div>
                    </div>
                <?php else : ?>
                    <div class="card bg-primary text-light">
                        <div class="card-body" title="title">Echéance <input type="datetime-local" name="dateretraitinput" id="dateretraitinput" class="form-control"></div>
                    </div>
                <?php endif ?>
            </div>
            <div class="col-md-2">
                <div class="card bg-primary text-light" id="toggleNewDepense">
                    <div class="card-body" title="Faire une dépense">Faire une dépense</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-primary text-light" id="listfactures" data-toggle="modal" data-target="#factureslist">
                    <div class="card-body" title="Liste des factures">Factures <i class="fas fa-file-invoice-dollar"></i></div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-primary text-light" id="toggle-paiement-dettes">
                    <div class="card-body" title="Paiements dettes">Dettes <i class="fas fa-money-bill"></i></div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-primary text-light" onclick="printDailyReport(event)">
                    <div class="card-body" title="Rapport journalier">Rapport <i class="fas fa-file-alt"></i></div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-primary text-light">
                    <div class="card-body" id="print-receipt" title="Imprimer reçu">Reçu<i class="fas fa-print"></i></div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-success text-light" id="pay">
                    <div class="card-body text-dark font-weight-bold h5 my-0" title="Payer">PAYER</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-warning text-dark">
                    <div class="card-body" id="print-invoice" title="Imprimer facture duplicata">Duplicata<i class="fas fa-print"></i></div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card" id="proforma" style="background-color: #999">
                    <div class="card-body text-dark font-weight-bold" title="Facture proforma">Facture proforma</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-danger text-light" data-toggle="modal" data-target="#cloture" id="cloturer">
                    <div class="card-body" title="Clôturer la journée">Clôturer la journée</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card bg-dark text-light" onclick="logout()">
                    <div class="card-body" title="Déconnexion">Déconnexion<i class="fas fa-sign-out-alt"></i></div>
                </div>
            </div>
        </div>
    </template>
    <template id="newCustomerForm">
        <div class="border border-top-0 border-bottom-0" style="height: 100%; border-color: #bbb !important">
            <div class="card border mx-2">
                <div class="card-header d-flex justify-content-between mt-2">
                    <h5 id="newCustomerTitle">Nouveau client</h5>
                    <button type="button" class="btn-close" id="close" aria-label="Close"></button>
                </div>
                <div class="card-body">
                    <form class="d-flex flex-column justify-content-between" id="client-form">
                        <div class="my-2 d-flex justify-content-between">
                            <div class="form-group w-50 mr-2" id="type-section"></div>
                            <div class="w-50 ml-2">
                                <label for="category">Catégorie (obligatoire)</label>
                                <select class="form-control" name="category" id="category">
                                    <?php foreach ($customerCategories as $category) : ?>
                                        <option value="<?= $category->getId() ?>">
                                            <?= $category->getName() ?>
                                        </option>
                                    <?php endforeach ?>
                                </select>
                                <div class="error-message text-danger mt-0"></div>
                            </div>
                        </div>
                        <div class="form-group my-2">
                            <label for="nomClient">Noms (obligatoire)</label>
                            <input type="text" name="nomClient" id="nomClient" class="form-control" required>
                            <div class="error-message text-danger mt-0"></div>
                        </div>
                        <div class="d-flex justify-content-between" id="gender-section"></div>
                        <div class="form-group my-2">
                            <label for="adressePhys">Adresse physique</label>
                            <input type="text" name="adressePhys" id="adressePhys" class="form-control">
                            <div class="error-message text-danger mt-0"></div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="form-group w-50 mr-2">
                                <label for="mail">Adresse e-mail</label>
                                <input type="email" name="mail" id="mail" class="form-control">
                                <div class="error-message text-danger mt-0"></div>
                            </div>
                            <div class="form-group w-50 ml-2">
                                <label for="telephone">Téléphone</label>
                                <input type="phone" name="telephone" id="telephone" class="form-control">
                                <div class="error-message text-danger mt-0"></div>
                            </div>
                        </div>
                        <div class="form-group my-2">
                            <label for="personneContact">Personne à contacter</label>
                            <input type="text" name="personneContact" id="personneContact" class="form-control">
                            <div class="error-message text-danger mt-0"></div>
                        </div>
                        <div class="my-2" id="employer-section"></div>
                        <button type="button" class="btn btn-primary float-right my-2" id="addCustomer">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    </template>

    <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/assets/mdb/js/mdb.min.js"></script>
    <!-- <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script> -->
    <!-- <script src="../public/build/app.js"></script> -->
    <script src="/assets/jquery.js"></script>
    <script src="/assets/globals.js"></script>
    <script src="/assets/toast.js"></script>
    <script src="/assets/jQuery.print.js"></script>
    <script src="/assets/print.js"></script>
    <!-- PrintJS -->
    <script src="/assets/print.min.js"></script>
    <!-- Custom -->
    <script src="/assets/fully-spelled-out.js"></script>
    <script src="/assets/sale.js"></script>
    <script src="/assets/functions.js"></script>
</body>
</html>
