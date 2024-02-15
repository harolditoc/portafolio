<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SobreMiController extends AbstractController
{
    #[Route('/sobreMi', name: 'app_sobre_mi')]
    public function index(): Response
    {
        return $this->render('sobre_mi/index.html.twig', [
            'controller_name' => 'SobreMiController',
        ]);
    }
}
