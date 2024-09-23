<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Client;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleHistory;
use App\Entity\Guichet;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class RapportVentesController extends AbstractController
{ 
    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack)
    {
        parent::__construct($securityChecker, $requestStack);
    }

    /**
     * @Route("/rapportventess", name="rapportventes")
     */
    public function index(): Response
    {
        $ent=$this->getDoctrine()->getManager();
        $pos=$ent->getRepository(PointOfSale::class);
        $ventescash=0;
        $ventescredits=0;
        $totaldepenses=0;
        $totalreductions=0;
        $totalpayement=0;
        $typeUser=$this->getUser()->getType();

        $pos_id=null;
        $pointOfSale =null;

        $poslist=$pos->findBy([],['name'=>'ASC']);

        if ($typeUser=="financepos") {
 
            $cash=$this->db->getPdo()->query("SELECT SUM(quantity*price) somme FROM point_of_sale_history WHERE DATE(created_at)=CURRENT_DATE() AND motif_destockage='vente_cash' ");
            $data=$cash->fetch();
            $ventescash=$data['somme'];

            $credit=$this->db->getPdo()->query("SELECT SUM(quantity*price) somme FROM point_of_sale_history WHERE DATE(created_at)=CURRENT_DATE() AND motif_destockage='vente_credit' ");
            $data=$credit->fetch();
            $ventescredits=$data['somme'];

            $depenses=$this->db->getPdo()->query("SELECT SUM(amount) somme FROM depense WHERE DATE(done_at)=CURRENT_DATE() ");
            $data=$depenses->fetch();
            $totaldepenses=$data['somme'];

            $payement=$this->db->getPdo()->query("SELECT SUM(montant_paye) somme FROM payement_dette WHERE DATE(date_paye)=CURRENT_DATE() ");
            $data=$payement->fetch();
            $totalpayement=$data['somme'];

            $reduction=$this->db->getPdo()->query("SELECT SUM(montant_reduit) somme FROM reduction ");
            $data=$reduction->fetch();
            $totalreductions=$data['somme'];

            $pos_id=$this->getPos($this->getUser()->getId());
            $pointOfSale = $pos->find(intval($pos_id));

            $guichets = $ent->createQuery("SELECT g.id, g.nomGuichet FROM App\Entity\Guichet g WHERE g.pos = :pos")
                ->setParameter('pos', $pointOfSale)
                ->getResult();
        } else {

            $cash=$this->db->getPdo()->query("SELECT SUM(quantity*price) somme FROM point_of_sale_history WHERE DATE(created_at)=CURRENT_DATE() AND motif_destockage='vente_cash' ");
            $data=$cash->fetch();
            $ventescash=$data['somme'];

            $credit=$this->db->getPdo()->query("SELECT SUM(quantity*price) somme FROM point_of_sale_history WHERE DATE(created_at)=CURRENT_DATE() AND motif_destockage='vente_credit' ");
            $data=$credit->fetch();
            $ventescredits=$data['somme'];

            $depenses=$this->db->getPdo()->query("SELECT SUM(amount) somme FROM depense WHERE DATE(done_at)=CURRENT_DATE() ");
            $data=$depenses->fetch();
            $totaldepenses=$data['somme'];

            $payement=$this->db->getPdo()->query("SELECT SUM(montant_paye) somme FROM payement_dette WHERE DATE(date_paye)=CURRENT_DATE() ");
            $data=$payement->fetch();
            $totalpayement=$data['somme'];

            $reduction=$this->db->getPdo()->query("SELECT SUM(montant_reduit) somme FROM reduction ");
            $data=$reduction->fetch();
            $totalreductions=$data['somme'];

            $guichets = $ent->createQuery("SELECT g.id, g.nomGuichet FROM App\Entity\Guichet g")->getResult();

        }

        return $this->renderTemplate('rapportsventes/new.html.php', [
            'title' => 'Rapport des ventes' . (isset($id) ? ' filtré' : ''),
            'breadcrumb' => [
                ['name' => 'Rapports', 'path' => '/pos'],
                ['name' => 'Finance']
            ],
            'cashs' => $ventescash,
            'credits' => $ventescredits,
            'depenses' => $totaldepenses,
            'payements' => $totalpayement,
            'reduction' => $totalreductions,
            'listpos'=>$poslist,
            'listguichets'=>$guichets,
            'typeuser'=>$this->getUser()->getType(),
            'posUser'=>$pointOfSale
        ]);
    }

    /**
     * @Route("/rapportventes", name="rapportventes")
     */
    public function rappportfinancefiltre(Request $request):Response
    {
        $manager = $this->getDoctrine()->getManager();
        $salesRepository = $manager->getRepository(PointOfSaleHistory::class);
        $posRepository = $manager->getRepository(PointOfSale::class);
        $guichetRepository = $manager->getRepository(Guichet::class);
        $clientRepository = $manager->getRepository(Client::class);
        $affectationRepository = $manager->getRepository(Affectation::class);

        $from = null;
        $to = null;
        $pos = null;
        $guichet = null;
        $client = null;

        $pointsOfSale = [];
        $clients = [];

        $selectedPos = null;
        $selectedGuichet = null;
        $selectedClient = null;

        if ($request->isMethod('POST')) {
            $from = $request->request->get('start-date');
            $to = $request->request->get('end-date');
            $startDate = strlen($from) > 0 ? (new \DateTime($from))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($to))->format('Y-m-d');

            $posId = intval($request->request->get('pos'));
            $guichetId = intval($request->request->get('guichet'));
            $clientId = intval($request->request->get('client'));

            $queryString = "SELECT p.createdAt, p.quantity, p.price, s.name AS serviceName, c.id AS clientId, c.nomClient, f.typeFacture FROM App\Entity\PointOfSaleHistory p INNER JOIN p.service AS s INNER JOIN p.invoice AS f LEFT JOIN f.client AS c WHERE DATE_FORMAT(p.createdAt, '%Y-%m-%d') BETWEEN :startDate AND :endDate";

            if ($guichetId > 0) {
                $guichet = $guichetRepository->createQueryBuilder('g')
                    ->select('g.id', 'g.nomGuichet')
                    ->where('g.id = :guichetId')
                    ->setParameter('guichetId', $guichetId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND f.editedBy IN (SELECT usr FROM App\Entity\UserGuichet ug INNER JOIN ug.guichet AS g INNER JOIN ug.user AS usr WHERE g.id = :guichetId)";
            }

            if ($posId > 0) {
                $pos = $posRepository->createQueryBuilder('p')
                    ->select('p.id', 'p.name')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $posId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND f.editedBy IN (SELECT u FROM App\Entity\Affectation a INNER JOIN a.pos AS po INNER JOIN a.user AS u WHERE po.id = :posId)";
            }

            if ($clientId > 0) {
                $client = $clientRepository->createQueryBuilder('c')
                    ->select('c.id', 'c.nomClient')
                    ->where('c.id = :clientId')
                    ->setParameter('clientId', $clientId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND c = (SELECT cl FROM App\Entity\Client cl WHERE cl.id = :clientId)";
            }

            $query = $manager
                ->createQuery($queryString)
                ->setParameter('startDate', $startDate)
                ->setParameter('endDate', $endDate)
            ;

            if ($guichetId > 0) {
                $query = $query->setParameter('guichetId', $guichetId);
            }

            if ($posId > 0) {
                $query = $query->setParameter('posId', $posId);
            }

            if ($clientId > 0) {
                $query = $query->setParameter('clientId', $clientId);
            }

            $sales = $query->getResult();

        } else {
            if ($this->isGranted('ROLE_FINANCE')) {
                $qb = $salesRepository->createQueryBuilder('p');
                $sales = $qb
                    ->select('p.createdAt', 'p.quantity', 'p.price', 's.name as serviceName', 'c.id as clientId', 'c.nomClient', 'f.typeFacture')
                    ->where($qb->expr()->orX('f.typeFacture = :cash', 'f.typeFacture = :credit'))
                    ->andWhere("DATE_FORMAT(p.createdAt, '%Y-%m-%d') = :today")
                    ->innerJoin('p.service', 's')
                    ->innerJoin('p.invoice', 'f')
                    ->leftJoin('f.client', 'c')
                    ->orderBy('p.createdAt', 'ASC')
                    ->setParameter('cash', 'cash')
                    ->setParameter('credit', 'credit')
                    ->setParameter('today', (new \DateTime())->format('Y-m-d'))
                    ->getQuery()
                    ->getResult()
                ;
            } else {
                $sales = $affectationRepository
                    ->createQueryBuilder('a')
                    ->select('ph.createdAt', 'ph.quantity', 'ph.price', 's.name as serviceName', 'c.id as clientId', 'c.nomClient', 'f.typeFacture')
                    ->where('a.user = :user')
                    ->innerJoin('a.pos', 'p')
                    ->innerJoin('p.pointOfSaleHistories', 'ph')
                    ->innerJoin('ph.service', 's')
                    ->innerJoin('ph.invoice', 'f')
                    ->leftJoin('f.client', 'c')
                    ->orderBy('ph.createdAt', 'ASC')
                    ->setParameter('user', $this->getUser())
                    ->getQuery()
                    ->getResult()
                ;
            }
        }

        if ($this->isGranted('ROLE_FINANCE')) {
            // Points de vente
            $pointsOfSale = $posRepository
                ->createQueryBuilder('p')
                ->select('p.id', 'p.name')
                ->getQuery()
                ->getResult()
            ;

            // Guichets
            $guichets = $guichetRepository
                ->createQueryBuilder('g')
                ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                ->innerJoin('g.pos', 'p')
                ->getQuery()
                ->getResult()
            ;
        } else {
            // Points de vente
            $pointsOfSale = $affectationRepository
                ->createQueryBuilder('a')
                ->select('p.id', 'p.name')
                ->where('a.user = :user')
                ->innerJoin('a.pos', 'p')
                ->setParameter('user', $this->getUser())
                ->getQuery()
                ->getResult()
            ;
            // Guichets
            $guichets = $affectationRepository
                ->createQueryBuilder('a')
                ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                ->where('a.user = :user')
                ->innerJoin('a.pos', 'p')
                ->innerJoin('p.guichets', 'g')
                ->setParameter('user', $this->getUser())
                ->getQuery()
                ->getResult()
            ;
        }

        // Clients
        $clients = $clientRepository
            ->createQueryBuilder('c')
            ->select('c.id', 'c.nomClient')
            ->getQuery()
            ->getResult()
        ;

        return $this->renderTemplate('rapportsventes/new.html.php', [
            'title' => 'Rapport des ventes',
            'breadcrumb' => [
                // ['name' => 'Ventes', 'path' => '/dettes'],
                ['name' => 'Ventes']
            ],
            'sales' => $sales,
            'pointsOfSale' => $pointsOfSale,
            'guichets' => $guichets,
            'clients' => $clients,
            'from' => $from,
            'to' => $to,
            'selectedPos' => $pos,
            'selectedGuichet' => $guichet,
            'selectedClient' => $client
        ]);
    }
}
