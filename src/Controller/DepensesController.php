<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Depense;
use App\Entity\Entries;
use App\Entity\Guichet;
use App\Entity\User;
use App\Entity\PointOfSale;
use App\Entity\CompteSortie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DepensesController extends AbstractController
{
    private $isvalidate = 0;

    /**
     * @Route("/depenses/new", name="new_depense") 
     */
    public function new(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $deps = $em->getRepository(Depense::class);
        $ur = $em->getRepository(User::class);
        $po = $em->getRepository(PointOfSale::class);
        $guich = $em->getRepository(Guichet::class);
        $cs = $em->getRepository(CompteSortie::class);
        $typesSortie = $cs->findBy([], ['compte' => 'ASC']);

        $latestDepenses = $deps->findBy([], ['doneAt' => 'DESC']);

        if ($request->getMethod() == 'POST') {

            $depense = new Depense();

            $depense->setUser($this->getUser());
            $depense->setIsvalidate($this->isvalidate);
            $depense->setAmount($request->request->get('amount'));
            $depense->setMotif($request->request->get('motif'));
            $depense->setTypeDepense($request->request->get('type_depense'));

            $em->persist($depense);
            $em->flush();
            $message = "Dépense ajoutée avec succès";

            if ($request->isXmlHttpRequest()) {
                return new JsonResponse($message);
            }

            $this->addFlash('success', $message);
            $this->redirectToRoute('new_depense');
        }

        return $this->renderTemplate('depenses/new.html.php', [
            'title' => 'NOUVELLE DEPENSE',
            'breadcrumb' => [
                [
                    'name' => 'Dépenses',
                    'path' => '/depenses'
                ]
            ],
            'typesSortie' => $typesSortie,
            'latestDepenses' => $latestDepenses
        ]);
    }

    /**
     * @Route("/depenses/{id}", name="depense_detail")
     */
    public function details(Request $request, int $id)
    {
        $em = $this->getDoctrine()->getManager();
        $entr = $em->getRepository(Entries::class);
        $po = $em->getRepository(PointOfSale::class);
        $currentE = $entr->find($id);
        $latestEntries = $entr->findBy([], ['doneAt' => 'ASC']);

        if ($request->getMethod() == 'POST' && isset($id)) {

            $entry = $entr->find($id);

            $posold = $po->find($this->pos);
            $newsold = ($entry->getPos()->getSold()) - ($entry->getAmount());

            $entry->setUser($this->getUser());
            $entry->setAmount($request->request->get('amount'));
            $entry->setProvenance($request->request->get('provenance'));
            $entry->setMotif($request->request->get('motif'));

            $posold->setSold($newsold + ($request->request->get('amount')));

            $em->flush();
        }

        return $this->renderTemplate('depenses/detail.html.php', [
            'title' => 'NOUVELLE DEPENSE',
            'breadcrumb' => [
                [
                    'name' => 'Entrées',
                    'path' => '/dépenses'
                ]
            ],
            'latestEntries' => $latestEntries,
            'currentE' => $currentE
        ]);
    }

    /**
     * @Route("/depenses", name="depenses_list")
     */
    public function list(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $deps = $em->getRepository(Depense::class);

        $latestDepenses = $deps->createQueryBuilder('dep')
            ->select('dep.id', 'dep.amount', 'dep.motif', 'dep.doneAt', 'dep.typeDepense', 'usr.username')
            // ->innerJoin('dep.guichet', 'gt')
            // ->innerJoin('dep.pos', 'pt')
            ->innerJoin('dep.user', 'usr')
            ->getQuery()
            ->getResult();

        return $this->crud($request, null, Depense::class, [], 'depenses/list.html.php', [], ['doneAt' => 'DESC'], null, [
            'title' => 'Historique des dépenses',
            'breadcrumb' => [
                ['name' => 'Historique', 'path' => '/depenses'],
                ['name' => 'Dépenses']
            ],
            'lastestDepenses' => $latestDepenses
        ]);
    }

    /**
     * @Route("/depenses/{id}/delete", name="delete_depense")
     */
    public function delete(Request $request, int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $entr = $em->getRepository(Entries::class);
        $po = $em->getRepository(PointOfSale::class);
        $currentE = $entr->find($id);

        $posold = $po->find($this->pos);
        $newsold = ($currentE->getPos()->getSold()) - ($currentE->getAmount());

        $em->remove($currentE);

        $posold->setSold($newsold);

        $em->flush();
        return $this->redirectToRoute('entries_list');
    }
}
