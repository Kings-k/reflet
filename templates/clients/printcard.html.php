<?php $view->extend('layout.html.php') ?>
<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Impression Carte de Fidelite</h5>
            <h6><span onclick="printelements('divtoprint')"><i class="fas fa-print"></i></span></h6>
            <div class="card-body" id='divtoprint'>
                <?= include('template/header-to-print.html.php')  ?>
                <?= $datasent  ?>
            </div>
        </div>
    </div>
</div>