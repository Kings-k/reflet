<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsersController extends AbstractController
{
    /**
     * @Route("/users/new", name="new_user")
     * @IsGranted("ROLE_ADMIN")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        return $this->edit('users/new.html.php', $passwordEncoder, $request);
    }

    /**
     * @Route("/users/{id}", name="detail_user")
     */
    public function detail(Request $request, $id, UserPasswordEncoderInterface $passwordEncoder)
    {
        return $this->edit('users/detail.html.php', $passwordEncoder, $request, $id);
    }

    /**
     * @Route("/users", name="list_users")
     * @IsGranted("ROLE_ADMIN")
     */
    public function list(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $users = $entityManager
            ->createQuery("SELECT u.id, u.username, u.fullName, u.type, u.email, u.telephone FROM App\Entity\User u ORDER BY u.username ASC")
            ->getResult()
        ;

        return $this->renderTemplate('users/list.html.php', [
            'title' => 'Utilisateurs',
            'breadcrumb' => [
                ['name' => 'Utilisateurs']
            ],
            'users' => $users
        ]);
    }

    private function edit(string $template, UserPasswordEncoderInterface $passwordEncoder, Request $request, $id = null)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $this->getDoctrine()->getRepository(User::class);
        $user = null;

        if (isset($id)) {
            $user = $entityRepository->find(intval($id));
        }

        if ($request->getMethod() == 'POST') {
            if (!isset($id)) {
                $user = new User();
            }

            $types = ['admin', 'topmanager', 'finance', 'geststock', 'reception', 'managerpos', 'financepos', 'gestockpos', 'guichetier', 'super_guichetier', 'technicien', 'receptionpos'];

            $type = $request->request->get('type');
            $username = $request->request->get('username');
            $fullName = $request->request->get('fullName');
            $address = $request->request->get('address');
            $email = $request->request->get('email');
            $telephone = $request->request->get('telephone');

            $user->setUsername($username);
            $user->setFullName($fullName ? $fullName : null);
            $user->setAddress($address ? $address : null);
            $user->setEmail($email ? $email : null);
            $user->setTelephone($telephone ? $telephone : null);
            $user->setType($type);
            $user->setRoles([in_array($type, $types) ? 'ROLE_'.strtoupper($type) : 'ROLE_USER']);

            // encode the plain password
            $pwd = $request->request->get('password');
            $user->setPassword($passwordEncoder->encodePassword($user, isset($id) && $pwd ? $pwd : '123456'));

            /** @var UploadedFile $profileImage */
            $profileImage = $request->files->get('photo');

            if ($profileImage) {
                $originalFilename = pathinfo($profileImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$profileImage->guessExtension();

                try {
                    $profileImage->move(
                        $this->getParameter('profile_images_dir'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new FileException("Erreur dans le traitement du fichier. ".$e, 1);
                }

                $user->setPhoto($newFilename);
            }

            $violations = $this->validator->validate($user);
            $parameters = [];

            if (isset($id)) {
                $redirect = 'detail_user';
                $parameters['id'] = $id;
            } else {
                $redirect = 'new_user';
            }

            $countViolations = count($violations);

            if ($countViolations > 0) {
                $this->get('session')->getFlashBag()->clear();

                if ($countViolations > 1) {
                    $messages = '<ul>';
                    foreach ($violations as $violation) {
                        $messages .= sprintf("<li>%s</li>", $violation->getConstraint()->message);
                    }
                    $messages .= '</ul>';
                } else {
                    $messages = $violations[0]->getConstraint()->message;
                }
                
                $this->addFlash('danger', $messages);
            } else {
                if (!isset($id)) {
                    $entityManager->persist($user);
                }
                $entityManager->flush();
                // do anything else you need here, like send an email
                if (isset($id)) {
                    $placeholder = 'modifié';
                } else {
                    $placeholder = 'ajouté';
                }
                $this->addFlash('success', sprintf("L'utilisateur a été %s avec succès", $placeholder));
            }

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => $user == $this->getUser() ? 'Mon profil' : 'Gestion des utilisateurs',
            'breadcrumb' => [
                ['name' => 'Utilisateurs', 'path' => '/users'],
                ['name' => isset($id) ? $user->getUserIdentifier() : 'Nouvel utilisateur']
            ],
            'latestUsers' => $entityRepository->findBy([], ['createdAt' => 'DESC'], 10),
            'currentU' => $user
        ]);
    }

    /**
     * @Route("/users/{userId}/reset-password", name="reset_password")
     */
    public function resetPassword(UserPasswordEncoderInterface $passwordEncoder, $userId): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $id = intval($userId);
        $user = $entityManager->getRepository(User::class)->find($id);

        if ($user != null) {
            // encode the plain password
            $user->setPassword($passwordEncoder->encodePassword($user, '123456'));
            $entityManager->flush();
            $this->addFlash('success', 'Mot de passe réinitialisé avec succès');
        } else {
            $this->addFlash('danger', 'L\'utilisateur n\'existe pas.');
        }

        return $this->redirectToRoute('detail_user', ['id' => $id]);
    }
}
