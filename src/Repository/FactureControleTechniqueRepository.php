<?php

namespace App\Repository;

use App\Entity\FactureControleTechnique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FactureControleTechnique|null find($id, $lockMode = null, $lockVersion = null)
 * @method FactureControleTechnique|null findOneBy(array $criteria, array $orderBy = null)
 * @method FactureControleTechnique[]    findAll()
 * @method FactureControleTechnique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FactureControleTechniqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FactureControleTechnique::class);
    }

    // /**
    //  * @return FactureControleTechnique[] Returns an array of FactureControleTechnique objects
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
    public function findOneBySomeField($value): ?FactureControleTechnique
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
