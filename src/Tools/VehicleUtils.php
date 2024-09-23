<?php

namespace App\Tools;

use App\Entity\Vehicule;

class VehicleUtils
{
    public function toArray(Vehicule $vehicle)
    {
        return [
            'id' => $vehicle->getId(),
            'anneeFabrication' => $vehicle->getAnneeFabrication(),
            'dateMiseEnCirculation' => $vehicle->getDateMiseEnCirculation(),
            'genre' => $vehicle->getGenre(),
            'marque' => $vehicle->getMarque(),
            'typeOuModele' => $vehicle->getTypeOuModele(),
            'numeroImmatriculation' => $vehicle->getNumeroImmatriculation(),
            'puissance' => $vehicle->getPuissance(),
            'numeroDansLaSerie' => $vehicle->getNumeroDansLaSerie(),
            'energie' => $vehicle->getEnergie(),
            'kilometrage' => $vehicle->getKilometrage(),
            'usageVehicule' => $vehicle->getUsageVehicule(),
            'couleur' => $vehicle->getCouleur(),
            'numeroChassis' => $vehicle->getNumeroChassis(),
            'numeroMoteur' => $vehicle->getNumeroMoteur(),
            'client' => $vehicle->getClient()->getId()
        ];
    }
}
