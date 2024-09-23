<?php

namespace App\Repository;

use App\Entity\Dettes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Dettes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Dettes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Dettes[]    findAll()
 * @method Dettes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dettes::class);
    }

    /**
     * @return Dettes[] Returns an array of Dettes objects
     */
    public function findByClient($client)
    {
        return $this->createQueryBuilder('d')
            ->where('d.client = :client')
            ->setParameter('client', $client)
            ->orderBy('d.dateOctroi', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Dettes
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
