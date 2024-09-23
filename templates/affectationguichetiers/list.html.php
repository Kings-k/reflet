<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/affectationsguichetiers/new') ?>
<?= $view['slots']->set('action_text', 'Nouvelle Affectation') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body datatable">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Agent</th>
                            <th scope="col">Guichet</th>
                            <th scope="col">Affecté(e) le</th>
                            <th scope="col">Réaffecté(e) le</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($affectationslist as $key => $affect) : ?>
                            <tr>
                                <td><?= $key + 1 ?></td>
                                <td>
                                    <a href="<?= '/affectationsguichetiers/'.$affect['id'] ?>"><?= $affect['username'] ?></a>
                                </td>
                                <td>
                                    <a href="<?= '/affectationsguichetiers/'.$affect['id'] ?>"><?= $affect['nomGuichet'] ?></a>
                                </td>
                                <td><?= $affect['dateAffectation']->format('d/m/Y') ?></td>
                                <td><?= isset($affect['dateReaffectation']) ? $affect['dateReaffectation']->format('d/m/Y') : '-' ?></td>
                                <td>
                                    <a href="#" data-delete="/affectationsguichetiers/<?= $affect['id'] ?>">
                                        <i class="fa fa-trash-alt text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?= $view['slots']->start('javascripts') ?>
<script src="/assets/remove-item.js" defer></script>
<?= $view['slots']->stop() ?>
