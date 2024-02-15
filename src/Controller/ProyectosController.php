<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProyectosController extends AbstractController
{
    #[Route('/proyectos', name: 'app_proyectos')]
    public function index(): Response
    {
        return $this->render('proyectos/index.html.twig', [
            'controller_name' => 'ProyectosController',
        ]);
    }
}
