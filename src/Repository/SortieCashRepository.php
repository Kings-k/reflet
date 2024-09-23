<?php

namespace App\Repository;

use App\Entity\SortieCash;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SortieCash|null find($id, $lockMode = null, $lockVersion = null)
 * @method SortieCash|null findOneBy(array $criteria, array $orderBy = null)
 * @method SortieCash[]    findAll()
 * @method SortieCash[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SortieCashRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SortieCash::class);
    }

    // /**
    //  * @return SortieCash[] Returns an array of SortieCash objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SortieCash
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
