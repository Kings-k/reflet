<?php $view->extend('layout.html.php') ?>
<div class="row">
    <div class="col-md-8 mb-4">
        <div class="card shadow">
            <h5 class="card-header">Nouveau Client</h5>
            <div class="card-body">
                <form action="/clients/new" method="post">
                    <div class="form-outline">
                        <input type="text" name="nomClient" id="nomClient" class="form-control" required autofocus />
                        <label class="form-label" for="username">Noms</label>
                    </div>
                    <?php if (isset($violations['nomClient'])): ?>
                        <?php foreach ($violations['nomClient'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>

                    <div class="my-4">
                        <select type="text" name="sexe" id="sexe" class="select">
                            <option value="aucun">Aucun</option>
                            <option value="H">Homme</option>
                            <option value="F">Femme</option>
                        </select>
                        <label class="form-label select-label" for="fullName">Sexe</label>
                    </div>

                    <div class="my-4">
                        <select type="text" name="etatCivil" id="etatCivil" class="select">
                            <option value="aucun">Aucun</option>
                            <option value="celibataire">Celibataire</option>
                            <option value="marie">Marié(e)</option>
                            <option value="divorce">Divorcé(e)</option>
                            <option value="veuf">Veuf(ve)</option>
                        </select>
                        <label class="form-label select-label" for="address">Etat Civil</label>
                    </div>

                    <div class="form-outline my-4">
                        <input type="text" name="adressePhys" id="adressePhys" class="form-control" />
                        <label class="form-label" for="adressePhys">Adresse Physique</label>
                    </div>

                    <div class="form-outline my-4">
                        <input type="email" name="mail" id="mail" class="form-control" />
                        <label class="form-label" for="mail">Adresse Mail</label>
                    </div>

                    <div class="form-outline mt-2">
                        <input type="phone" name="telephone" id="telephone" class="form-control" />
                        <label class="form-label" for="telephone">Téléphone</label>
                    </div>
                    <?php if (isset($violations['telephone'])): ?>
                        <?php foreach ($violations['telephone'] as $violation): ?>
                            <div class="error-message text-danger mt-0 mb-4"><?= $violation['message'] ?></div>
                        <?php endforeach ?>
                    <?php endif ?>

                    <div class="form-outline my-4">
                        <input type="text" name="personneContact" id="personneContact" class="form-control" />
                        <label class="form-label" for="personneContact">Personne à Contacter</label>
                    </div>

                    <div class="my-4">
                        <select name="typeClient" id="typeClient" class="select">
                            <option value="physique">Physique</option>
                            <option value="morale">Morale</option>
                        </select>
                        <label class="form-label select-label" for="typeClient">Type</label>
                    </div>

                    <div class="my-4">
                        <select name="employeur" id="employeur" class="select" data-filter="true">
                            <option value="0" selected>Sélectionner un employeur</option>
                            <?php foreach ($moralClients as $clmoral) : ?>
                                <option value="<?= $clmoral->getNomClient() ?>">
                                    <?= $clmoral->getNomClient() ?>
                                </option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="employeur">Employeur</label>
                    </div>

                    <div class="my-4">
                        <select name="category" id="category" class="select" data-filter="true">
                            <option value="0" selected>Sélectionner une catégorie</option>
                            <?php foreach ($categories as $cate) : ?>
                                <option value="<?= $cate->getId() ?>">
                                    <?= $cate->getName() ?>
                                </option>
                            <?php endforeach ?>
                        </select>
                        <label class="form-label select-label" for="category">Catégorie</label>
                    </div>

                    <div class="form-outline my-4">
                        <input type="text" name="age" id="age" class="form-control" />
                        <label class="form-label" for="age">Age</label>
                    </div>

                    <div class="my-4">
                        <select name="femmeEnceinte" id="femmeEnceinte" class="select">
                            <option value="non-applicable">Non applicable</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                        </select>
                        <label class="form-label select-label" for="femmeEnceinte">Femme enceinte?</label>
                    </div>

                    <div class="form-outline my-4">
                        <input name="plainteMalade" id="plainteMalade" class="form-control" />
                        <label class="form-label" for="plainteMalade">Plainte</label>
                    </div> 

                    <div class="form-outline my-4">
                        <input name="parent" id="parent" class="form-control" />
                        <label class="form-label" for="parent">Noms Parent si enfant</label>
                    </div>

                    <input class="btn btn-primary float-right my-4" type="submit" value="Ajouter">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <h5>Ajoutés Récemment</h5>
        <br>
        <div class="list-group">
            <H6>PHYSIQUES</H6>
            <?php foreach ($latestClients as $client) :
                if ($client->getTypeClient() === "physique") {
            ?>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/clients/<?= $client->getId() ?>">
                        <span><?= $client->getNomClient() ?></span>
                    </a>
            <?php
                }

            endforeach ?>
            <br>
            <h6>MORALES</h6>
            <?php foreach ($latestClients as $client2) :
                if ($client2->getTypeClient() === "morale") {
            ?>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between" href="/clients/<?= $client2->getId() ?>">
                        <span><?= $client2->getNomClient() ?></span>
                    </a>
            <?php
                }

            endforeach ?>
        </div>
    </div>
</div>