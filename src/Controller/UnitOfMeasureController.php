<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\UnitOfMeasure;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UnitOfMeasureController extends AbstractController
{
    /**
     * @Route("/uom", name="uom_list")
     */
    public function list(): Response
    {
        $entityRepository = $this->getDoctrine()->getRepository(UnitOfMeasure::class);

        return $this->renderTemplate('unitsofmeasure/list.html.php', [
            'title' => 'Unités de mesure',
            'breadcrumb' => [
                ['name' => 'Unités de mesure']
            ],
            'unitsofmeasure' => $entityRepository->findBy([], ['createdAt' => 'DESC']),
        ]);
    }

    /**
     * @Route("/uom/new", name="new_uom")
     * @IsGranted("ROLE_UOM", message="Vous n'êtes pas autorisé à ajouter une unité de mesure")
     */
    public function new(Request $request): Response
    {
        return $this->edit('unitsofmeasure/new.html.php', $request);
    }

    /**
     * @Route("/uom/{id}", name="details_uom")
     */
    public function details(Request $request, int $id): Response
    {
        return $this->edit('unitsofmeasure/details.html.php', $request, $id);
    }

    /**
     * @Route("/uom/{id}/delete", name="delete_uom")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, UnitOfMeasure::class, [], '', []);
    }

    private function edit(string $template, Request $request, $id = null): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $entityManager->getRepository(UnitOfMeasure::class);
        $uom = null;

        if (isset($id)) {
            $uom = $entityRepository->find($id);
        }

        if ($request->getMethod() == 'POST') {
            if (!isset($id)) {
                $uom = new UnitOfMeasure();
            }
            $uom->setName($request->request->get('name'));
            if ($symbol = $request->request->get('symbol')) {
                $uom->setSymbol($symbol);
            }
            if (!isset($id)) {
                $entityManager->persist($uom);
            }
            $entityManager->flush();
            // do anything else you need here
            if (isset($id)) {
                $placeholder = 'modifiée';
                $redirect = 'details_uom';
                // $parameters['id'] = $id;
            } else {
                $placeholder = 'ajoutée';
                $redirect = 'new_uom';
            }

            $parameters = isset($id) ? ['id' => $id] : [];
            $this->addFlash('success', sprintf("Unité de mesure %s avec succès", $placeholder));

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Modifier unité de mesure' : 'Nouvelle unité de mesure',
            'breadcrumb' => [
                ['name' => 'Unités de mesure', 'path' => '/uom'],
                ['name' => isset($id) ? $uom->getName() : 'Nouvelle unité de mesure']
            ],
            'latestUnitsofmeasure' => $entityRepository->findBy([], ['createdAt' => 'DESC']),
            'currentU' => $uom
        ]);
    }
}
