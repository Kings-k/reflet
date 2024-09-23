<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Depense;
use App\Entity\PointOfSale;
use App\Entity\Guichet;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class RapportDepensesController extends AbstractController
{
    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack)
    {
        parent::__construct($securityChecker, $requestStack);
    }

    /**
     * @Route("/rapportdepenses", name="rapportdepenses")
     */
    public function index(Request $request): Response
    {
    //     $ent=$this->getDoctrine()->getManager();
    //     $pos=$ent->getRepository(PointOfSale::class);
    //     $guich=$ent->getRepository(Guichet::class);
    //     $typeUser=$this->getUser()->getType();
    //     $depensesFind=null;
    //     $pos_id=null;
    //     $pointOfSale =null;
    //     $dusent=date('Y-m-d');
    //     $ausent=date('Y-m-d');
      
    //     $poslist=$pos->findBy([],['name'=>'ASC']);

    //     if ($request->getMethod() == 'POST') {

    //         $dusent=$request->request->get('datedebut');
    //         $ausent=$request->request->get('datefin');
    //         $possent=$request->request->get('pos');
    //         $guichetsent=$request->request->get('guichet');

    //         if(!empty($dusent) && !empty($ausent) && $possent>0 && $guichetsent>0){

    //             $sql=$this->db->getPdo()->prepare("SELECT SUM(D.amount) total,U.full_name,U.username FROM depense D INNER JOIN user U ON U.id=D.user_id INNER JOIN user_guichet G ON G.user_id=D.user_id WHERE G.id=? AND DATE(D.done_at) BETWEEN ? AND ? GROUP BY D.user_id ");
    //             $sql->execute(array(intval($guichetsent),$dusent,$ausent));
    //             $depensesFind=$sql->fetchAll();
    //         } 
    //         elseif(!empty($dusent) && !empty($ausent) && $possent>0 && $guichetsent==0){

    //             $sql=$this->db->getPdo()->prepare("SELECT SUM(D.amount) total,U.full_name,U.username FROM depense D INNER JOIN user U ON U.id=D.user_id INNER JOIN affectation A ON A.user_id=U.id WHERE A.pos_id=? AND DATE(D.done_at) BETWEEN ? AND ? GROUP BY D.user_id ");
    //             $sql->execute(array(intval($possent),$dusent,$ausent));
    //             $depensesFind=$sql->fetchAll();
    //         }
    //         elseif(!empty($dusent) && !empty($ausent) && $possent==0 && $guichetsent==0){

    //             $sql=$this->db->getPdo()->prepare("SELECT SUM(D.amount) total,U.full_name,U.username FROM depense D INNER JOIN user U ON U.id=D.user_id  WHERE DATE(D.done_at) BETWEEN ? AND ? GROUP BY D.user_id ");
    //             $sql->execute(array($dusent,$ausent));
    //             $depensesFind=$sql->fetchAll();
    //         }
    //         else{

    //         }

    //     }else{

    //     }
      
    //     if($typeUser=="financepos"){
 
    //         $pos_id=$this->getPos($this->getUser()->getId());
    //         $pointOfSale = $pos->find(intval($pos_id));
        
    //         $guichets = $ent->createQuery("SELECT g.id, g.nomGuichet FROM App\Entity\Guichet g WHERE g.pos = :pos")
    //             ->setParameter('pos', $pointOfSale)
    //             ->getResult();
    //     }
    //     else{

    //         $guichets = $ent->createQuery("SELECT g.id, g.nomGuichet FROM App\Entity\Guichet g")->getResult();
    //     }
        
    //    return $this->renderTemplate('rapportdepenses/new.html.php', [
    //     'title' => isset($id) ? 'Rapport Financier' : 'Depenses',
    //     'breadcrumb' => [
    //         ['name' => 'Rapports', 'path' => '/rapportdepenses'],
    //         ['name' => 'Depenses']
    //     ],
    //         'listpos'=>$poslist,
    //         'listguichets'=>$guichets,
    //         'typeuser'=>$typeUser,
    //         'posUser'=>$pointOfSale,
    //         'depensesSent'=>$depensesFind,
    //         'titlesent'=>"RAPPORT DES DEPENSES EFFECTUEES DU ".$this->frdate($dusent)." AU ".$this->frdate($ausent)
    //     ]);

        $manager = $this->getDoctrine()->getManager();
        $spentsRepository = $manager->getRepository(Depense::class);
        $posRepository = $manager->getRepository(PointOfSale::class);
        $guichetRepository = $manager->getRepository(Guichet::class);
        $affectationRepository = $manager->getRepository(Affectation::class);

        $from = null;
        $to = null;
        $pos = null;
        $guichet = null;

        $pointsOfSale = [];
        $clients = [];

        $selectedPos = null;
        $selectedGuichet = null;

        if ($request->isMethod('POST')) {
            $from = $request->request->get('start-date');
            $to = $request->request->get('end-date');
            $startDate = strlen($from) > 0 ? (new \DateTime($from))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($to))->format('Y-m-d');

            $posId = intval($request->request->get('pos'));
            $guichetId = intval($request->request->get('guichet'));

            $queryString = "SELECT d.doneAt, d.amount, d.motif, d.typeDepense, u.username, u.fullName FROM App\Entity\Depense d INNER JOIN d.user AS u WHERE DATE_FORMAT(d.doneAt, '%Y-%m-%d') BETWEEN :startDate AND :endDate";

            if ($guichetId > 0) {
                $guichet = $guichetRepository->createQueryBuilder('g')
                    ->select('g.id', 'g.nomGuichet')
                    ->where('g.id = :guichetId')
                    ->setParameter('guichetId', $guichetId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.user IN (SELECT usr FROM App\Entity\UserGuichet ug INNER JOIN ug.guichet AS g INNER JOIN ug.user AS usr WHERE g.id = :guichetId)";
            }

            if ($posId > 0) {
                $pos = $posRepository->createQueryBuilder('p')
                    ->select('p.id', 'p.name')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $posId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.user IN (SELECT user FROM App\Entity\Affectation a INNER JOIN a.pos AS po INNER JOIN a.user AS user WHERE po.id = :posId)";
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

            $spents = $query->getResult();

        } else {
            $qb = $spentsRepository->createQueryBuilder('d');
            $spents = $qb
                ->select('d.doneAt', 'd.amount', 'd.motif', 'd.typeDepense', 'u.username', 'u.fullName')
                ->where("DATE_FORMAT(d.doneAt, '%Y-%m-%d') = :today")
                ->innerJoin('d.user', 'u')
                ->orderBy('d.doneAt', 'ASC')
                ->setParameter('today', (new \DateTime())->format('Y-m-d'))
                ->getQuery()
                ->getResult()
            ;
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

        return $this->renderTemplate('rapportdepenses/new.html.php', [
            'title' => 'Rapport des dépenses',
            'breadcrumb' => [
                ['name' => 'Dépenses']
            ],
            'spents' => $spents,
            'pointsOfSale' => $pointsOfSale,
            'guichets' => $guichets,
            'from' => $from,
            'to' => $to,
            'selectedPos' => $pos,
            'selectedGuichet' => $guichet
        ]);
    }
}
