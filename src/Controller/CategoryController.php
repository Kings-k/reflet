<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Category;
use App\Entity\PointOfSale;
use App\Http\ApiResponse;
use App\Tools\PointOfSaleUtils;
use App\Tools\Validator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class CategoryController extends AbstractController
{
    private $pointOfSaleUtils;

    public function __construct(PointOfSaleUtils $pointOfSaleUtils, AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, Validator $validator)
    {
        parent::__construct($securityChecker, $requestStack, $validator);
        $this->pointOfSaleUtils = $pointOfSaleUtils;
    }

    /**
     * @Route("/categories/new", name="new_category")
     */
    public function new(Request $request): Response
    {
        return $this->edit('categories/new.html.php', $request);
    }

    /**
     * @Route("/categories/{id}", name="category_details")
     */
    public function details(Request $request, $id): Response
    {
        return $this->edit('categories/detail.html.php', $request, $id);
    }

    /**
     * @Route("/categories", name="category_list")
     */
    public function list(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        if ($request->isXmlHttpRequest()) {
            $query = $request->get('search');

            if (isset($query) && is_string($query)) {
                $limit = $request->get('limit');
                $categories = $entityManager
                    ->createQuery("SELECT c.id, c.name FROM App\Entity\Category c WHERE c.name LIKE :query")
                    ->setParameter('query', '%'.$query.'%')
                    ->setMaxResults(isset($limit) && is_string($limit) ? $limit : 10)
                    ->getResult()
                ;

                return new ApiResponse('', $categories);
            }
        }

        $arrPos = $entityManager->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser());
        $allCategoriesQueryString = "SELECT c.id, c.name, c.description, (SELECT COUNT(child.id) FROM App\Entity\Category child WHERE c = child.parent) AS subCategoriesCount FROM App\Entity\Category c";

        if (isset($arrPos)) {
            // $queryString = $queryString . " WHERE pos.id = :posId INNER JOIN c.pointOfSales AS pos";
            $queryString = $allCategoriesQueryString . " INNER JOIN c.pointOfSales AS pos WHERE pos.id = :posId";
            $categories = $entityManager
                ->createQuery($queryString)
                ->setParameter('posId', $arrPos['id'])
                ->getResult()
            ;

            $queryString = $allCategoriesQueryString . " INNER JOIN c.parent AS p WHERE p.id IN(SELECT cat.id FROM App\Entity\Category cat INNER JOIN cat.pointOfSales AS pos WHERE pos.id = :posId)";
            $subCategories = $entityManager
                ->createQuery($queryString)
                ->setParameter('posId', $arrPos['id'])
                ->getResult()
            ;

            $categories = array_merge($categories, $subCategories);

        } else {
            $categories = $entityManager
                ->createQuery($allCategoriesQueryString)
                ->getResult()
            ;
        }

        return $this->renderTemplate('categories/list.html.php', [
            'title' => 'Catégories',
            'breadcrumb' => [
                ['name' => 'Catégories']
            ],
            'categories' => $categories
        ]);
    }

    /**
     * @Route("/categories/{id}/delete", name="delete_category")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, Category::class, [], '', [], null, null, []);
    }

    private function edit(string $template, Request $request, $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(Category::class);
        $category = null;
        $arrPos = $em->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser());
        $violations = [];

        if (isset($arrPos)) {
            $pos = $em->getRepository(PointOfSale::class)->find($arrPos['id']);
        }

        if (isset($id)) {
            $category = $er->find(intval($id));
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $category = new Category();
            }

            if ($request->isXMLHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
                $name = $data['name'];
                $description = $data['description'] ?? null;
                $parentId = $data['parent'] ?? null;
            } else {
                $name = $request->request->get('name');
                $description = $request->request->get('description');
                $parentId = $request->request->get('parent');
            }

            $category->setName(trim($name));
            $category->setDescription($description);

            if ($parentId) {
                $parent = $er->find(is_string($parentId) ? intval($parentId) : $parentId);
                $parent->addChild($category);
            }

            if (isset($arrPos)) {
                $this->pointOfSaleUtils->updatePointOfSale(
                    [$category],
                    $pos,
                    (is_string($id) ? intval($id) : $id),
                    $pos->getNbSalesBonus(),
                    $pos->getBonusPercentage() * 100,
                    $pos->getWorkforcePercent() * 100
                );
            }

            $violations = $this->validator->validate($category);
            $this->get('session')->getFlashBag()->clear();

            if (count($violations) > 0) {
                $message = 'Le formulaire contient des erreurs';

                if ($request->isXMLHttpRequest()) {
                    return new ApiResponse($message, [], $violations, 500);
                }

                $this->addFlash('danger', $message);

            } else {
                if (!isset($id)) {
                    $em->persist($category);
                }

                $em->flush();
                $message = sprintf("Catégorie %s avec succès", isset($id) ? 'modifiée' : 'ajoutée');

                if ($request->isXmlHttpRequest()) {
                    $parent = $category->getParent();

                    if (!is_null($parent)) {
                        $parent = ['id' => $parent->getId(), 'name' => $parent->getName(), 'description' => $parent->getDescription()];
                    }

                    return new ApiResponse($message, [
                        'id' => $category->getId(),
                        'name' => $category->getName(),
                        'description' => $category->getDescription(),
                        'parent' => $parent
                    ]);
                }

                $this->addFlash('success', $message);
            }

            // $redirect = isset($id) ? 'category_details' : 'new_category';
            // $parameters = isset($id) ? ['id' => $id] : []; // route parameters

            // return $this->redirectToRoute($redirect, $parameters);
        }

        $categories = isset($arrPos) ? $pos->getCategories()->toArray() : $er->findBy(['parent' => null], ['createdAt' => 'DESC']);

        if (count($categories) > 10) {
            $latestCategories = [];
            for ($i = 0; $i < 10; $i++) {
                $latestCategories[] = $categories[$i];
            }
        } else {
            $latestCategories = $categories;
        }

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Détails sur la catégorie' : 'Nouvelle catégorie',
            'breadcrumb' => [
                ['name' => 'Catégories', 'path' => '/categories'],
                ['name' => isset($id) ? $category->getName() : 'Nouvelle catégorie']
            ],
            'categories' => $categories,
            'latestCategories' => $latestCategories,
            'currentC' => $category,
            'violations' => $violations
        ]);
    }
}
