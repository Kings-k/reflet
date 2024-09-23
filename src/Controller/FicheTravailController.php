<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\FicheTravail;
use App\Entity\DetailsFicheTravail;
use App\Entity\Vehicule;
use App\Entity\Service;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Tools\DbConnection;


class FicheTravailController extends AbstractController
{
    /**
     * @Route("/fichetravail/new", name="new_fichetravail")
     */
    public function register(Request $request): Response
    {
        return $this->edit('fichetravail/new.html.php',$request);
    }
    
    /**
     * @Route("/fichedetravail/{id}", name="detailprint_fichetravail")
     */
    public function detailprint($id): Response
    {
        $db = new DbConnection;
        $ficheId = is_string($id) ? intval($id) : $id;
        $entityManager = $this->getDoctrine()->getManager();
        $fiche = $entityManager->getRepository(FicheTravail::class);

        $fichetravail = $fiche->find($ficheId);
        $alreadyAdded = $db->getPdo()->prepare("SELECT * FROM details_fiche_travail FT INNER JOIN service OS ON FT.service_id=OS.id WHERE FT.fichetravail_id=? ");
        $alreadyAdded->execute(array($ficheId));
        $controls = $alreadyAdded->fetchAll();
        $user = $this->getUser();

        $vehicle = $entityManager
            ->createQuery("SELECT v.id, v.genre, v.marque, v.typeOuModele, v.numeroImmatriculation, v.kilometrage, c.nomClient FROM App\Entity\FicheTravail f INNER JOIN f.vehicule v INNER JOIN v.client c WHERE f.id = :ficheId")
            ->setParameter('ficheId', $ficheId)
            ->getOneOrNullResult()
        ;

        $maison = $entityManager
            ->createQuery("SELECT m.logo, m.nomSociete, m.registreCommerce, m.idNationnal, m.numImpot, m.autorisationFct, m.adressePhysique, m.telephone, m.mail, m.site FROM App\Entity\Maison m")
            ->getOneOrNullResult()
        ;

        return $this->renderTemplate('fichetravail/detail.html.php', [
            'title' => 'Detail',
            'breadcrumb' => [
                ['name' => 'Fiches de travail', 'path' => '/fichestravail'],
                ['name' => isset($id) ? $fichetravail->getId() : 'Detail']
            ],
            'vehicle' => $vehicle,
            'controls' => $controls,
            'maison' => $maison,
            'fiche' => $fichetravail,
            'userconnected' => $user->getFullName() ?? $user->getUserIdentifier(),
        ]);
    }

    /**
     *@Route("/fichetravail/additem/{id}", name="addnew_item")
     */
    public function addnewitem(Request $request, int $id)
    {
        $db=new DbConnection;
        $entityManager = $this->getDoctrine()->getManager();
        $service =$entityManager->getRepository(Service::class);
        $fiche = $entityManager->getRepository(FicheTravail::class);
       
        $fichedetravail= new DetailsFicheTravail();

        $fichedetravail->setService($service->find($request->request->get('service')));
        $fichedetravail->setQty($request->request->get('qty'));
        $fichedetravail->setTravail($request->request->get('travail'));
        $fichedetravail->setFichetravail($fiche->find($request->request->get('ficheget')));

        $entityManager->persist($fichedetravail);
        $entityManager->flush();

        $services=$service->findBy([], ['name' => 'DESC']);
        $fichetravail = $fiche->find($id);

        $alreadyAdded=$db->getPdo()->prepare("SELECT * FROM details_fiche_travail FT INNER JOIN service OS ON FT.service_id=OS.id WHERE FT.fichetravail_id=? ");
        $alreadyAdded->execute(array($id));

        return $this->renderTemplate('fichetravail/items.html.php', [
            'title' => 'Ajouter Items',
            'breadcrumb' => [
                ['name' => 'Fiches de travail', 'path' => '/fichestravail'],
                ['name' => isset($id) ? $fichetravail->getId() : 'Nouvelle Fiche de travail']
            ],
            'servicesSent' => $services,
            'lastestItems'=>$alreadyAdded,
            'fichesent'=>$id,
        ]);
    }

    /**
     * @Route("/fichedetravail/items/{id}", name="fichetravail_items")
     */
    public function items(Request $request, int $id)
    {
        $db=new DbConnection;
        $entityManager = $this->getDoctrine()->getManager();
        $service =$entityManager->getRepository(Service::class);
        $fiche = $entityManager->getRepository(FicheTravail::class);
       
        $services=$service->findBy([], ['name' => 'DESC']);
        $fichetravail = $fiche->find($id);

        $alreadyAdded=$db->getPdo()->prepare("SELECT * FROM details_fiche_travail FT INNER JOIN service OS ON FT.service_id=OS.id WHERE FT.fichetravail_id=? ");
        $alreadyAdded->execute(array($id));

        return $this->renderTemplate('fichetravail/items.html.php', [
            'title' => 'Ajouter Items',
            'breadcrumb' => [
                ['name' => 'Fiches de travail', 'path' => '/fichestravail'],
                ['name' => isset($id) ? $fichetravail->getId() : 'Nouvelle Fiche de travail']
            ],
            'servicesSent' => $services,
            'lastestItems'=>$alreadyAdded,
            'fichesent'=>$id,
        ]);
    }

    /**
     * @Route("/fichestravail", name="list_fichestravail")
     */
    public function list(Request $request)
    {
        return $this->crud($request, null, FicheTravail::class, [], 'fichetravail/list.html.php', [], ['created_at' => 'DESC'], null, [
            'title' => 'Fiches de travail',
            'breadcrumb' => [
                ['name' => 'Fiches']
            ]
        ]);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $service = $this->getDoctrine()->getRepository(Service::class);
        $fiche = $this->getDoctrine()->getRepository(FicheTravail::class);
        $vh = $this->getDoctrine()->getRepository(Vehicule::class);
        $us = $this->getDoctrine()->getRepository(User::class);
        
        $users=$us->findBy([], ['username' => 'DESC']);
        $fiches=$fiche->findBy([], ['created_at' => 'DESC']);
        $vehicules=$vh->findBy([], ['numeroImmatriculation' => 'DESC']);
    
        $fichetravail = null;

        if (isset($id)) {
            $fichetravail = $fiche->find($id);
        }

        if ($request->getMethod() == 'POST') {
            if (!isset($id)) {
                $fiche = new FicheTravail();
            }
            
            $fiche->setVehicule($vh->find($request->request->get('vehicule')));
            $fiche->setDoneBy($this->getUser());
            $fiche->setResponsable($us->find($request->request->get('responsable')));
           
            if (!isset($id)) {
                $entityManager->persist($fiche);
            }
            $entityManager->flush();
            // do anything else you need here, like send an email
            $parameters = [];
            if (isset($id)) {
                $placeholder = 'modifiée';
                $redirect = 'detail_fichetravail';
                $parameters['id'] = $id;
            } else {
                $placeholder = 'créée';
                $redirect = 'new_fichetravail';
            }
            
            $this->addFlash('success', sprintf("Fiche de travail %s avec succès", $placeholder));

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => 'Fiches de travail',
            'breadcrumb' => [
                ['name' => 'Fiches de travail', 'path' => '/fichestravail'],
                ['name' => isset($id) ? $fichetravail->getId() : 'Nouvelle Fiche de travail']
            ],
            'latestFichesdetravail' => $fiches,
            'currentF' => $fichetravail,
            'lastestVehicules'=>$vehicules,
            'lastestUsers'=>$users,
        ]);
    }
}
