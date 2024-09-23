<?php

namespace App\Repository;

use App\Entity\NatureProchaineVisite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NatureProchaineVisite|null find($id, $lockMode = null, $lockVersion = null)
 * @method NatureProchaineVisite|null findOneBy(array $criteria, array $orderBy = null)
 * @method NatureProchaineVisite[]    findAll()
 * @method NatureProchaineVisite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NatureProchaineVisiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NatureProchaineVisite::class);
    }

    // /**
    //  * @return NatureProchaineVisite[] Returns an array of NatureProchaineVisite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NatureProchaineVisite
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
