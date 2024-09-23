<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\CompteSortie;
use App\Entity\PointOfSale;
use App\Entity\SortieCash;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SortieCaisseController extends AbstractController
{
    /**
     * @Route("/sortiecash/new",name="new_sortiecash")
     */
    public function new(Request $request): Response
    {
        return $this->edit('sortiecash/new.html.php', $request);
    }

    /**
     * @Route("/sortiecash/{id}",name="singledetail_sortiecash")
     */
    public function singledetail(Request $request, $id)
    {
        return $this->edit('sortiecash/detail.html.php', $request, intval($id));
    }

    /**
     * @Route("/sortiecash/{id}/delete", name="delete_sortiecash")
     */
    public function delete(Request $request, int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $sc = $em->getRepository(SortieCash::class);
        $po = $em->getRepository(PointOfSale::class);
        $curSortie = $sc->find($id);
        $pos = $curSortie->getPos($po->find($this->pos));
        $soldpos = ($pos->getSold()) + ($curSortie->getMontant());

        $pos->setSold($soldpos);
        $em->remove($curSortie);
        $em->flush();

        return $this->redirectToRoute('list_sortiecash');
    }

    /**
     * @Route("/sortiecash", name="list_sortiecash")
     */
    public function list(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $sc = $em->getRepository(SortieCash::class);

        $latestSorties = $sc->createQueryBuilder('sc')
            ->select('sc.id', 'sc.montant', 'sc.motif', 'sc.piecejustificative', 'cs.compte', 'sc.createdAt')
            ->innerJoin('sc.typeSortie', 'cs')
            ->getQuery()
            ->getResult();

        return $this->renderTemplate('sortiecash/list.html.php', [
            'title' => 'HISTORIQUE DES SORTIES',
            'breadcrumb' => [
                [
                    'name' => 'Sorties Cash',
                    'path' => '/sortiecash'
                ]
            ],
            'latestSortiesCash' => $latestSorties
        ]);
    }

    private function edit(string $template, Request $request, ?int $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();
        $scr = $em->getRepository(SortieCash::class);
        $csr = $em->getRepository(CompteSortie::class);

        if (isset($id)) {
            $currentS = $scr->find($id);
        }

        if ($request->isMethod('POST')) {
            $sortie = isset($id) ? $scr->find($id) : new SortieCash();
            $amount = floatval($request->request->get('montant'));
            $sortie->setMontant($amount);
            $sortie->setMotif($request->request->get('motif'));
            $sortie->setTypeSortie($csr->find(intval($request->request->get('typesortie'))));
            $sortie->setDoneBy($this->getUser());
            $sortie->setPiecejustificative($request->request->get('piece'));
            $parameters = [];

            if (!$this->isGranted('ROLE_FINANCE')) {
                $pos = $em->getRepository(Affectation::class)->findOneBy(['user' => $this->getUser()])->getPos();
                $pos->setSold($pos->getSold() - $amount);
                $sortie->setPos($pos);
            }

            if (!isset($id)) {
                $em->persist($sortie);
            } else {
                $parameters['id'] = $id;
            }

            $em->flush();
            $this->addFlash('success', sprintf("Sortie caisse %s avec succès", isset($id) ? 'modifiée' : 'effectuée'));

            $this->redirectToRoute(isset($id) ? 'singledetail_sortiecash' : 'new_sortiecash', $parameters);
        }

        $typesSortie = $csr->findBy([], ['compte' => 'ASC']);

        $latestSorties = $scr->createQueryBuilder('sc')
            ->select('sc.id', 'sc.montant', 'sc.motif', 'sc.piecejustificative', 'cs.compte', 'sc.createdAt')
            ->innerJoin('sc.typeSortie', 'cs')
            ->getQuery()
            ->getResult()
        ;

        $parameters = [
            'title' => 'Sortie cash',
            'breadcrumb' => [
                [
                    'name' => 'Sortie Cash',
                    'path' => '/sortiecash'
                ]
            ],
            'typesSortie' => $typesSortie,
            'latestSorties' => $latestSorties
        ];

        if (isset($id)) {
            $parameters['sortie'] = $currentS;
        }

        return $this->renderTemplate($template, $parameters);
    }
}
