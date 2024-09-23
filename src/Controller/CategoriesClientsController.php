<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\CategorieClient;
use App\Entity\Service;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoriesClientsController extends AbstractController
{
    /**
     * @Route("/categorieclient/new", name="new_categoryclient")
     */
    public function new(Request $request): Response
    {
        return $this->edit('categoriesclients/new.html.php', $request);
    }

    /**
     * @Route("/categorieclient/{id}", name="categoryclient_details")
     */
    public function details(Request $request, int $id): Response
    {
        return $this->edit('categoriesclients/detail.html.php', $request, $id);
    }

    /**
     * @Route("/categorieclient", name="categoryclient_list")
     */
    public function list(Request $request): Response
    {
        return $this->crud($request, null, CategorieClient::class, [], 'categoriesclients/list.html.php', [], ['name' => 'ASC'], null, [
            'title' => 'Catégories clients',
            'breadcrumb' => [
                ['name' => 'Catégories clients']
            ]
        ]);
    }

    /**
     * @Route("/categorieclient/{id}/delete", name="delete_categoryclient")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, CategorieClient::class, [], '', [], null, null, []);
    }

    private function edit(string $template, Request $request, $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(CategorieClient::class);
        $sr = $em->getRepository(Service::class);
        $categories = $er->findBy([], ['name' => 'ASC']);
        $category = null;
        $violations = [];

        if (isset($id)) {
            $category = $er->find(intval($id));
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $category = new CategorieClient();
            }

            $discountables = $request->request->get('discountables');

            $category->setName(trim($request->request->get('name')));
            $category->setDiscountApplicable($request->request->get('discount') == 'on' ? true : false);

            if (isset($discountables)) {
                if (isset($id)) {
                    foreach ($category->getDiscountables() as $discountable) {
                        $category->removeDiscountable($discountable);
                    }
                }
                foreach ($discountables as $serviceId) {
                    $category->addDiscountable($sr->find(intval($serviceId)));
                }
            }

            $violations = $this->validator->validate($category);

            if (count($violations) > 0) {
                $message = 'Le formulaire contient des erreurs';
                // $this->get('session')->getFlashBag()->clear();
                $this->addFlash('danger', $message, 401);

            } else {
                if (!isset($id)) {
                    $em->persist($category);
                }

                $em->flush();
                $placeholder = isset($id) ? 'modifiée' : 'ajoutée';
                $this->addFlash('success', sprintf("Catégorie %s avec succès", $placeholder));
            }

            // $redirect = isset($id) ? 'categoryclient_details' : 'new_categoryclient';
            // $parameters = isset($id) ? ['id' => $id] : []; // route parameters

            // return $this->redirectToRoute($redirect, $parameters);
        }

        $latestCategories = $er->findBy([], ['name' => 'ASC'],10);
        $services = $em->getRepository(Service::class)->findAll();

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Détails sur la catégorie' : 'Nouvelle catégorie client',
            'breadcrumb' => [
                ['name' => 'Catégories clients', 'path' => '/categorieclient'],
                ['name' => isset($id) ? $category->getName() : 'Nouvelle catégorie client']
            ],
            'categories' => $categories,
            'latestCategories' => $latestCategories,
            'currentC' => $category,
            'services' => $services,
            'violations' => $violations
        ]);
    }
}
