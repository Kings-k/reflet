<?php

namespace App\Controller;

use App\Entity\Service;
use App\AbstractController;
use App\Entity\PV;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PvController extends AbstractController
{
    /**
     * @Route("/pv", name="pv_new")
     */
    public function index(Request $request): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $service= $manager->getRepository(Service::class);
        $pvEnt= $manager->getRepository(PV::class);
        $services=$service->findBy(['type'=>2],['name'=>'ASC']);
        $addalread=$pvEnt->findAll();

        if ($request->isMethod('POST')) {
            $pv= new PV();
            $serviceSent = $request->request->get('service');
            $pv->setService($service->find($serviceSent));
            $manager->persist($pv);
            $manager->flush();
        } 

        return $this->renderTemplate('pv/index.html.php', [
            'title' => 'Articles pour facturation Expertise',
            'breadcrumb' => [
                ['name' => 'Configuration Service Expertise']
            ],
            'servicesSent' => $services,
            'AddedAlready'=>$addalread
        ]);
    }

    /**
     * @Route("/pv/{id}",name="delete_pv")
     */
    public function deletepv(Request $request,int $id){

        $manager = $this->getDoctrine()->getManager();
        $pvEnt= $manager->getRepository(PV::class)->find($id);
        $manager->remove($pvEnt);
        $manager->flush();

        return $this->redirectToRoute('pv_new');
    }

    /**
     * @Route("/procesverbal/getvalues",name="")
     */
    public function getpvprice():JsonResponse {

        $manager = $this->getDoctrine()->getManager();
        $service= $manager->getRepository(Service::class);
        $pvEnt= $manager->getRepository(PV::class);

        $sql=$this->db->getPdo()->query("SELECT SUM(S.unit_price) somme FROM pv P INNER JOIN service S ON S.id=P.service_id ");
        $data=$sql->fetch(); $total=$data['somme'];

        return new JsonResponse(['sommesent'=> $total]);
    }
}
