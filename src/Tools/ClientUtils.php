<?php

namespace App\Tools;

use App\Entity\Client;
use Doctrine\Persistence\ManagerRegistry;

class ClientUtils
{
    private $managerRegistry;

    public function __construct(ManagerRegistry $managerRegistry)
    {
        $this->managerRegistry = $managerRegistry;
    }

    public function createClients(array $clients): self
    {
        $entityManager = $this->managerRegistry->getManager();
        $customers = [];

        foreach ($clients as $client) {
            $customer = new Client();
            $customer
                ->setNomClient($client['name'])
                ->setTelephone($client['telephone'])
                ->setTypeClient($client['type'])
            ;
        }

        return $this;
    }
}
