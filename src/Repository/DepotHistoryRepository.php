<?php

namespace App\Repository;

use App\Entity\DepotHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DepotHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method DepotHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method DepotHistory[]    findAll()
 * @method DepotHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DepotHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DepotHistory::class);
    }

    // /**
    //  * @return DepotHistory[] Returns an array of DepotHistory objects
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
    public function findOneBySomeField($value): ?DepotHistory
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
