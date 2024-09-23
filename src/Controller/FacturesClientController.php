<?php

namespace App\Controller;

use App\Entity\Client;
use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Facture;
use App\Entity\Dettes;
use App\Entity\Facturedateretrait;
use App\Entity\PayementDette;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\Service;
use App\Entity\UserGuichet;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FacturesClientController extends AbstractController
{
    /**
     * @Route("/facturesclient", name="list_factures")
     */
    public function list(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $fact = $em->getRepository(Facture::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('facturesclient/list.html.php', [
            'title' => 'FACTURES CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Factures client',
                    'path' => '/facturesclient'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/facturesclients/{id}",name="single_factureclient")
     */
    public function getfacturesclient(Request $request, int $id): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $cr = $manager->getRepository(Client::class);
        $fr = $manager->getRepository(Facture::class);
        $client = $cr->find($id);

        $factClients = $fr->createQueryBuilder('f')
            ->where('c.id = :id')
            ->innerJoin('f.client', 'c')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
        $data = ['facturesclient' => $factClients, 'client' => $client];

        if ($request->isXMLHttpRequest()) {
            return new JsonResponse($factClients);
        }

        return $this->renderTemplate('facturesclient/singledetail.html.php', [
            'title' => 'FACTURES CLIENT',
            'breadcrumb' => [
                [
                    'name' => 'Factures client',
                    'path' => '/facturesclient'
                ]
            ],
            'datasent' => $data
        ]);
    }

    /**
     * @Route("/facturesclient/new",name="new_factureclient")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $fact = $em->getRepository(Facture::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('facturesclient/new.html.php', [
            'title' => 'FACTURES CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Factures client',
                    'path' => '/facturesclient/new'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/factures/updatetotalelements/{id}", name="updatetotalelements")
     */
    public function updatetotalelements($id): JsonResponse
    {
        $invoice = $this->getDoctrine()->getManager()->getRepository(Facture::class)->find(intval($id));

        if (null !== $invoice) {
            $client = $invoice->getClient();
            $license =  $invoice->getLicence();
            $clientId = null !== $client ? $client->getId() : 0;
            $licenseId = null !== $license ? $license->getId() : 0;
        } else {
            $clientId = 0;
            $licenseId = 0;
        }
        
        // return new JsonResponse(['total' => $somme, 'tax' => $taxe, 'net' => $net, 'clientid' => $clientid, 'licenceid' => $licenceid]);
        return new JsonResponse(['clientId' => $clientId, 'licenseId' => $licenseId]);
    }

    /**
     * @Route("/factures/{id}", name="detailfacturesclient_client")
     */
    public function detail($id): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $fr = $manager->getRepository(Facture::class);
        $phr = $manager->getRepository(PointOfSaleHistory::class);

        $qb = $phr->createQueryBuilder('p');
        $histories = $qb
            ->where('f.id = :id')
            ->andWhere($qb->expr()->like('p.motifDestockage', $qb->expr()->literal('vente%')))
            ->innerJoin('p.invoice', 'f')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();

        return $this->renderTemplate('facturesclient/details.html.php', [
            'title' => 'Détails de la facture N° '.$id,
            'breadcrumb' => [
                [
                    'name' => 'Factures client',
                    'path' => '/facturesclient/new'
                ],
                [
                    'name' => 'Détails de la facture N° '.$id
                ]
            ],
            'histories' => $histories,
            'facture' => $fr->find(intval($id))
        ]);
    }

    /**
     * @Route("/factures/vente/guichetier", name="FacturesGechetierList")
     */
    public function guichetierFactures(): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $invoiceRepository = $em->getRepository(Facture::class);
        $queryBuilder = $invoiceRepository->createQueryBuilder('f');
        $queryBuilder = $queryBuilder
            ->select('f.id', 'f.typeFacture', 'f.dateFact', 'f.total', 'f.workforce', 'f.discount', 'c.nomClient')
            ->where($queryBuilder->expr()->neq('f.typeFacture', ':typeFacture'))
        ;

        if ($this->getUser()->getType() !== 'super_guichetier') {
            $queryBuilder = $queryBuilder
                ->andWhere($queryBuilder->expr()->orX($queryBuilder->expr()->in('f.typeFacture', ['proforma', 'proforma_ctrl']), 'u = :user'))
                ->leftJoin('f.client', 'c')
                ->innerJoin('f.editedBy', 'u')
                ->setParameter('user', $this->getUser())
            ;
        } else {
            $affectationRepository = $em->getRepository(Affectation::class);
            $pos = $affectationRepository->findOneBy(['user' => $this->getUser()])->getPos();
            $usersIds = $affectationRepository
                ->createQueryBuilder('a')
                ->select('u.id')
                ->where('p = :pos')
                ->innerJoin('a.pos', 'p')
                ->innerJoin('a.user', 'u')
                ->setParameter('pos', $pos)
                ->getQuery()
                ->getResult()
            ;
            $queryBuilder = $queryBuilder
                ->andWhere($queryBuilder->expr()->orX($queryBuilder->expr()->in('f.typeFacture', ['proforma', 'proforma_ctrl']), $queryBuilder->expr()->in('u.id', ':usersIds')))
                ->leftJoin('f.client', 'c')
                ->innerJoin('f.editedBy', 'u')
                ->setParameter('usersIds', $usersIds)
            ;
        }

        $factures = $queryBuilder
            ->setParameter('typeFacture', 'cancelled')
            ->orderBy('f.dateFact', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        return new JsonResponse($factures);
    }

    /**
     * @Route("/factures/{id}/populate/cartboard", name="populatecartboard")
     */
    public function facturedetails($id): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();
        $invoice = $entityManager->getRepository(Facture::class)->find(intval($id));

        if (in_array($invoice->getTypeFacture(), ['cash', 'credit'], true)) {
            $entity = 'App\Entity\PointOfSaleHistory';
            $quantityProperty = 'p.quantity as qty';
            $invoiceRelation = 'p.invoice';
        } else {
            $entity = 'App\Entity\DetailsFacture';
            $quantityProperty = 'p.qty';
            $invoiceRelation = 'p.facture';
        }

        $queryString = " s.id as serviceId, s.bonusApplicable, c.name as category, s.unitPrice, s.deflatedPrice, s.wholesalePrice, p.price as selectedPrice, " . $quantityProperty . ", s.type, s.name, s.photo";
        $queryStringMiddle = ", pos.id as depotId, pos.name as depotName FROM " . $entity . " p INNER JOIN p.service AS s INNER JOIN s.category AS c LEFT JOIN p.pos AS pos";
        // $queryStringMiddle = " FROM " . $entity . " p INNER JOIN p.service AS s INNER JOIN s.category AS c";
        $queryStringTail = " WHERE " . $invoiceRelation . " = :invoice";

        $articles = $entityManager
            ->createQuery("SELECT pd.id," . $queryString . ", pd.quantity, pd.codeBars" . $queryStringMiddle . " INNER JOIN s.pointOfSaleDetails AS pd" . $queryStringTail . " AND s.type = 2")
            ->setParameter('invoice', $invoice)
            ->getResult()
        ;

        $services = $entityManager
            ->createQuery("SELECT" . $queryString . $queryStringMiddle . $queryStringTail . " AND s.type = 1")
            ->setParameter('invoice', $invoice)
            ->getResult()
        ;

        return new JsonResponse(['message' => '', 'data' => ['services' => array_merge($articles, $services), 'typeFacture' => $invoice->getTypeFacture(), 'paymentMode' => $invoice->getPaymentMode(), 'workforce' => $invoice->getWorkforce(), 'workforcePercent' => $invoice->getWorkforcePercent()], 'errors' => []]);
    }

    /**
     * @Route("/annulerfacture", name="cancel_invoice")
     */
    public function annulerFacture(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $affectationRepository = $entityManager->getRepository(Affectation::class);
        $invoiceRepository = $entityManager->getRepository(Facture::class);
        $posHistoryRepository = $entityManager->getRepository(PointOfSaleHistory::class);
        $posDetailRepository = $entityManager->getRepository(PointOfSaleDetails::class);
        $debtRepository = $entityManager->getRepository(Dettes::class);
        $debtPaymentsRepository = $entityManager->getRepository(PayementDette::class);

        if ($request->isMethod('POST')) {
            $invoiceId = json_decode(file_get_contents('php://input'), true)['invoiceId'];
            $invoice = $invoiceRepository->find(intval($invoiceId));
            $posHistories = $posHistoryRepository->findBy(['invoice' => $invoice]);
            
            if (count($posHistories) > 0) {
                $services = [];
                $pos = $affectationRepository->findOneBy(['user' => $invoice->getEditedBy()])->getPos();

                foreach ($posHistories as $posHistory) {
                    $service = $posHistory->getService();
                    if ($service->getType() === 2) {
                        $serviceName = $service->getName();
                        if (!array_key_exists($serviceName, $services)) {
                            $services[$serviceName] = ['service' => $serviceName, 'quantity' => abs($posHistory->getQuantity()), 'price' => $service->getUnitPrice()];
                        } else {
                            $services[$serviceName]['quantity'] += abs($posHistory->getQuantity());
                        }
                    }
                }
                
                foreach ($services as $service) {
                    $posDetail = $posDetailRepository->findOneBy(['pointOfSale' => $pos, 'service' => $entityManager->getRepository(Service::class)->findOneBy(['name' => $service['service']])]);
                    $posDetail->setQuantity($posDetail->getQuantity() + $service['quantity']);
                    $posDetail->setValue($posDetail->getValue() + $service['quantity'] * $service['price']);
                }

                if ($invoice->getTypeFacture() === 'credit') {
                    $debt = $debtRepository->findOneBy(['facture' => $invoice]);
                    $debtPayments = $debtPaymentsRepository->findBy(['dette' => $debt]);

                    foreach ($debtPayments as $debtPayment) {
                        $debtPayment->getDoneby()->removePayementDette($debtPayment);
                        $debtPayment->getDette()->removePayementDette($debtPayment);
                        $entityManager->remove($debtPayment);
                    }

                    $debt->getMadeby()->removeDette($debt);
                }
            }

            $invoice->setTypeFacture('cancelled');
            $entityManager->flush();
            $invoiceId = $invoice->getId();

            return new ApiResponse(sprintf("Facture N°%d annulée avec succès", $invoiceId), ['invoice' => $invoiceId]);
        }

        $queryBuilder = $invoiceRepository->createQueryBuilder('i');
        $invoices = $queryBuilder
            ->select('i.id', 'i.dateFact', 'i.typeFacture', 'i.total', 'c.nomClient')
            ->where($queryBuilder->expr()->neq('i.typeFacture', '?1'))
            ->leftJoin('i.client', 'c')
            ->setParameter('1', 'cancelled')
            ->getQuery()
            ->getResult()
        ;

        return $this->renderTemplate('factures/cancelation.html.php', [
            'title' => 'Annulation de factures',
            'breadcrumb' => [
                [
                    'name' => 'Annulation de factures'
                ]
            ],
            'invoices' => $invoices
        ]);
    }

    /**
     * @Route("/facturesannulees", name="cancelled_invoices")
     */
    public function facturesAnnulees(Request $request): Response
    {
        $factures = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository(Facture::class)
            ->createQueryBuilder('f')
            ->select('f.id', 'f.typeFacture', 'f.dateFact', 'f.total', 'f.discount', 'c.nomClient')
            ->where('f.typeFacture = :type')
            ->leftJoin('f.client', 'c')
            ->setParameter('type', 'cancelled')
            ->getQuery()
            ->getResult()
        ;

        return $this->renderTemplate('factures/facturesannulees.html.php', [
            'title' => 'Factures annulées',
            'breadcrumb' => [
                ['name' => 'Factures annulées']
            ],
            'factures' => $factures
        ]);
    }

    /**
     * @Route("/facturedateretrait", name="facturedateretrait")
     */
    public function facturedateretrait(): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();
        $invoiceRepository = $entityManager->getRepository(Facture::class);
        $dateRetraitRepository = $entityManager->getRepository(Facturedateretrait::class);

        $data = json_decode(file_get_contents('php://input'), true); 
        $factureId = $data['factureId'];
        $invoice = $invoiceRepository->find(intval($factureId));
        $entry = $dateRetraitRepository->findOneBy(['invoice' => $invoice]);

        if ($entry == null) {
            $date = trim($data['date']); // $data['date'] est sous la forme '2021-10-15T19:30'
            $entry = new Facturedateretrait();
            $entry->setDateRetrait(new \DateTime($date));
            $invoiceRepository->find(intval($factureId))->addFacturedateretrait($entry);

            $entityManager->persist($entry);
            $entityManager->flush();
        }

        $client = $invoice->getClient();
        $license = $invoice->getLicence();
        $vehicle = null !== $license ? $license->getVehicule() : null;
        $totalBonus = $entityManager
            ->createQuery("SELECT SUM(b.amount - b.amountUsed) FROM App\Entity\Bonus b WHERE b.client = :client")
            ->setParameter('client', $client)
            ->getSingleScalarResult()
        ;

        return new JsonResponse([
            'id' => $entry->getId(),
            'dateRetrait' => $entry->getDateRetrait(),
            'invoice' => [
                'id' => $invoice->getId(),
                'total' => $invoice->getTotal(),
                'discount' => $invoice->getDiscount(),
                'amountPaid' => $invoice->getAmountPaid(),
                'workforce' => $invoice->getWorkforce(),
                'workforcePercent' => $invoice->getWorkforcePercent(),
                'type' => $invoice->getTypeFacture(),
                'paymentMode' => $invoice->getPaymentMode(),
                'licenceId' => (null !== $license ? $license->getId() : null),
                'date' => $invoice->getDateFact()
            ],
            'marque' => (null !== $vehicle ? $vehicle->getMarque() : null),
            'typeOuModele' => (null !== $vehicle ? $vehicle->getTypeOuModele() : null),
            'numeroImmatriculation' => (null !== $vehicle ? $vehicle->getNumeroImmatriculation() : null),
            'kilometrage' => (null !== $vehicle ? $vehicle->getKilometrage() : null),
            'client' => ['id' => (null !== $client ? $client->getId() : null), 'nomClient' => (null !== $client ? $client->getNomClient() : null), 'telephone' => (null !== $client ? $client->getTelephone() : null), 'adressePhys' => (null !== $client ? $client->getAdressePhys() : null), 'totalBonus' => (is_string($totalBonus) ? floatval($totalBonus) : $totalBonus)]
        ]);
    }

    /**
     * @Route("/invoices/dailyreport", name="invoices_daily_report")
     */
    public function dailyReport(): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();
        $invoiceRepository = $entityManager->getRepository(Facture::class);
        $debtPaymentsRepository = $entityManager->getRepository(PayementDette::class);
        $posHistoryRepository = $entityManager->getRepository(PointOfSaleHistory::class);
        $now = new \DateTime();
        $today = $now->format("Y-m-d");
        $unixEpoch = new \DateTime('1970-01-01 00:00:00');
        $todayMidnight = new \DateTime($now->format("Y-m-d")." 00:00:00");

        $guichet = $entityManager->getRepository(UserGuichet::class)->findOneBy(['user' => $this->getUser()])->getGuichet();
        $pos = $guichet->getPos();

        $qBuilder = $posHistoryRepository
            ->createQueryBuilder('ph')
            ->select('ph.quantity', 'ph.motifDestockage', 's.name as article')
        ;
        $qBuild = $posHistoryRepository
            ->createQueryBuilder('ph')
            ->select('ph.quantity', 'ph.motifDestockage', 's.name as article')
        ;
        $tsQb = $posHistoryRepository
            ->createQueryBuilder('ph')
            ->select('ph.quantity', 'ph.motifDestockage', 's.name as article')
        ;
        $osQb = $posHistoryRepository
            ->createQueryBuilder('ph')
            ->select('ph.quantity', 'ph.motifDestockage', 's.name as article')
        ;
        $procurements = $qBuilder
            ->where('p = :pos')
            ->andWhere($qBuilder->expr()->isNull('ph.motifDestockage'))
            // ->andWhere($qBuilder->expr()->notIn('ph.motifDestockage', ['vente_cash', 'vente_credit']))
            // ->groupBy('s.name')
            ->innerJoin('ph.pos', 'p')
            ->innerJoin('ph.service', 's')
            ->setParameter('pos', $pos)
            ->getQuery()
            ->getResult()
        ;
        $posDetails = $entityManager
            ->getRepository(PointOfSaleDetails::class)
            ->createQueryBuilder('pd')
            ->select('pd.quantity', 's.name as article')
            ->where('p = :pos')
            ->innerJoin('pd.service', 's')
            ->innerJoin('pd.pointOfSale', 'p')
            ->setParameter('pos', $pos)
            ->getQuery()
            ->getResult()
        ;
        $outOfStock = $osQb
            ->where($osQb->expr()->andX($osQb->expr()->isNotNull('ph.motifDestockage'), $osQb->expr()->notIn('ph.motifDestockage', ['vente_cash', 'vente_credit'])))
            ->andWhere('s.type = 2')
            ->andWhere('p = :pos')
            ->innerJoin('ph.service', 's')
            ->innerJoin('ph.pos', 'p')
            ->setParameter('pos', $pos)
            ->getQuery()
            ->getResult()
        ;
        $sales = $qBuild
            ->andWhere($qBuild->expr()->in('ph.motifDestockage', ['vente_cash', 'vente_credit']))
            ->andWhere('u = :user')
            ->andWhere('s.type = 2')
            ->andWhere($qBuild->expr()->neq('f.typeFacture', ':cancelled'))
            ->innerJoin('ph.service', 's')
            ->innerJoin('ph.invoice', 'f')
            ->innerJoin('f.editedBy', 'u')
            ->setParameter('user', $this->getUser())
            ->setParameter('cancelled', 'cancelled')
            ->getQuery()
            ->getResult()
        ;
        $todaySales = $tsQb
            ->andWhere($tsQb->expr()->in('ph.motifDestockage', ['vente_cash', 'vente_credit']))
            ->andWhere($tsQb->expr()->eq('u.id', ':userId'))
            ->andWhere('s.type = 2')
            ->andWhere("DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
            ->andWhere($tsQb->expr()->neq('f.typeFacture', ':cancelled'))
            ->innerJoin('ph.service', 's')
            ->innerJoin('ph.invoice', 'f')
            ->innerJoin('f.editedBy', 'u')
            ->setParameter('userId', $this->getUser()->getId())
            ->setParameter('today', $today)
            ->setParameter('cancelled', 'cancelled')
            ->getQuery()
            ->getResult()
        ;

        $stock = ['procurements' => $procurements, 'posDetails' => $posDetails, 'outOfStock' => $outOfStock, 'sales' => $sales, 'todaySales' => $todaySales];

        $queryBuilder = $invoiceRepository
            ->createQueryBuilder('f')
            ->select('f.id', 'f.typeFacture', 'f.dateFact', 'f.total', 'f.discount', 'f.amountPaid', 'f.paymentMode', 'c.nomClient', 'c.telephone')
            ->where("DATE_FORMAT(f.dateFact, '%Y-%m-%d') = :today")
        ;

        $queryBuilder = $queryBuilder->andWhere($queryBuilder->expr()->notIn('f.typeFacture', ['proforma', 'proforma_ctrl']));

        $qb = $debtPaymentsRepository
            ->createQueryBuilder('p')
            ->select('p.id', 'f.id as invoiceId', 'd.dateOctroi', 'd.statut', 'd.amount', 'd.sold', 'd.echeance', 'p.datePaye', 'p.montantPaye', 'c.nomClient')
            ->where("DATE_FORMAT(p.datePaye, '%Y-%m-%d') = :today")
            ->andWhere('f.dateFact BETWEEN :from AND :to')
        ;

        // if ($this->getUser()->getType() !== 'super_guichetier') {
            $queryBuilder = $queryBuilder
                ->andWhere($queryBuilder->expr()->eq('u.id', ':userId'))
                ->innerJoin('f.client', 'c')
                ->innerJoin('f.editedBy', 'u')
                ->setParameter('userId', $this->getUser()->getId())
            ;

            $qb = $qb
                ->andWhere($qb->expr()->eq('u.id', ':userId'))
                ->setParameter('userId', $this->getUser()->getId())
                ->innerJoin('p.doneby', 'u')
            ;
        // } else {
        //     $queryBuilder = $queryBuilder->innerJoin('f.client', 'c');
        // }

        $factures = $queryBuilder
            ->setParameter('today', $today)
            ->orderBy('f.dateFact', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        $debtPayments = $qb
            ->innerJoin('p.dette', 'd')
            ->innerJoin('d.facture', 'f')
            ->innerJoin('d.client', 'c')
            ->setParameter('today', $today)
            ->setParameter('from', $unixEpoch)
            ->setParameter('to', $todayMidnight)
            ->orderBy('p.datePaye', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        return new ApiResponse('', ['invoices' => $factures, 'debtPayments' => $debtPayments, 'stock' => $stock]);
    }
}
