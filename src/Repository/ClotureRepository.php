<?php

namespace App\Repository;

use App\Entity\Cloture;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cloture|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cloture|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cloture[]    findAll()
 * @method Cloture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClotureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cloture::class);
    }

    public function todayCloture(User $user)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id, c.createdAt')
            ->where("c.doneBy = :user AND DATE_FORMAT(c.createdAt, '%Y-%m-%d') = :today")
            ->setParameter('user', $user)
            ->setParameter('today', (new \DateTime())->format('Y-m-d'))
            ->getQuery()
            ->getOneOrNullResult();
    }
}