<?php

namespace App\Tools;

use App\Entity\PointOfSale;

class PointOfSaleUtils
{
    private $serviceUtils;

    public function __construct(ServiceUtils $serviceUtils)
    {
        $this->serviceUtils = $serviceUtils;
    }

    public function updatePointOfSale(array $categories, PointOfSale $pos, ?int $id = null, $nbSalesBonus, $bonusPercentage, $workforcePercent): void
    {
        $pos->setNbSalesBonus(intval($nbSalesBonus));
        $pos->setBonusPercentage(floatval($bonusPercentage) / 100);
        $pos->setWorkforcePercent(floatval($workforcePercent) / 100);

        if (isset($id)) {
            foreach ($pos->getServices() as $service) {
                $pos->removeService($service);
            }
        }

        foreach ($categories as $category) {
            $pos->addCategory($category);
            foreach ($category->getServices() as $service) {
                $pos->addService($service);
            }
        }

        // foreach ($this->serviceUtils->findServices($categories, []) as $service) {
        //     $pos->addService($service);
        // }
    }
}
