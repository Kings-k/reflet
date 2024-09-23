<?php

namespace App\Command;

use App\Entity\SmsSent;
use App\Repository\LicenceRepository;
use App\Repository\SmsSentRepository;
use App\Tools\OneServiceToYouSMS\MessageApi;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class SmsCommand extends Command
{
    private $registry;
    private $licenseRepository;
    private $smsSentRepository;
    private $smsTool;

    protected static $defaultName = 'reflet:sms:send';

    public function __construct(ManagerRegistry $registry, LicenceRepository $licenseRepository, SmsSentRepository $smsSentRepository, MessageApi $smsTool)
    {
        $this->registry = $registry;
        $this->licenseRepository = $licenseRepository;
        $this->smsSentRepository = $smsSentRepository;
        $this->smsTool = $smsTool;

        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Send reminder SMS');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $now = new \DateTime();
        $today = $now->format('Y-m-d');

        $licenses = $this
            ->licenseRepository
            ->createQueryBuilder('l')
            ->select('l.id', 'l.prochainevisite', 'c.nomClient', 'c.sexe', 'c.telephone')
            ->where("DATE_FORMAT(l.prochainevisite, '%Y-%m-%d') > :today")
            ->innerJoin('l.vehicule', 'v')
            ->innerJoin('v.client', 'c')
            ->setParameter('today', $today)
            ->getQuery()
            ->getResult()
        ;

        $queue = [];

        foreach ($licenses as $license) {
            $diff = intval(round(($license['prochainevisite']->getTimestamp() - $now->getTimestamp()) / 86400));

            if ($diff === 7 || $diff === 2) {
                $qb = $this->smsSentRepository->createQueryBuilder('s');
                $smsSents = $qb
                    ->select('s.id', 's.type')
                    ->where('l.id = :licenseId')
                    ->andWhere($qb->expr()->in('s.type', ':types'))
                    ->innerJoin('s.license', 'l')
                    ->setParameter('licenseId', intval($license['id']))
                    ->setParameter('types', [7, 2])
                    ->getQuery()
                    ->getResult()
                ;

                $clientReceivedTwoDaysMessage = false;
                $clientReceivedWeekMessage = false;

                foreach ($smsSents as $smsSent) {
                    if ($smsSent['type'] == 7) {
                        $clientReceivedWeekMessage = true;
                    } elseif ($smsSent['type'] == 2) {
                        $clientReceivedTwoDaysMessage = true;
                    }
                }

                if (!$clientReceivedTwoDaysMessage || !$clientReceivedWeekMessage) {
                    $item = [];
                    if (!$clientReceivedTwoDaysMessage && $diff === 2) {
                        $item['type'] = 2;
                    } elseif (!$clientReceivedWeekMessage && $diff === 7) {
                        $item['type'] = 7;
                    }
                    if (isset($item['type'])) {
                        $item['diff'] = $diff;
                        $item = array_merge($item, $license);
                        $queue[] = $item;
                    }
                }
            }
        }

        if (count($queue) > 0) {
            $this->sendMessage($queue, $io);
        } else {
            $io->info('Aucune notification à envoyer');
        }

        return 0;
    }

    private function sendMessage(array $queue, SymfonyStyle $io)
    {
        $response = $this
            ->smsTool
            ->setMessage(sprintf('Cher%s %s, votre licence de controle technique expire dans %d jours. Nous vous prions de renouveler avant le %s.', ($queue[0]['sexe'] == 'F' ? 'e' : ''), $queue[0]['nomClient'], $queue[0]['diff'], $queue[0]['prochainevisite']->format('d-m-Y')), MessageApi::SIMPLE_TEXT_MESSAGE)
            ->setSenderId('EREST')
            ->setMobileNumbers([$queue[0]['telephone']])
            ->send()
        ;

        if (is_int(strpos($response, 'OK:'))) {
            $entityManager = $this->registry->getManager();
            $smsSent = new SmsSent();
            $smsSent->setType($queue[0]['diff']);
            $this->licenseRepository->find(intval($queue[0]['id']))->addSmsSent($smsSent);
            $entityManager->persist($smsSent);
            $entityManager->flush();
            $io->success('SMS de rappel envoyé à '.$queue[0]['nomClient'].'. License valide jusqu\'au '.$queue[0]['prochainevisite']->format('d-m-Y'));
            array_shift($queue);
            if (count($queue) > 0) {
                $this->sendMessage($queue, $io);
            }
        } else {
            $io->error('Une erreur est survenue lors de l\'envoi du SMS à '.$queue[0]['nomClient']);
            $this->sendMessage($queue, $io);
        }
    }
}
