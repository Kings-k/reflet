<?php

namespace App\Repository;

use App\Entity\SmsSent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SmsSent|null find($id, $lockMode = null, $lockVersion = null)
 * @method SmsSent|null findOneBy(array $criteria, array $orderBy = null)
 * @method SmsSent[]    findAll()
 * @method SmsSent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SmsSentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SmsSent::class);
    }

    // /**
    //  * @return SmsSent[] Returns an array of SmsSent objects
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
    public function findOneBySomeField($value): ?SmsSent
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
