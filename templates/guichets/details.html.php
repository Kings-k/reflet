<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Mise à jour du Guichet</h5>
            <div class="card-body">
                <form action="/guichets/<?= $currentG->getId() ?>" method="post">
                    <div class="form-outline my-4">
                        <input type="text" name="nomGuichet" id="nomGuichet" class="form-control form-control-lg" value="<?= $currentG->getNomGuichet() ?>" required>
                        <label class="form-label" for="name">Nom</label>
                    </div>
                    <div class="mb-4">
                        <select name="pointOfSale" id="pointOfSale" class="select" data-filter="true">
                            <?php foreach ($pointsOfSale as $pos) : ?>
                                <option value="<?= $pos->getId() ?>" <?= $currentG->getPos()->getId() == $pos->getId() ? ' selected' : '' ?>><?= $pos->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="pointOfSale">Point de Vente</label>
                    </div>
                    <div class="mb-4">
                        <?php $permissions = explode(',', $currentG->getTypevente()) ?>
                        <select name="permissions[]" id="permissions" class="select" data-filter="true" multiple>
                            <option value="cash"<?= in_array('cash', $permissions) ? ' selected' : '' ?>>Cash</option>
                            <option value="credit"<?= in_array('credit', $permissions) ? ' selected' : '' ?>>Crédit</option>
                            <option value="proforma"<?= in_array('proforma', $permissions) ? ' selected' : '' ?>>Proforma</option>
                            <option value="duplicata"<?= in_array('duplicata', $permissions) ? ' selected' : '' ?>>Duplicata</option>
                            <option value="recu"<?= in_array('recu', $permissions) ? ' selected' : '' ?>>Reçu</option>
                            <option value="depense"<?= in_array('depense', $permissions) ? ' selected' : '' ?>>Dépense</option>
                            <option value="rapport"<?= in_array('rapport', $permissions) ? ' selected' : '' ?>>Rapport</option>
                            <option value="facture-controle-technique"<?= in_array('facture-controle-technique', $permissions) ? ' selected' : '' ?>>Impression proforma A4</option>
                            <option value="pv-controle-technique"<?= in_array('pv-controle-technique', $permissions) ? ' selected' : '' ?>>PV contrôle technique</option>
                        </select>
                        <label for="permissions" class="form-label select-label">Permissions</label>
                    </div>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Modifier">
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
