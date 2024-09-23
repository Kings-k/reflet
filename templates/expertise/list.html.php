<?php $view->extend('layout.html.php') ?>

<?php if($typeuser=="financepos"){ $view['slots']->set('action_path', '/expertise/new');
$view['slots']->set('action_text', 'Nouvelle expertise'); }?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="form-outline mb-4">
                    <input type="text" class="form-control" id="datatable-search-input" />
                    <label class="form-label" for="datatable-search-input">Recherche ...</label>
                </div>
                <div id="licenses-datatable"></div>
            </div>
        </div>
    </div>
</div>

<?php $view['slots']->start('javascripts') ?>
    <script defer>
        const licensesDatatable = document.getElementById('licenses-datatable');
        let licenses = <?= json_encode($expertises) ?>;

        const loadFromServer = async (query) => {
            const q = query.trim();
            const url = `${baseUrl}/expertises?search=${encodeURI(q)}&limit=200`;
            let response = await fetch(url, {
                headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
            });
            let data = await response.json();

            return data.data;
        };

        const licensesTableInstance = new mdb.Datatable(licensesDatatable, {
            columns: [
                { label: 'Action', field: 'action' },
                { label: 'Voiture', field: 'voiture' },
                { label: 'Propriétaire', field: 'nomClient' },
                { label: 'Création', field: 'createdAt' },
                { label: 'Expiration', field: 'prochainevisite' }
            ],
            rows: updateRows(licenses)
        }, { loading: false });

        function updateRows(licenses) {
            return licenses.map(row => {
                const actionIcon = null === row.invoiceId
                    ? `<a href="/expertises/addissues/${row.id}" class="text-primary fas fa-2x fa-folder-open"></a>`
                    : `<a href="/expertises/updateissues/${row.id}" class="text-secondary fas fa-2x fa-edit"></a>`
                ;
                return {
                    ...row,
                    action: actionIcon,
                    voiture: `${row.numeroImmatriculation} (${row.genre})`,
                    createdAt: `${(new Date(row.createdAt.date)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}`
                }
            }, { hover: true })
        }

        function loadData(value) {
            const filteredLicenses = licenses.filter(license => license.nomClient.trim().toLowerCase().indexOf(value) > -1);
            const updateTable = (data) => {
                licensesTableInstance.update({ rows: updateRows(data) }, { loading: false });
            }
            loadFromServer(value).then((data) => {
                if (filteredLicenses.length < data.length) {
                    updateTable(data);
                }
                licenses = data;
            });
            updateTable(filteredLicenses);
        }

        document.getElementById('datatable-search-input').addEventListener('input', (event) => {
            const value = event.currentTarget.value;
            if (value.length > 1) {
                licensesTableInstance.update(null, { loading: true });
                loadData(value);
            }
            // licensesTableInstance.search(event.target.value);
        });

        // licensesTableInstance.update({
        //     rows: updateRows(licenses)
        // }, { loading: false });
    </script>
<?= $view['slots']->stop() ?>
