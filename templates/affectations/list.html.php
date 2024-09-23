<?php $view->extend('layout.html.php') ?>

<?= $view['slots']->set('action_path', '/affectations/new') ?>
<?= $view['slots']->set('action_text', 'Affecter utilisateur') ?>

<div class="row">
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Agent</th>
                            <th scope="col">Fonction</th>
                            <th scope="col">Affecté(e) le</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($affectationslist as $key => $affectationsGroup) : ?>
                        <tr>
                            <td colspan="5" class="text-center text-uppercase table-secondary"><?= $key ?></td>
                        </tr>
                            <?php foreach ($affectationsGroup as $idx => $affectation) : ?>
                            <tr>
                                <td><?= $idx + 1 ?></td>
                                <td><a href="/affectations/<?= $affectation->getId() ?>"><?= trim($affectation->getUser()->getFullName()) ? $affectation->getUser()->getFullName() : $affectation->getUser()->getUsername() ?></a></td>
                                <td>
                                    <?php switch ($affectation->getUser()->getType()) :
                                        case 'admin':
                                            echo "Admin Système";
                                            break;
                                        case 'topmanager':
                                            echo "Top Manager";
                                            break;
                                        case 'finance':
                                            echo "Manager Finance";
                                            break;
                                        case 'geststock':
                                            echo "Manager Stock";
                                            break;
                                        case 'reception':
                                            echo "Réceptionniste";
                                            break;
                                        case 'managerpos':
                                            echo "Manager Point de vente";
                                            break;
                                        case 'financepos':
                                            echo "Financier Point de vente";
                                            break;
                                        case 'gestockpos':
                                            echo "Gestock Point de vente";
                                            break;
                                        case 'guichetier':
                                            echo "Guichetier";
                                            break;
                                        case 'super_guichetier':
                                            echo "Super Guichetier";
                                            break;
                                        case 'technicien':
                                            echo "Technicien";
                                            break;
                                        case 'receptionpos':
                                            echo "Réceptionniste Point de vente";
                                            break;
                                    endswitch ?>
                                </td>
                                <td><?= $affectation->getCreatedAt()->format('d/m/Y') ?></td>
                                <td>
                                    <a href="#" data-delete="/affectations/<?= $affectation->getId() ?>">
                                        <i class="far fa-trash-alt text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                            <?php endforeach ?>
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
