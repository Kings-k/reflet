<?php

namespace App\Controller;

use App\Entity\Client;
use App\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class BonusController extends AbstractController
{
    /**
     * @Route("/bonus/new",name="new_bonus")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('bonus/new.html.php', [
            'title' => 'GESTION DES BONUS CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Bonus',
                    'path' => '/bonus/list'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/bonus/detail", name="bonus_client")
     */
    public function detail(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);
        $client = $cl->find($request->request->get('client'));
        $du = $request->request->get('du');
        $au = $request->request->get('au');
        $data = ['datedebut' => $du, 'datefin' => $au, 'client' => $client];

        return $this->renderTemplate('bonus/detail.html.php', [
            'title' => 'RAPPORT DE BONUS',
            'breadcrumb' => [
                [
                    'name' => 'Bonus Client',
                    'path' => '/bonus/new'
                ]
            ],
            'datasent' => $data,
            'latestClients' => $latestClients
        ]);
    }

    /**
     * @Route("/bonus", name="list_bonus")
     */
    public function list(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cl = $em->getRepository(Client::class);
        $latestClients = $cl->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('bonus/list.html.php', [
            'title' => 'GESTION DES BONUS CLIENTS',
            'breadcrumb' => [
                [
                    'name' => 'Bonus',
                    'path' => '/bonus/new'
                ]
            ],
            'latestClients' => $latestClients
        ]);
    }
}
