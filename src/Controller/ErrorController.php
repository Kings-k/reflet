<?php

namespace App\Controller;

use App\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ErrorController extends AbstractController
{
    public function show(\Throwable $exception): Response
    {
        return $this->render('error.html.twig', [
            'message' => $exception->getMessage(),
            'code' => $exception->getCode(),
            'main_route' => $this->requestStack->getMainRequest()->attributes->get('_route')
        ]);
    }
}
