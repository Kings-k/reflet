<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="rapport-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script src="/assets/functions.js"></script>
    <script defer>
        const rapportDatatable = document.getElementById('rapport-datatable');
        const clotures = <?= json_encode($clotures) ?>;
        const entries = <?= json_encode($entries) ?>;
        const outflows = <?= json_encode($outflows) ?>;
        const spents = <?= json_encode($spents) ?>;
        const aggregation = groupArrayOfObjects(entries.concat(clotures).concat(outflows).concat(spents), 'createdAt');
        const rapport = [];
        let index = 0;

        for (date in aggregation) {
            if ('undefined' === typeof rapport[index]) {
                rapport.push({date, entries: 0, outflows: 0});
            }

            aggregation[date].forEach((item, idx) => {
                rapport[index][aggregation[date][idx].hasOwnProperty('amountDue') || aggregation[date][idx].hasOwnProperty('provenance') ? 'entries' : 'outflows'] += aggregation[date][idx]['amount'];
            });

            index++;
        }

        const rapportTableInstance = new mdb.Datatable(rapportDatatable, {
            columns: [
                { label: 'Date', field: 'date' },
                { label: 'Entrées', field: 'entries' },
                { label: 'Sorties', field: 'outflows' }
            ],
            rows: rapport.map(row => {
                return {
                    date: `${(new Date(row.date)).toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: 'numeric'})}`,
                    entries: row.entries.toFixed(2),
                    outflows: row.outflows.toFixed(2)
                }
            },
            { hover: true })
        },);

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            rapportTableInstance.search(e.target.value);
        });
    </script>
<?= $view['slots']->stop() ?>
