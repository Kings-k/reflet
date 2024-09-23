<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\DepotDetails;
use App\Entity\UserGuichet;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function dashboard(Request $request): Response
    {
        $user = $this->getUser();
        $roles = $user->getRoles();
        $entityManager = $this->getDoctrine();

        if (!in_array('ROLE_GESTSTOCK', $roles) && !in_array('ROLE_FINANCE', $roles) && !in_array('ROLE_TOPMANAGER', $roles) && !in_array('ROLE_ADMIN', $roles) && !in_array('ROLE_SUPER_ADMIN', $roles) && is_null($entityManager->getRepository(Affectation::class)->findOneBy(['user' => $user]))) {
            throw new \Exception('Vous devez d\'abord être affecté.', 500);
        }

        if ((in_array('ROLE_GUICHETIER', $roles) || in_array('ROLE_SUPER_GUICHETIER', $roles)) && is_null($entityManager->getRepository(UserGuichet::class)->findOneBy(['user' => $user]))) {
            throw new \Exception('Vous devez d\'abord être affecté à un guichet.', 500);
        }

        if ($this->isGranted('ROLE_GUICHETIER') && !$this->isGranted('ROLE_FINANCEPOS')) {
            return $this->forward('App\Controller\SaleController::sale');
        }

        // $em = $this->getDoctrine()->getManager();

        // if ($this->isGranted('ROLE_FINANCEPOS')) {
        //     $ddr = $em->getRepository(DepotDetails::class);

        //     if ($request->isMethod('POST')) {
        //         $data = json_decode(file_get_contents('php://input'), true);
        //         $message = (!$data['dispo'] || !$data['qty'])
        //             ? 'Veuillez remplir tous les champs du formulaire'
        //             : (($data['qty'] > $data['dispo']) ? "La quantité demandée n'est pas disponible !" : "Demande d'approvisionnement envoyée avec succès")
        //         ;
        //         return new JsonResponse($message);
        //     }

        //     $rawServices = $ddr->createQueryBuilder('d')
        //         ->select('d.id', 's.name', 'd.quantity', 'u.symbol')
        //         ->innerJoin('d.service', 's')
        //         ->innerJoin('s.uom', 'u')
        //         ->getQuery()
        //         ->getResult()
        //     ;
        //     $services = [];
        //     foreach ($rawServices as $service) {
        //         $services[] = [
        //             'historyId' => $service['id'],
        //             'name' => $service['name'],
        //             'label' => sprintf('%s, %d', $service['name'], $service['quantity'])
        //             // 'label' => sprintf('%s, %d %s', $service['name'], $service['quantity'], $service['symbol'])
        //         ];
        //     }
        // }

        $options = ['title' => 'Dashboard'];

        // if ($this->isGranted('ROLE_FINANCEPOS')) {
        //     $options['services'] = $services;
        // }

        return $this->renderTemplate('dashboard/dashboard.html.php', $options);
    }
}
