<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\DepotDetails;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FicheStockController extends AbstractController
{
    /**
     * @Route("/fichestock", name="fiche_stock")
     */
    public function index(): Response
    {
        $em = $this->getDoctrine()->getManager();
        // $dr = $em->getRepository($this->isGranted('ROLE_GESTSTOCK') ? 'App\Entity\Depot' : 'App\Entity\PointOfSale');
        // $sr = $em->getRepository(Service::class);
        $stocks = $this->isGranted('ROLE_GESTSTOCK')
            ? $em->getRepository(DepotDetails::class)
                ->findBy([], ['createdAt' => 'DESC'])
            : $em->getRepository(Affectation::class)
                ->findOneBy(['user' => $this->getUser()])
                ->getPointOfSale()
                ->getPointOfSaleDetails()
        ;
        // $rawServices = $sr->createQueryBuilder('s')
        //     ->select('s.id', 's.name')
        //     ->andWhere('s.type = 2')
        //     ->getQuery()
        //     ->getResult()
        // ;
        // $services = [];
        // foreach ($rawServices as $service) {
        //     $services[] = [
        //         'value' => $service['id'],
        //         'label' => $service['name']
        //     ];
        // }
        return $this->renderTemplate('fichestock/index.html.php', [
            'title' => 'Fiche de stock',
            'breadcrumb' => [
                ['name' => 'Dépôts', 'path' => '/depots'],
                ['name' => 'Fiche de stock']
            ],
            'stocks' => $stocks
        ]);
    }

    /**
     * @Route("/fichestock/safetystock/{id}", name="fiche_stock_safety")
     */
    public function safetyStock($id): JsonResponse
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $em = $this->getDoctrine()->getManager();

        $er = $em->getRepository($this->isGranted('ROLE_GESTSTOCK') ? 'App\Entity\DepotDetails' : 'App\Entity\PointOfSaleDetails');;
        $entity = $er->find($id);
        $entity->setSafetyStock(intval($data['safetyStock']));
        $em->flush();

        return new JsonResponse('Enregistré avec succès');
    }
}
