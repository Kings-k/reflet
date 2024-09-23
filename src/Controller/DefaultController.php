<?php

namespace App\Controller;

use App\Entity\Maison;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(Maison::class);

        return $this->redirectToRoute(!$er->findAll() ? 'settings' : 'dashboard');
    }

    /**
     * @Route("/api/test", name="test")
     */
    public function test(Request $request): JsonResponse
    {
        $data = json_decode(file_get_contents('php://input'), true);
        return new JsonResponse($data);
    }
}
