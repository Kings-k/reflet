<?php

namespace App\Repository;

use App\Entity\DesaffectationGuichetier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DesaffectationGuichetier|null find($id, $lockMode = null, $lockVersion = null)
 * @method DesaffectationGuichetier|null findOneBy(array $criteria, array $orderBy = null)
 * @method DesaffectationGuichetier[]    findAll()
 * @method DesaffectationGuichetier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DesaffectationGuichetierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DesaffectationGuichetier::class);
    }

    // /**
    //  * @return DesaffectationGuichetier[] Returns an array of DesaffectationGuichetier objects
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
    public function findOneBySomeField($value): ?DesaffectationGuichetier
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
