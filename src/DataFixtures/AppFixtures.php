<?php

namespace App\DataFixtures;

use App\Entity\Guichet;
use App\Entity\PointOfSale;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use PhpParser\Node\Expr\Cast\Object_;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $usersearch = $manager->getRepository(User::class);
        //user Fixture
        $user = new User();
        $user->setUsername('admin');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setType('admin');
        $user->setPassword($this->passwordEncoder->encodePassword($user, 'admin'));

        $manager->persist($user);


        //Pos Fixture
        $pos = new PointOfSale();
        $pos->setName('GOMA');
        $pos->setDescription('Test');
        $pos->setType(1);
        $pos->setSold(1000);

        $manager->persist($pos);

        $manager->flush();
    }
}
