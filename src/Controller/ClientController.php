<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\CategorieClient;
use App\Entity\Client;
use App\Entity\PointOfSale;
use App\Entity\User;
use App\Entity\Maison;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ClientController extends AbstractController
{
    private $visibility = 0;

    /**
     * @Route("/clients/new",name="new_client")
     */
    public function new(Request $request): Response
    {
        return $this->edit('clients/new.html.php', $request);
    }

    /**
     * @Route("/clients/{id}", name="detail_client")
     */
    public function detail(Request $request, int $id)
    {
        return $this->edit('clients/detail.html.php', $request, $id);
    }

    /**
     * @Route("/clients", name="list_client")
     */
    public function list(Request $request)
    {
        if ($request->isXMLHttpRequest()) {
            $queryString = "SELECT c.id, c.nomClient, c.sexe, c.etatCivil, c.personneContact, c.adressePhys, c.telephone, c.mail, c.typeClient, c.employeur, cat.id AS categoryId, cat.name as categoryName, cat.discountApplicable, (SELECT COUNT(f.id) FROM App\Entity\Facture f WHERE f.client = c) AS totalFactures, (SELECT SUM(b.amount - b.amountUsed) FROM App\Entity\Bonus b WHERE b.client = c) AS totalBonus, (SELECT SUM(ca.amount - ca.amountUsed) FROM App\Entity\Caution ca WHERE ca.client = c) AS totalCaution FROM App\Entity\Client c INNER JOIN c.category AS cat";

            if (is_string($request->get('search'))) {
                $query = $request->get('search');
                $queryString .= " WHERE c.nomClient LIKE '%".$query."%'";
            }

            $queryString .= " ORDER BY c.nomClient ASC";

            $query =  $this
                ->getDoctrine()
                ->getManager()
                ->createQuery($queryString)
            ;

            if (is_string($request->get('search'))) {
                $query = $query->setMaxResults(10);
            }

            $clients = $query->getResult();

            return new JsonResponse(['message' => '', 'data' => $clients, 'errors' => []]);
        } else {
            $clients = $this
                ->getDoctrine()
                ->getManager()
                ->getRepository(Client::class)
                ->createQueryBuilder('c')
                ->select('c.id', 'c.nomClient', 'c.sexe', 'c.etatCivil', 'c.telephone', 'c.mail', 'c.typeClient', 'c.adressePhys', 'cat.name as category', 'c.plainteMalade')
                ->innerJoin('c.category', 'cat')
                ->orderBy('c.nomClient', 'ASC')
                ->getQuery()
                ->getResult()
            ;

            return $this->renderTemplate('clients/list.html.php', [
                'title' => 'Liste des clients',
                'breadcrumb' => [
                    ['name' => 'Clients']
                ],
                'clients' => $clients
            ]);
        }
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $catRep = $em->getRepository(CategorieClient::class);
        $cl = $em->getRepository(Client::class);
        $ar = $em->getRepository(Affectation::class);
        $categories = $catRep->findBy([], ['name' => 'ASC']);
        $client = null;
        $violations = [];
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);
        $moralClients = $cl->findBy(['typeClient' => 'morale']);

        if (isset($id)) {
            $client = $cl->find($id);
        }

        if ($request->isMethod('POST')) {

            if (!isset($id)) {
                $client = new Client();
            }

            if ($request->isXmlHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
                $client->setNomClient(trim($data['nomClient']));

                foreach ($data as $property => $value) {
                    if (!is_null($property) && !in_array($property, ['id', 'category', 'categoryId', 'categoryName', 'totalFactures', 'totalBonus', 'totalCaution', 'discountApplicable', 'nomClient'])) {
                        $setter = 'set'.ucfirst($property);
                        $client->$setter($value);
                    }
                }
                // $client->setTypeClient('physique');
                if (isset($id)) {
                    $client->getCategory()->removeClient($client);
                }
                $catRep->find(intval($data['category']))->addClient($client);
            } else {
                $client->setNomClient(trim($request->request->get('nomClient')));
                $client->setSexe($request->request->get('sexe'));
                $client->setAdressePhys($request->request->get('adressePhys'));
                $client->setMail($request->request->get('mail'));
                $client->setTelephone($request->request->get('telephone'));
                $client->setPersonneContact($request->request->get('personneContact'));
                $client->setTypeClient($request->request->get('typeClient'));
                $client->setEtatCivil($request->request->get('etatCivil'));
                $client->setEmployeur($request->request->get('employeur'));
                $client->setAge($request->request->get('age'));
                $client->setFemmeEnceinte($request->request->get('femmeEnceinte'));
                $client->setPlainteMalade($request->request->get('plainteMalade'));
                $client->setParent($request->request->get('parent'));
                if (isset($id)) {
                    $client->getCategory()->removeClient($client);
                }
                // dump($request->request->get('category'));
                $catRep->find(intval($request->request->get('category')))->addClient($client);
            }

            if ($affectation = $ar->findOneBy(['user' => $this->getUser()])) {
                $client->setPos($affectation->getPointOfSale());
            }

            $client->setVisibility($this->visibility);

            if (!isset($id)) {
                $client->setCreatedBy($this->getUser());
            }

            $violations = $this->validator->validate($client);

            if (count($violations) > 0) {
                $message = 'Le formulaire contient des erreurs';

                if ($request->isXmlHttpRequest()) {
                    return new ApiResponse($message, null, $violations, 401);
                }

                $this->get('session')->getFlashBag()->clear();
                $this->addFlash('danger', $message);
            } else {
                $em->persist($client);
                $em->flush();

                if ($request->isXmlHttpRequest()) {
                    return new ApiResponse('', ['id' => $client->getId(), 'discountApplicable' => $client->getCategory()->isDiscountApplicable()]);
                }

                $this->addFlash('success', sprintf("Client %s avec succès", isset($id) ? 'modifié' : 'ajouté'));
                // $this->redirectToRoute(isset($id) ? 'detail_client' : 'new_client', isset($id) ? ['id' => $id] : []);
            }
        }

        return $this->renderTemplate($template, [
            'title' => 'Gestion des clients',
            'breadcrumb' => [
                ['name' => 'Clients', 'path' => '/clients'],
                ['name' => (isset($id) ? 'Modifier' : 'Nouveau') . ' client']
            ],
            'latestClients' => $latestClients,
            'moralClients' => $moralClients,
            'currentC' => $client,
            'categories'=>$categories,
            'violations' => $violations
        ]);
    }

    /**
     * @Route("/clientscard", name="client_card")
     */
    public function clientscard(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $clients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('clients/card.html.php', [
            'title' => 'Impression Cartes de fidelite',
            'breadcrumb' => [
                [
                    'name' => 'Liste Clients',
                    'path' => '/clients'
                ]
            ],
            'clientslist' => $clients,
            'logo'=>$em->getRepository(Maison::class)->findAll()[0]->getLogo()
        ]);
    }
}
