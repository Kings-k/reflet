<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Category;
use App\Entity\Depot;
use App\Entity\DepotDetails;
use App\Entity\DepotHistory;
use App\Entity\DestockingReason;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\ProcurementRequest;
use App\Entity\Service;
use App\Http\ApiResponse;
use App\Tools\ProcurementUtils;
use Doctrine\Persistence\ObjectManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class DepotController extends AbstractController
{
    private $procurementUtils;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, ProcurementUtils $procurementUtils)
    {
        parent::__construct($securityChecker, $requestStack);
        $this->procurementUtils = $procurementUtils;
    }
    /**
     * @Route("/depots/approvisionnement", name="depot_approvisionnement")
     * @IsGranted("ROLE_GESTOCKPOS")
     */
    public function approvisionnement(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $sr = $em->getRepository(Service::class);

        if ($request->isXmlHttpRequest()) {
            $query = $request->get('search');
            $services = [];
            $sqb = $sr->createQueryBuilder('s');
            $sqb = $sqb
                ->select('s.id', 's.name')
                ->andWhere('s.type = 2')
                ->andWhere($sqb->expr()->like('s.name', ':name'))
            ;

            $services = $sqb
                ->setParameter('name', '%'.$query.'%')
                ->setMaxResults(10)
                ->getQuery()
                ->getResult()
            ;

            return new JsonResponse($services);
        }

        if ($request->isMethod('POST')) {
            $service = $sr->findOneBy(['name' => $request->request->get('service')]);
            $expirationDate = new \DateTime($request->request->get('expirationDate'));
            $quantity = intval($request->request->get('quantity'));
            $price = floatval($request->request->get('unitPrice'));
            $codeBar = $request->request->get('codeBar');
            $entity = null;
            $depotType = 'pos';

            if ($this->isGranted('ROLE_GESTSTOCK')) {
                $depotData = explode('-', $request->request->get('depot'));
                $depotType = $depotData[0];
                $depotId = $depotData[1];
                $entity = $em
                    ->getRepository($depotType === 'depot' ? 'App\Entity\Depot' : 'App\Entity\PointOfSale')
                    ->find(intval($depotId))
                ;
            } else {
                $entity = $em
                    ->getRepository(Affectation::class)
                    ->findOneBy(['user' => $this->getUser()])
                    ->getPointOfSale()
                ;
            }

            // Destocker le(s) depot(s)
            if ($this->isGranted('ROLE_GESTSTOCK') && $depotType === 'pos') {
                $qb = $em
                    ->getRepository(DepotDetails::class)
                    ->createQueryBuilder('dd')
                    ->select('dd.id', 'dd.quantity', 'dd.value', 's.name', 's.id as serviceId', 'd.name as depotName')
                ;

                $depotsDetails = $qb
                    ->where($qb->expr()->andX($qb->expr()->eq('s.id', ':productId'), $qb->expr()->gt('dd.quantity', 0)))
                    ->innerJoin('dd.service', 's')
                    ->innerJoin('dd.depot', 'd')
                    ->setParameter('productId', $service->getId())
                    ->getQuery()
                    ->getResult()
                ;

                $historyElts = ['service' => $service, 'quantity' => $quantity, 'motifDestockage' => 'approvisionnement_point_de_vente'];
                $available = $this->procurementUtils->destock($em, $this->getUser(), $historyElts, $depotsDetails);

                if (!$available) {
                    $this->addFlash('danger', 'Stock insuffisant');
                } else {
                    $this->supplyAndFlush($em, $service, $quantity, $price, $expirationDate, $codeBar, $entity);
                }
            } else {
                $this->supplyAndFlush($em, $service, $quantity, $price, $expirationDate, $codeBar, $entity);
            }
        }

        if ($this->isGranted('ROLE_GESTSTOCK')) {
            $qb = $em->getRepository(DepotHistory::class)
                ->createQueryBuilder('dh')
                ->select('dh.id', 'dh.quantity', 'dh.price', 'dh.expirationDate', 'dh.releases', 'dh.motifDestockage', 'dh.note', 'dd.quantity as depotDetailQuantity', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'd.name as storeName')
                ->innerJoin('dh.depot', 'd')
                ->innerJoin('dh.service', 'serv')
                ->innerJoin('serv.depotDetails', 'dd')
            ;
        } else {
            $qb = $em->getRepository(Affectation::class)
                ->createQueryBuilder('a')
                ->select('dh.id', 'dh.quantity', 'dh.price', 'dh.expirationDate', 'dh.releases', 'dh.motifDestockage', 'dh.note', 'dd.quantity as depotDetailQuantity', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'sm.username', 'sm.fullName')
                ->where('a.user = :user')
                ->innerJoin('a.pos', 'p')
                ->innerJoin('p.pointOfSaleHistories', 'dh')
                ->innerJoin('dh.service', 'serv')
                ->innerJoin('serv.pointOfSaleDetails', 'dd')
                ->leftJoin('dh.stockManager', 'sm')
                ->setParameter('user', $this->getUser())
            ;
        }

        // $stockDispo = $qb->andWhere('dh.motifDestockage = ?1')
        $stockDispo = $qb->andWhere($qb->expr()->isNull('dh.motifDestockage'))
        // $stockDispo = $qb->andWhere($qb->expr()->notIn('dh.motifDestockage', ['vente_cash', 'vente_credit']))
            ->innerJoin('dh.service', 's')
            ->leftJoin('s.uom', 'u')
            // ->setParameter('1', null)
            ->orderBy('dh.createdAt', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        if ($this->isGranted('ROLE_GESTSTOCK')) {
            $depots = array_map(function(array $depot): array {
                $depot['typeDepot'] = 'depot';
                return $depot;
            }, $em->createQuery("SELECT d.id, d.name FROM App\Entity\Depot d ORDER BY d.name ASC")->getResult());

            $pointsOfSale = array_map(function(array $pos): array {
                $pos['typeDepot'] = 'pos';
                return $pos;
            }, $em->createQuery("SELECT p.id, p.name FROM App\Entity\PointOfSale p ORDER BY p.name ASC")->getResult());

            $depots = array_merge($depots, $pointsOfSale);
        } else {
            $depots = $em->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser())['id'];
        }

        return $this->renderTemplate('depots/approvisionnement.html.php', [
            'title' => 'Approvisionnement',
            'breadcrumb' => [
                ['name' => 'Dépôts', 'path' => '/depots'],
                ['name' => 'Appovisionnement']
            ],
            'stockDispo' => $stockDispo,
            'depots' => $depots
        ]);
    }

    /**
     * @Route("/depots/demandeapprovisionnement", name="depot_demandeapprovisionnement")
     */
    public function demandeApprovisionnement(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $serviceRepository = $entityManager->getRepository(Service::class);
        $user = $this->getUser();

        if (!$this->isGranted('ROLE_GESTSTOCK')) {
            $pos = $entityManager->getRepository(Affectation::class)->findOneBy(['user' => $user])->getPos();
        }

        if ($request->isMethod('POST')) {
            $data = json_decode(file_get_contents('php://input'), true);
            $product = $serviceRepository->findOneBy(['name' => $data['product']]);

            if (!is_null($product)) {
                $quantity = intval($data['quantity']);
                $procurementRequest = new ProcurementRequest();
                $procurementRequest->setProduct($product);
                $procurementRequest->setQuantity($quantity);
                $procurementRequest->setStatus(0);
                $procurementRequest->setEmittedBy($user);

                $entityManager->persist($procurementRequest);
                $entityManager->flush();

                return new ApiResponse('Demande envoyée avec succès', ['product' => $product->getName(), 'quantity' => $quantity]);
            }

            return new ApiResponse('Ce produit n\'existe pas', null, [], 404);
        }

        if ($request->isMethod('PATCH')) {
            $entityManager = $this->getDoctrine()->getManager();
            $data = json_decode(file_get_contents('php://input'), true);
            $procurement = $entityManager->getRepository(ProcurementRequest::class)->find($data['procurementId']);

            if (!is_null($procurement)) {
                if ($procurement->getStatus() === 1) {
                    return new ApiResponse('Demande déjà approuvée', null, [], 500);
                }

                $status = $data['status'];
                $service = $procurement->getProduct();
                $quantity = is_string($data['quantity']) ? intval($data['quantity']) : $data['quantity'];
                $emittedBy = $procurement->getEmittedBy();
                $procurement->setStatus($status);

                $procurementUpdated = [
                    'id' => $procurement->getId(),
                    'serviceId' => $service->getId(),
                    'serviceName' => $service->getName(),
                    'quantity' => $procurement->getQuantity(),
                    'username' => $emittedBy->getUserIdentifier(),
                    'fullName' => $emittedBy->getFullName(),
                    'uomName' => $service->getUom()?->getName(),
                    'createdAt' => $procurement->getCreatedAt(),
                    'updatedAt' => $procurement->getUpdatedAt(),
                    'approvedAt' => $procurement->getApprovedAt(),
                ];

                if ($status === 2) {
                    $entityManager->flush();
                    $procurementUpdated['status'] = 2;
                    $procurementUpdated['grantedQuantity'] = 0;
                    return new ApiResponse('Demande annulée avec succès', $procurementUpdated);
                }

                $procurement->setGrantedQuantity($quantity);
                $procurement->setApprovedAt(new \DateTimeImmutable());
                $procurement->setApprovedBy($user);
                $serviceQuantity = $quantity;

                // Destocker les depots
                $qb = $entityManager
                    ->getRepository(DepotDetails::class)
                    ->createQueryBuilder('dd')
                    ->select('dd.id', 'dd.quantity', 'dd.value', 's.name', 's.id as serviceId', 'd.name as depotName')
                ;

                $depotsDetails = $qb
                    ->where($qb->expr()->andX($qb->expr()->eq('s.id', ':productId'), $qb->expr()->gt('dd.quantity', 0)))
                    ->innerJoin('dd.service', 's')
                    ->innerJoin('dd.depot', 'd')
                    ->setParameter('productId', $service->getId())
                    ->getQuery()
                    ->getResult()
                ;

                $historyElts = ['service' => $service, 'quantity' => $quantity, 'motifDestockage' => 'approvisionnement_point_de_vente'];
                $available = $this->procurementUtils->destock($entityManager, $user, $historyElts, $depotsDetails);

                if (!$available) {
                    return new ApiResponse('Stock insuffisant', null, $depotsDetails, 404);
                }

                // Approvisionner le point de vente
                $pos = $entityManager
                    ->getRepository(Affectation::class)
                    ->findOneBy(['user' => $procurement->getEmittedBy()])
                    ->getPointOfSale()
                ;

                $procurementDetails = ['quantity' => $serviceQuantity];
                $result = $this->procurementUtils->supply($entityManager, $user, $service, $procurementDetails, $pos, $procurementUpdated);
                $entityManager->flush();
                
                return new ApiResponse($result['message'], $result['data']);

            } else {
                return new ApiResponse('Cette demande n\'existe pas', null, [], 404);
            }
        }

        if (!$this->isGranted('ROLE_GESTSTOCK')) {
            $articles = $entityManager
                ->getRepository(PointOfSaleDetails::class)
                ->createQueryBuilder('pd')
                ->select('s.id', 's.name', 'p.id as posId')
                ->where('p = :pos')
                ->innerJoin('pd.pointOfSale', 'p')
                ->innerJoin('pd.service', 's')
                ->setParameter('pos', $pos)
                ->getQuery()
                ->getResult()
            ;
        }

        $userArr = [
            'username' => $user->getUserIdentifier(),
            'fullName' => $user->getFullName(),
            'roles' => $user->getRoles()
        ];

        if ($this->isGranted('ROLE_GESTSTOCK')) {
            $procurementRequests = $entityManager
                ->getRepository(ProcurementRequest::class)
                ->createQueryBuilder('p')
                ->select('p.id', 's.id as serviceId', 's.name as serviceName', 'uom.name as uomName', 'p.quantity', 'p.grantedQuantity', 'p.status', 'p.createdAt', 'p.updatedAt', 'p.approvedAt', 'e.username', 'e.fullName')
                ->innerJoin('p.product', 's')
                ->leftJoin('s.uom', 'uom')
                ->innerJoin('p.emittedBy', 'e')
                ->orderBy('p.createdAt', 'DESC')
                ->getQuery()
                ->getResult()
            ;
            $arguments = [
                'title' => 'Demandes d\'approvisionnement',
                'breadcrumb' => [
                    ['name' => 'Dépôts', 'path' => '/depots'],
                    ['name' => 'Demandes d\'approvisionnement']
                ],
                'procurementRequests' => $procurementRequests,
                'articles' => [],
                'user' => $userArr
            ];
        } else {
            $arguments = [
                'title' => 'Demande d\'approvisionnement',
                'breadcrumb' => [
                    ['name' => 'Dépôts', 'path' => '/depots'],
                    ['name' => 'Demande d\'approvisionnement']
                ],
                'procurementRequests' => [],
                'articles' => $articles,
                'user' => $userArr
            ];
        }

        return $this->renderTemplate('depots/demandeapprovisionnement.html.php', $arguments);
    }

    /**
     * @Route("/depots/blivraison", name="depot_bon_de_livraison")
     * @IsGranted("ROLE_GESTOCKPOS")
     */
    public function blivraison(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $dr = $em->getRepository($this->isGranted('ROLE_GESTSTOCK') ? 'App\Entity\Depot' : 'App\Entity\PointOfSale');
        $sr = $em->getRepository(Service::class);
        $query = $request->get('search');
        // $all = $request->get('all');

        $posIdArr = $em
            ->getRepository(Affectation::class)
            ->createQueryBuilder('a')
            ->select('p.id')
            ->where('u.id = :userId')
            ->innerJoin('a.user', 'u')
            ->innerJoin('a.pos', 'p')
            ->setParameter('userId', $this->getUser()->getId())
            ->getQuery()
            ->getOneOrNullResult()
        ;

        // if ($request->isXmlHttpRequest() && (!isset($all) || $all !== 'true')) {
        //     $pos = is_null($posIdArr) ? $posIdArr : $em->getRepository(PointOfSale::class)->find($posIdArr['id']);
        // }

        $qb = $sr->createQueryBuilder('s')
            ->select('s.id', 's.name', 's.type', 's.unitPrice')
            ->where('s.type = 2')
        ;

        if (!is_null($posIdArr)) {
            // dump($posIdArr);
            $qb = $qb
                ->andWhere('pos.id = :posId')
                ->innerJoin('s.pointOfSales', 'pos')
            ;
        }

        if (isset($query)) {
            $qb = $qb
                ->andWhere($qb->expr()->like('s.name', ':name'))
                ->setParameter('name', '%'.$query.'%')
            ;
        }

        if (!is_null($posIdArr)) {
            $qb = $qb->setParameter('posId', $posIdArr['id']);
        }

        $rawServices = $qb
            ->setMaxResults(200)
            ->getQuery()
            ->getResult()
        ;

        $services = $rawServices;

        // $services = [];

        // foreach ($rawServices as $service) {
        //     $services[] = [
        //         'value' => $service['id'],
        //         'label' => $service['name']
        //     ];
        // }

        if ($request->isXmlHttpRequest()) {
            return new JsonResponse($services);
        }

        if ($request->isMethod('POST')) {
            $ddr = $em->getRepository(DepotDetails::class);
            $pdr = $em->getRepository(PointOfSaleDetails::class);
            list($depotId, $bl, $appros) = json_decode(file_get_contents('php://input'), true);
            $entity = $this->isGranted('ROLE_GESTSTOCK')
                ? $dr->find(intval($depotId))
                : $em->getRepository(Affectation::class)
                    ->findOneBy(['user' => $this->getUser()])
                    ->getPointOfSale()
            ;
            foreach ($appros as $appro) {
                $service = $sr->findOneBy(['name' => $appro['service']]);
                $expirationDate = new \DateTime($appro['expirationDate']);
                $quantity = intval($appro['quantity']);
                $price = floatval($appro['unitPrice']);
                $history = null;
                $detail = null;
                if ($this->isGranted('ROLE_GESTSTOCK')) {
                    $history = new DepotHistory();
                    $service->addDepotHistory($history);
                    $entity->addDepotHistory($history);
                    $detail = $ddr->findOneByDepotService($entity->getId(), $service->getId());
                    if (!$detail) {
                        $detail = new DepotDetails();
                        $entity->addDepotDetail($detail);
                        $service->addDepotDetail($detail);
                    }
                } else {
                    $history = new PointOfSaleHistory();
                    $service->addPointOfSaleHistory($history);
                    $entity->addPointOfSaleHistory($history);
                    $detail = $pdr->findOneByPosService($entity->getId(), $service->getId());
                    if (!$detail) {
                        $detail = new PointOfSaleDetails();
                        $entity->addPointOfSaleDetail($detail);
                        $service->addPointOfSaleDetail($detail);
                    }
                }
                $history->setExpirationDate($expirationDate->format('Y-m-d') === (new \DateTime())->format('Y-m-d') ? null : $expirationDate);
                $history->setQuantity($quantity);
                $history->setPrice($price);
                $history->setBonLivraison($bl);
                
                $detail->setQuantity(($detail->getQuantity() ?? 0) + $quantity);
                $detail->setValue(($detail->getValue() ?? 0) + $quantity * $price);
                $detail->setUser($this->getUser());

                if ($detail->getCreatedAt() == null) {
                    $em->persist($detail);
                }

                $em->persist($history);
            }

            $em->flush();

            // $this->addFlash('success', 'Approvisionnement effectué avec succès');

            // return $this->redirectToRoute('depot_approvisionnement');
            return new JsonResponse('Approvisionnement effectué avec succès');
        }

        $depots = $this->isGranted('ROLE_GESTSTOCK')
            ? $dr->findBy([], ['name' => 'ASC'])
            : $em->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser())['id']
        ;

        return $this->renderTemplate('depots/bonlivraison.html.php', [
            'title' => 'Entrée par bon de livraison',
            'breadcrumb' => [
                ['name' => 'Dépôts', 'path' => '/depots'],
                ['name' => 'Entrée par bon de livraison']
            ],
            'services' => $services,
            'depots' => $depots
        ]);
    }

    /**
     * @Route("/depots/destockage", name="depot_destockage")
     * @IsGranted("ROLE_GESTOCKPOS")
     */
    public function destockage(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $dr = $em->getRepository(Depot::class);
        $dhr = $em->getRepository($this->isGranted('ROLE_GESTSTOCK') ? 'App\Entity\DepotHistory' : 'App\Entity\PointOfSaleHistory');
        $sr = $em->getRepository(Service::class);

        if ($request->isMethod('GET') && count($em->getRepository(DestockingReason::class)->findAll()) === 0) {
            $defaults = [
                ['code' => 'peremption', 'name' => 'L\'article est périmé'],
                ['code' => 'casse', 'name' => 'Casse'],
                ['code' => 'consommation_interne', 'name' => 'Consommation interne'],
                ['code' => 'reajustement_stock', 'name' => 'Réajustement stock']
            ];

            foreach ($defaults as $default) {
                $motifDestockage = new DestockingReason();
                $motifDestockage->setCode($default['code']);
                $motifDestockage->setName($default['name']);
                $em->persist($motifDestockage);
            }

            $em->flush();
        }

        $qb = $dhr->createQueryBuilder('d')
            ->select('d.id as historyId', 's.name', 'd.expirationDate', 'd.quantity', 'd.releases', 'd.motifDestockage', 'd.note', 'dd.quantity as depotDetailQuantity', 'u.symbol', 'u.name as uomName', 'dp.id as depotId', 'dp.name as depotName')
            ->where('s.type = 2')
        ;

        if (!$this->isGranted('ROLE_GESTSTOCK')) {
            $pos = $em->getRepository(Affectation::class)->findOneBy(['user' => $this->getUser()])->getPointOfSale();
            $qb->andWhere('p = :pos')->innerJoin('d.pos', 'p')->setParameter('pos', $pos);
        }

        $qb->innerJoin('d.service', 's')
            ->innerJoin($this->isGranted('ROLE_GESTSTOCK') ? 'd.depot' : 'd.pos', 'dp')
            ->innerJoin($this->isGranted('ROLE_GESTSTOCK') ? 's.depotDetails' : 's.pointOfSaleDetails', 'dd')
            ->leftJoin('s.uom', 'u')
        ;

        $qbd = clone $qb;

        $rawServices = $qb->andWhere($qb->expr()->isNull('d.motifDestockage'))->getQuery()->getResult();
        $destockages = $qbd->andWhere($qbd->expr()->notLike('d.motifDestockage', $qbd->expr()->literal('vente%')))->getQuery()->getResult();

        $services = [];

        foreach ($rawServices as $service) {
            $services[] = [
                'historyId' => $service['historyId'],
                'depotId' => $service['depotId'],
                'depot' => $service['depotName'],
                'service' => $service['name'],
                'uom' => $service['symbol'],
                'uomName' => $service['uomName'],
                'quantity' => $service['quantity'],
                'motif' => $service['motifDestockage'],
                'note' => $service['note'],
                'label' => sprintf('%s, Entrée : %d, Disponible : %d %s%s', $service['name'], $service['quantity'], $service['depotDetailQuantity'], $service['symbol'], (!is_null($service['expirationDate']) ? ' (expire le '.$service['expirationDate']->format('d-m-Y').')' : ''))
            ];
        }

        if ($request->isMethod('POST')) {
            $ddr = $em->getRepository($this->isGranted('ROLE_GESTSTOCK') ? 'App\Entity\DepotDetails' : 'App\Entity\PointOfSaleDetails');
            $data = json_decode(file_get_contents('php://input'), true);

            if (isset($data['motif']['id'])) {
                $motif = $em->getRepository(DestockingReason::class)->find($data['motif']['id']);
            }

            $note = $data['note'];
            $qty = intval($data['nbUnites']);

            $entity = $this->isGranted('ROLE_GESTSTOCK')
                ? $dr->find(intval($data['depotId']))
                : $em->getRepository(Affectation::class)
                    ->findOneBy(['user' => $this->getUser()])
                    ->getPointOfSale()
            ;

            $service = $sr->findOneBy(['name' => $data['service']]);
            $history = $dhr->find($data['depotHistoryId']);
            $releases = $history->getReleases();
            $quantity = $history->getQuantity();

            if ($qty <= $quantity - array_sum($releases)) {
                if (!isset($motif)) {
                    $motif = new DestockingReason();
                    $motif->setCode($data['motif']['code']);
                    $motif->setName($data['motif']['code']);
                    $em->persist($motif);
                }

                $releases[] = $qty;
                $history->setReleases($releases);
                $destockage = $this->isGranted('ROLE_GESTSTOCK') ? new DepotHistory() : new PointOfSaleHistory();
                $destockage->setMotifDestockage(is_array($motif) ? $data['motif']['code'] : $motif->getCode());
                $destockage->setNote($note);
                $destockage->setQuantity(-$qty);
                $destockage->setPrice($history->getPrice());
                $destockage->setExpirationDate($history->getExpirationDate());

                if ($bl = $history->getBonLivraison()) {
                    $destockage->setBonLivraison($bl);
                }

                $detail = null;

                if ($this->isGranted('ROLE_GESTSTOCK')) {
                    $service->addDepotHistory($destockage);
                    $entity->addDepotHistory($destockage);
                    $detail = $ddr->findOneByDepotService($entity->getId(), $service->getId());
                } else {
                    $service->addPointOfSaleHistory($destockage);
                    $entity->addPointOfSaleHistory($destockage);
                    $detail = $ddr->findOneByPosService($entity->getId(), $service->getId());
                }

                $detail->setQuantity($detail->getQuantity() - $qty);
                $detail->setValue($detail->getValue() - $qty * $history->getPrice());

                $em->persist($destockage);
                $em->flush();

                return new JsonResponse('Destockage effectué avec succès');
            }

            return new JsonResponse('', 406);
        }

        $depots = $this->isGranted('ROLE_GESTSTOCK')
            ? $dr->findBy([], ['name' => 'ASC'])
            : $em->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser())['id']
        ;

        $motifs = $em
            ->createQuery("SELECT d.id, d.code, d.name as label, d.description FROM App\Entity\DestockingReason d")
            ->getResult()
        ;

        return $this->renderTemplate('depots/destockage.html.php', [
            'title' => 'Sortie des produits défectueux ou expirés',
            'breadcrumb' => [
                ['name' => 'Dépôts', 'path' => '/depots'],
                ['name' => 'Sortie des produits défectueux ou expirés']
            ],
            'services' => $services,
            'destockages' => $destockages,
            'depots' => $depots,
            'motifs' => $motifs
        ]);
    }

    /**
     * @Route("/depots/new", name="new_depot")
     * @Security("is_granted('ROLE_GESTSTOCK') or is_granted('ROLE_FINANCE')", message="Seuls le financier principal et le gestock principal peuvent ajouter un dépôt.")
     */
    public function new(Request $request): Response
    {
        return $this->edit('depots/new.html.php', $request);
    }

    /**
     * @Route("/depots/{id}", name="depot_details")
     * @Security("is_granted('ROLE_GESTSTOCK') or is_granted('ROLE_FINANCE')", message="Seuls le financier principal et le gestock principal peuvent modifier un dépôt.")
     */
    public function details(Request $request, $id): Response
    {
        return $this->edit('depots/details.html.php', $request, intval($id));
    }

    /**
     * @Route("/depots", name="depots_list")
     */
    public function list(Request $request): Response
    {
        return $this->crud($request, null, Depot::class, [], 'depots/list.html.php', [], ['name' => 'ASC'], null, [
            'title' => 'Dépôts',
            'breadcrumb' => [
                ['name' => 'Dépôts']
            ]
        ]);
    }

    /**
     * @Route("/depots/{id}/delete", name="delete_depots")
     * @Security("is_granted('ROLE_GESTSTOCK') or is_granted('ROLE_FINANCE')", message="Seuls le financier principal et le gestock principal peuvent supprimer un dépôt.")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, Depot::class, [], '', []);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $dr = $em->getRepository(Depot::class);
        $cr = $em->getRepository(Category::class);
        $depot = null;
        $currentCategories = [];
        $categories = [];

        if (isset($id)) {
            $depot = $dr->find($id);
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $depot = new Depot();
            }
            $type = intval($request->request->get('type'));
            $depot->setName($request->request->get('name'));
            $depot->setDescription($request->request->get('description'));
            $depot->setType($type);
            $depot->setUser($this->getUser());
            switch ($type) {
                case 1:
                    $categories = $cr->findBy(['parent' => null]);
                    break;
                case 2:
                    $receivedCats = [];
                    foreach ($request->request as $key => $value) {
                        if (\preg_match('/^category/', $key)) {
                            $receivedCats[] = \str_replace('category', '', $key);
                        }
                    }
                    $categories = $cr->findBy(['id' => $receivedCats]);
                    break;
            }
            if (isset($id)) {
                foreach ($depot->getServices() as $service) {
                    $depot->removeService($service);
                }
            }
            foreach ($this->findServices($categories, []) as $service) {
                $depot->addService($service);
            }
            if (!isset($id)) {
                $em->persist($depot);
            }
            $em->flush();
            // do anything else you need here
            if (isset($id)) {
                $placeholder = 'modifié';
                $redirect = 'depot_details';
            } else {
                $placeholder = 'ajouté';
                $redirect = 'new_depot';
            }

            $parameters = isset($id) ? ['id' => $id] : []; // route parameters
            $this->addFlash('success', sprintf("Le dépôt a été %s avec succès", $placeholder));

            return $this->redirectToRoute($redirect, $parameters);
        }

        $categories = $cr->findBy(['parent' => null], ['name' => 'ASC']);
        $latestDepots = $dr->findBy([], ['createdAt' => 'DESC'], 10);

        if (isset($depot)) {
            $currentCats = [];
            foreach ($depot->getServices() as $service) {
                $currentCats[] = $service->getCategory();
            }
            $currentCategories = $this->findCategories($currentCats, []);
        }

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Mise à jour des dépôts' : 'Nouveau dépôt',
            'breadcrumb' => [
                ['name' => 'Dépôts', 'path' => '/depots'],
                ['name' => isset($id) ? $depot->getName() : 'Nouveau dépôt']
            ],
            'currentD' => $depot,
            'categories' => $categories,
            'currentCategories' => $currentCategories,
            'latestDepots' => $latestDepots
        ]);
    }

    private function findServices(array $cats, array $servs): array
    {
        $children = [];

        for ($i = 0, $c = count($cats); $i < $c; $i++) {
            $childr = $cats[$i]->getChildren()->toArray();
            if (count($childr) == 0) {
                $servs = array_merge($servs, $cats[$i]->getServices()->toArray());
            } else {
                $children = array_merge($children, $childr);
            }
        }

        if (count($children) > 0) {
            return $this->findServices($children, $servs);
        }

        return $servs;
    }

    private function findCategories(array $categs, array $cats): array
    {
        $parents = [];

        for ($i = 0, $c = count($categs); $i < $c; $i++) {
            $parent = $categs[$i]->getParent();
            if ($parent == null) {
                $cats[] = $categs[$i];
            } else {
                $parents[] = $parent;
            }
        }

        if (count($parents) > 0) {
            return $this->findCategories($parents, $cats);
        }

        return $cats;
    }

    private function supplyAndFlush(ObjectManager $em, Service $service, int $quantity, float $price, \DateTime $expirationDate, string $codeBar, Depot|PointOfSale $entity): void
    {
        $procurementDetails = [
            'quantity' => $quantity,
            'price' => $price,
            'expirationDate' => $expirationDate,
            'codeBar' => $codeBar
        ];

        $result = $this->procurementUtils->supply($em, $this->getUser(), $service, $procurementDetails, $entity);

        $em->flush();

        $this->addFlash('success', $result['message']);
    }
}
