<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Taux;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TauxController extends AbstractController
{
    /**
     * @Route("/taux/new", name="new_taux")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(Taux::class);

        if ($request->getMethod() == 'POST') {
            if ($last = $er->findOneBy(['au' => null])) {
                $last->setAu(new \DateTime());
            }
            $taux = new Taux();
            $taux->setTauxChange($request->request->get('tauxChange'));
            $em->persist($taux);
            $em->flush();

            $this->addFlash('success', 'Taux de change défini avec succès');

            return $this->redirectToRoute('new_taux');
        }

        return $this->renderTemplate('taux/new.php', [
            'title' => 'Configuration du taux du jour',
            'breadcrumb' => [
                ['name' => 'Taux', 'path' => '/taux'],
                ['name' => 'Configuration du taux du jour']
            ],
            'latestTaux' => $er->findBy([], ['du' => 'DESC'], 3)
        ]);
    }

    /**
     * @Route("/taux", name="taux_list")
     */
    public function list(Request $request): Response
    {
        return $this->crud($request, null, Taux::class, [], 'taux/list.php', [], ['tauxChange' => 'DESC']);
    }

    /**
     * @Route("/taux/{id}/delete", name="delete_taux")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, Taux::class, [], '', []);
    }
}
