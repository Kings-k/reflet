<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Cloture;
use App\Entity\Versement;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ClotureController extends AbstractController
{
   
    /**
     * @Route("/clotures/",name="cloture")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cloture = $em->getRepository(Cloture::class);

        $listcloturesget=$cloture->findAll();
        return $this->renderTemplate('clotures/list.html.php', [
            'title' => 'GESTION DES CLOTURES',
            'breadcrumb' => [
                [
                    'name' => 'Clotures',
                    'path' => '/clotures'
                ]
            ],
            'listclotures' => $listcloturesget
        ]);
    }

    /**
     * @Route("/cloture/reception/{id}",name="receptioncloture")
     */
    public function receptionCloture(Request $request, int $id):Response
    {
        $em = $this->getDoctrine()->getManager();
        $clot = $em->getRepository(Cloture::class);
        $cloture = $clot->find($id);
        $versements=$cloture->getVersements();

        $taux=$this->getactualrate();

        return $this->renderTemplate('clotures/reception.html.php', [
            'title' => 'RECEPTION DES VERSEMENTS',
            'breadcrumb' => [
                [
                    'name' => 'Clotures',
                    'path' => '/clotures'
                ]
            ],
            'cloture' => $cloture,
            'versements' => $versements,
            'taux' => $taux
        ]);
    }

    /**
     * @Route("/cloture/versement/{id}",name="reception_versement")
     */
    public function receptionVersement(Request $request, int $id):Response
    {

        $em = $this->getDoctrine()->getManager();
        $clot = $em->getRepository(Cloture::class);
        $cloture = $clot->find($id);
        $versements=$cloture->getVersements();

        $montantRecu=floatval($request->request->get('montantrecu'));
        $versement=new Versement();
        $versement->setMontantRecu($montantRecu);
        $versement->setMontantDol(floatval($request->request->get('montantdollar')));
        $versement->setMontantFr(floatval($request->request->get('montantfrancvalue')));
        $versement->setDoneBy($this->getUser());
        $versement->setCreatedAt(new \DateTime());

        $cloture->setMontantVerse($cloture->getMontantVerse()+$montantRecu);
        $cloture->setSolde($cloture->getSolde()-$montantRecu);
        $cloture->setUpdatedAt(new \DateTime());
        $cloture->addVersement($versement);

        $em->persist($versement);
        $em->flush();

        return $this->redirectToRoute('cloture',[]);
    } 
    
     /**
     * @Route("/clotures/getRate",name="getrate")
     */
    public function getRate(){

        $taux=$this->getactualrate();
        return new JsonResponse(['ratesent' => $taux]);
    }
}
