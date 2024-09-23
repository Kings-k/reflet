<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Category;
use App\Entity\PointOfSale;
use App\Tools\CategoryUtils;
use App\Tools\PointOfSaleUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class PointOfSaleController extends AbstractController
{
    private $pointOfSaleUtils;
    private $categoryUtils;

    public function __construct(PointOfSaleUtils $pointOfSaleUtils, CategoryUtils $categoryUtils, AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack)
    {
        parent::__construct($securityChecker, $requestStack);
        $this->pointOfSaleUtils = $pointOfSaleUtils;
        $this->categoryUtils = $categoryUtils;
    }

    /**
     * @Route("/pos/new", name="new_pos")
     */
    public function new(Request $request): Response
    {
        return $this->edit('pos/new.html.php', $request);
    }

    /**
     * @Route("/pos/{id}", name="pos_details")
     */
    public function details(Request $request, int $id): Response
    {
        return $this->edit('pos/details.html.php', $request, $id);
    }

    /**
     * @Route("/pos", name="pos_list")
     */
    public function list(Request $request): Response
    {
        return $this->crud($request, null, PointOfSale::class, [], 'pos/list.html.php', [], ['createdAt' => 'DESC'], null, [
            'title' => 'Points de vente',
            'breadcrumb' => [
                ['name' => 'Points de vente']
            ]
        ]);
    }

    /**
     * @Route("/pos/{id}/delete", name="delete_pos")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, PointOfSale::class, [], '', [], null, null, []);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $pr = $em->getRepository(PointOfSale::class);
        $cr = $em->getRepository(Category::class);
        $pos = null;
        $currentCategories = [];
        $categories = [];

        if (isset($id)) {
            $pos = $pr->find($id);
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $pos = new PointOfSale();
            }
            $type = intval($request->request->get('type'));
            $pos->setName($request->request->get('name'));
            $pos->setDescription($request->request->get('description'));
            $pos->setType($type);
            $pos->setUser($this->getUser());
            $nbSalesBonus = $request->request->get('nbSalesBonus');
            $bonusPercentage = $request->request->get('bonus-percentage');
            $workforcePercent = $request->request->get('workforce-percent');
            $categoriesIds = [];

            foreach ($request->request as $key => $value) {
                if (\preg_match('/^category/', $key)) {
                    $receivedCats[] = intval(\str_replace('category', '', $key));
                }
            }

            switch ($type) {
                case 1:
                    $newCategories = $cr->findBy(['parent' => null]);
                    break;
                case 2:
                    $categoriesIds = [];
                    foreach ($request->request as $key => $value) {
                        if (\preg_match('/^category/', $key)) {
                            $categoriesIds[] = \str_replace('category', '', $key);
                        }
                    }
                    foreach ($pos->getCategories() as $categ) {
                        $pos->removeCategory($categ);
                    }
                    $newCategories = $cr->findBy(['id' => $categoriesIds]);
                    foreach ($newCategories as $categ) {
                        $pos->addCategory($categ);
                    }
                    break;
            }

            $this->pointOfSaleUtils->updatePointOfSale($newCategories, $pos, $id ?? null, $nbSalesBonus, $bonusPercentage, $workforcePercent);
            
            if (!isset($id)) {
                $em->persist($pos);
            }

            $em->flush();

            if (isset($id)) {
                $placeholder = 'modifiée';
                $redirect = 'pos_details';
            } else {
                $placeholder = 'ajoutée';
                $redirect = 'new_pos';
            }

            $parameters = isset($id) ? ['id' => $id] : []; // route parameters
            $this->addFlash('success', sprintf("Succursale %s avec succès", $placeholder));

            // return $this->redirectToRoute($redirect, $parameters);
        }

        $categories = $cr->findBy(['parent' => null], ['name' => 'ASC']);
        $latestPos = $pr->findBy([], ['createdAt' => 'DESC'], 10);

        if (isset($pos)) {
            $currentCats = [];
            foreach ($pos->getServices() as $service) {
                $currentCats[] = $service->getCategory();
            }
            $currentCategories = $this->categoryUtils->findCategories($currentCats, []);
        }

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Détails Succursale' : 'Nouvelle Succursale',
            'breadcrumb' => [
                ['name' => 'Succursales', 'path' => '/pos'],
                ['name' => isset($id) ? $pos->getName() : 'Nouvelle Succursale']
            ],
            'currentP' => $pos,
            'categories' => $categories,
            'currentCategories' => $currentCategories,
            'currentCategories' => isset($id) ? $pos->getCategories()->toArray() : [],
            'latestPos' => $latestPos
        ]);
    }
}
