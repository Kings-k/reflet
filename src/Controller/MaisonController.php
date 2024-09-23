<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Maison;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MaisonController extends AbstractController
{
    /**
     * @Route("/maisons/new", name="new_maison")
     */
    public function register(Request $request): Response
    {
        return $this->edit('maison/new.html.php', $request);
    }

    /**
     * @Route("/maisons/{id}", name="detail_maison")
     * @Security("is_granted('ROLE_ADMIN')")
     */
    public function detail(Request $request, int $id)
    {
        return $this->edit('maison/detail.html.php', $request, $id);
    }

    /**
     * @Route("/entete/{id}", name="entete_maison")
     */
    public function entete(Request $request, int $id){

        return $this->edit('maison/entete.html.php', $request, $id);
    }

    /**
     * @Route("/maison/getHead", name="gethead")
     */
    public function getHead(): Response{

        $maison = $this->getDoctrine()
            ->getManager()
            ->getRepository(Maison::class)
            ->createQueryBuilder('m')
            ->select('m.id', 'm.logo', 'm.nomSociete', 'm.registreCommerce', 'm.idNationnal', 'm.numImpot', 'm.autorisationFct', 'm.adressePhysique', 'm.telephone', 'm.mail', 'm.site')
            ->getQuery()
            ->getSingleResult();

        return new JsonResponse(['message' => '', 'data' => ['maison' => $maison], 'errors' => []]);
    }


    /**
     * @Route("/maisons", name="list_maisons")
     * @Security("is_granted('ROLE_ADMIN')")
     */
    public function list(Request $request)
    {
        return $this->crud($request, null, Maison::class, [], 'maison/list.html.php', [], ['nomSociete' => 'ASC'], null, [
            'title' => 'Maison',
            'breadcrumb' => [
                ['name' => 'Maisons']
            ]
        ]);
    }

    /**
     * @Route("/maisons/{id}/delete", name="delete_maison")
     * @Security("is_granted('ROLE_SUPER_ADMIN')")
     */
    public function delete(Request $request, int $id): Response
    {
        return $this->crud($request, $id, Maison::class, [], '', [], null, null, []);
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $this->getDoctrine()->getRepository(Maison::class);
        $maison = null;

        if (isset($id)) {
            $maison = $entityRepository->find($id);
        }

        if ($request->getMethod() == 'POST') {
            if (!isset($id)) {
                $maison = new Maison();
            }

            $maison->setNomSociete($request->request->get('nomSociete'));
            $maison->setRegistreCommerce($request->request->get('registreCommerce') ?? '');
            $maison->setIdNationnal($request->request->get('idNationnal') ?? '');
            $maison->setNumImpot($request->request->get('numImpot') ?? '');
            $maison->setAutorisationFct($request->request->get('autorisationFct') ?? '');
            $maison->setAdressePhysique($request->request->get('adressePhysique'));
            $maison->setTelephone($request->request->get('telephone'));
            $maison->setMail($request->request->get('mail'));
            $maison->setSite($request->request->get('site'));
            $maison->setVersionDuka('orka');

            /** @var UploadedFile $profileImage */
            $profileImage = $request->files->get('logo');

            if ($profileImage) {
                $originalFilename = pathinfo($profileImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $profileImage->guessExtension();

                try {
                    $profileImage->move(
                        $this->getParameter('logos_dir'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new FileException("Erreur dans le traitement du fichier. " . $e, 1);
                }

                $maison->setLogo($newFilename);
            }

            if (!isset($id)) {
                $entityManager->persist($maison);
            }
            $entityManager->flush();
            // do anything else you need here, like send an email
            $parameters = [];
            if (isset($id)) {
                $placeholder = 'modifiée';
                $redirect = 'detail_maison';
                $parameters['id'] = $id;
            } else {
                $placeholder = 'ajoutée';
                $redirect = 'new_maison';
            }

            $this->addFlash('success', sprintf("La maison a été %s avec succès", $placeholder));

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => 'Configuration Entreprise',
            'breadcrumb' => [
                ['name' => 'Maisons', 'path' => '/maisons'],
                ['name' => isset($id) ? $maison->getNomSociete() : 'Nouvelle maison']
            ],
            'latestMaisons' => $entityRepository->findBy([], ['createdAt' => 'DESC'], 10),
            'currentM' => $maison
        ]);
    }
}
