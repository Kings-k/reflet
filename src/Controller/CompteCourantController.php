<?php

namespace App\Controller;

use App\Entity\Client;
use App\Entity\Facture;
use App\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CompteCourantController extends AbstractController
{
    /**
     * @Route("/comptecourant/new",name="new_comptecourant")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('comptecourant/new.html.php', [
            'title' => 'COMPTES COURANTS CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Compte Courant',
                    'path' => '/comptecourant/new'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/comptecourant/{id}",name="singledetail_comptecourant")
     */
    public function singledetail(Request $request, $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $fact = $em->getRepository(Facture::class);
        $clientId = intval($request->request->get('client'));
        $client = $clientId > 0 ? $cl->find($clientId) : $cl->find(intval($id));

        $factClients = $client->getFactures();
        $data = ['facturesclient' => $factClients, 'client' => $client];

        return $this->renderTemplate('comptecourant/singledetail.html.php', [
            'title' => 'FACTURES CLIENT',
            'breadcrumb' => [
                [
                    'name' => 'Factures Client',
                    'path' => '/facturesclient'
                ]
            ],
            'datasent' => $data
        ]);
    }

    /**
     * @Route("/comptecourant/detail", name="comptecourant_client")
     */
    public function detail(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);
        $client = $cl->find($request->request->get('client'));
        $du = $request->request->get('du');
        $au = $request->request->get('au');
        $data = ['datedebut' => $du, 'datefin' => $au, 'client' => $client];

        return $this->renderTemplate('comptecourant/detail.html.php', [
            'title' => 'COMPTE COURANT CLIENT',
            'breadcrumb' => [
                [
                    'name' => 'Detail du Compte Courant',
                    'path' => '/comptecourant/new'
                ]
            ],
            'datasent' => $data,
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/comptecourant", name="list_comptecourant")
     */
    public function list(Request $request): Response
    {

        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('comptecourant/list.html.php', [
            'title' => 'COMPTES COURANTS CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Compte Courant',
                    'path' => '/comptecourant'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }
}
