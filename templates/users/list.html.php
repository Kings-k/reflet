<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/users/new') ?>
<?= $view['slots']->set('action_text', 'Ajouter utlisateur') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-header">
                <div class="form-outline">
                    <input type="text" class="form-control" id="users-search-input">
                    <label for="users-search-input" class="form-label">Recherche ...</label>
                </div>
            </div>
            <div class="card-body datatable" id="users-datatable"></div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script>
    const users = <?= json_encode($users) ?>;
    const usersDatatable = document.querySelector('#users-datatable');
    const usersDatatableInstance = new mdb.Datatable(usersDatatable, {
        columns: [
            { label: 'Nom d\'utilisateur', field: 'username' },
            { label: 'Nom complet', field: 'fullName' },
            { label: 'Type', field: 'type' },
            { label: 'Adresse e-mail', field: 'email' },
            { label: 'Téléphone', field: 'telephone' }
        ]
    }, { loading: true });

    document.getElementById('users-search-input').addEventListener('input', (e) => {
        usersDatatableInstance.search(e.target.value);
    });

    usersDatatableInstance.update({
        rows: users.map(user => {
            return {
                ...user,
                username: `<a href="/users/${user.id}">${user.username}</a>`
            }
        })
    }, { loading: false, hover: true });
</script>
<?= $view['slots']->stop() ?>
