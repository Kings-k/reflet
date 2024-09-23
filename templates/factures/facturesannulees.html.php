<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card border border-primary shadow">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Rechercher une facture ...</label>
                </div>
                <div id="invoices-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script>
        const invoices = <?= json_encode($factures) ?>;
        const invoicesDatatable = document.getElementById('invoices-datatable');

        const invoicesTableInstance = new mdb.Datatable(invoicesDatatable, {
            columns: [
                { label: 'Date', field: 'dateFact' },
                { label: 'N° Facture', field: 'id' },
                { label: 'Client', field: 'nomClient' },
                { label: 'Montant', field: 'total' }
            ],
            rows: invoices.map(row => {
                return {
                    ...row,
                    dateFact: `${(new Date(row.dateFact.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}`,
                    total: `${row.total.toFixed(2)} $`
                }
            })
        }, { hover: true });

        document.getElementById('datatable-search-input').addEventListener('input', (e) => {
            invoicesTableInstance.search(e.target.value);
        });
    </script>
<?php $view['slots']->stop('javascripts') ?>
