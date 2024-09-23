<?php

namespace App\Repository;

use App\Entity\Facturedateretrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Facturedateretrait|null find($id, $lockMode = null, $lockVersion = null)
 * @method Facturedateretrait|null findOneBy(array $criteria, array $orderBy = null)
 * @method Facturedateretrait[]    findAll()
 * @method Facturedateretrait[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FacturedateretraitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Facturedateretrait::class);
    }

    // /**
    //  * @return Facturedateretrait[] Returns an array of Facturedateretrait objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Facturedateretrait
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
