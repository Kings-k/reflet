<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Category;
use App\Entity\Expertise;
use App\Entity\Facture;
use App\Entity\Vehicule;
use App\Entity\DetailsExpertise;
use App\Entity\DetailsFacture;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleDetails;
use App\Entity\PointOfSaleHistory;
use App\Entity\PV;
use App\Entity\Service;
use App\Entity\UserGuichet;
use App\Tools\VehicleUtils;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use App\Tools\DbConnection;


class ExpertiseController extends AbstractController
{
    private $vehicleUtils;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, VehicleUtils $vehicleUtils)
    {
        parent::__construct($securityChecker, $requestStack);
        $this->vehicleUtils = $vehicleUtils;
    }

    /**
     * @Route("/expertises", name="list_expertises")
     */
    public function list(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityRepository = $entityManager->getRepository(Expertise::class);

        $expertises = $entityRepository
            ->createQueryBuilder('e')
            ->select('e.id', 'e.createdAt', 'v.numeroImmatriculation', 'v.genre', 'c.nomClient', 'd.username', 'f.id as invoiceId')
            ->innerJoin('e.doneby', 'd')
            ->innerJoin('e.vehicule', 'v')
            ->innerJoin('v.client', 'c')
            ->leftJoin('e.factures', 'f')
            ->orderBy('e.createdAt', 'DESC')
            ->getQuery()
            ->getResult()
        ;

        if ($request->isXMLHttpRequest()) {
            return new JsonResponse(['message' => '', 'data' => $expertises, 'errors' => []]);
        }

        return $this->renderTemplate('expertise/list.html.php', [
            'title' => 'Gestion des Expertises',
            'breadcrumb' => [
                ['name' => 'Expertises', 'path' => '/expertises'],
            ],
            'expertises' => $expertises,
            'typeuser'=>$this->getUser()->getType(),
        ]);
    }

    /**
     * @Route("/expertises/new", name="new_expertise")
     */
    public function register(Request $request): Response
    {
        return $this->edit('expertise/new.html.php', $request);
    }

    /**
     * @Route("/expertises/addissues/{id}", name="addDetails_expertise")
     */
    public function addIssues(Request $request, $id): Response
    {
        return $this->editIssues($request, intval($id));
    }

    /**
     * @Route("/expertises/updateissues/{id}", name="updateDetails_expertise")
     */
    public function updateIssues(Request $request, $id): Response
    {
        return $this->editIssues($request, intval($id), true);
    }

    /**
     * @Route("/expertises/{id}", name="detail_expertise")
     */
    public function detail(Request $request, $id)
    {
        return $this->edit('expertise/detail.html.php', $request, $id);
    }
    
    /**
     * @Route("/expertise/validatedDetail/{expertiseId}", name="validateDetail_expertise")
     */
    public function Validate_Details(Request $request, $expertiseId)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $expertiseRepository = $entityManager->getRepository(Expertise::class);
        $serviceRepository = $entityManager->getRepository(Service::class);
        
        $expertise = $expertiseRepository->find(intval($expertiseId));
        // $categories = $entityManager
        //     ->createQuery("SELECT c.id, c.name FROM App\Entity\DetailsExpertise d INNER JOIN d.service s INNER JOIN s.category c INNER JOIN d.expertise e WHERE e.id = :expertiseId GROUP BY c.id")
        //     ->setParameter('expertiseId', $expertiseId)
        //     ->getResult()
        // ;

        for ($i = 0, $len = $request->request->get('length'); $i < $len; $i++) {
            $id = intval($request->request->get('servicecheck'.$i));

            if ($id > 0) {
                $detail = new DetailsExpertise();
                $service = $serviceRepository->find($id);
                $detail->setObservation($request->request->get('observation_'.$id));
                $expertise->addDetailsExpertise($detail);
                $service->addDetailsExpertise($detail);
                $entityManager->persist($detail);
            }
        }

        $entityManager->flush();

        return $this->redirectToRoute('synthese_expertise', ['id' => $expertiseId]); 
    }
    
    /**
     * @Route("/expertise/synthese/{id}", name="synthese_expertise")
     */
    public function Synthese(Request $request, int $id)
    {
        $db=new DbConnection;
        $ent= $this->getDoctrine()->getManager();
        $exp=$ent->getRepository(Expertise::class);
        
        $expertise=$exp->find($id);

        $categ=$db->getPdo()->prepare("SELECT OC.id,OC.name FROM details_expertise DE INNER JOIN  service OS ON DE.service_id=OS.id INNER JOIN category OC  ON OS.category_id=OC.id WHERE DE.expertise_id=? GROUP BY OS.category_id");
        $categ->execute(array($id));

        return $this->renderTemplate('expertise/syntheseExpertise.html.php', [
            'title' => 'Synthese Expertise',
            'breadcrumb' => [
                ['name' => 'Expertises', 'path' => '/expertises'],
                ['name' => isset($id) ? $expertise->getVehicule()->getNumeroImmatriculation()."/".$expertise->getVehicule()->getGenre() : 'Synthese expertise']
            ],
            'currentE' => $expertise,
            'categoriesSent'=>$categ,
            'vehiculesinfos'=>$expertise->getVehicule(),
            'categSent'=>$ent->getRepository(Category::class),
            'dbsent'=>$db,
        ]); 
    }

    private function edit(string $template, Request $request, $id = null)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $vh=$entityManager->getRepository(Vehicule::class);
        $exp=$entityManager->getRepository(Expertise::class);

        $expertise = null;

        if (isset($id)) {
            $expertise = $exp->find(intval($id));
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $expertise = new Expertise();
            }

            if ($request->isXMLHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
            }

            $expertise->setVehicule($vh->find(intval($request->isXMLHttpRequest() ? json_decode(file_get_contents('php://input'), true)['vehicule'] : $request->request->get('vehicule'))));
            $expertise->setDoneby($this->getUser());

            if ($request->isXmlHttpRequest()) {
                $pdr = $entityManager->getRepository(PointOfSaleDetails::class);
                $pvr = $entityManager->getRepository(PV::class);

                $sql=$this->db->getPdo()->query("SELECT SUM(S.unit_price) somme FROM pv P INNER JOIN service S ON S.id=P.service_id ");
                $total=$sql->fetch()['somme'];

                $pos = $entityManager->getRepository(UserGuichet::class)->findOneBy(['user' => $this->getUser()])->getGuichet()->getPointOfSale();

                $pvs = $pvr->findBy([]);

                if (count($pvs) > 0) {
                    // creer une nouvelle facture
                    $facture = new Facture();
                    $facture->setTotal($total);
                    $facture->setTypeFacture('cash');
                    $facture->setEditedBy($this->getUser());

                    $client = $expertise->getVehicule()->getClient();
                    $facture->setClient($client ?? null);

                    foreach ($pvs as $pv) {
                        $posDetail = $pdr
                            ->createQueryBuilder('pd')
                            ->select('pd')
                            ->where('s.id = :serviceId')
                            ->andWhere('pd.quantity > 0')
                            ->innerJoin('pd.service', 's')
                            ->setParameter('serviceId', $pv->getService()->getId())
                            ->getQuery()
                            ->getOneOrNullResult()
                        ;

                        if ($posDetail !== null) {
                            $service = $posDetail->getService();
                            $serviceUnitPrice = $service->getUnitPrice();
                            $destockage = new PointOfSaleHistory();
                            $destockage->setMotifDestockage('vente_cash');
                            $destockage->setQuantity(-1);
                            $destockage->setPrice($serviceUnitPrice);
                            $posDetail->setQuantity($posDetail->getQuantity() - 1);
                            $posDetail->setValue($posDetail->getValue() - $serviceUnitPrice);
                            $service->addPointOfSaleHistory($destockage);
                            $pos->addPointOfSaleHistory($destockage);
                            $facture->addPointOfSaleHistory($destockage);
                            $entityManager->persist($destockage);
                        }
                    }

                    $entityManager->persist($facture);
                }
            }

            if (!isset($id)) {
                $entityManager->persist($expertise);
            }

            $entityManager->flush();
            // do anything else you need here, like send an email
            $parameters = [];
            if (isset($id)) {
                $placeholder = 'modifiée';
                $redirect = 'detail_expertise';
                $parameters['id'] = $id;
            } else {
                $placeholder = 'créée';
                $redirect = 'new_expertise';
            }

            $message = sprintf("Expertise %s avec succès", $placeholder);

            if ($request->isXMLHttpRequest()) {
                $user = $this->getUser();
                return new JsonResponse([
                    'message' => $message,
                    'data' => [
                        'id' => $expertise->getId(),
                        'createdAt' => $expertise->getCreatedAt(),
                        'numeroImmatriculation' => $expertise->getVehicule()->getNumeroImmatriculation(),
                        'typeOuModele' => $expertise->getVehicule()->getTypeOuModele(),
                        'marque' => $expertise->getVehicule()->getMarque(),
                        'genre' => $expertise->getVehicule()->getGenre(),
                        'nomClient' => $expertise->getVehicule()->getClient()->getNomClient(),
                        'user' => $user->getFullName() ?? $user->getUserIdentifier()
                    ],
                    'amountPaid' => $total,
                    'errors' => []
                ]);
            }

            $this->addFlash('success', $message);

            return $this->redirectToRoute($redirect, $parameters);
        }

        return $this->renderTemplate($template, [
            'title' => 'Expertises',
            'breadcrumb' => [
                ['name' => 'Expertises', 'path' => '/expertises'],
                ['name' => isset($id) ? $expertise->getVehicule()->getNumeroImmatriculation()."/".$expertise->getVehicule()->getGenre() : 'Nouvelle expertise']
            ],
            'latestExpertises' => $exp->findBy([], ['createdAt' => 'DESC']),
            'currentE' => $expertise,
            'lastestVehicules'=>$vh->findBy([], ['numeroImmatriculation' => 'DESC']),
        ]);
    }

    private function editIssues(Request $request, int $id, $edit = false): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $expertiseRepository = $entityManager->getRepository(Expertise::class);
        $serviceRepository = $entityManager->getRepository(Service::class);
        $detailsExpertiseRepository = $entityManager->getRepository(DetailsExpertise::class);
        $factureRepository = $entityManager->getRepository(Facture::class);
        $expertise = $expertiseRepository->find($id);

        if ($request->isMethod('POST')) {
            $total = 0;

            // create or find proforma invoice
            $facture = $edit ? $factureRepository->findOneBy(['expertise' => $expertise, 'typeFacture' => 'proforma_ctrl']) : new Facture();
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

                    $ctrl = new DetailsExpertise();
                    $ctrl->setQuantity($quantity);
                    $ctrl->setObservation($issue['observation']);
                    $ctrl->setExpert(trim($data['expert']) !== '' ? $data['expert'] : ($this->getUser()->getFullName() ?? $this->getUser()->getUserIdentifier()));
                    $service->addDetailsExpertise($ctrl);
                    $expertise->addDetailsExpertise($ctrl);
                    $this->getUser()->addDetailsExpertise($ctrl);

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
                $expertise->addFacture($facture);
                $expertise->getVehicule()->getClient()->addFacture($facture);
                $this->getUser()->addFacture($facture);
                $entityManager->persist($facture);
            }

            $entityManager->flush();

            $controls = $detailsExpertiseRepository
                ->createQueryBuilder('c')
                ->select('c.id as controlId', 's.id', 's.name', 'c.quantity', 'c.observation', 'c.expert', 'c.expert', 'c.createdAt', 'c.updatedAt', 'cat.id as categoryId')
                ->where('e.id = :expertiseId')
                ->innerJoin('c.expertise', 'e')
                ->innerJoin('c.service', 's')
                ->innerJoin('s.category', 'cat')
                ->setParameter('expertiseId', $id)
                ->getQuery()
                ->getResult()
            ;

            return new JsonResponse(['facture' => $facture, 'controls' => $controls]);
        }

        $vehicule = $expertise->getVehicule();
        $controls = [];
        $category = null;

        if ($edit) {
            $controls = $detailsExpertiseRepository
                ->createQueryBuilder('c')
                ->select('c.id as controlId', 's.id', 's.name', 'c.quantity', 'c.observation', 'c.expert', 'c.expert', 'c.createdAt', 'c.updatedAt', 'cat.id as categoryId')
                ->where('e.id = :expertiseId')
                ->innerJoin('c.expertise', 'e')
                ->innerJoin('c.service', 's')
                ->innerJoin('s.category', 'cat')
                ->setParameter('expertiseId', $id)
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

        return $this->renderTemplate('expertise/edit.html.php', [
            'title' => 'Expertise de vehicule',
            'breadcrumb' => [
                ['name' => 'Expertises', 'path' => '/expertises'],
                ['name' => isset($id) ? $expertise->getVehicule()->getNumeroImmatriculation()." (".$expertise->getVehicule()->getGenre().")" : 'Nouvelle expertise']
            ],
            'licenseId' => $id,
            'licence' => $expertise,
            'vehicule' => $this->vehicleUtils->toArray($vehicule),
            'client' => $vehicule->getClient()->getNomClient(),
            'controls' => $controls,
            'category' => (is_null($category) ? null : $category['name']),
            'maison' => $maison
        ]);
    }
}
