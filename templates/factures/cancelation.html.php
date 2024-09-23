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
    const invoices = <?= json_encode($invoices) ?>;
    const invoicesDatatable = document.getElementById('invoices-datatable');
    const spinner = document.querySelector('#spinner');

    const setActions = () => {
        document.getElementsByClassName('cancel-invoice').forEach(btn => {
            btn.addEventListener('click', () => {
                if (confirm('Voulez-vous vraiment annuler cette facture ?')) {
                    const id = Number.parseInt(btn.dataset.invoice, 10);
                    spinner.removeAttribute('hidden');
                    fetch(`${baseUrl}/annulerfacture`, {
                        method: 'POST',
                        body: JSON.stringify({invoiceId: id})
                    }).then(response => {
                        if (response.ok) {
                            response.text().then(resp => {
                                const { message, data } = JSON.parse(resp);
                                spinner.setAttribute('hidden', 'hidden');
                                showAlert(message, 'success');
                            });
                        } else {
                            console.error(response);
                        }
                    });
                }
            })
        })
    };

    invoicesDatatable.addEventListener('render.mdb.datatable', setActions);

    const invoicesTableInstance = new mdb.Datatable(invoicesDatatable, {
        columns: [
            { label: 'Date', field: 'dateFact' },
            { label: 'N° facture', field: 'id' },
            { label: 'Type', field: 'typeFacture' },
            { label: 'Client', field: 'nomClient' },
            { label: 'Montant', field: 'total' },
            { label: 'Action', field: 'action', sort: false },
        ],
        rows: invoices.map((row) => {
            return {
                ...row,
                dateFact: `${(new Date(row.dateFact.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}`,
                total: `${row.total.toFixed(2)} $`,
                action: `<button class="cancel-invoice btn border border-primary btn-floating btn-sm" data-invoice="${row.id}"><i class="fa fa-undo"></i></button>`
            };
        }),
    }, { hover: true });

    document.getElementById('datatable-search-input').addEventListener('input', (e) => {
        invoicesTableInstance.search(e.target.value);
    });
</script>
<?php $view['slots']->stop() ?>
