<?php

namespace App\Tools;

use App\Entity\Depot;
use App\Entity\DepotDetails;
use App\Entity\DepotHistory;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\Service;
use App\Entity\User;
use App\Http\ApiResponse;
use Doctrine\Persistence\ObjectManager;

class ProcurementUtils
{
    public function checkStock(array $depotsDetails, int $quantity): bool
    {
        $totalAvailable = 0;

        foreach ($depotsDetails as $detail) {
            $totalAvailable += $detail['quantity'];
        }

        return $totalAvailable >= $quantity;
    }

    public function destock(ObjectManager $entityManager, User $user, array $historyElts, array $depotsDetails): bool
    {
        $quantity = $historyElts['quantity'];
        $isAvailable = $this->checkStock($depotsDetails, $quantity);

        if ($isAvailable) {
            $index = 0;
            $service = $historyElts['service'];
            $motifDestockage = $historyElts['motifDestockage'];

            while ($quantity > 0) {
                $depotDetail = $depotsDetails[$index];

                if (is_array($depotDetail)) {
                    $depotDetailId = $depotDetail['id'];
                    if (array_key_exists('depotName', $depotDetail)) {
                        $isDepot = true;
                        $class = DepotDetails::class;
                    } else {
                        $isDepot = false;
                        $class = PointOfSaleDetails::class;
                    }
                    $detail = $entityManager->getRepository($class)->find(is_string($depotDetailId) ? intval($depotDetailId) : $depotDetailId);
                } elseif ($depotDetail instanceof DepotDetails) {
                    $isDepot = true;
                } elseif ($depotDetail instanceof PointOfSaleDetails) {
                    $isDepot = false;
                }

                $depot = $isDepot ? $detail->getDepot() : $detail->getPointOfSale();
                $history = $isDepot ? new DepotHistory() : new PointOfSaleHistory();
                $qty = $detail->getQuantity();
                $value = $qty - $quantity;

                if ($value >= 0) {
                    $detail->setQuantity($value);
                    $detail->setValue(null);
                    $history->setQuantity(0 - $quantity);
                    $quantity = 0;
                } else {
                    $detail->setQuantity(0);
                    $detail->setValue(0);
                    $history->setQuantity(0 - $qty);
                    $quantity = abs($value);
                }

                $history->setStockManager($user);
                $history->setMotifDestockage($motifDestockage);

                if ($isDepot) {
                    $service->addDepotHistory($history);
                    $depot->addDepotHistory($history);
                } else {
                    $service->addPointOfSaleHistory($history);
                    $depot->addPointOfSaleHistory($history);
                }

                $entityManager->persist($history);
                $index++;
            }
        }

        return $isAvailable;
    }

    public function supply(ObjectManager $entityManager, User $user, Service $service, array $procurementDetails, Depot|PointOfSale $depot, array $procurementUpdated = null): array
    {
        $isPos = $depot instanceof PointOfSale;
        $ddr = $entityManager->getRepository($isPos ? PointOfSaleDetails::class : DepotDetails::class);

        $history = $isPos ? new PointOfSaleHistory() : new DepotHistory();
        $history->setQuantity($procurementDetails['quantity']);
        $history->setStockManager($user);
        $history->setExpirationDate(!isset($procurementDetails['expirationDate']) || $procurementDetails['expirationDate']->format('Y-m-d') === (new \DateTime())->format('Y-m-d') ? null : $procurementDetails['expirationDate']);
        $history->setPrice($procurementDetails['price'] ?? null);
        $history->setCodeBar($procurementDetails['codeBar'] ?? null);

        if ($isPos) {
            $service->addPointOfSaleHistory($history);
            $depot->addPointOfSaleHistory($history);
            $detail = $ddr->findOneByPosService($depot->getId(), $service->getId());
        } else {
            $service->addDepotHistory($history);
            $depot->addDepotHistory($history);
            $detail = $ddr->findOneByDepotService($depot->getId(), $service->getId());
        }

        if (is_null($detail)) {
            $detail = $isPos ? new PointOfSaleDetails() : new DepotDetails();
            $detail->setUser($user);
            if ($isPos) {
                $depot->addPointOfSaleDetail($detail);
                $service->addPointOfSaleDetail($detail);
            } else {
                $depot->addDepotDetail($detail);
                $service->addDepotDetail($detail);
            }
            // $entityManager->persist($detail);
        }

        $detail->setQuantity(($detail->getQuantity() ?? 0) + $procurementDetails['quantity']);

        if (isset($procurementDetails['price'])) {
            $detail->setValue(($detail->getValue() ?? 0) + $procurementDetails['quantity'] * $procurementDetails['price']);
        }

        $codeBars = $detail->getCodeBars();

        if (isset($procurementDetails['codeBar'])) {
            if (is_null($codeBars)) {
                $detail->setCodeBars([$procurementDetails['codeBar']]);
            } else {
                array_push($codeBars, $procurementDetails['codeBar']);
                $detail->setCodeBars($codeBars);
            }
        }

        if ($detail->getCreatedAt() == null) {
            $entityManager->persist($detail);
        }

        $entityManager->persist($history);

        $message = is_null($procurementUpdated) ? 'Approvisionnement effectué avec succès' : 'Demande approuvée avec succès';

        if (!is_null($procurementUpdated)) {
            $procurementUpdated['status'] = 1;
            $procurementUpdated['grantedQuantity'] = $procurementDetails['quantity'];
        }

        return ['message' => $message, 'data' => $procurementUpdated];
    }
}
