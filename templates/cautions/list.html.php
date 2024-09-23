<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/cautions/new') ?>
<?= $view['slots']->set('action_text', 'Déposer une caution') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="cautions-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script defer>
        const cautionsDatatable = document.getElementById('cautions-datatable');
        const cautions = <?= json_encode($cautions) ?>;

        const cautionsTableInstance = new mdb.Datatable(cautionsDatatable, {
            columns: [
                { label: 'Client', field: 'nomClient' },
                { label: 'Date de depot', field: 'date' },
                { label: 'Montant (en $)', field: 'amount' },
                { label: 'Utilisé (en $)', field: 'amountUsed' }
            ],
            rows: cautions.map(row => {
                return {
                    ...row,
                    date: (new Date(row.createdAt.date)).toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: 'numeric'})
                }
            },
            { hover: true })
        },);

        // const setActions = (e) => {
        //     e.currentTarget.querySelectorAll('tbody > tr').forEach((rowElt, idx) => {
        //         rowElt.style.cursor = 'pointer';
        //         rowElt.querySelectorAll('td:last-child > a').forEach(btn => {
        //             const path = btn.dataset.delete, entityName = btn.parentNode.parentNode.querySelector('td:nth-of-type(1)').textContent.trim();
        //             btn.addEventListener('click', () => {
        //                 if (confirm(`Voulez-vous vraiment supprimer ${entityName} ?`)) {
        //                     fetch(`${baseUrl}${path}/delete`, {
        //                         method: 'DELETE'
        //                     })
        //                     .then(resp => {
        //                         if (resp.ok) {
        //                             resp.text().then(data => {
        //                                 showAlert(JSON.parse(data), 'success');
        //                             });
        //                         }
        //                     });
        //                 }
        //             });
        //         });
        //     });
        // };

        // cautionsDatatable.addEventListener('render.mdb.datatable', setActions);

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            cautionsTableInstance.search(e.target.value);
        });
    </script>
    <script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
