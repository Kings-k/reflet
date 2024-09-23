<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\PointOfSale;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AffectationController extends AbstractController
{
    /**
     * @Route("/affectations/new", name="new_affectation")
     */
    public function new(Request $request): Response
    {
        return $this->edit('affectations/new.html.php', $request);
    }

    /**
     * @Route("/affectations/{id}", name="detail_affectation")
     */
    public function detail(Request $request, int $id): Response
    {
        return $this->edit('affectations/detail.html.php', $request, $id);
    }

    /**
     * @Route("/affectations", name="list_affectations")
     */
    public function list(Request $request): Response
    {
        $affectations = $this->getDoctrine()
            ->getManager()
            ->createQuery("SELECT a FROM App\Entity\Affectation a")
            ->getResult()
        ;
        $affectationslist = [];

        if ($affectations) {
            foreach ($affectations as $affectation) {
                $posName = $affectation->getPointOfSale()->getName();
                if (key_exists($posName, $affectationslist)) {
                    $affectationslist[$posName][] = $affectation;
                } else {
                    $affectationslist[$posName] = [$affectation];
                }
            }
        }

        return $this->renderTemplate('affectations/list.html.php', [
            'title' => 'Affectations',
            'breadcrumb' => [
                ['name' => 'Affectations']
            ],
            'affectationslist' => $affectationslist
        ]);
    }

    /**
     * @Route("/affectations/{id}/delete", name="delete_affectation")
     */
    public function delete(int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $ar = $em->getRepository(Affectation::class);
        $em->remove($ar->find($id));
        $em->flush();

        return new JsonResponse("Agent désaffecté avec succès");
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $ur = $em->getRepository(User::class);
        $pr = $em->getRepository(PointOfSale::class);
        $ar = $em->getRepository(Affectation::class);
        $users = $ur->findBy([], ['username' => 'ASC']);
        $pointsOfSale = $pr->findBy([], ['name' => 'ASC']);
        $affectation = null;

        if (isset($id)) {
            $affectation = $ar->find($id);
        }

        if ($request->getMethod() == 'POST') {
            $agent = $ur->find(intval($request->request->get('user')));
            $pos = $pr->find(intval($request->request->get('pointofsale')));
            if (!isset($id)) {
                $affectation = new Affectation();
                $affectation->setUser($agent);
            }
            $affectation->setPointOfSale($pos);
            if (!isset($id)) {
                $em->persist($affectation);
            }
            $em->flush();

            $this->addFlash('success', sprintf("%s %s à %s", trim($affectation->getUser()->getFullName()) ? $affectation->getUser()->getFullName() : $affectation->getUser()->getUserIdentifier(), isset($id) ? 'réaffecté' : 'affecté', $pos->getName()));
        }

        $affectations = $ar->findBy([], ['createdAt' => 'DESC'], 5);
        $assigned = [];

        foreach ($ar->findAll() as $a) {
            $assigned[] = $a->getUser()->getId();
        }

        return $this->renderTemplate($template, [
            'title' => 'Affectation aux points de vente',
            'breadcrumb' => [
                ['name' => 'Affectations', 'path' => '/affectations'],
                ['name' => isset($id) ? 'Changer l\'affectation' : 'Nouvelle affectation']
            ],
            'users' => $users,
            'pointsOfSale' => $pointsOfSale,
            'latestaffectations' => $affectations,
            'currentA' => $affectation,
            'assignedUsersIds' => $assigned
        ]);
    }
}
