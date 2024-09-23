<?php

namespace App\Repository;

use App\Entity\DetailsFicheTravail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DetailsFicheTravail|null find($id, $lockMode = null, $lockVersion = null)
 * @method DetailsFicheTravail|null findOneBy(array $criteria, array $orderBy = null)
 * @method DetailsFicheTravail[]    findAll()
 * @method DetailsFicheTravail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetailsFicheTravailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DetailsFicheTravail::class);
    }

    // /**
    //  * @return DetailsFicheTravail[] Returns an array of DetailsFicheTravail objects
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
    public function findOneBySomeField($value): ?DetailsFicheTravail
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
