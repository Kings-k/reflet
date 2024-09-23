<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouveau Guichet</h5>
            <div class="card-body">
                <form action="/guichets/new" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="nomGuichet" id="nomGuichet" class="form-control form-control-lg" required>
                        <label class="form-label" for="nomGuichet">Nom</label>
                    </div>
                    <div class="mb-4">
                        <select name="pointOfSale" id="pointOfSale" class="select" data-filter="true">
                            <?php foreach ($pointsOfSale as $pos) : ?>
                            <option value="<?= $pos->getId() ?>"><?= $pos->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="pointOfSale">Point de Vente</label>
                    </div>
                    <div class="mb-4">
                        <select name="permissions[]" id="permissions" class="select" data-filter="true" multiple>
                            <option value="cash">Cash</option>
                            <option value="credit">Crédit</option>
                            <option value="proforma">Proforma</option>
                            <option value="duplicata">Duplicata</option>
                            <option value="recu">Reçu</option>
                            <option value="depense">Dépense</option>
                            <option value="rapport">Rapport</option>
                            <option value="facture-controle-technique">Impression proforma A4</option>
                            <option value="pv-controle-technique">PV contrôle technique</option>
                        </select>
                        <label for="permissions" class="form-label select-label">Permissions</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Récemment ajoutés</h5>
        <ul class="list-group">
            <?php foreach ($latestguichets as $guichet) : ?>
                <li class="list-group-item"><a href="/guichets/<?= $guichet->getId() ?>"><?= $guichet->getNomGuichet() ?></a></li>
            <?php endforeach ?>
        </ul>
    </div>
</div>
