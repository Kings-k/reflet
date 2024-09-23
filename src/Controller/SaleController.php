<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Bonus;
use App\Entity\CategorieClient;
use App\Entity\Caution;
use App\Entity\Client;
use App\Entity\Cloture;
use App\Entity\CompteSortie;
use App\Entity\DetailsFacture;
use App\Entity\Dettes;
use App\Entity\Facture;
use App\Entity\Facturedateretrait;
use App\Entity\PayementDette;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\Service;
use App\Entity\User;
use App\Entity\UserGuichet;
use App\Entity\Licence;
use App\Entity\Taux;
use App\Entity\Vehicule;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class SaleController extends AbstractController
{
    private $travailId;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack)
    {
        parent::__construct($securityChecker, $requestStack);
    }

    /**
     * @Route("/sales", name="sales")
     */
    public function index(): Response
    {
        return $this->renderTemplate('sales/index.html.php');
    }

    /**
     * @Route("/sales/new", name="new_sale")
     */
    public function sale(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $sr = $em->getRepository(Service::class);
        $pdr = $em->getRepository(PointOfSaleDetails::class);
        $dr = $em->getRepository(PointOfSale::class);
        $ag = $em->getRepository(UserGuichet::class);

        $affectationGuichetier = $ag->findOneBy(['user' => $this->getUser()]);

        if (is_null($affectationGuichetier)) {
            $guichet = null;
            $pos = null;
        } else {
            $guichet = $affectationGuichetier->getGuichet();
            $pos = is_null($guichet) ? null : $guichet->getPointOfSale();
        }

        if ($request->isMethod('POST')) {
            $cr = $em->getRepository(Client::class);
            $lc = $em->getRepository(Licence::class);
            $fr = $em->getRepository(Facture::class);
            $data = json_decode(file_get_contents('php://input'), true);

            $licenseId = $data['licenseId'];
            $total = $data['total'];
            $workforce = $data['workforce'];
            $workforcePercent = $data['workforcePercent'];
            $discount = $data['discount'];
            $amountPaid = $data['amountPaid'];
            $isHoldOrProforma = in_array($data['saleType'], ['proforma', 'hold'], true);
            $sourceInvoice = $fr->find(intval($data['sourceInvoiceId']));
            $sourceIsHoldOrProformaCtrl = !is_null($sourceInvoice) && in_array($sourceInvoice->getTypeFacture(), ['proforma_ctrl', 'hold']);

            $facture = $sourceIsHoldOrProformaCtrl ? $sourceInvoice : new Facture();

            if (!$isHoldOrProforma) {
                $facture->setPaymentMode($data['paymentMode'] === 1 ? 'cash' : ($data['paymentMode'] === 2 ? 'bonus' : 'caution'));

                if (in_array($data['paymentMode'], [2, 3])) {
                    $entities = ($data['paymentMode'] === 2 ? $em->getRepository(Bonus::class) : $em->getRepository(Caution::class))
                        ->createQueryBuilder('b')
                        ->where('c.id = :clientId')
                        ->andWhere('b.amount > b.amountUsed')
                        ->innerJoin('b.client', 'c')
                        ->setParameter('clientId', intval($data['client']))
                        ->getQuery()
                        ->getResult()
                    ;

                    $currentTotal = $total;
                    $entityCount = count($entities);

                    while ($currentTotal > 0 && $entityCount > 0) {
                        $currentEntity = $entities[$entityCount - 1];
                        $amount = $currentEntity->getAmount();
                        $amountUsed = $currentEntity->getAmountUsed();
                        $unusedAmount = $amount - $amountUsed;
                        if ($currentTotal >= $unusedAmount) {
                            $currentEntity->setAmountUsed($amount);
                            $currentTotal -= $unusedAmount;
                        } else {
                            $currentEntity->setAmountUsed($amountUsed + $currentTotal);
                            $currentTotal = 0;
                        }
                        $entityCount -= 1;
                    }
                }
            }

            $facture->setTotal($total);
            $facture->setDiscount($discount);
            $facture->setWorkforce($workforce ?? null);
            $facture->setWorkforcePercent($workforcePercent ?? null);
            $facture->setAmountPaid($amountPaid);
            $facture->setTypeFacture($data['saleType']);
            $facture->setEditedBy($this->getUser());

            // Si client existe
            if (isset($data['client'])) {
                $client = $cr->find(intval($data['client']));
                $facture->setClient($client ?? null);
            } else {
                $facture->setClient(null);
            }

            // si creee a partir d'une facture proforma CTRL
            // if(isset($data['licenseId']) && !empty($data['licenseId']) && !in_array($data['saleType'], ['proforma', 'hold'], true)){
            if (isset($licenseId) && 0 < $licenseId && !$isHoldOrProforma) {
                $licence = $lc->find($licenseId);
                $facture->setLicence($licence ?? null);

                // creer fiche de travail
                $vehicule = $licence->getVehicule()->getId();
                $doneby = $this->getUser()->getId();

                $newTravail = $this->db->getPdo()->query("INSERT INTO fiche_travail VALUES(null,$vehicule,$doneby,null,CURRENT_DATE())");
                $this->travailId = $this->db->getPdo()->LastInsertId();
            }

            if ($data['saleType'] === 'credit' && isset($data['client'])) {
                $dette = new Dettes();
                $debtAmount = $total + $workforce - $discount;
                if ($amountPaid > 0) {
                    $paiementDette = new PayementDette();
                    $paiementDette->setMontantPaye($amountPaid);
                    $dette->addPayementdette($paiementDette);
                    $this->getUser()->addPayementdette($paiementDette);
                    $em->persist($paiementDette);
                }
                $date = trim($data['date']); // $data['date'] est sous la forme '2021-10-15T19:30'
                $entry = new Facturedateretrait();
                $entry->setDateRetrait(new \DateTime($date));
                $facture->addFacturedateretrait($entry);
                $dette->setFacture($facture);
                $dette->setStatut($amountPaid > 0 ? 1 : 0);
                $dette->setAmount($debtAmount);
                $dette->setSold($debtAmount - $amountPaid);
                $dette->setEcheance($entry->getDateRetrait());
                $this->getUser()->addDette($dette);
                $dette->setClient($cr->find(intval($data['client'])));
                $em->persist($entry);
                $em->persist($dette);
            }

            if ($sourceIsHoldOrProformaCtrl) {
                foreach ($facture->getPointOfSaleHistories() as $ph) {
                    $ph->getService()->removePointOfSaleHistory($ph);
                    $facture->removePointOfSaleHistory($ph);
                    $pos->removePointOfSaleHistory($ph);
                }
                foreach ($facture->getDetailsFactures() as $df) {
                    // $df->getService()->removeDetailsFacture($df);
                    $facture->removeDetailsFacture($df);
                    $pos->removeDetailsFacture($df);
                }
                $facture->setDateFact(new \DateTime());
            }

            foreach ($data['details']['articles'] as $detailId => $pd) {
                $qty = intval($pd['nbUnites']);
                $detailsFacture = in_array($data['saleType'], ['cash', 'credit'], true) ? new PointOfSaleHistory() : new DetailsFacture();

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $detail = $pdr->find(intval($detailId));

                    if ($qty > $detail->getQuantity()) {
                        return new ApiResponse(sprintf("La quantité en \"%s\" demandée n'est pas disponible en stock.", $detail->getService()->getName()), null, [], 500);
                    }

                    if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                        $detailsFacture->setMotifDestockage('vente_'.$data['saleType']);
                    }

                    $detailsFacture->setQuantity(-$qty);
                    $detailsFacture->setPoints(abs($qty));
                } else {
                    $detailsFacture->setQty($qty);
                }

                $detailsFacture->setPrice(floatval($pd['selectedPrice']));
                $detailsFacture->setPos($pos);

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $detailsFacture->setGain($detailsFacture->getPrice() * $qty);
                    $facture->addPointOfSaleHistory($detailsFacture);
                } else {
                    $facture->addDetailsFacture($detailsFacture);
                }

                $service = $sr->findOneBy(['name' => $pd['name']]);

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $service->addPointOfSaleHistory($detailsFacture);
                    $pos->addPointOfSaleHistory($detailsFacture);
                } else {
                    $service->addDetailsFacture($detailsFacture);
                    $pos->addDetailsFacture($detailsFacture);
                }

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $detail->setQuantity($detail->getQuantity() - $qty);
                    $detail->setValue($detail->getValue() - $qty * $detailsFacture->getPrice());
                }

                $em->persist($detailsFacture);
            }

            foreach ($data['details']['services'] as $id => $serv) {
                $qty = intval($serv['nbUnites']);
                $service = $sr->find(intval($id));
                $observation = 'aucune';

                if ($licenseId > 0 && !$isHoldOrProforma) {

                    $cl=$this->db->getPdo()->prepare("SELECT client_id FROM vehicule V INNER JOIN licence L ON V.id=L.vehicule_id WHERE L.id=?");
                    $cl->execute(array($licenseId)); $data3=$cl->fetch(); $client=$data3['client_id'];

                    $obs=$this->db->getPdo()->prepare("SELECT observation FROM controle_technique WHERE licence_id=? AND service_id=?");
                    $obs->execute(array($licenseId,$id));

                    if ($obs->rowCount() > 0) {
                        $ligne=$obs->fetch();
                        $observation=$ligne['observation'];
                    }

                    $insert=$this->db->getPdo()->prepare("INSERT INTO details_fiche_travail VALUES (null,?,?,?,?,?)");
                    $insert->execute(array($id,$this->travailId,$client,$qty,$observation));
                }

                $detailsFacture = in_array($data['saleType'], ['cash', 'credit'], true) ? new PointOfSaleHistory() : new DetailsFacture();

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $detailsFacture->setMotifDestockage('vente_'.$data['saleType']);
                    $detailsFacture->setQuantity($qty);
                    $detailsFacture->setPoints(abs($qty));
                } else {
                    $detailsFacture->setQty($qty);
                }

                $detailsFacture->setPrice(floatval($serv['selectedPrice']));
                $detailsFacture->setPos($pos);

                if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                    $facture->addPointOfSaleHistory($detailsFacture);
                    $service->addPointOfSaleHistory($detailsFacture);
                    $pos->addPointOfSaleHistory($detailsFacture);
                } else {
                    $facture->addDetailsFacture($detailsFacture);
                    $service->addDetailsFacture($detailsFacture);
                }

                $em->persist($detailsFacture);
            }

            $em->persist($facture);

            $client = $facture->getClient();
            $nbSalesBonus = $pos->getNbSalesBonus();
            $em->flush();

            if (in_array($data['saleType'], ['cash', 'credit'], true)) {
                $bonuses = (null !== $client && $data['paymentMode'] === 1 && $nbSalesBonus > 0) ? $this->grantBonuses($client->getId(), $nbSalesBonus) : [];
            } else {
                $bonuses = [];
            }

            $em->flush();

            $totalBonuses = 0;
            $totalCautions = 0;

            if ($currentClient = $facture->getClient()) {
                foreach ($currentClient->getBonuses()->toArray() as $bonus) {
                    $totalBonuses += $bonus->getAmount() - $bonus->getAmountUsed();
                }

                foreach ($currentClient->getCautions()->toArray() as $caution) {
                    $totalCautions += $caution->getAmount() - $caution->getAmountUsed();
                }
            }

            return new JsonResponse([
                'invoiceId' => $facture->getId(),
                'invoice' => ['total' => $facture->getTotal(), 'discount' => $facture->getDiscount(), 'amountPaid' => $facture->getAmountPaid()],
                'clientId' => (null !== $client ? $client->getId() : null),
                'totalBonuses' => $totalBonuses,
                'totalCautions' => $totalCautions,
                'nbSalesBonus' => $nbSalesBonus,
                'bonuses' => $bonuses
            ]);
        }

        $qb = $pdr->createQueryBuilder('d');
        $limitStr = $request->get('limit');

        $limit = isset($limitStr) && is_string($limitStr) ? intval($limitStr) : 100;

        $articles = $qb->select('d.id', 'd.codeBars', 's.id as serviceId', 's.name', 's.type', 'd.quantity', 's.unitPrice', 's.deflatedPrice', 's.wholesalePrice', 'p.id as depotId', 'p.name as depotName', 'c.name as category', 's.photo', 's.bonusApplicable')
            ->where('p = :pos')
            ->andWhere('s.type = 2')
            ->andWhere($qb->expr()->gt('d.quantity', 0))
            ->innerJoin('d.pointOfSale', 'p')
            ->innerJoin('d.service', 's')
            ->innerJoin('s.category', 'c')
            ->setParameter('pos', $pos)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

        $rawServices = [];
        $posServices = $pos->getServices();
        $count = count($posServices);
        $max = $count < $limit ? $count : $limit;

        if ($count > 0) {
            for ($i = 0; $i < $max; $i++) {
                $rawService = $sr->createQueryBuilder('s')
                    ->select('s.id as serviceId', 's.name', 's.type', 's.unitPrice', 's.deflatedPrice', 's.wholesalePrice', 'c.name as category', 's.photo', 's.bonusApplicable')
                    ->where('s.type = 1')
                    ->andWhere('s.id = :posServiceId')
                    ->setParameter('posServiceId', $posServices[$i]->getId())
                    ->innerJoin('s.category', 'c')
                    ->getQuery()
                    ->getOneOrNullResult()
                ;
                if ($rawService !== null) {
                    $rawServices[] = $rawService;
                }
            }
        }

        $services = array_merge($articles, $rawServices);

        $categories = $sr
            ->createQueryBuilder('s')
            ->select('c.id', 'c.name')
            ->innerJoin('s.category', 'c')
            ->getQuery()
            ->getResult()
        ;
        $uniqueCategories = [];

        $cats = $em->getRepository(CategorieClient::class)->findAll();
        $discountables = [];

        if (count($cats) > 0) {
            $tempDiscountables = [];
            $tempDiscs = [];
            foreach ($cats as $cat) {
                $discounts = $cat->getDiscountables()->toArray();
                if (count($discounts) > 0) {
                    $tempDiscountables = array_merge($tempDiscountables, $discounts);
                }
            }
            foreach ($tempDiscountables as $service) {
                $tempDiscs[] = $service->getId();
            }
            $tempDiscs = array_unique($tempDiscs);
            foreach ($tempDiscs as $id) {
                $discountables[] = $id;
            }
        }

        foreach ($categories as $category) {
            if (!in_array($category, $uniqueCategories)) {
                $uniqueCategories[] = $category;
            }
        }

        $clients = $em->createQuery("SELECT c.id, c.nomClient, c.sexe, c.etatCivil, c.personneContact, c.adressePhys, c.telephone, c.mail, c.typeClient, c.employeur, cat.id AS categoryId, cat.name as categoryName, cat.discountApplicable, (SELECT COUNT(f.id) FROM App\Entity\Facture f WHERE f.client = c) AS totalFactures, (SELECT SUM(b.amount - b.amountUsed) FROM App\Entity\Bonus b WHERE b.client = c) AS totalBonus, (SELECT SUM(ca.amount - ca.amountUsed) FROM App\Entity\Caution ca WHERE ca.client = c) AS totalCaution FROM App\Entity\Client c INNER JOIN c.category AS cat ORDER BY c.nomClient")->getResult();

        if ($request->isXmlHttpRequest()) {
            return new ApiResponse('', ['clients' => $clients, 'services' => $services, 'categories' => $uniqueCategories], [], 200);
        }

        $maison = $em
            ->createQuery("SELECT m.logo, m.nomSociete, m.registreCommerce, m.idNationnal, m.numImpot, m.autorisationFct, m.adressePhysique, m.telephone, m.mail, m.site FROM App\Entity\Maison m")
            ->getOneOrNullResult()
        ;

        $customerCategories = $em->getRepository(CategorieClient::class)->findAll();
        $typesSortie = $em->getRepository(CompteSortie::class)->findBy([], ['compte' => 'ASC']);

        $cloture = $em->getRepository(Cloture::class)->todayCloture($this->getUser());
        $permissions = is_null($guichet) ? [] : explode(',', $guichet->getTypevente());

        if (count($permissions) > 0 && (in_array('facture-controle-technique', $permissions) || in_array('pv-controle-technique', $permissions))) {
            $vehicles = $em
                ->getRepository(Vehicule::class)
                ->createQueryBuilder('v')
                ->select('v.id', 'v.numeroImmatriculation', 'v.anneeFabrication', 'v.dateMiseEnCirculation', 'v.genre', 'v.marque', 'v.typeOuModele', 'v.puissance', 'v.numeroDansLaSerie', 'v.energie', 'v.kilometrage', 'v.usageVehicule', 'v.couleur', 'v.numeroChassis', 'v.numeroMoteur', 'c.id as clientId', 'c.nomClient', 'c.telephone', 'c.adressePhys')
                ->innerJoin('v.client', 'c')
                ->setMaxResults(100)
                ->getQuery()
                ->getResult()
            ;
        } else {
            $vehicles = [];
        }

        $rateQueryBuilder = $em
            ->getRepository(Taux::class)
            ->createQueryBuilder('t')
        ;

        $exchangeRate = $rateQueryBuilder
            ->select('t.tauxChange')
            ->where($rateQueryBuilder->expr()->isNull('t.au'))
            ->getQuery()
            ->getOneOrNullResult()
        ;

        return $this->renderTemplate('sales/new.html.php', [
            'user' => $this->getUser()->getFullName() ? $this->getUser()->getFullName() : $this->getUser()->getUserIdentifier(),
            'maison' => $maison,
            'clients' => $clients,
            'services' => $services,
            'categories' => $uniqueCategories,
            'customerCategories' => $customerCategories,
            'typesSortie' => $typesSortie,
            'depots' => $dr->findBy([], ['name' => 'ASC']),
            'cloture' => $cloture,
            'discountables' => $discountables,
            'pos' => $pos,
            'guichet' => $guichet,
            'permissions' => $permissions,
            'vehicles' => $vehicles,
            'exchangeRate' => (is_array($exchangeRate) ? $exchangeRate['tauxChange'] : null)
        ]);
    }

    /**
     * @Route("/sales/clotures/new", name="new_cloture")
     */
    public function cloture(Request $request): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $date = new \DateTime();
        $today = $date->format("Y-m-d");

        $ventes = $em
            ->createQuery("SELECT SUM(f.total) AS total, SUM(f.workforce) AS workforce, SUM(f.discount) AS discount FROM App\Entity\Facture f WHERE f.editedBy = :editedBy AND f.typeFacture <> 'proforma' AND f.typeFacture <> 'hold' AND DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
            ->setParameter('editedBy', $this->getUser())
            ->setParameter('today', $today)
            ->getOneOrNullResult()
        ;

        $cash = $em
            ->createQuery("SELECT SUM(f.total) AS total, SUM(f.amountPaid) AS amountPaid, SUM(f.workforce) AS workforce, SUM(f.discount) AS discount FROM App\Entity\Facture f WHERE f.editedBy = :editedBy AND f.typeFacture = 'cash' AND DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
            ->setParameter('editedBy', $this->getUser())
            ->setParameter('today', $today)
            ->getOneOrNullResult()
        ;

        $credits = $em
            ->createQuery("SELECT SUM(f.total) AS total, SUM(f.workforce) AS workforce, SUM(f.discount) AS discount FROM App\Entity\Facture f WHERE f.editedBy = :editedBy AND f.typeFacture = 'credit' AND DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
            ->setParameter('editedBy', $this->getUser())
            ->setParameter('today', $today)
            ->getOneOrNullResult()
        ;

        $paiementsDettes = $em
            ->createQuery("SELECT SUM(p.montantPaye) AS somme FROM App\Entity\PayementDette p WHERE p.doneby = :doneby AND DATE_FORMAT(p.datePaye, '%Y-%m-%d') = :today")
            ->setParameter('doneby', $this->getUser())
            ->setParameter('today', $today)
            ->getSingleScalarResult()
        ;

        $depenses = $em
            ->createQuery("SELECT SUM(d.amount) AS somme FROM App\Entity\Depense d WHERE d.user = :user AND DATE_FORMAT(d.doneAt, '%Y-%m-%d') = :today")
            ->setParameter('user', $this->getUser())
            ->setParameter('today', $today)
            ->getSingleScalarResult()
        ;

        $paiementsParBonus = $em
            ->createQuery("SELECT SUM(f.total) AS totalBonus FROM App\Entity\Facture f WHERE f.paymentMode = 'bonus' AND f.editedBy = :user AND DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
            ->setParameter('user', $this->getUser())
            ->setParameter('today', $today)
            ->getSingleScalarResult()
        ;

        if ($request->isMethod('POST')) {
            $cloture = $em->getRepository(Cloture::class)->todayCloture($this->getUser());

            if ($cloture === null) {
                $data = json_decode(file_get_contents('php://input'), true);
                $montantDu = floatval($data['cash']['total']) + floatval($data['cash']['workforce']) - floatval($data['cash']['discount']) + floatval($data['paiementsDettes'] - floatval($data['depenses']));
                $cloture = new Cloture();
                $cloture->setMontantDu($montantDu);
                $cloture->setMontantVerse(0);
                $cloture->setSolde($montantDu);
                $em->getRepository(User::class)->find($this->getUser()->getId())->addCloture($cloture);

                $em->persist($cloture);
                $em->flush();

                $message = 'Clôture effectuée avec succès';

                $clotureArr = [
                    'id' => $cloture->getId(),
                    'createdAt' => $cloture->getCreatedAt()->format('d-m-Y'),
                    'montantDu' => $cloture->getMontantDu(),
                    'montantVerse' => $cloture->getMontantVerse(),
                    'solde' => $cloture->getSolde(),
                    'doneBy' => [
                        'username' => $cloture->getDoneBy()->getUserIdentifier(),
                        'fullName' => $cloture->getDoneBy()->getFullName()
                    ],
                    'ventes' => $ventes,
                    'cash' => $cash,
                    'credits' => $credits,
                    'paiementsDettes' => $paiementsDettes,
                    'depenses' => $depenses,
                    'paiementsParBonus' => $paiementsParBonus,
                ];
                
            } else {
                $message = 'Vous avez déjà clôturé la journée.';
                // Throw exception
            }

            return new JsonResponse(['message'=> $message, 'data' => $clotureArr, 'errors' => []]);
        }

        return new JsonResponse([
            'message' => '',
            'data' => [
                'ventes' => $ventes,
                'cash' => $cash,
                'credits' => $credits,
                'paiementsDettes' => $paiementsDettes,
                'depenses' => $depenses,
                'paiementsParBonus' => $paiementsParBonus
            ],
            'errors' => []
        ]);
    }

    private function grantBonuses(int $clientId, int $nbSalesBonus): array
    {
        $entityManager = $this->getDoctrine()->getManager();
        $bonusPercentage = $entityManager
            ->getRepository(UserGuichet::class)
            ->findOneBy(['user' => $this->getUser()])
            ->getGuichet()
            ->getPointOfSale()
            ->getBonusPercentage()
        ;

        $client = $entityManager->getRepository(Client::class)->find($clientId);
        $bonuses = [];
        $totalPointsArray = []; // Total points par service
        $historiesArray = []; // Point of sale histories par service

        // Recuperer dans une liste toutes les ventes dont les bonus ne sont pas encore utilises
        foreach ($client->getFactures() as $facture) {
            if (in_array($facture->getTypeFacture(), ['cash', 'credit'])) {
                foreach ($facture->getPointOfSaleHistories() as $history) {
                    if ($history->getService()->isBonusApplicable() && !$history->isBonusUsed()) {
                        if (array_key_exists($history->getService()->getName(), $historiesArray)) {
                            $historiesArray[$history->getService()->getName()][] = $history;
                            $totalPointsArray[$history->getService()->getName()] += $history->getPoints() ?? 0;
                        } else {
                            $historiesArray[$history->getService()->getName()] = [$history];
                            $totalPointsArray[$history->getService()->getName()] = $history->getPoints() ?? 0;
                        }
                    }
                }
            }
        }

        if (count($totalPointsArray) > 0 && max($totalPointsArray) >= $nbSalesBonus) {
            $count = 0;

            foreach ($historiesArray as $idx => $historyArray) {
                if ($totalPointsArray[$idx] >= $nbSalesBonus) {
                    $bonusQuantity = round($totalPointsArray[$idx] / $nbSalesBonus, 0, PHP_ROUND_HALF_DOWN);
                    $bonus = new Bonus();
                    $bonusAmount = $bonusQuantity * $bonusPercentage * abs($historyArray[0]->getPrice());
                    $bonus->setAmount($bonusAmount);
                    $client->addBonus($bonus);
                    $count = count($historyArray);
                    $historyArray[0]->setPoints($totalPointsArray[$idx] % $nbSalesBonus);
                    for ($i = 1; $i < $count; $i++) {
                        $historyArray[$i]->setPoints(0);
                        $historyArray[$i]->setBonusUsed(true);
                    }
                    $bonuses[] = $bonusAmount;
                    $entityManager->persist($bonus);
                }
            }
        }

        return $bonuses;
    }
}
