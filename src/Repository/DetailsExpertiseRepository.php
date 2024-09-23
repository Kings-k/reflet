<?php

namespace App\Repository;

use App\Entity\DetailsExpertise;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DetailsExpertise|null find($id, $lockMode = null, $lockVersion = null)
 * @method DetailsExpertise|null findOneBy(array $criteria, array $orderBy = null)
 * @method DetailsExpertise[]    findAll()
 * @method DetailsExpertise[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetailsExpertiseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DetailsExpertise::class);
    }

    // /**
    //  * @return DetailsExpertise[] Returns an array of DetailsExpertise objects
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
    public function findOneBySomeField($value): ?DetailsExpertise
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
