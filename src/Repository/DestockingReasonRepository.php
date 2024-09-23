<?php

namespace App\Repository;

use App\Entity\DestockingReason;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DestockingReason|null find($id, $lockMode = null, $lockVersion = null)
 * @method DestockingReason|null findOneBy(array $criteria, array $orderBy = null)
 * @method DestockingReason[]    findAll()
 * @method DestockingReason[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DestockingReasonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DestockingReason::class);
    }

    // /**
    //  * @return DestockingReason[] Returns an array of DestockingReason objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DestockingReason
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
