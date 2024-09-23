<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\Message;
use App\Tools\SmsUtils;

final class MessageDataPersister implements ContextAwareDataPersisterInterface
{
    private $decorated;
    private $smsUtils;

    // public function __construct(ContextAwareDataPersisterInterface $decorated, MailerInterface $mailer)
    public function __construct(ContextAwareDataPersisterInterface $decorated, SmsUtils $smsUtils)
    {
        $this->decorated = $decorated;
        $this->smsUtils = $smsUtils;
    }

    public function supports($data, array $context = []): bool
    {
        return $this->decorated->supports($data, $context);
    }

    public function persist($data, array $context = [])
    {
        $report = [];
        $clients = [];

        if (
            $data instanceof Message && (
                ($context['collection_operation_name'] ?? null) === 'post' ||
                ($context['graphql_operation_name'] ?? null) === 'create'
            )
        ) {
            $clients = $data->getClients();
            $report = $this->sendMessage($data);
        }

        $previousClientCount = count($clients->toArray());

        foreach ($clients as $client) {
            $clientId = $client->getId();
            if (array_key_exists($clientId, $report) && $report[$clientId]['status'] === 0) {
                $data->removeClient($client);
            }
        }

        $clientCount = count($data->getClients()->toArray());
        $data->setStatus(count($report) > 0 ? ($clientCount === $previousClientCount ? 2 : 1) : 0);
        $result = $this->decorated->persist($data, $context);

        return $result;
    }

    public function remove($data, array $context = [])
    {
        return $this->decorated->remove($data, $context);
    }

    private function sendMessage(Message $message)
    {
        $queue = [];
        $messageBody = $message->getBody();

        foreach ($message->getClients() as $client) {
            $queue[] = ['message' => $messageBody, 'clientId' => $client->getId(), 'nomClient' => $client->getNomClient(), 'telephone' => $client->getTelephone()];
        }

        // $this->smsUtils->sendMessage($queue);
        return $this->smsUtils->sendMessage($queue);
    }
}
