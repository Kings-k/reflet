<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Entries;
use App\Entity\PointOfSale;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntriesController extends AbstractController
{
    /**
     * @Route("/entries/new", name="new_entry") 
     */
    public function new(Request $request): Response
    {
        return $this->edit('entries/new.html.php', $request);
    }

    /**
     * @Route("/entries/{id}", name="entrie_detail")
     */
    public function details(Request $request, $id): Response
    {
        return $this->edit('entries/detail.html.php', $request, intval($id));
    }

    /**
     * @Route("/entries", name="entries_list")
     */
    public function list(Request $request)
    {
        return $this->crud($request, null, Entries::class, [], 'entries/list.html.php', [], ['doneAt' => 'DESC'], null, [
            'title' => 'Historique des Entrées',
            'breadcrumb' => [
                ['name' => 'Historique des entrées']
            ]
        ]);
    }

    /**
     * @Route("/entries/{id}/delete", name="delete_entry")
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

    private function edit(string $template, Request $request, ?int $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();
        $entr = $em->getRepository(Entries::class);

        if (isset($id)) {
            $currentE = $entr->find($id);
        }

        if ($request->isMethod('POST')) {
            $entry = isset($id) ? $currentE : new Entries();
            $amount = floatval($request->request->get('amount'));
            $entry->setDoneBy($this->getUser());
            $entry->setAmount($amount);
            $entry->setProvenance($request->request->get('provenance'));
            $entry->setMotif($request->request->get('motif'));
            $parameters = [];

            if (!$this->isGranted('ROLE_FINANCE')) {
                $pos = $em->getRepository(Affectation::class)->findOneBy(['user' => $this->getUser()])->getPos();
                $pos->setSold($pos->getSold() + $amount);
                $entry->setPos($pos);
            }

            if (!isset($id)) {
                $em->persist($entry);
            } else {
                $parameters['id'] = $id;
            }

            $em->flush();
            $this->addFlash('success', sprintf("Entrée caisse %s avec succès", isset($id) ? 'modifiée' : 'effectuée'));

            $this->redirectToRoute(isset($id) ? 'entrie_detail' : 'new_entry', $parameters);
        }

        $latestEntries = $entr->findBy([], ['doneAt' => 'DESC']);
        $parameters = [
            'title' => 'Nouvelle entrée en caisse',
            'breadcrumb' => [
                ['name' => 'Historique des entrées', 'path' => '/entries'],
                ['name' => 'Entrée']
            ],
            'latestEntries' => $latestEntries
        ];

        if (isset($id)) {
            $parameters['currentE'] = $currentE;
        }

        return $this->renderTemplate($template, $parameters);
    }
}
