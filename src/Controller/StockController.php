<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\PointOfSaleDetails;
use App\Entity\Service;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StockController extends AbstractController
{
    /**
     * @Route("/stock/approvisionnements", name="approvisionnements_stock")
     */
    public function approvisionnements(Request $request): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $depotRepository = $manager->getRepository($this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE') ? 'App\Entity\Depot' : 'App\Entity\PointOfSale');
        $userRepository = $manager->getRepository(User::class);
        $affectationRepository = $manager->getRepository(Affectation::class);

        $from = null;
        $to = null;
        $depot = null;
        $stockManager = null;
        $stockManagers = [];
        $procurements = [];
        $stockDispo = [];

        if ($request->isMethod('POST')) {
            $from = $request->request->get('start-date');
            $to = $request->request->get('end-date');
            $startDate = strlen($from) > 0 ? (new \DateTime($from))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($to))->format('Y-m-d');

            $depotId = intval($request->request->get('depot'));
            $stockManagerId = intval($request->request->get('stock-manager'));

            // $queryString = "SELECT dh.id, dh.createdAt, dh.quantity, dh.price, dh.expirationDate, dh.releases, dh.motifDestockage, s.name as article, uom.symbol as uomSymbol, uom.name as uomName, d.name as storeName, sm.username as stockManager FROM ";
            // $queryString .= $this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE') ? "App\Entity\DepotHistory dh INNER JOIN dh.depot" : "App\Entity\PointOfSaleHistory dh INNER JOIN dh.pos";
            // $queryString .= " AS d INNER JOIN dh.service as s INNER JOIN s.uom AS uom INNER JOIN dh.stockManager AS sm WHERE (DATE_FORMAT(dh.createdAt, '%Y-%m-%d') BETWEEN :startDate AND :endDate)";

            $queryString = "SELECT dh.id, dh.createdAt, dh.quantity, dh.price, dh.expirationDate, dh.releases, dh.motifDestockage, dd.quantity as depotDetailQuantity, s.name as article, uom.symbol as uomSymbol, uom.name as uomName, d.name as storeName, sm.username as stockManager FROM App\Entity\Service s INNER JOIN ";
            $queryString .= $this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE') ? "s.depotHistories dh INNER JOIN s.depotDetails dd INNER JOIN dh.depot" : "s.pointOfSaleHistories dh INNER JOIN s.pointOfSaleDetails dd INNER JOIN dh.pos";
            $queryString .= " AS d INNER JOIN s.uom AS uom INNER JOIN dh.stockManager AS sm WHERE (DATE_FORMAT(dh.createdAt, '%Y-%m-%d') BETWEEN :startDate AND :endDate)";

            if ($depotId > 0) {
                $depot = $depotRepository->createQueryBuilder('p')
                    ->select('p.id', 'p.name')
                    ->where('p.id = :depotId')
                    ->setParameter('depotId', $depotId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.id = :depotId";
            }

            if ($stockManagerId > 0) {
                $stockManager = $userRepository->createQueryBuilder('m')
                    ->select('m.id', 'm.username')
                    ->where('m.id = :stockManagerId')
                    ->setParameter('stockManagerId', $stockManagerId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND sm.id = :stockManagerId";
            }

            $query = $manager->createQuery($queryString)
                ->setParameter('startDate', $startDate)
                ->setParameter('endDate', $endDate);

            if ($depotId > 0) {
                $query = $query->setParameter('depotId', $depotId);
            }

            if ($stockManagerId > 0) {
                $query = $query->setParameter('stockManagerId', $stockManagerId);
            }

            $procurements = $query->getResult();

        } else {
            if ($this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE')) {
                $qb = $manager->getRepository(Service::class)
                    ->createQueryBuilder('s')
                    ->select('dh.id', 'dh.createdAt', 'dh.quantity', 'dh.price', 'dh.expirationDate', 'dh.releases', 'dh.motifDestockage', 'dd.quantity as depotDetailQuantity', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'd.name as storeName', 'sm.username as stockManager')
                    ->where("DATE_FORMAT(dh.createdAt, '%Y-%m-%d') = :today")
                    ->innerJoin('s.depotHistories', 'dh')
                    ->innerJoin('s.depotDetails', 'dd')
                    ->innerJoin('dh.depot', 'd')
                    ->innerJoin('dh.stockManager', 'sm')
                ;
            } else {
                $qb = $affectationRepository
                    ->createQueryBuilder('a')
                    ->select('dh.id', 'dh.createdAt', 'dh.quantity', 'dh.price', 'dh.expirationDate', 'dh.releases', 'dh.motifDestockage', 'dd.quantity as depotDetailQuantity', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'sm.username as stockManager')
                    ->where('a.user = :user')
                    ->andWhere("DATE_FORMAT(dh.createdAt, '%Y-%m-%d') = :today")
                    ->innerJoin('a.pos', 'p')
                    ->innerJoin('p.services', 's')
                    ->innerJoin('s.pointOfSaleHistories', 'dh')
                    ->innerJoin('s.pointOfSaleDetails', 'dd')
                    ->innerJoin('dh.stockManager', 'sm')
                    ->setParameter('user', $this->getUser())
                ;
            }

            $procurements = $qb->andWhere($qb->expr()->isNull('dh.motifDestockage'))
                ->innerJoin('s.uom', 'u')
                ->orderBy('dh.createdAt', 'DESC')
                ->setParameter('today', (new \DateTime())->format('Y-m-d'))
                ->getQuery()
                ->getResult()
            ;
        }        

        if ($this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE')) {
            $depots = $depotRepository->createQueryBuilder('d')
                ->select('d.id', 'd.name')
                ->getQuery()
                ->getResult();
            $qb = $userRepository->createQueryBuilder('u');
            $stockManagers = $qb
                ->select('u.id', 'u.username', 'u.type')
                ->where($qb->expr()->orX($qb->expr()->eq('u.type', ':geststock'), $qb->expr()->eq('u.type', ':gestockpos')))
                ->setParameter('geststock', 'geststock')
                ->setParameter('gestockpos', 'gestockpos')
                ->getQuery()
                ->getResult()
            ;
        } else {
            $depots = [$affectationRepository->findOnePosIdByUser($this->getUser())];
            $pos = $affectationRepository->findOneBy(['user' => $this->getUser()])->getPos();
            $stockManagers = $affectationRepository
                ->createQueryBuilder('a')
                ->select('u.id', 'u.username')
                ->where('a.pos = :pos')
                ->andWhere('u.type = :gestockpos')
                ->innerJoin('a.user', 'u')
                ->setParameter('pos', $pos)
                ->setParameter('gestockpos', 'gestockpos')
                ->getQuery()
                ->getResult()
            ;
        }

        return $this->renderTemplate('stock/approvisionnements.html.php', [
            'title' => 'Rapport de stock',
            'breadcrumb' => [
                ['name' => 'Rapport de stock']
            ],
            'procurements' => $procurements,
            'stockDispo' => $stockDispo,
            'depots' => $depots,
            'stockManagers' => $stockManagers,
            'from' => $from,
            'to' => $to,
            'selectedDepot' => $depot,
            'selectedStockManager' => $stockManager,
        ]);
    }

    /**
     * @Route("/stock/valorisation", name="valorisation_stock")
     */
    public function valorisation(): Response
    {
        $manager = $this->getDoctrine()->getManager();

        if ($this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE')) {
            $qb = $manager->getRepository(Service::class)
                ->createQueryBuilder('s')
                ->select('dd.id', 'dd.quantity', 's.unitPrice', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'd.name as storeName')
                ->innerJoin('s.depotDetails', 'dd')
                ->innerJoin('dd.depot', 'd')
            ;
        } else {
            $qb = $manager->getRepository(Affectation::class)
                ->createQueryBuilder('a')
                ->select('dd.id', 'dd.quantity', 's.unitPrice', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName')
                ->where('a.user = :user')
                ->innerJoin('a.pos', 'p')
                ->innerJoin('p.services', 's')
                ->innerJoin('s.pointOfSaleDetails', 'dd')
                ->setParameter('user', $this->getUser())
            ;
        }

        $stocks = $qb
            ->leftJoin('s.uom', 'u')
            ->orderBy('s.name', 'ASC')
            ->getQuery()
            ->getResult()
        ;

        if ($this->isGranted('ROLE_GESTSTOCK') || $this->isGranted('ROLE_FINANCE')) {
            $others = $manager->getRepository(PointOfSaleDetails::class)
                ->createQueryBuilder('dd')
                ->select('dd.id', 'dd.quantity', 's.unitPrice', 's.name as article', 'u.symbol as uomSymbol', 'u.name as uomName', 'p.name as storeName')
                ->innerJoin('dd.pointOfSale', 'p')
                ->innerJoin('dd.service', 's')
                ->leftJoin('s.uom', 'u')
                ->orderBy('s.name', 'ASC')
                ->getQuery()
                ->getResult()
            ;

            $stocks = array_map(function(array $depot): array {
                $depot['typeDepot'] = 'depot';
                return $depot;
            }, $stocks);

            $others = array_map(function(array $pos): array {
                $pos['typeDepot'] = 'pos';
                return $pos;
            }, $others);

            $stocks = array_merge($stocks, $others);
        }

        return $this->renderTemplate('stock/valorisation.html.php', [
            'title' => 'Valorisation de stock',
            'breadcrumb' => [
                ['name' => 'Valorisation de stock']
            ],
            'stocks' => $stocks
        ]);
    }
}
