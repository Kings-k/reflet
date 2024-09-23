<?php $view->extend('controle-expertise.html.php') ?>

<?php $view['slots']->start('vehicle-data') ?>
    <div id="vehicle" data-license-id="<?= $licenseId ?>" data-db-category="<?= $category ?>" hidden><?= json_encode($vehicule) ?></div>
<?php $view['slots']->stop() ?>

<?php $view['slots']->start('process-type') ?>Expertise de vehicule<?php $view['slots']->stop() ?>
