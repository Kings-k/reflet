<?php $view->extend('layout.html.php') ?>

<?php $view['slots']->start('stylesheets') ?>
<style>
    .icon-image {
        width: 25px;
    }
</style>
<?php $view['slots']->stop() ?>

<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Déposer une caution</h5>
            <div class="card-body">
                <form action="/cautions/new" method="post">
                    <div>
                        <select name="client" id="client" class="select" data-filter="true" required>
                            <option value="0">Choisir un client...</option>
                            <?php foreach ($clients as $client): ?>
                                <option value="<?= $client->getId() ?>"><?= $client->getNomClient() ?></option>
                            <?php endforeach ?>
                        </select>
                        <label for="client" class="form-label select-label">Client</label>
                    </div>
                    <?php if (isset($violations['client'])): ?>
                        <?php foreach ($violations['client'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <div class="form-outline mt-4">
                        <input type="number" name="amount" id="amount" class="form-control" min="0" step="0.00001" required>
                        <label for="amount" class="form-label">Montant</label>
                    </div>
                    <?php if (isset($violations['amount'])): ?>
                        <?php foreach ($violations['amount'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>
                    <input class="btn btn-primary float-right my-2 mr-0" type="submit" value="Déposer">
                </form>
            </div>
        </div>
    </div>
</div>
