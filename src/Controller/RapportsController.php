<?php

namespace App\Controller;

use App\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RapportsController extends AbstractController
{
    /**
     * @Route("/rapports/rapport-general", name="rapport_general")
     */
    public function rapportGeneral(): Response
    {
        $user = $this->getUser();
        $entityManager = $this->getDoctrine()->getManager();
        $queryStringClotures = "SELECT c.id, DATE_FORMAT(c.createdAt, '%Y-%m-%d') AS createdAt, c.montantDu AS amountDue, c.montantVerse AS amount, c.solde FROM App\Entity\Cloture c";
        $queryStringEntries = "SELECT e.id, DATE_FORMAT(e.doneAt, '%Y-%m-%d') AS createdAt, e.provenance, e.amount FROM App\Entity\Entries e";
        $queryStringOutflows = "SELECT s.id, DATE_FORMAT(s.createdAt, '%Y-%m-%d') AS createdAt, s.montant AS amount FROM App\Entity\SortieCash s";

        if ($this->isGranted('ROLE_FINANCE')) {
            $queryStringSpents = "SELECT d.id, DATE_FORMAT(d.doneAt, '%Y-%m-%d') AS createdAt, d.amount FROM App\Entity\Depense d INNER JOIN d.user u WHERE u.id = :userId ORDER BY d.doneAt DESC";
        } else {
            $queryStringClotures .= " WHERE (SELECT pos.id FROM App\Entity\Affectation af INNER JOIN af.pos pos WHERE af.user = c.doneBy) = (SELECT p.id FROM App\Entity\Affectation a INNER JOIN a.pos p WHERE a.user = :user) ORDER BY c.createdAt DESC";
            $queryStringEntries .= " INNER JOIN e.doneBy d WHERE d.id = :userId ORDER BY e.doneAt DESC";
            $queryStringOutflows .= " INNER JOIN s.doneBy d WHERE d.id = :userId ORDER BY s.createdAt DESC";
        }

        $queryClotures = $entityManager->createQuery($queryStringClotures);
        $queryEntries = $entityManager->createQuery($queryStringEntries);
        $queryOutflows = $entityManager->createQuery($queryStringOutflows);

        if ($this->isGranted('ROLE_FINANCE')) {
            $querySpents = $entityManager->createQuery($queryStringSpents)->setParameter('userId', $user->getId());
        } else {
            $queryClotures = $queryClotures->setParameter('user', $user);
            $queryEntries = $queryEntries->setParameter('userId', $user->getId());
            $queryOutflows = $queryOutflows->setParameter('userId', $user->getId());
        }

        $clotures = $queryClotures->getResult();
        $entries = $queryEntries->getResult();
        $outflows = $queryOutflows->getResult();
        $spents = $this->isGranted('ROLE_FINANCE') ? $querySpents->getResult() : [];

        return $this->renderTemplate('rapports/rapport-general.html.php', [
            'title' => 'Rapport général',
            'breadcrumb' => [
                [
                    'name' => 'Rapport général'
                ]
            ],
            'clotures' => $clotures,
            'entries' => $entries,
            'outflows' => $outflows,
            'spents' => $spents,
        ]);
    }
}
