<?php

$menus = [
    [
        'name' => 'Home',
        'icon' => 'home',
        'role' => 'ROLE_USER',
        'url' => '/dashboard',
    ],
    [
        'name' => 'Rapports',
        'icon' => 'folder',
        'role' => 'ROLE_REPORT',
        'children' => [
            // [
            //     'name' => 'Inventaire',
            //     'url' => '',
            //     'role' => 'ROLE_REPORT'
            // ],
            [
                'name' => 'Rapport général',
                'url' => '/rapports/rapport-general',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            [
                'name' => 'Ventes',
                'url' => '/rapportventes',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            [
                'name' => 'Dettes',
                'url' => '/dettes',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            [
                'name' => 'Dépenses',
                'url' => '/rapportdepenses',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            [
                'name' => 'Clotures',
                'url' => '/rapportclotures',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            [
                'name' => 'Stock',
                'url' => '/stock/approvisionnements',
                'role' => 'ROLE_REPORT'
            ],
            [
                'name' => 'Valorisation stock',
                'url' => '/stock/valorisation',
                'role' => 'ROLE_REPORT'
            ],
            [
                'name' => 'Factures annulées',
                'url' => '/facturesannulees',
                'role' => 'ROLE_REPORT_FINANCE'
            ],
            // [
            //     'name' => 'Résultat',
            //     'url' => '',
            //     'role' => 'ROLE_REPORT_FINANCE'
            // ],
            // [
            //     'name' => 'Journal de Caisse',
            //     'url' => '',
            //     'role' => 'ROLE_REPORT_FINANCE'
            // ],
        ]
    ],
    [
        'name' => 'Factures',
        'icon' => 'money-bill',
        'role' => 'ROLE_FINANCEPOS',
        'children' => [
            [
                'name' => 'Annulation',
                'url' => '/annulerfacture',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Duplicata',
                'url' => '/facturesclient',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Paiement',
                'url' => '',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Reduction',
                'url' => '',
                'role' => 'ROLE_FINANCEPOS'
            ],
        ]
    ],
    [
        'name' => 'Clientele',
        'icon' => 'users',
        'role' => 'ROLE_CLIENT',
        'children' => [
            [
                'name' => 'Clients',
                'url' => '/clients',
                'role' => 'ROLE_CLIENT'
            ],
            [
                'name' => 'Cartes Fidelite',
                'url' => '/clientscard',
                'role' => 'ROLE_CLIENT'
            ],
            [
                'name' => 'Compte Courant',
                'url' => '/comptecourant',
                'role' => 'ROLE_COMPTE_COURANT'
            ],
            [
                'name' => 'Bonus',
                'url' => '/bonus',
                'role' => 'ROLE_BONUS'
            ],
            [
                'name' => 'Cautions',
                'url' => '/cautions',
                'role' => 'ROLE_CAUTION'
            ]
        ]
    ],
    [
        'name' => 'Véhicules',
        'icon' => 'car',
        'role' => 'ROLE_VEHICULE',
        'children' => [
            [
                'name' => 'Véhicules',
                'url' => '/vehicules',
                'role' => 'ROLE_VEHICULE'
            ],
            [
                'name' => 'Controle Technique',
                'url' => '/licences',
                'role' => 'ROLE_CONTROLE'
            ],
            [
                'name' => 'Expertise',
                'url' => '/expertises',
                'role' => 'ROLE_EXPERTISE'
            ], 
            [
                'name' => 'Fiche de Travail',
                'url' => '/fichestravail',
                'role' => 'ROLE_FICHETRAVAIL'
            ],
        ]
    ],
    [
        'name' => 'Caisse',
        'icon' => 'money-check',
        'role' => 'ROLE_FINANCEPOS',
        'children' => [
            [
                'name' => 'Réception Clotures',
                'url' => '/clotures',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Autres Entrées',
                'url' => '/entries',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Journal de Caisse',
                'url' => '',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Sortie Caisse',
                'url' => '/sortiecash',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Dépenses',
                'url' => '/depenses',
                'role' => 'ROLE_FINANCEPOS'
            ],
        ]
    ],
    [
        'name' => 'Logistique',
        'icon' => 'cubes',
        'role' => 'ROLE_GESTOCKPOS',
        'children' => [
            [
                'name' => 'Approvisionnement',
                'url' => '/depots/approvisionnement',
                'role' => 'ROLE_GESTOCKPOS'
            ],
            [
                'name' => 'Demande d\'appro',
                'url' => '/depots/demandeapprovisionnement',
                'role' => 'ROLE_GESTOCKPOS'
            ],
            [
                'name' => 'Bon de livraison',
                'url' => '/depots/blivraison',
                'role' => 'ROLE_GESTOCKPOS'
            ],
            [
                'name' => 'Destokage',
                'url' => '/depots/destockage',
                'role' => 'ROLE_GESTOCKPOS'
            ],
            [
                'name' => 'Fiche de stock',
                'url' => '/fichestock',
                'role' => 'ROLE_GESTOCKPOS'
            ]
        ]
    ],
    [
        'name' => 'Configurations',
        'icon' => 'tools',
        'role' => 'ROLE_SETTINGS',
        'children' => [
            [
                'name' => 'Unités de mesure',
                'url' => '/uom',
                'role' => 'ROLE_UOM',
            ],
            [
                'name' => 'Catégories',
                'url' => '/categories',
                'role' => 'ROLE_CATEGORY'
            ],
            [
                'name' => 'Catégories clients',
                'url' => '/categorieclient',
                'role' => 'ROLE_CATEGORY'
            ],
            [
                'name' => 'Service/Article',
                'url' => '/services',
                'role' => 'ROLE_SERVICE'
            ],
            [
                'name' => 'Dépôts',
                'url' => '/depots',
                'role' => 'ROLE_DEPOT'
            ],
            [
                'name' => 'SUCCURSALES',
                'url' => '/pos',
                'role' => 'ROLE_POS'
            ],
            [
                'name' => 'Utilisateurs',
                'url' => '/users',
                'role' => 'ROLE_CREATE_USER'
            ],
            [
                'name' => 'Affectation des agents',
                'url' => '/affectations',
                'role' => 'ROLE_AFFECTATION'
            ],
            [
                'name' => 'Guichets',
                'url' => '/guichets',
                'role' => 'ROLE_GUICHET'
            ],
            [
                'name' => 'Services PV',
                'url' => '/pv',
                'role' => 'ROLE_FINANCEPOS'
            ],
            [
                'name' => 'Affectation guichetiers',
                'url' => '/affectationsguichetiers',
                'role' => 'ROLE_GUICHET'
            ],
            [
                'name' => 'Plan de comptes',
                'url' => '/plancomptes/new',
                'role' => 'ROLE_COMPTES'
            ],
            [
                'name' => 'Taux du jour',
                'url' => '/taux/new',
                'role' => 'ROLE_TAUX'
            ],
            [
                'name' => 'Maison',
                'url' => "/maisons",
                'role' => 'ROLE_ADMIN'
            ],
            [
                'name' => 'SMS',
                'url' => "/sms/new",
                'role' => 'ROLE_GUICHET'
            ]
        ]
    ],
    [
        'name' => 'Data',
        'icon' => 'database',
        'role' => 'ROLE_DATA',
        'children' => [
            [
                'name' => 'Import data',
                'url' => '/data/import',
                'role' => 'ROLE_DATA',
            ],
            [
                'name' => 'Export data',
                'url' => '/data/export',
                'role' => 'ROLE_DATA',
            ]
        ]
    ]
];

//print_r($menu);
?>

<div id="orka-sidenav" class="sidenav sidenav-primary ps" role="navigation" data-close-on-esc="false" data-position="fixed" data-focus-trap="false" data-color="primary" data-mode="side" data-hidden="false" data-accordion="true" data-scroll-container="#scroll-container" style="width: 240px; height: 100%; position: fixed; transition: all 0.3s linear 0s; transform: translateX(0%);">
    <div class="navbar navbar-light bg-light flex-md-nowrap px-0 mb-3 shadow justify-content-center shadow" style="height: 58px">
        <a class="navbar-brand px-3 mx-0 ripple d-flex justify-content-center" href="/dashboard" data-ripple-color="primary">
            <!--<img id="ORKA-logo" src="/assets/images/icons.png" alt="ORKA Logo" draggable="false">-->
            <span>REFLET</span>
        </a>
    </div>

    <div id="scroll-container" class="border-bottom">
        <ul class="sidenav-menu">
            <?php foreach ($menus as $idx => $menu) : ?>
                <?php if ($view['security']->isGranted($menu['role'])) : ?>
                    <?php if (!isset($menu['children'])) : ?>
                        <li class="sidenav-item">
                            <a href="<?= $menu['url'] ?>" class="sidenav-link ripple-surface" role="button">
                                <i class="fas fa-<?= $menu['icon'] ?> fa-fw mr-3"></i>
                                <span><?= $menu['name'] ?></span>
                            </a>
                        </li>
                    <?php else : ?>
                        <li class="sidenav-item">
                            <a href="#sidenav-collapse-<?= $idx ?>" class="sidenav-link ripple-surface ripple-surface-primary" data-toggle="collapse" role="button">
                                <i class="fas fa-<?= $menu['icon'] ?> fa-fw mr-3"></i>
                                <span><?= $menu['name'] ?></span>
                                <i class="fas fa-angle-down rotate-icon" style="transform: rotate(180deg);"></i>
                            </a>
                            <ul id="sidenav-collapse-<?= $idx ?>" class="sidenav-collapse show collapse">
                                <?php foreach ($menu['children'] as $submenu) : ?>
                                    <?php if ($view['security']->isGranted($submenu['role'])) : ?>
                                    <li class="sidenav-item">
                                        <a href="<?= $submenu['url'] ?>" class="sidenav-link ripple-surface"><?= $submenu['name'] ?></a>
                                    </li>
                                    <?php endif ?>
                                <?php endforeach ?>
                            </ul>
                        </li>
                    <?php endif ?>
                <?php endif ?>
            <?php endforeach ?>
        </ul>
    </div>

    <div class="text-center" style="position: absolute; bottom: 0; left: 0; right: 0">
        <hr class="mt-0 pt-3" style="opacity: 0">
        <p class="w-100 mx-auto">
            <a href="http://www.nalediservices.cd" class="small text-dark">
                &copy;&nbsp;<span><?= (new DateTime('now'))->format('Y') ?>,&nbsp;</span>Naledi Services Sarl
            </a>
        </p>
    </div>
</div>
