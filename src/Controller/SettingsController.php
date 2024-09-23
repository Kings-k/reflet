<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Maison;
use App\Entity\User;
use App\Security\CustomAuthenticator;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class SettingsController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/settings", name="settings")
     */
    public function index(CustomAuthenticator $authenticator, GuardAuthenticatorHandler $guardHandler, Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(Maison::class);

        if ($request->isMethod('POST') && !$er->findAll()) {
            // Creation de l'entreprise
            $enterprise = new Maison();
            $enterprise->setNomSociete($request->request->get('nomSociete'));
            $enterprise->setRegistreCommerce($request->request->get('registreCommerce'));
            $enterprise->setIdNationnal($request->request->get('idNationnal'));
            $enterprise->setNumImpot($request->request->get('numImpot'));
            $enterprise->setAutorisationFct($request->request->get('autorisationFct'));
            $enterprise->setAdressePhysique($request->request->get('adressePhysique'));
            $enterprise->setTelephone($request->request->get('telephone'));
            $enterprise->setMail($request->request->get('mail'));
            $enterprise->setSite($request->request->get('site'));
            $enterprise->setVersionDuka('3.0');

            /** @var UploadedFile $logo */
            $logo = $request->files->get('logo');

            if ($logo) {
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();

                try {
                    $logo->move(
                        $this->getParameter('logos_dir'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new FileException("Erreur dans le traitement du fichier. ".$e, 1);
                }

                $enterprise->setLogo($newFilename);
            }

            //Creation de l'utilisateur admin par defaut
            $user = new User();
            $user->setUsername('admin');
            $user->setRoles(['ROLE_ADMIN']);
            $user->setType('admin');
            $user->setPassword($this->passwordEncoder->encodePassword($user, 'admin'));

            // Enregistrement dans la DB
            $em->persist($enterprise);
            $em->persist($user);
            $em->flush();

            // after validating the user and saving them to the database
            // authenticate the user and use onAuthenticationSuccess on the authenticator
            $guardHandler->authenticateUserAndHandleSuccess(
                $user,          // the User object you just created
                $request,
                $authenticator, // authenticator whose onAuthenticationSuccess you want to use
                'main'          // the name of your firewall in security.yaml
            );

            return new JsonResponse('Maison creee et configuree avec succes');
        }

        return $this->render('settings/index.html.twig');
    }
}
