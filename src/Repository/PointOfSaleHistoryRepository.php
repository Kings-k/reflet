<?php

namespace App\Repository;

use App\Entity\PointOfSaleHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PointOfSaleHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method PointOfSaleHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method PointOfSaleHistory[]    findAll()
 * @method PointOfSaleHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PointOfSaleHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PointOfSaleHistory::class);
    }

    // /**
    //  * @return PointOfSaleHistory[] Returns an array of PointOfSaleHistory objects
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
    public function findOneBySomeField($value): ?PointOfSaleHistory
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getByDate(\DateTime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder('p');
        $qb
            ->select('p.id', 'p.motifDestockage', 'p.createdAt', 'e.id as editorId', 'p.quantity')
            // ->where($qb->expr()->like('p.motifDestockage', '?1'))
            ->where($qb->expr()->orX($qb->expr()->eq('p.motifDestockage', '?1'), $qb->expr()->eq('p.motifDestockage', '?2')))
            ->andWhere($qb->expr()->eq($qb->expr()->substring('p.createdAt', 0, 10), '?4'))
            // ->andWhere('datetime(saleDate) = ?4')
            // ->andWhere('e.id = ?5')
            ->innerJoin('p.invoice', 'i')
            ->innerJoin('i.editedBy', 'e')
            ->setParameter('1', 'vente_cash')
            ->setParameter('2', 'vente_credit')
            // ->setParameter('3', explode('T', 'p.createdAt')[0])
            ->setParameter('4', (new \DateTime())->format('Y-m-d'))
            // ->setParameter('5', $this->getUser()->getId())
            ->andWhere('s.createdAt BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;
    }
}
