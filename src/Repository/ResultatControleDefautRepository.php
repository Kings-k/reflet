<?php

namespace App\Repository;

use App\Entity\ResultatControleDefaut;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ResultatControleDefaut|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResultatControleDefaut|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResultatControleDefaut[]    findAll()
 * @method ResultatControleDefaut[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResultatControleDefautRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResultatControleDefaut::class);
    }

    // /**
    //  * @return ResultatControleDefaut[] Returns an array of ResultatControleDefaut objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ResultatControleDefaut
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
