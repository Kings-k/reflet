<?php

namespace App\Repository;

use App\Entity\DepotDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Query\Parameter;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DepotDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method DepotDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method DepotDetails[]    findAll()
 * @method DepotDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DepotDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DepotDetails::class);
    }

    public function findOneByDepotService($depotId, $serviceId)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('dt.id = :depot')
            ->andWhere('s.id = :service')
            ->innerJoin('d.depot', 'dt')
            ->innerJoin('d.service', 's')
            ->setParameters(new ArrayCollection([
                new Parameter('depot', $depotId),
                new Parameter('service', $serviceId)
            ]))
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    // /**
    //  * @return DepotDetails[] Returns an array of DepotDetails objects
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
    public function findOneBySomeField($value): ?DepotDetails
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
