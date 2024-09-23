<?php

namespace App\Controller;

use App\Entity\Client;
use App\Entity\Dettes;
use App\Entity\Guichet;
use App\Entity\PayementDette;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleHistory;
use App\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DetteController extends AbstractController
{
    /**
     * @Route("/dettes", name="dettes")
     */
    public function index(Request $request): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $detteRepository = $manager->getRepository(Dettes::class);
        $posRepository = $manager->getRepository(PointOfSale::class);
        $guichetRepository = $manager->getRepository(Guichet::class);
        $clientRepository = $manager->getRepository(Client::class);

        $from = null;
        $to = null;
        $pos = null;
        $guichet = null;
        $client = null;

        $pointsOfSale = [];
        $clients = [];

        if ($request->isMethod('POST')) {
            $from = $request->request->get('start-date');
            $to = $request->request->get('end-date');
            $startDate = strlen($from) > 0 ? (new \DateTime($from))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($to))->format('Y-m-d');

            $posId = intval($request->request->get('pos'));
            $guichetId = intval($request->request->get('guichet'));
            $clientId = intval($request->request->get('client'));

            $queryString = "SELECT d.dateOctroi, d.echeance, f.id as factureId, d.amount, d.sold, d.statut, c.nomClient FROM App\Entity\Dettes d INNER JOIN d.facture AS f INNER JOIN d.client AS c WHERE DATE_FORMAT(d.dateOctroi, '%Y-%m-%d') BETWEEN :startDate AND :endDate";

            if ($guichetId > 0) {
                $guichet = $guichetRepository->createQueryBuilder('g')
                    ->select('g.id', 'g.nomGuichet')
                    ->where('g.id = :guichetId')
                    ->setParameter('guichetId', $guichetId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.madeby IN (SELECT usr FROM App\Entity\UserGuichet ug INNER JOIN ug.guichet AS g INNER JOIN ug.user AS usr WHERE g.id = :guichetId)";
            }

            if ($posId > 0) {
                $pos = $posRepository->createQueryBuilder('p')
                    ->select('p.id', 'p.name')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $posId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.madeby IN (SELECT u FROM App\Entity\Affectation a INNER JOIN a.pos AS p INNER JOIN a.user AS u WHERE p.id = :posId)";
            }

            if ($clientId > 0) {
                $client = $clientRepository->createQueryBuilder('c')
                    ->select('c.id', 'c.nomClient')
                    ->where('c.id = :clientId')
                    ->setParameter('clientId', $clientId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND d.client = (SELECT cl FROM App\Entity\Client cl WHERE cl.id = :clientId)";
            }

            $query = $manager->createQuery($queryString)
                ->setParameter('startDate', $startDate)
                ->setParameter('endDate', $endDate);

            if ($guichetId > 0) {
                $query = $query->setParameter('guichetId', $guichetId);
            }

            if ($posId > 0) {
                $query = $query->setParameter('posId', $posId);
            }

            if ($clientId > 0) {
                $query = $query->setParameter('clientId', $clientId);
            }

            $dettes = $query->getResult();

        } else {
            $dettes = $this->isGranted('ROLE_FINANCE')
                ? $detteRepository->createQueryBuilder('d')
                    ->select('d.dateOctroi', 'd.echeance', 'f.id as factureId', 'd.amount', 'd.sold', 'd.statut', 'c.nomClient')
                    ->where("DATE_FORMAT(d.dateOctroi, '%Y-%m-%d') = :today")
                    ->innerJoin('d.facture', 'f')
                    ->innerJoin('d.client', 'c')
                    ->orderBy('d.dateOctroi', 'ASC')
                    ->setParameter('today', (new \DateTime())->format('Y-m-d'))
                    ->getQuery()
                    ->getResult()
                : $manager->createQuery("SELECT d.dateOctroi, d.echeance, f.id AS factureId, d.amount, d.sold, d.statut, c.nomClient FROM App\Entity\Dettes d INNER JOIN d.facture AS f INNER JOIN d.client AS c INNER JOIN d.madeby AS m WHERE (SELECT po FROM App\Entity\Affectation af INNER JOIN af.pos AS po WHERE af.user = m) = (SELECT p FROM App\Entity\Affectation a INNER JOIN a.pos AS p WHERE a.user = :user) AND DATE_FORMAT(d.dateOctroi, '%Y-%m-%d') = :today")
                    ->setParameter('user', $this->getUser())
                    ->setParameter('today', (new \DateTime())->format('Y-m-d'))
                    ->getResult();
        }

        if ($this->isGranted('ROLE_FINANCE')) {
            $pointsOfSale = $posRepository->createQueryBuilder('p')
                ->select('p.id', 'p.name')
                ->getQuery()
                ->getResult();
        } else {
            $pointsOfSale = [
                $manager->createQuery("SELECT p.id, p.name FROM App\Entity\Affectation a INNER JOIN a.pos AS p WHERE a.user = :user")
                    ->setParameter('user', $this->getUser())
                    ->getOneOrNullResult()
            ];
        }

        $guichets = $this->isGranted('ROLE_FINANCE')
            ? $guichetRepository->createQueryBuilder('g')
                ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                ->innerJoin('g.pos', 'p')
                ->getQuery()
                ->getResult()
            : (
                count($pointsOfSale) === 1
                    ? $guichetRepository->createQueryBuilder('g')
                        ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                        ->innerJoin('g.pos', 'p')
                        ->where('p.id = :posId')
                        ->setParameter('posId', $pointsOfSale[0]['id'])
                        ->getQuery()
                        ->getResult()
                    : []
                );

        if ($this->isGranted('ROLE_FINANCE')) {
            $clients = $clientRepository->createQueryBuilder('c')
                ->select('c.id', 'c.nomClient')
                ->getQuery()
                ->getResult();
        } else {
            $clients = count($pointsOfSale) === 1
                ? $manager->getRepository(PointOfSaleHistory::class)
                    ->createQueryBuilder('ph')
                    ->select('c.id', 'c.nomClient')
                    ->innerJoin('ph.pos', 'p')
                    ->innerJoin('ph.invoice', 'f')
                    ->innerJoin('f.client', 'c')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $pointsOfSale[0]['id'])
                    ->getQuery()
                    ->getResult()
                : [];
        }

        return $this->renderTemplate('dettes/index.html.php', [
            'title' => 'Dettes',
            'breadcrumb' => [
                ['name' => 'Dettes']
            ],
            'dettes' => $dettes,
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

    /**
     * @Route("/dettes/paiements", name="list_paiement_dettes")
     */
    public function listPaiementDettes(Request $request): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $paiementDetteRepository = $manager->getRepository(PayementDette::class);
        $posRepository = $manager->getRepository(PointOfSale::class);
        $guichetRepository = $manager->getRepository(Guichet::class);
        $clientRepository = $manager->getRepository(Client::class);

        $from = null;
        $to = null;
        $pos = null;
        $guichet = null;
        $client = null;

        $pointsOfSale = [];
        $clients = [];

        if ($request->isMethod('POST')) {
            $from = $request->request->get('start-date');
            $to = $request->request->get('end-date');
            $startDate = strlen($from) > 0 ? (new \DateTime($from))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($to))->format('Y-m-d');

            $posId = intval($request->request->get('pos'));
            $guichetId = intval($request->request->get('guichet'));
            $clientId = intval($request->request->get('client'));

            $queryString = "SELECT p.datePaye, p.montantPaye, d.amount, d.sold, d.statut, c.nomClient FROM App\Entity\PayementDette p INNER JOIN p.dette AS d INNER JOIN d.client AS c WHERE DATE_FORMAT(p.datePaye, '%Y-%m-%d') BETWEEN :startDate AND :endDate";

            if ($guichetId > 0) {
                $guichet = $guichetRepository->createQueryBuilder('g')
                    ->select('g.id', 'g.nomGuichet')
                    ->where('g.id = :guichetId')
                    ->setParameter('guichetId', $guichetId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND p.doneby IN (SELECT usr FROM App\Entity\UserGuichet ug INNER JOIN ug.guichet AS g INNER JOIN ug.user AS usr WHERE g.id = :guichetId)";
            }

            if ($posId > 0) {
                $pos = $posRepository->createQueryBuilder('p')
                    ->select('p.id', 'p.name')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $posId)
                    ->getQuery()
                    ->getOneOrNullResult();
                $queryString .= " AND p.doneby IN (SELECT u FROM App\Entity\Affectation a INNER JOIN a.pos AS po INNER JOIN a.user AS u WHERE po.id = :posId)";
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

            $query = $manager->createQuery($queryString)
                ->setParameter('startDate', $startDate)
                ->setParameter('endDate', $endDate);

            if ($guichetId > 0) {
                $query = $query->setParameter('guichetId', $guichetId);
            }

            if ($posId > 0) {
                $query = $query->setParameter('posId', $posId);
            }

            if ($clientId > 0) {
                $query = $query->setParameter('clientId', $clientId);
            }

            $paiementsDettes = $query->getResult();

        } else {
            $paiementsDettes = $this->isGranted('ROLE_FINANCE')
                ? $paiementDetteRepository->createQueryBuilder('p')
                    ->select('p.datePaye', 'p.montantPaye', 'd.amount', 'd.sold', 'd.statut', 'c.nomClient')
                    ->innerJoin('p.dette', 'd')
                    ->innerJoin('d.client', 'c')
                    ->orderBy('d.dateOctroi', 'ASC')
                    ->getQuery()
                    ->getResult()
                : $manager->createQuery("SELECT p.datePaye, p.montantPaye, d.amount, d.sold, d.statut, c.nomClient FROM App\Entity\PayementDette p INNER JOIN p.dette AS d INNER JOIN d.client AS c INNER JOIN p.doneby AS db WHERE (SELECT po FROM App\Entity\Affectation af INNER JOIN af.pos AS po WHERE af.user = db) = (SELECT pos FROM App\Entity\Affectation a INNER JOIN a.pos AS pos WHERE a.user = :user)")
                    ->setParameter('user', $this->getUser())
                    ->getResult();
        }

        // Points de vente
        if ($this->isGranted('ROLE_FINANCE')) {
            $pointsOfSale = $posRepository->createQueryBuilder('p')
                ->select('p.id', 'p.name')
                ->getQuery()
                ->getResult();
        } else {
            $pointsOfSale = [
                $manager->createQuery("SELECT p.id, p.name FROM App\Entity\Affectation a INNER JOIN a.pos AS p WHERE a.user = :user")
                    ->setParameter('user', $this->getUser())
                    ->getOneOrNullResult()
            ];
        }

        // Guichets
        $guichets = $this->isGranted('ROLE_FINANCE')
            ? $guichetRepository->createQueryBuilder('g')
                ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                ->innerJoin('g.pos', 'p')
                ->getQuery()
                ->getResult()
            : (
                count($pointsOfSale) === 1
                    ? $guichetRepository->createQueryBuilder('g')
                        ->select('g.id', 'g.nomGuichet', 'p.id as posId')
                        ->innerJoin('g.pos', 'p')
                        ->where('p.id = :posId')
                        ->setParameter('posId', $pointsOfSale[0]['id'])
                        ->getQuery()
                        ->getResult()
                    : []
                );

        // Clients
        if ($this->isGranted('ROLE_FINANCE')) {
            $clients = $clientRepository->createQueryBuilder('c')
                ->select('c.id', 'c.nomClient')
                ->getQuery()
                ->getResult();
        } else {
            $clients = count($pointsOfSale) === 1
                ? $manager->getRepository(PointOfSaleHistory::class)
                    ->createQueryBuilder('ph')
                    ->select('c.id', 'c.nomClient')
                    ->innerJoin('ph.pos', 'p')
                    ->innerJoin('ph.invoice', 'f')
                    ->innerJoin('f.client', 'c')
                    ->where('p.id = :posId')
                    ->setParameter('posId', $pointsOfSale[0]['id'])
                    ->getQuery()
                    ->getResult()
                : [];
        }

        return $this->renderTemplate('dettes/paiements-dettes.html.php', [
            'title' => 'Paiements dettes',
            'breadcrumb' => [
                ['name' => 'Dettes', 'path' => '/dettes'],
                ['name' => 'Paiements dettes']
            ],
            'paiementsDettes' => $paiementsDettes,
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

    /**
     * @Route("/dettes/{clientId}", name="list_dettes")
     */
    public function dettes($clientId): JsonResponse
    {
        $manager = $this->getDoctrine()->getManager();
        $client = $manager->getRepository(Client::class)->find(is_string($clientId) ? intval($clientId) : $clientId);
        $isEnterprise = $client->getTypeClient() === 'morale' ? true : false;
        $qb = $manager->getRepository(Dettes::class)->createQueryBuilder('d');

        $dettes = $qb
            ->select('d.id', 'd.dateOctroi', 'd.statut', 'd.amount', 'd.sold', 'd.echeance')
            ->where($qb->expr()->andX($qb->expr()->eq('d.client', ':client'), $qb->expr()->gt('d.sold', 0)))
            ->setParameter('client', $client)
            ->getQuery()
            ->getResult();

        if ($isEnterprise) {
            $totalEmployes = $manager->createQuery("SELECT SUM(d.sold) FROM App\Entity\Dettes d INNER JOIN d.client as c WHERE c.employeur = :employeur AND d.sold > 0")
                ->setParameter('employeur', $client->getNomClient())
                ->getSingleScalarResult();
        }
        
        return new JsonResponse(['message' => '', 'data' => ['debts' => $dettes, 'totalEmployees' => ($isEnterprise ? $totalEmployes : 0)], 'errors' => []]);
    }

    /**
     * @Route("/dettes/{clientId}/employes", name="list_dettes_employes")
     */
    public function dettesEmployes(string $clientId): JsonResponse
    {
        $manager = $this->getDoctrine()->getManager();
        $employeur = $manager->getRepository(Client::class)->find(intval($clientId))->getNomClient();

        $dettes = $manager->getRepository(Dettes::class)
            ->createQueryBuilder('d')
            ->select('d.id', 'd.dateOctroi', 'd.statut', 'd.amount', 'd.sold', 'd.echeance', 'c.nomClient')
            ->innerJoin('d.client', 'c')
            ->where('c.employeur = :employeur AND d.sold > 0')
            ->setParameter('employeur', $employeur)
            ->getQuery()
            ->getResult();

        // return new JsonResponse($dettes);
        return new JsonResponse(['message' => '', 'data' => ['debts' => $dettes], 'errors' => []]);
    }

    /**
     * @Route("/dettes/{clientId}/paiement", name="paiement_dettes")
     */
    public function paiementDettes(Request $request, string $clientId): JsonResponse
    {
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository(Dettes::class);
        $dettes = [];
        $debts = [];
        $amount = null;

        if ($request->isMethod('GET')) {
            $amount = floatval($request->query->get('amount'));

            if ($amount !== null) {
                $skip = false;
                $client = $manager->getRepository(Client::class)->find($clientId);
                $qb = $repository->createQueryBuilder('d');
                $dettes = $qb->where('d.sold > 0')
                    ->andWhere($qb->expr()->orX('d.client = :client', 'c.employeur = :employer'))
                    ->innerJoin('d.client', 'c')
                    ->setParameter('client', $client)
                    ->setParameter('employer', $client->getNomClient())
                    ->orderBy('d.dateOctroi', 'ASC')
                    ->getQuery()
                    ->getResult();

                foreach ($dettes as $dette) {
                    $sold = $dette->getSold();
                    $amount -= $sold;

                    if ($amount >= 0 || !$skip) {
                        $paiementDette = new PayementDette();
                        if ($amount >= 0) {
                            $dette->setSold(0);
                            $dette->setStatut(2);
                            $paiementDette->setMontantPaye($sold);
                        } elseif (!$skip) {
                            $dette->setSold(abs($amount));
                            $dette->setStatut(1);
                            $paiementDette->setMontantPaye($sold + $amount);
                            $skip = true;
                        }
                        $dette->addPayementdette($paiementDette);
                        $this->getUser()->addPayementdette($paiementDette);
                        $manager->persist($paiementDette);
                    }
                }
            }
        } else {
            foreach (json_decode(file_get_contents('php://input'), true) as $dette) {
                $debt = $repository->find(intval($dette['id']));

                if ($debt !== null) {
                    $solde = $debt->getSold() - floatval($dette['amountPaid']);

                    if ($solde >= 0) {
                        $debt->setSold($solde);
                        $debt->setStatut($solde == 0 ? 2 : 1);

                        $paiementDette = new PayementDette();
                        $paiementDette->setMontantPaye(floatval($dette['amountPaid']));
                        $debt->addPayementdette($paiementDette);
                        $this->getUser()->addPayementdette($paiementDette);

                        $manager->persist($paiementDette);

                        $dettes[] = $debt;

                    } else {
                        // throw new Exception("Error Processing Request", 1);
                    }    
                }
            }
        }

        $manager->flush();

        return new JsonResponse(['message' => '', 'data' => $dettes, 'errors' => []]);
    }

    /**
     * @Route("/dettes/{clientId}/paiement/employees", name="paiement_dettes_employes")
     */
    public function paiementDettesEmployes(Request $request, string $clientId): JsonResponse
    {
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository(Dettes::class);
        $dettes = [];
        $amount = floatval($request->query->get('amount'));

        if ($amount !== null) {
            $skip = false;
            $employer = $manager->getRepository(Client::class)->find($clientId)->getNomClient();

            $dettes = $repository->createQueryBuilder('d')
                ->where('c.employeur = :employer')
                ->innerJoin('d.client', 'c')
                ->setParameter('employer', $employer)
                ->orderBy('d.dateOctroi', 'ASC')
                ->getQuery()
                ->getResult();

            foreach ($dettes as $dette) {
                $sold = $dette->getSold();
                $amount -= $sold;

                if ($amount >= 0 || !$skip) {
                    $paiementDette = new PayementDette();
                    if ($amount >= 0) {
                        $dette->setSold(0);
                        $dette->setStatut(2);
                        $paiementDette->setMontantPaye($sold);
                    } elseif (!$skip) {
                        $dette->setSold(abs($amount));
                        $dette->setStatut(1);
                        $paiementDette->setMontantPaye($sold + $amount);
                        $skip = true;
                    }
                    $dette->addPayementdette($paiementDette);
                    $this->getUser()->addPayementdette($paiementDette);
                    $manager->persist($paiementDette);
                }
            }

            $manager->flush();
        }

        return new JsonResponse(['message' => '', 'data' => $dettes, 'errors' => []]);
    }
}
