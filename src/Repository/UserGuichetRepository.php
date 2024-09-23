<?php

namespace App\Repository;

use App\Entity\UserGuichet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserGuichet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserGuichet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserGuichet[]    findAll()
 * @method UserGuichet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserGuichetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserGuichet::class);
    }

    // /**
    //  * @return UserGuichet[] Returns an array of UserGuichet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserGuichet
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
