<div class="header-to-print visually-hidden border mb-3 text-center">
    <div class="nom-entreprise text-center"><?= $maison['logo'] ? '<img src="../uploads/logos/'.$maison['logo'].'" class="w-25 mx-auto">' : $maison['nomSociete'] ?></div>
    <div class="documents-officiels"><?= 'RCCM : '.$maison['registreCommerce'].', ID Nat. : '.$maison['idNationnal'].', Num. Impôt : '.$maison['numImpot'].', Autorisation de Fonct. : '.$maison['autorisationFct'] ?></div>
    <div>Téléphone : <span class="telephone-entreprise"><?= $maison['telephone'] ?></span></div>
    <div>Facture N° <span class="numero-facture"></span></div>
    <div>Client : <span class="nom-client"></span></div>
</div>
