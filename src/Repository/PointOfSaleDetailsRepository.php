<?php

namespace App\Repository;

use App\Entity\PointOfSaleDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Query\Parameter;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PointOfSaleDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method PointOfSaleDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method PointOfSaleDetails[]    findAll()
 * @method PointOfSaleDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PointOfSaleDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PointOfSaleDetails::class);
    }

    public function findOneByPosService($posId, $serviceId)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('pos.id = :posId')
            ->andWhere('s.id = :service')
            ->innerJoin('p.pointOfSale', 'pos')
            ->innerJoin('p.service', 's')
            ->setParameters(new ArrayCollection([
                new Parameter('posId', $posId),
                new Parameter('service', $serviceId)
            ]))
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    // /**
    //  * @return PointOfSaleDetails[] Returns an array of PointOfSaleDetails objects
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
    public function findOneBySomeField($value): ?PointOfSaleDetails
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
