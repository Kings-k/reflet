<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Facture;
use App\Entity\Licence;
use App\Entity\Category;
use App\Entity\ControleTechnique;
use App\Entity\Service;
use App\Entity\DetailsFacture;
use App\Tools\VehicleUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class ControleTechniqueController extends AbstractController
{
    private $vehicleUtils;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, VehicleUtils $vehicleUtils)
    {
        parent::__construct($securityChecker, $requestStack);
        $this->vehicleUtils = $vehicleUtils;
    }

    /**
     * @Route("/controletechnique/new/{id}", name="create_controletechnique")
     */
    public function create(Request $request, $id): Response
    {
        return $this->edit($request, $id);
    }

    /**
     * @Route("/controletechnique/{id}", name="update_controletechnique")
     */
    public function update(Request $request, $id): Response
    {
        return $this->edit($request, $id, true);
    }

    private function edit(Request $request, $id, $edit = false): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $licenceRepository = $entityManager->getRepository(Licence::class);
        $serviceRepository = $entityManager->getRepository(Service::class);
        $controleRepository = $entityManager->getRepository(ControleTechnique::class);
        $detailsFactureRepository = $entityManager->getRepository(DetailsFacture::class);
        $factureRepository = $entityManager->getRepository(Facture::class);
        $licence = $licenceRepository->find(intval($id));

        if ($request->isMethod('POST')) {
            $total = 0;

            // create or find proforma invoice
            $facture = $edit ? $factureRepository->findOneBy(['licence' => $licence, 'typeFacture' => 'proforma_ctrl']) : new Facture();
            $data = json_decode(file_get_contents('php://input'), true);
            $issues = $data['issues'];

            if ($edit) {
                $controls = $controleRepository->findBy(['licence' => $licence]);
                $servicesIds = [];

                if (count($controls) > 0) {
                    foreach ($controls as $control) {
                        $servicesIds[] = $control->getService()->getId();
                        $licence->removeControleTechnique($control);
                        $control->getService()->removeControleTechnique($control);
                        $control->getDoneBy()->removeControleTechnique($control);
                        $entityManager->remove($control);
                    }
                }

                $detailsFacturesIds = $detailsFactureRepository
                    ->createQueryBuilder('d')
                    ->select('d.id')
                    ->where('s.id IN(:servicesIds)')
                    ->andWhere('f.id = :factureId')
                    ->innerJoin('d.service', 's')
                    ->innerJoin('d.facture', 'f')
                    ->setParameter('servicesIds', $servicesIds)
                    ->setParameter('factureId', $facture->getId())
                    ->getQuery()
                    ->getResult()
                ;

                if (count($detailsFacturesIds) > 0) {
                    foreach ($detailsFacturesIds as $detailsFactureId) {
                        $detailsFacture = $detailsFactureRepository->find($detailsFactureId);
                        $detailsFacture->getService()->removeDetailsFacture($detailsFacture);
                        $detailsFacture->getFacture()->removeDetailsFacture($detailsFacture);
                        $entityManager->remove($detailsFacture);
                    }
                }
            }

            foreach ($issues as $issue) {
                $serviceId = $issue['id'];

                if ($serviceId > 0) {
                    $service = $serviceRepository->find($serviceId);
                    $quantity = intval($issue['quantity']);
                    $price = $quantity * $service->getUnitPrice();
                    $total += $price;

                    $ctrl = new ControleTechnique();
                    $ctrl->setQuantity($quantity);
                    $ctrl->setObservation($issue['observation']);
                    $ctrl->setExpert(trim($data['expert']) !== '' ? $data['expert'] : ($this->getUser()->getFullName() ?? $this->getUser()->getUserIdentifier()));
                    $service->addControleTechnique($ctrl);
                    $licence->addControleTechnique($ctrl);
                    $this->getUser()->addControleTechnique($ctrl);

                    $detailsFacture = new DetailsFacture();
                    $detailsFacture->setQty($quantity);
                    $detailsFacture->setPrice($price);
                    // $pos->addPointOfSaleHistory($detailsFacture);
                    $service->addDetailsFacture($detailsFacture);
                    $facture->addDetailsFacture($detailsFacture);

                    $entityManager->persist($ctrl);
                    $entityManager->persist($detailsFacture);
                }
            }

            $facture->setTotal($total);

            if (!$edit) {
                $facture->setTypeFacture('proforma_ctrl');
                $licence->addFacture($facture);
                $licence->getVehicule()->getClient()->addFacture($facture);
                $this->getUser()->addFacture($facture);
                $entityManager->persist($facture);
            }

            $entityManager->flush();

            $controls = $controleRepository
                ->createQueryBuilder('c')
                ->select('c.id as controlId', 's.id', 's.name', 'c.quantity', 'c.observation', 'c.expert', 'cat.id as categoryId')
                ->where('l.id = :licenseId')
                ->innerJoin('c.licence', 'l')
                ->innerJoin('c.service', 's')
                ->innerJoin('s.category', 'cat')
                ->setParameter('licenseId', $id)
                ->getQuery()
                ->getResult()
            ;

            return new JsonResponse(['facture' => $facture, 'controls' => $controls]);
        }

        $vehicule = $licence->getVehicule();
        $controls = [];
        $category = null;

        if ($edit) {
            $controls = $controleRepository
                ->createQueryBuilder('c')
                ->select('c.id as controlId', 's.id', 's.name', 'c.quantity', 'c.observation', 'c.expert', 'cat.id as categoryId')
                ->where('l.id = :licenseId')
                ->innerJoin('c.licence', 'l')
                ->innerJoin('c.service', 's')
                ->innerJoin('s.category', 'cat')
                ->setParameter('licenseId', $id)
                ->getQuery()
                ->getResult()
            ;

            if (count($controls) > 0) {
                $category = $entityManager
                    ->getRepository(Category::class)
                    ->createQueryBuilder('c')
                    ->select('c.name')
                    ->where('c.id = :categoryId')
                    ->setParameter('categoryId', $controls[0]['categoryId'])
                    ->getQuery()
                    ->getOneOrNullResult()
                ;
            }
        }

        $maison = $entityManager
            ->createQuery("SELECT m.logo, m.nomSociete, m.registreCommerce, m.idNationnal, m.numImpot, m.autorisationFct, m.adressePhysique, m.telephone, m.mail, m.site FROM App\Entity\Maison m")
            ->getOneOrNullResult()
        ;

        return $this->renderTemplate('controletechnique/edit.html.php', [
            'title' => 'Controle Technique',
            'breadcrumb' => [
                ['name' => 'P.V', 'path' => '/licences'],
                ['name' => isset($id) ? $licenceRepository->find($id)->getNumeroPv() : 'Controle Technique']
            ],
            'licenseId' => $id,
            'licence' => $licence,
            'vehicule' => $this->vehicleUtils->toArray($vehicule),
            'client' => $vehicule->getClient()->getNomClient(),
            'controls' => $controls,
            'category' => (is_null($category) ? null : $category['name']),
            'maison' => $maison
        ]);
    }
}
