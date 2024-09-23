<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Facture;
use App\Entity\Licence;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\Service;
use App\Entity\UserGuichet;
use App\Entity\Vehicule;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class LicenceController extends AbstractController
{
    /**
     * @Route("/licence/new", name="new_licence")
     */
    public function register(Request $request): Response
    {
        return $this->edit('licence/new.html.php', $request);
    }

    /**
     * @Route("/licence/{id}", name="detail_licence")
     */
    public function detail(Request $request, $id): Response
    {
        return $this->edit('licence/detail.html.php',$request, $id);
    }

    /**
     * @Route("/licences", name="list_licences")
     */
    public function list(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $queryString = "SELECT p.id, p.createdAt, p.prochainevisite, p.numeroPv, v.genre, v.numeroImmatriculation, c.nomClient, f.id as invoiceId FROM App\Entity\Licence p INNER JOIN p.vehicule v INNER JOIN v.client c LEFT JOIN p.factures f";
        $searchQuery = $request->get('search');
        $limit = $request->get('limit');

        if ($searchQuery) {
            $queryString .= " WHERE c.nomClient LIKE :query";
        }
        
        $query = $entityManager->createQuery($queryString . " ORDER BY p.id DESC");

        if ($searchQuery) {
            $query = $query->setParameter('query', '%'.$searchQuery.'%');
        }

        $licenses = $query->setMaxResults($limit ? intval($limit) : 200)->getResult();

        if ($request->isXMLHttpRequest()) {
            return new ApiResponse('', $licenses, []);
        }

        return $this->renderTemplate('licence/list.html.php', [
            'title' => 'Gestion des P.V',
            'breadcrumb' => [
                ['name' => 'P.V', 'path' => '/licences'],
            ],
            'licenses' => $licenses,
            'typeuser' => $this->getUser()->getType()
        ]);
    }

    private function edit(string $template, Request $request, $id = null): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $this->getDoctrine()->getRepository(Licence::class);
        $vh = $this->getDoctrine()->getRepository(Vehicule::class);

        $licence = null;

        if (isset($id)) {
            $licence = $entityRepository->find(intval($id));
        }

        if ($request->isMethod('POST')) {
            if ($request->isXMLHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
            }

            if (!isset($id)) {
                $licence = new Licence();
            }

            $lastInsertedLicense = $entityRepository
                ->createQueryBuilder('l')
                ->select('l.id')
                ->orderBy('l.id', 'DESC')
                ->setMaxResults(1)
                ->getQuery()
                ->getResult()
            ;
            // $licence->setNumeroPv($request->isXMLHttpRequest() ? $data['numeroPv'] : $request->request->get('numeroPv'));
            $licence->setNumeroPv(count($lastInsertedLicense) > 0 ? (intval($lastInsertedLicense[0]['id']) + 1) : 1);
            $licence->setVehicule($vh->find(intval($request->isXMLHttpRequest() ? $data['vehicule'] : $request->request->get('vehicule'))));
            $licence->setResultat($request->request->get('resultat'));
            $licence->setVehiculeaccepte($request->request->get('accepte'));
            $licence->setCtao($request->request->get('ctao'));
            $licence->setDoneBy($this->getUser());

            if ($request->isXMLHttpRequest()) {
                $service = null;
                $serviceRepository = $entityManager->getRepository(Service::class);
                $pos = $entityManager->getRepository(UserGuichet::class)->findOneBy(['user' => $this->getUser()])->getGuichet()->getPointOfSale();

                $serviceSent = $serviceRepository->find($data['article']);

                if ($serviceSent) {
                    $pdr = $entityManager->getRepository(PointOfSaleDetails::class);
                    // creer une nouvelle facture
                    $facture = new Facture();
                    $facture->setTotal($serviceSent->getUnitPrice());
                    $facture->setTypeFacture('cash');
                    $facture->setEditedBy($this->getUser());

                    $client = $licence->getVehicule()->getClient();
                    $facture->setClient($client ?? null);

                    $posDetails = $pdr
                        ->createQueryBuilder('pd')
                        ->select('pd')
                        ->where('s.id = :serviceId')
                        ->andWhere('pd.quantity > 0')
                        ->innerJoin('pd.service', 's')
                        ->setParameter('serviceId', intval($serviceSent->getId()))
                        ->getQuery()
                        ->getResult()
                    ;

                    if ($posDetails !== null && count($posDetails) > 0) {
                        $posDetail = $posDetails[0];
                        $service = $posDetail->getService();
                        $destockage = new PointOfSaleHistory();
                        $destockage->setMotifDestockage('vente_cash');
                        $destockage->setQuantity(-1);
                        $destockage->setPrice($service->getUnitPrice());
                        $posDetail->setQuantity($posDetail->getQuantity() - 1);
                        $posDetail->setValue($posDetail->getValue() - $service->getUnitPrice());
                        $service->addPointOfSaleHistory($destockage);
                        $pos->addPointOfSaleHistory($destockage);
                        $facture->addPointOfSaleHistory($destockage);
                        $entityManager->persist($destockage);
                    }

                    $entityManager->persist($facture);
                }                
            }

            if (!isset($id)) {
                $entityManager->persist($licence);
            }

            $entityManager->flush();
            // do anything else you need here, like send an email
            $parameters = [];
            if (isset($id)) {
                $placeholder = 'modifié';
                $redirect = 'detail_licence';
                $parameters['id'] = $id;
            } else {
                $placeholder = 'créé';
                $redirect = 'new_licence';
            }

            $message = sprintf("P.V %s avec succès", $placeholder);

            if ($request->isXMLHttpRequest()) {
                $vehicule = $licence->getVehicule();
                $user = $this->getUser();
                return new JsonResponse([
                    'message' => $message,
                    'data' => [
                        'id' => $licence->getId(),
                        'createdAt' => $licence->getCreatedAt(),
                        'prochainevisite' => $licence->getProchaineVisite(),
                        'numeroPv' => $licence->getNumeroPv(),
                        'numeroImmatriculation' => $vehicule->getNumeroImmatriculation(),
                        'genre' => $vehicule->getGenre(),
                        'marque' => $vehicule->getMarque(),
                        'typeOuModele' => $vehicule->getTypeOuModele(),
                        'nomClient' => $vehicule->getClient()->getNomClient()
                    ],
                    'sommesent' => isset($service) && $service !== null ? $service->getUnitPrice() : 0,
                    'doneby' => $user->getFullName() ?? $user->getUserIdentifier(),
                    'createdat'=>date('d-m-Y'),
                    'errors' => []
                ]);
            }
            
            $this->addFlash('success', $message);

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => 'Gestion des P.V',
            'breadcrumb' => [
                ['name' => 'P.V', 'path' => '/licences'],
                ['name' => isset($id) ? $licence->getNumeroPv() : 'Nouveau P.V']
            ],
            'latestLicences' => $entityRepository->findBy([], ['numeroPv' => 'DESC']),
            'currentL' => $licence,
            'lastestVehicules'=>$vh->findBy([], ['numeroImmatriculation' => 'DESC']),
           
        ]);
    }
}
