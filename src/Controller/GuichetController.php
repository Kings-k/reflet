<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\User;
use App\Entity\Guichet;
use App\Entity\PointOfSale;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GuichetController extends AbstractController
{
    private $montantdispo = 0;

    /**
     * @Route("/guichets/new", name="new_guichet")
     */
    public function new(Request $request)
    {
        return $this->edit('guichets/new.html.php', $request);
    }

    /**
     * @Route("/guichets/{id}", name="details_guichet")
     */
    public function details(Request $request, int $id)
    {
        return $this->edit('guichets/details.html.php', $request, $id);
    }

    /**
     * @Route("/guichets", name="list_guichets")
     */
    public function list(Request $request)
    {
        return $this->crud($request, null, Guichet::class, [], 'guichets/list.html.php', [], ['createdAt' => 'ASC'], null, [
            'title' => 'Guichets',
            'breadcrumb' => [
                ['name' => 'Guichets']
            ]
        ]);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(PointOfSale::class);
        $eg = $em->getRepository(Guichet::class);
        $us = $em->getRepository(User::class);
        $guichet = null;

        if (isset($id)) {
            $guichet = $eg->find($id);
        }

        if ($request->getMethod() == 'POST') {
            $pos = $er->find((int) $request->request->get('pointOfSale'));
            $user = $this->getUser();
            if (!isset($id)) {
                $guichet = new Guichet();
            }
            $permissions = $request->request->get('permissions');
            $guichet->setNomGuichet($request->request->get('nomGuichet'));
            if (isset($permissions)) {
                $guichet->setTypevente(implode(',', $permissions));
            }
            $pos->addGuichet($guichet);
            $guichet->setMontantdispo($this->montantdispo);
            $user->addGuichet($guichet);
            if (!isset($id)) {
                $em->persist($guichet);
            }
            $em->flush();
        }

        $pointsOfSale = $er->findBy([], ['name' => 'ASC']);
        $latestguichets = $eg->findBy([], ['nomGuichet' => 'ASC']);

        return $this->renderTemplate($template, [
            'pointsOfSale' => $pointsOfSale,
            'latestguichets' => $latestguichets,
            'currentG' => $guichet,
            'title' => 'Gestion des guichets',
            'breadcrumb' => [
                ['name' => 'Guichets', 'path' => '/guichets'],
                ['name' => isset($id) ? $guichet->getNomGuichet() : 'Nouveau guichet']
            ]
        ]);
    }
}
