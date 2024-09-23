<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-6 mb-4">
        <div class="card shadow">
            <div class="card-header">
                <h5>Déstockage</h5>
            </div>
            <div class="card-body">
                <div id="services" hidden><?= json_encode($services) ?></div>
                <form autocomplete="off">
                    <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                    <div class="my-4">
                        <select name="depot" id="depot" class="select" data-filter="true">
                            <?php foreach ($depots as $depot) : ?>
                            <option value="<?= $depot->getId() ?>"><?= $depot->getName() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="depot">Dépôt à déstocker</label>
                    </div>
                    <?php else : ?>
                    <input type="hidden" id="depot" value="<?= $depots ?>">
                    <?php endif ?>
                    <div class="form-outline">
                        <input type="text" id="history" name="history" class="form-control form-control-lg autocomplete" placeholder="Tapez le nom de l'article à rechercher" required>
                        <label class="form-label" for="history">Article</label>
                        <input type="hidden" id="service">
                        <input type="hidden" id="depotHistoryId">
                    </div>
                    <div class="form-outline my-4">
                        <input type="text" class="form-control form-control-lg autocomplete" id="motif" required>
                        <label class="form-label" for="motif">Motif de déstockage</label>
                        <input type="hidden" id="motif-id">
                    </div>
                    <div class="form-outline my-4">
                        <textarea name="note" id="note" cols="30" rows="5" class="form-control autocomplete"></textarea>
                        <label for="note" class="form-label">Note</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="number" min="1" name="nbUnites" id="nbUnites" class="form-control form-control-lg" required>
                        <label class="form-label" for="nbUnites">Nombre d'unités</label>
                    </div>
                    <button type="button" class="btn btn-primary float-right my-2 mr-0" id="saveBtn">Enregistrer</button>
                    <button type="button" class="btn float-right mr-2 my-2" id="cancelBtn">Effacer</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <h5>Historique de déstockage<?= $view['security']->isGranted('ROLE_GESTSTOCK') ? '' : ' du dépôt' ?></h5>
        <!-- <small>Informations sur les stocks réçus et encore disponibles</small> -->
        <div class="table-responsive mt-2" style="height: 45vh !important;">
            <table class="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">Article</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Motif</th>
                        <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                        <th scope="col">Dépôt</th>
                        <?php endif ?>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($destockages as $destockage) : ?>
                        <?php if ($destockage['quantity'] < 0) : ?>
                            <tr>
                                <td><?= $destockage['name'] ?></td>
                                <td><?= abs($destockage['quantity']).' '.($destockage['symbol'] ?? (is_string($destockage['uomName']) && strlen($destockage['uomName']) > 0 ? ($destockage['uomName'].($destockage['quantity'] < -1 ? 's' : '')) : '')) ?></td>
                                <td><?= $destockage['motifDestockage'] ?? '-' ?></td>
                                <?php if ($view['security']->isGranted('ROLE_GESTSTOCK')) : ?>
                                <td><?= $destockage['depotName'] ?></td>
                                <?php endif ?>
                            </tr>
                        <?php endif ?>
                    <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php $view['slots']->start('stylesheets') ?>
<link rel="stylesheet" href="/assets/jquery-ui-1.12.1.custom/jquery-ui.min.css">
<?php $view['slots']->stop() ?>

<?php $view['slots']->start('javascripts') ?>
<script src="/assets/jquery.js"></script>
<script src="/assets/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script defer>
    const services = <?= json_encode($services) ?>;
    const motifs = <?= json_encode($motifs) ?>;
    const depot = document.getElementById('depot');
    const motifElt = document.getElementById('motif');
    
    const autocomplete = () => {
        let source = services.filter(service => depot.value == service.depotId && service.quantity > 0);

        $("#history").autocomplete({
            minLength: 0,
            source: source,
            focus: (event, ui) => {
                $("#service").val(ui.item.label);
                return false;
            },
            select: (event, ui) => {
                $("#history").val(ui.item.label);
                $("#service").val(ui.item.service);
                $("#depotHistoryId").val(ui.item.historyId);
                return false;
            }
        });
    };

    const autocompleteMotif = () => {
        $("#motif").autocomplete({
            minLength: 0,
            source: motifs,
            focus: (event, ui) => {
                $("#motif-id").val(ui.item.id);
                return false;
            },
            select: (event, ui) => {
                $("#motif").val(ui.item.label);
                $("#motif-id").val(ui.item.id);
                return false;
            }
        });
    };

    autocomplete();
    autocompleteMotif();

    depot.addEventListener('change', () => {
        autocomplete();
    });

    document.getElementById('cancelBtn').addEventListener('click', () => {
        document.querySelectorAll('input:not([type="submit"])').forEach(input => {
            input.value = '';
        });
    });

    document.getElementById('saveBtn').addEventListener('click', () => {
        const jsonHeaders = new Headers();
        const payload = {
            'depotId': (!!document.getElementById('depot') ? document.getElementById('depot').value : null),
            'service': document.getElementById('service').value,
            'depotHistoryId': Number.parseInt(document.getElementById('depotHistoryId').value, 10),
            'motif': { id: Number.parseInt(document.getElementById('motif-id').value, 10), code: motifElt.value },
            'note': document.getElementById('note').value,
            'nbUnites': document.getElementById('nbUnites').value
        };

        jsonHeaders.append('Content-Type', 'application/json');
        fetch(`${baseUrl}/depots/destockage`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: jsonHeaders
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    showAlert(JSON.parse(data), 'success', false);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    document.getElementById('history').value = '';
                });
            } else if (resp.status === 406) {
                showAlert('Vous ne pouvez pas déstocker une quantité supérieure à celle qui est dans le stock.', 'warning', false);
            }
        });
    });
</script>
<?php $view['slots']->stop() ?>
