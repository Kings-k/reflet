<?php

namespace App\Repository;

use App\Entity\ProcurementRequest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProcurementRequest|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProcurementRequest|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProcurementRequest[]    findAll()
 * @method ProcurementRequest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProcurementRequestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProcurementRequest::class);
    }

    // /**
    //  * @return ProcurementRequest[] Returns an array of ProcurementRequest objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProcurementRequest
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
