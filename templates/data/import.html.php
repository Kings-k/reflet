<?php $view->extend('layout.html.php') ?>

<div class="row">
    <div class="col-12">
        <form action="/data/import" method="post">
            <div class="d-flex justify-content-between align-items-center">
                <div class="flex-grow-1 mr-5">
                    Importer les donnees dans la table
                    <select class="select" name="table" id="table" data-filter="true">
                        <?php foreach($tables as $table): ?>
                            <option value="<?= $table ?>"<?= $table === 'client' ? ' selected' : '' ?>><?= $table ?></option>
                        <?php endforeach ?>
                    </select>
                </div>
                <div class="flex-grow-1">
                    Choisissez le fichier source
                    <input type="file" class="form-control" name="source-file" id="source-file" required>
                </div>
            </div>
            <input class="btn btn-primary my-3" type="submit" value="Importer">
        </form>
    </div>
</div>
