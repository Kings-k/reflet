<?php

namespace App\Repository;

use App\Entity\FicheTravail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FicheTravail|null find($id, $lockMode = null, $lockVersion = null)
 * @method FicheTravail|null findOneBy(array $criteria, array $orderBy = null)
 * @method FicheTravail[]    findAll()
 * @method FicheTravail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FicheTravailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheTravail::class);
    }

    // /**
    //  * @return FicheTravail[] Returns an array of FicheTravail objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FicheTravail
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
