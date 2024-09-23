<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Caution;
use App\Entity\Client;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
// use App\Tools\ErrorHandler;

class CautionController extends AbstractController
{
    /**
     * @Route("/cautions", name="cautions")
     */
    public function list(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $cautions = $entityManager
            ->getRepository(Caution::class)
            ->createQueryBuilder('c')
            ->select('c.id', 'cl.nomClient', 'c.amount', 'c.amountUsed', 'c.createdAt')
            ->innerJoin('c.client', 'cl')
            ->orderBy('c.createdAt', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        return $this->renderTemplate('cautions/list.html.php', [
            'title' => 'Cautions',
            'breadcrumb' => [
                ['name' => 'Cautions']
            ],
            'cautions' => $cautions
        ]);
    }

    /**
     * @Route("/cautions/new", name="new_caution")
     */
    public function new(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $violations = [];

        if ($request->isMethod('POST')) {
            if ($request->isXmlHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
                $clientId = $data['client'];
                $amount = $data['amount'];
            } else {
                $clientId = $request->request->get('client');
                $amount = $request->request->get('amount');
            }

            $client = $entityManager->getRepository(Client::class)->find(intval($clientId));
            $amount = floatval($amount);
            $caution = new Caution();
            $caution->setAmount($amount);
            $caution->setAmountUsed(0);
            $caution->setClient($client);
            $caution->setUser($this->getUser());
            $violations = $this->validator->validate($caution);

            if (count($violations) > 0) {
                $message = 'Le formulaire contient des erreurs';

                if ($request->isXmlHttpRequest()) {
                    return new ApiResponse($message, null, $violations, 401);
                }

                $this->get('session')->getFlashBag()->clear();
                $this->addFlash('danger', $message);

            } else {
                $entityManager->persist($caution);
                $entityManager->flush();
                $message = 'Caution déposée avec succès';
                $totalCaution = 0;

                foreach ($client->getCautions()->toArray() as $c) {
                    $totalCaution += $c->getAmount() - $c->getAmountUsed();
                }

                if ($request->isXmlHttpRequest()) {
                    $user = $caution->getUser();
                    return new ApiResponse($message, [
                        'cautionId' => $caution->getId(),
                        'amount' => $amount,
                        'client' => $client->getNomClient(),
                        'createdAt' => $client->getCreatedAt(),
                        'totalCaution' => $totalCaution,
                        'user' => $user->getFullName() ?? $user->getUserIdentifier()
                    ]);
                }

                $this->addFlash('success', $message);
            }
        }

        $clients = $entityManager->getRepository(Client::class)->findBy([], ['nomClient' => 'ASC']);

        return $this->renderTemplate('cautions/new.html.php', [
            'title' => 'Déposer une caution',
            'breadcrumb' => [
                ['name' => 'Cautions', 'path' => '/cautions'],
                ['name' => 'Déposer une caution']
            ],
            'clients' => $clients,
            'violations' => $violations
        ]);
    }
}
