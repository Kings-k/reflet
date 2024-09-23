<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\UserGuichet;
use App\Entity\User;
use App\Entity\Guichet;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AffectationGuichetiersController extends AbstractController
{
    /**
     * @Route("/affectationsguichetiers/new", name="new_affectationguichetier")
     */
    public function new(Request $request): Response
    {
        return $this->edit('affectationguichetiers/new.html.php', $request);
    }

    /**
     * @Route("/affectationsguichetiers/{id}", name="detail_affectationguichetier")
     */
    public function detail(Request $request, int $id): Response
    {
        return $this->edit('affectationguichetiers/detail.html.php', $request, $id);
    }

    /**
     * @Route("/affectationsguichetiers", name="list_affectationsguichetiers")
     */
    public function list(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $afect = $em->getRepository(UserGuichet::class);

        $affectationslist = $afect->createQueryBuilder('afect')
            ->select('afect.id', 'afect.dateAffectation', 'afect.dateReaffectation', 'us.username', 'guich.nomGuichet')
            ->innerJoin('afect.guichet', 'guich')
            ->innerJoin('afect.user', 'us')
            ->getQuery()
            ->getResult();
        return $this->renderTemplate('affectationguichetiers/list.html.php', [
            'title' => 'Affectations aux guichets',
            'breadcrumb' => [
                ['name' => 'Affectations aux guichets']
            ],
            'affectationslist' => $affectationslist
        ]);
    }

    /**
     * @Route("/affectationsguichetiers/{id}/delete", name="delete_affectationguichetier")
     */
    public function delete(int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $ar = $em->getRepository(UserGuichet::class);
        $em->remove($ar->find($id));
        $em->flush();

        return new JsonResponse("Guichetier désaffecté avec succès");
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $em = $this->getDoctrine()->getManager();
        $ur = $em->getRepository(User::class);
        $ar = $em->getRepository(Affectation::class);
        $agr = $em->getRepository(UserGuichet::class);
        $guich = $em->getRepository(Guichet::class);
        // $users = $ur->findBy(['type' => 'guichetier'], ['username' => 'ASC']);
        $qb = $ar->createQueryBuilder('a');
        $users = $qb
            ->select('u.id', 'u.username', 'u.fullName', 'u.roles', 'u.type')
            ->where($qb->expr()->in('u.type', array('super_guichetier', 'guichetier')))
            ->innerJoin('a.user', 'u')
            ->getQuery()
            ->getResult()
        ;

        $guichets = $guich->findBy([], ['nomGuichet' => 'ASC']);

        $affectation = null;
        $assigned = [];
        $assignedGuichets = [];

        foreach ($agr->findAll() as $a) {
            $assigned[] = $a->getUser()->getId();
            $assignedGuichets[] = $a->getGuichet()->getId();
        }
        $latestaffectations = $agr->createQueryBuilder('afect')
            ->select('afect.id', 'afect.dateAffectation', 'afect.dateReaffectation', 'us.username', 'guich.nomGuichet')
            ->innerJoin('afect.guichet', 'guich')
            ->innerJoin('afect.user', 'us')
            ->getQuery()
            ->getResult()
        ;

        if (isset($id)) {
            $affectation = $agr->find($id);
        }

        if ($request->isMethod('POST')) {
            $guichet = $guich->find(intval($request->request->get('guichet')));
            if (!isset($id)) {
                $affectation = new UserGuichet();
                $affectation->setUser($ur->find($request->request->get('user')));
            }
            $affectation->setGuichet($guichet);
            $affectation->setDoneBy($this->getUser());
            if (!isset($id)) {
                $em->persist($affectation);
            }
            $em->flush();

            $this->addFlash('success', sprintf("%s %s au guichet %s", trim($affectation->getUser()->getFullName()) ? $affectation->getUser()->getFullName() : $affectation->getUser()->getUserIdentifier(), isset($id) ? 'réaffecté' : 'affecté', $guichet->getNomGuichet()));
            $route = isset($id) ? 'detail_affectationguichetier' : 'new_affectationguichetier';
            $parameters = isset($id) ? ['id' => $id] : [];

            return new RedirectResponse($this->generateUrl($route, $parameters));
        }

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Réaffectation' : 'Affectation aux guichets',
            'breadcrumb' => [
                ['name' => 'Affectations aux guichets', 'path' => '/affectationsguichetiers'],
                ['name' => isset($id) ? 'Changer l\'affectation' : 'Nouvelle affectation']
            ],
            'users' => $users,
            'guichets' => $guichets,
            'latestaffectations' => $latestaffectations,
            'currentA' => $affectation,
            'assignedUsersIds' => $assigned,
            'assignedGuichetsIds' => $assignedGuichets
        ]);
    }
}
