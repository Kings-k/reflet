<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Client;
use App\Entity\Vehicule;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class VehiculeController extends AbstractController
{
    /**
     * @Route("/vehicule/new", name="new_vehicule")
     */
    public function register(Request $request): Response
    {
        return $this->edit('vehicule/new.html.php', $request);
    }

    /**
     * @Route("/vehicule/{id}", name="detail_vehicule")
     */
    public function detail(Request $request, $id): Response
    {
        return $this->edit('vehicule/detail.html.php', $request, $id);
    }

    /**
     * @Route("/vehicules", name="list_vehicules")
     */
    public function list(Request $request): Response
    {
        $entityRepository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository(Vehicule::class)
        ;

        if ($request->isXmlHttpRequest() && $request->isMethod('GET')) {
            $searchQuery = $request->get('search');
            $qb = $entityRepository->createQueryBuilder('v');
            $qb = $qb->select('v.id', 'v.numeroImmatriculation', 'v.anneeFabrication', 'v.dateMiseEnCirculation', 'v.genre', 'v.marque', 'v.typeOuModele', 'v.puissance', 'v.numeroDansLaSerie', 'v.energie', 'v.kilometrage', 'v.usageVehicule', 'v.couleur', 'v.numeroChassis', 'v.numeroMoteur', 'c.id as clientId', 'c.nomClient', 'c.telephone', 'c.adressePhys');
                
            if ($searchQuery) {
                $qb = $qb->where($qb->expr()->like('v.numeroImmatriculation', ':immatriculation'));
            }

            $qb = $qb->innerJoin('v.client', 'c');

            if ($searchQuery) {
                $qb = $qb->setParameter('immatriculation', '%'.$searchQuery.'%');
            }

            $vehicles = $qb
                ->setMaxResults(100)
                ->getQuery()
                ->getResult()
            ;

            $latest = $entityRepository
                ->createQueryBuilder('v')
                ->select('v.id', 'v.numeroImmatriculation', 'v.anneeFabrication', 'v.dateMiseEnCirculation', 'v.genre', 'v.marque', 'v.typeOuModele', 'v.puissance', 'v.numeroDansLaSerie', 'v.energie', 'v.kilometrage', 'v.usageVehicule', 'v.couleur', 'v.numeroChassis', 'v.numeroMoteur', 'c.id as clientId', 'c.nomClient', 'c.telephone', 'c.adressePhys')
                ->innerJoin('v.client', 'c')
                ->setMaxResults(20)
                ->orderBy('v.id', 'DESC')
                ->getQuery()
                ->getResult()
            ;

            return new ApiResponse('', ['matches' => $vehicles, 'latest' => $latest]);
        }

        $vehicles = $entityRepository
            ->createQueryBuilder('v')
            ->select('v.id', 'v.genre', 'v.numeroImmatriculation', 'v.anneeFabrication', 'v.dateMiseEnCirculation', 'v.marque', 'v.typeOuModele', 'v.puissance', 'v.numeroDansLaSerie', 'v.energie', 'v.kilometrage', 'v.usageVehicule', 'v.couleur', 'v.numeroChassis', 'v.numeroMoteur', 'c.nomClient')
            ->innerJoin('v.client', 'c')
            ->orderBy('v.id', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        if ($request->isXMLHttpRequest()) {
            return new JsonResponse(['message' => '', 'data' => $vehicles, 'errors' => []]);
        }

        return $this->renderTemplate('vehicule/list.html.php', [
            'title' => 'Liste des Vehicules',
            'breadcrumb' => [
                ['name' => 'Vehicules']
            ],
            'vehicles' => $vehicles
        ]);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $this->getDoctrine()->getRepository(Vehicule::class);
        $cl = $this->getDoctrine()->getRepository(Client::class);
      
        $vehicule = null;

        if (isset($id)) {
            $vehicule = $entityRepository->find(intval($id));
        }

        if ($request->isMethod('POST')) {
            if ($request->isXMLHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
            }

            if (!isset($id)) {
                $vehicule = new Vehicule();
            }

            $vehicule->setNumeroImmatriculation($request->isXMLHttpRequest() ? $data['numeroImmatriculation'] : $request->request->get('numeroImmatriculation'));
            $vehicule->setAnneeFabrication($request->isXMLHttpRequest() ? $data['anneeFabrication'] : $request->request->get('anneeFabrication'));
            $vehicule->setDateMiseEnCirculation($request->isXMLHttpRequest() ? $data['dateMiseEnCirculation'] : $request->request->get('dateMiseEnCirculation'));
            $vehicule->setGenre($request->isXMLHttpRequest() ? $data['genre'] : $request->request->get('genre'));
            $vehicule->setMarque($request->isXMLHttpRequest() ? $data['marque'] : $request->request->get('marque'));
            $vehicule->setTypeOuModele($request->isXMLHttpRequest() ? $data['typeOuModele'] : $request->request->get('typeOuModele'));
            $vehicule->setPuissance($request->isXMLHttpRequest() ? $data['puissance'] : $request->request->get('puissance'));
            $vehicule->setNumeroDansLaSerie($request->isXMLHttpRequest() ? $data['numeroDansLaSerie'] : $request->request->get('numeroDansLaSerie'));
            $vehicule->setEnergie($request->isXMLHttpRequest() ? $data['energie'] : $request->request->get('energie'));
            $vehicule->setKilometrage(floatval($request->isXMLHttpRequest() ? $data['kilometrage'] : $request->request->get('kilometrage')));
            $vehicule->setUsageVehicule($request->isXMLHttpRequest() ? $data['usageVehicule'] : $request->request->get('usageVehicule'));
            $vehicule->setCouleur($request->isXMLHttpRequest() ? $data['couleur'] : $request->request->get('couleur'));
            $vehicule->setNumeroChassis($request->isXMLHttpRequest() ? $data['numeroChassis'] : $request->request->get('numeroChassis'));
            $vehicule->setNumeroMoteur($request->isXMLHttpRequest() ? $data['numeroMoteur'] : $request->request->get('numeroMoteur'));
            $vehicule->setClient($cl->find(intval($request->isXMLHttpRequest() ? $data['client'] : $request->request->get('client'))));

            if (!isset($id)) {
                $entityManager->persist($vehicule);
            }
            $entityManager->flush();
            // do anything else you need here, like send an email
            $parameters = [];
            if (isset($id)) {
                $placeholder = 'modifié';
                $redirect = 'detail_vehicule';
                $parameters['id'] = $id;
            } else {
                $placeholder = 'ajouté';
                $redirect = 'new_vehicule';
            }

            $message = sprintf("Le véhicule a été %s avec succès", $placeholder);

            if ($request->isXMLHttpRequest()) {
                $latest = $entityRepository
                    ->createQueryBuilder('v')
                    ->select('v.id', 'v.numeroImmatriculation', 'v.anneeFabrication', 'v.dateMiseEnCirculation', 'v.genre', 'v.marque', 'v.typeOuModele', 'v.puissance', 'v.numeroDansLaSerie', 'v.energie', 'v.kilometrage', 'v.usageVehicule', 'v.couleur', 'v.numeroChassis', 'v.numeroMoteur', 'c.id as clientId', 'c.nomClient', 'c.telephone', 'c.adressePhys')
                    ->innerJoin('v.client', 'c')
                    ->setMaxResults(20)
                    ->orderBy('v.id', 'DESC')
                    ->getQuery()
                    ->getResult()
                ;
                return new JsonResponse(['message' => $message, 'data' => $latest, 'errors' => []]);
            }

            $this->addFlash('success', $message);

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => 'Gestion des vehicules',
            'breadcrumb' => [
                ['name' => 'Vehicules', 'path' => '/vehicules'],
                ['name' => isset($id) ? $vehicule->getNumeroImmatriculation() : 'Nouveau Vehicule']
            ],
            'latestVehicules' => $entityRepository->findBy([], ['id' => 'DESC'], 10),
            'currentV' => $vehicule,
            'lastestClients'=>$cl->findBy([], ['id' => 'DESC'], 10),
        ]);
    }
}
