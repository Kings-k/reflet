<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<!-- PrintJS -->
<link rel="stylesheet" href="/assets/styles/print.min.css" />
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-12 mb-6">
        <div id="controls" hidden><?= json_encode($controls) ?></div>
        <div id="maison" hidden><?= json_encode($maison) ?></div>
        <div id="vehicle" hidden><?= json_encode($vehicle) ?></div>
        <div class="card shadow">
            <h5 class="card-header text-primary" style="cursor:pointer;text-align:right;"><span onclick="printControleTechnique()"><i class="fas fa-print"></i> Imprimer</span></h5>
            <div class="card-body" id="bodytoprint">
                <div style="text-align: center;"> 
                    <h4 class="font-weight-bold text-center text-white w-100 py-2 bg-primary" id="fiche-travail-title">FICHE DE TRAVAIL N°<?= $fiche->getId() ?>EREST/<?=$fiche->getCreatedAt()->format('Y') ?></h4>
                    <div data-user="<?= $userconnected ?>" hidden>Effectuee par: <?= $userconnected ?></div>
                </div>
                <div class="d-flex flex-row justify-content-between mb-3">
                    <table class="mr-5">
                        <tr><td>Genre</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['genre'] ?></td></tr>
                        <tr><td>Marque</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['marque'] ?></td></tr>
                    </table>
                    <table class="mx-5">
                        <tr><td>Modèle</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['typeOuModele'] ?></td></tr>
                        <tr><td>Plaque</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['numeroImmatriculation'] ?></td></tr>
                    </table>
                    <table class="ml-5">
                        <tr><td>Kilométrage</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['kilometrage'] ?></td></tr>
                        <tr><td>Client</td><td>&nbsp;:&nbsp;</td><td class="font-weight-bold"><?= $vehicle['nomClient'] ?></td></tr>
                    </table>
                </div>
                <table class="table table-striped table-bordered">
                    <thead style="background-color: #999">
                        <tr>
                            <th class="font-weight-bold text-center">N°</th>
                            <th class="font-weight-bold">DESIGNATION</th>
                            <th class="font-weight-bold text-center">QTE</th>
                            <th class="font-weight-bold">TRAVAIL&nbsp;A&nbsp;EFFECTUER</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($controls as $idx => $control): ?>
                            <tr>
                                <td class="text-center"><?= $idx + 1 ?></td>
                                <td><?= $control['name'] ?></td>
                                <td class="text-center"><?= $control['qty'] ?></td>
                                <td><?= $control['travail'] ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div id="rapport-controle-technique" hidden></div>

<?= $view['slots']->start('javascripts') ?>
<!-- PrintJS -->
<script src="/assets/print.min.js"></script>
<script>
    function printControleTechnique() {
        const vehicleElt = document.querySelector('#vehicle');
        const vehicle = JSON.parse(vehicleElt.textContent);
        const maison = JSON.parse(document.querySelector('#maison').textContent);
        const controls = JSON.parse(document.querySelector('#controls').textContent);
        const controleTechniqueTemplate = document.querySelector('#rapport-controle-technique');
        let tbody = '';
        let table;
        const footer = `
            <div id="rapport-controle-technique-footer">
                <div class="text-right mt-5">Fait à Goma, ${(new Date()).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="text-right mt-3 font-weight-bold">${document.querySelector('[data-user]').dataset.user.trim()}</div>
            </div>
        `;

        controls.forEach((control, index, arr) => {
            tbody += `
                <tr>
                    <td class="text-center">${index + 1}</td>
                    <td>${control.name}</td>
                    <td class="text-center">${control.qty}</td>
                    <td>${control.travail}</td>
                </tr>
            `;
        });

        table = `
            <div class="border border-dark pb-2">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="font-weight-bold text-center">N°</th>
                            <th class="font-weight-bold">DESIGNATION</th>
                            <th class="font-weight-bold text-center">QTE</th>
                            <th class="font-weight-bold">TRAVAIL&nbsp;A&nbsp;EFFECTUER</th>
                        </tr>
                    </thead>
                    <tbody>${tbody}</tbody>
                </table>
            </div>
        `;

        controleTechniqueTemplate.innerHTML = table + footer;
        controleTechniqueTemplate.removeAttribute('hidden');

        printJS({
            printable: 'rapport-controle-technique',
            type: 'html',
            header: `
                <div id="rapport-controle-technique-logo">
                    ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" class="w-25">' : '<h2 class="w-25">' + maison['nomSociete'] + '</h2>'}
                </div>
                <h4 class="text-center font-weight-bold my-3 pb-1 border-bottom border-dark w-100">${document.querySelector('#fiche-travail-title').textContent}</h4>
                <div class="d-flex flex-row mb-3">
                    <table class="mr-5">
                        <tr><td>Genre</td><td>:</td><td class="font-weight-bold">${vehicle['genre']}</td></tr>
                        <tr><td>Marque</td><td>:</td><td class="font-weight-bold">${vehicle['marque']}</td></tr>
                        <tr><td>Modèle</td><td>:</td><td class="font-weight-bold">${vehicle['typeOuModele']}</td></tr>
                    </table>
                    <table class="ml-5">
                        <tr><td>Plaque</td><td>:</td><td class="font-weight-bold">${vehicle['numeroImmatriculation']}</td></tr>
                        <tr><td>Kilométrage</td><td>:</td><td class="font-weight-bold">${vehicle['kilometrage']}</td></tr>
                        <tr><td>Client</td><td>:</td><td class="font-weight-bold">${vehicle['nomClient']}</td></tr>
                    </table>
                </div>
            `,
            css: ['/public/build/app.css', '/assets/css/controle-technique.css']
        });

        controleTechniqueTemplate.setAttribute('hidden', 'hidden');
    }
</script>
<?= $view['slots']->stop() ?>
