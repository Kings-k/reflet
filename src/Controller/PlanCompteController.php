<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\CompteSortie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PlanCompteController extends AbstractController
{
    /**
     * @Route("/plancomptes/new", name="new_plancompte") 
     */
    public function new(Request $request)
    {
        return $this->crud($request, null, CompteSortie::class, ['compte', 'dispo', 'typeCompte'], 'plancomptes/new.php', [], null, null, [
            'title' => 'Nouveau compte',
            'breadcrumb' => [
                ['name' => 'Comptes', 'path' => '/plancomptes'],
                ['name' => 'Nouveau compte']
            ]
        ]);
    }

    /**
     * @Route("/plancomptes/{id}", name="plancompte_details")
     */
    public function details(Request $request, int $id)
    {
        return $this->crud($request, $id, CompteSortie::class, ['compte', 'dispo', 'typeCompte'], 'plancomptes/detail.php', [], null, null, [
            'title' => 'Mise à jour des Comptes',
            'breadcrumb' => [
                ['name' => 'Comptes', 'path' => '/plancomptes'],
                ['name' => 'Mise à jour des Comptes']
            ]
        ]);
    }

    /**
     * @Route("/plancomptes", name="plancomptes_list")
     */
    public function list(Request $request)
    {
        return $this->crud($request, null, CompteSortie::class, [], 'plancomptes/list.php', [], ['compte' => 'ASC'], null, [
            'title' => 'Liste des Comptes',
            'breadcrumb' => [
                ['name' => 'Comptes', 'path' => '/plancomptes'],
                ['name' => 'Comptes disponibles']
            ]
        ]);
    }

    /**
     * @Route("/plancomptes/{id}/delete", name="delete_plancomptes")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, CompteSortie::class, [], '', []);
    }
}
