<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Affectation;
use App\Entity\Category;
use App\Entity\PointOfSale;
use App\Entity\PointOfSaleHistory;
use App\Entity\Service;
use App\Entity\UnitOfMeasure;
use App\Http\ApiResponse;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{
    /**
     * @Route("/services/newService")
     */
    public function newService(Request $request):JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $userid=$this->getUser()->getId();

        $data = json_decode(file_get_contents('php://input'), true);
        $name=$data['name']; $categ=$data['category'];

        $sql=$this->db->getPdo()->prepare("INSERT INTO service VALUES (null,?,?,?,?,?,?,?,?,?,?,NOW(),?,?,?,?,?,?) ");
        $sql->execute(array(1,$userid,$categ,$name,$name,1,0,0,0,null,null,null,null,null,null,0));
        $serviceId=$this->db->getPdo()->lastInsertId();

        return new JsonResponse(['serviceId'=>$serviceId]);
       
    }

    /**
     * @Route("/services/addnewpanne",name="newPanne")
     */
    public function addnewpanne(Request $request): JsonResponse
    {
        return $this->edit('', $request);
    }

    /**
     * @Route("/services/new", name="new_service")
     */
    public function new(Request $request): Response
    {
        return $this->edit('services/new.html.php', $request);
    }

    /**
     * @Route("/services/{id}", name="service_details")
     */
    public function details(Request $request, $id): Response
    {
        return $this->edit('services/detail.html.php', $request, intval($id));
    }

    /**
     * @Route("/services", name="service_list")
     */
    public function list(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $serviceRepository = $entityManager->getRepository(Service::class);
        $strLimit = $request->get('limit');
        $all = $request->get('all');
        $query = $request->get('search');
        $limit = isset($strLimit) && is_string($strLimit) ? intval($strLimit) : 24;

        $posIdArr = $entityManager
            ->getRepository(Affectation::class)
            ->createQueryBuilder('a')
            ->select('p.id')
            ->where('u.id = :userId')
            ->innerJoin('a.user', 'u')
            ->innerJoin('a.pos', 'p')
            ->setParameter('userId', $this->getUser()->getId())
            ->getQuery()
            ->getResult()
        ;

        if ($request->isXmlHttpRequest()) {
            if ($categoryId = $request->get('c')) {
                return new ApiResponse('', $this->findByCategory(intval($categoryId)));
            }

            if (!isset($all) || $all !== 'true') {
                $pos = !is_array($posIdArr) || count($posIdArr) === 0 ? null : $entityManager->getRepository(PointOfSale::class)->find($posIdArr[0]['id']);

                return new JsonResponse($this->findByNameOrBarcode($query, $pos, $limit));
            }
        }

        $queryBuilder = $serviceRepository
            ->createQueryBuilder('s')
            ->select('s.id', 's.name', 's.type', 's.unitPrice', 's.point', 'c.name as category')
        ;

        if (isset($query)) {
            $queryBuilder = $queryBuilder->where($queryBuilder->expr()->like('s.name', ':name'));
        }

        if (is_array($posIdArr) && count($posIdArr) > 0) {
            $queryBuilder = $queryBuilder
                ->andWhere('pos.id = :posId')
                ->innerJoin('s.pointOfSales', 'pos')
                ->setParameter('posId', $posIdArr[0]['id'])
            ;
        }

        if (isset($query)) {
            $queryBuilder = $queryBuilder->setParameter('name', '%'.$query.'%');
        }

        $queryBuilder = $queryBuilder->innerJoin('s.category', 'c');

        if (!isset($strLimit) || !is_string($strLimit)) {
            $limit = 200;
        }

        $services = $queryBuilder
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

        if ($request->isXmlHttpRequest()) {
            return new JsonResponse($services);
        }

        return $this->renderTemplate('services/list.html.php', [
            'title' => 'Services',
            'breadcrumb' => [
                ['name' => 'Services']
            ],
            'services' => $services
        ]);
    }

    /**
     * @Route("/services/{id}/delete", name="delete_service")
     */
    public function delete($id): JsonResponse
    {
        $em = $this->getDoctrine()->getManagerForClass(Service::class);
        $service = $em->getRepository(Service::class)->find(intval($id));
        $em->remove($service);
        $em->flush();
        return new JsonResponse('Supprimé avec succès');
    }

    private function edit(string $template, Request $request, $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();
        $er = $em->getRepository(Service::class);
        $cr = $em->getRepository(Category::class);
        $ur = $em->getRepository(UnitOfMeasure::class);
        $arrPos = $em->getRepository(Affectation::class)->findOnePosIdByUser($this->getUser());
        $categories = $cr->findBy([], ['name' => 'ASC']);
        $service = null;
        $violationList = [];

        if (isset($id)) {
            $service = $er->find($id);
        }

        if ($request->isMethod('POST')) {
            if (!isset($id)) {
                $service = new Service();
            }

            if ($request->isXMLHttpRequest()) {
                $data = json_decode(file_get_contents('php://input'), true);
                $categoryId = $data['category'];
            } else {
                $categoryId = $request->request->get('category');
            }

            $category = $cr->find(intval($categoryId));
            $service->setName(trim($request->isXMLHttpRequest() ? $data['service'] : $request->request->get('name')));
            // $service->setCodeManuel(intval($request->request->get('codeManuel')));
            $service->setDescription($request->isXMLHttpRequest() ? ($data['description'] ?? $data['service']) : $request->request->get('description'));
            $service->setType(intval($request->isXMLHttpRequest() ? ($data['type'] ?? 1): $request->request->get('type')));
            $service->setUnitPrice(floatval($request->isXMLHttpRequest() ? ($data['unitPrice'] ?? 0): $request->request->get('unitPrice')));
            $service->setWholesalePrice(floatval($request->isXMLHttpRequest() ? ($data['wholesalePrice'] ?? 0) : $request->request->get('wholesalePrice')));
            $service->setDeflatedPrice(floatval($request->isXMLHttpRequest() ? ($data['deflatedPrice'] ?? 0) : $request->request->get('deflatedPrice')));
            $service->setUom($ur->find(intval($request->isXMLHttpRequest() ? ($data['uom'] ?? 0) : $request->request->get('uom'))));
            $service->setPoint(floatval($request->isXMLHttpRequest() ? ($data['point'] ?? 0) : $request->request->get('point')));
            $service->setNbrGros(floatval($request->isXMLHttpRequest() ? ($data['nbrgros'] ?? 0) : $request->request->get('nbrgros')));
            $service->setBonusApplicable($request->isXMLHttpRequest() ? ($data['bonusApplicable'] ?? false) : ($request->request->get('bonusApplicable') === 'on' ? true : false));

            if (!is_null($category)) {
                $category->addService($service);

                foreach ($em->getRepository(PointOfSale::class)->findAll() as $pointOfSale) {
                    $catsIds = array_unique($this->gatherCategories($pointOfSale->getCategories(), []));
                    foreach ($catsIds as $catId) {
                        if ($catId == $category->getId()) {
                            $pointOfSale->addService($service);
                        }
                    }
                }
            }

            $violationList = $this->validator->validate($service);
            $countViolations = count($violationList);
            $this->get('session')->getFlashBag()->clear();

            if ($countViolations > 0) {
                $message = 'Le formulaire contient des erreurs';

                if ($request->isXMLHttpRequest()) {
                    return new ApiResponse($message, [], $violationList, 500);
                }

                $this->addFlash('danger', $message);

            } else {
                /** @var UploadedFile $photo */
                $photo = $request->files->get('photo');

                if ($photo) {
                    $originalFilename = pathinfo($photo->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                    $newFilename = $safeFilename.'-'.uniqid().'.'.$photo->guessExtension();

                    try {
                        $photo->move(
                            $this->getParameter('service_images_dir'),
                            $newFilename
                        );
                    } catch (FileException $e) {
                        throw new FileException("Erreur dans le traitement du fichier. ".$e, 1);
                    }

                    $service->setPhoto($newFilename);
                }

                if (!isset($id)) {
                    $em->persist($service);
                }

                $em->flush();

                if (isset($id)) {
                    $placeholder = 'modifié';
                } else {
                    $placeholder = 'ajouté';
                }

                $message = sprintf("Service %s avec succès", $placeholder);
                
                if ($request->isXMLHttpRequest()) {
                    return new ApiResponse('Panne ajoutée avec succès', [
                        'serviceId' => $service->getId(),
                        'name' => $service->getName(),
                        'categoryId' => $service->getCategory()->getId(),
                        'category' => $service->getCategory()->getName()
                    ]);
                }

                $this->addFlash('success', $message);
            }
        }

        if (isset($arrPos)) {
            $pos = $em->getRepository(PointOfSale::class)->find($arrPos['id']);
            $categories = $pos->getCategories()->toArray();
            $latestServices = [];

            if (count($categories) > 0) {
                foreach ($categories as $category) {
                    $latestServices = array_merge($latestServices, $category->getServices()->toArray());
                }
            }
        } else {
            $latestServices = $er->findBy([], ['createdAt' => 'DESC'], 10);
        }

        $unitsOfMeasure = $ur->findBy([], ['name' => 'ASC']);

        return $this->renderTemplate($template, [
            'title' => isset($id) ? 'Détails sur le service / article' : 'Nouveau service / article',
            'breadcrumb' => [
                ['name' => 'Services', 'path' => '/services'],
                ['name' => isset($id) ? $service->getName() : 'Nouveau service']
            ],
            'categories' => $categories,
            'latestServices' => $latestServices,
            'currentS' => $service,
            'unitsOfMeasure' => $unitsOfMeasure,
            'violations' => $violationList
        ]);
    }

    private function gatherCategories($sourceCategories, $destination)
    {
        $children = [];

        foreach ($sourceCategories as $category) {
            $destination[] = $category->getId();
            $children = array_merge($children, $category->getChildren()->toArray());
        }

        if (count($children) > 0) {
            $destination = array_merge($destination, $this->gatherCategories($children, $destination));
        }

        return $destination;
    }

    private function findByCategory(int $categoryId): array
    {
        return $this
            ->getDoctrine()
            ->getManager()
            ->createQuery("SELECT s.id, s.name FROM App\Entity\Service s INNER JOIN s.category c WHERE c.id = :categoryId ORDER BY s.name ASC")
            ->setParameter('categoryId', $categoryId)
            ->getResult()
        ;
    }

    private function findByNameOrBarcode(string $query, ?PointOfSale $pos, int $limit = 10)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $phr = $entityManager->getRepository(PointOfSaleHistory::class);
        $qb = $phr->createQueryBuilder('ph');
        $sqb = $entityManager->getRepository(Service::class)->createQueryBuilder('s');
        $isCodeBar = intval($query) > 0;

        $items = $qb->select('d.id', 'd.codeBars', 's.id as serviceId', 's.name', 's.type', 'd.quantity', 's.unitPrice', 's.deflatedPrice', 's.wholesalePrice', 'p.id as depotId', 'p.name as depotName', 'c.name as category', 's.photo', 's.bonusApplicable')
            ->where('p = :pos')
            ->andWhere('s.type = 2')
            ->andWhere($isCodeBar ? $qb->expr()->eq('ph.codeBar', ':query') : $qb->expr()->like('s.name', ':query'))
            ->andWhere($qb->expr()->gt('d.quantity', 0))
            ->andWhere($qb->expr()->gt('ph.quantity', 0))
            ->innerJoin('ph.pos', 'p')
            ->innerJoin('ph.service', 's')
            ->innerJoin('s.pointOfSaleDetails', 'd')
            ->innerJoin('s.category', 'c')
            ->setParameter('pos', $pos)
            ->setParameter('query', $isCodeBar ? $query : '%'.$query.'%')
            ->setMaxResults($isCodeBar ? 1 : $limit)
            ->getQuery()
            ->getResult()
        ;

        $articles = [];

        foreach ($items as $item) {
            $elts = array_filter($articles, function ($article) use ($item) {
                return isset($article) && $item['id'] == $article['id'];
            });
            if (count($elts) == 0) {
                array_push($articles, $item);
            }
        }

        $services = [];
        $posServices = $pos->getServices();
        $serviceIds = [];
        $count = count($posServices);
        $max = $count < $limit ? $count : $limit;

        if ($count > 0) {
            foreach ($posServices as $service) {
                $serviceIds[] = $service->getId();
            }

            for ($i = 0; $i < $max; $i++) {
                $clonedSqb = clone $sqb;
                $serv = $clonedSqb
                    ->select('s.id as serviceId', 's.name', 's.type', 's.unitPrice', 's.deflatedPrice', 's.wholesalePrice', 'c.name as category', 's.photo', 's.bonusApplicable')
                    ->where('s.type = 1')
                    ->andWhere($qb->expr()->in('s.id', ':serviceIds'))
                    ->andWhere($qb->expr()->like('s.name', ':name'))
                    ->innerJoin('s.category', 'c')
                    ->setParameter('serviceIds', $serviceIds)
                    ->setParameter('name', '%'.$query.'%')
                    ->getQuery()
                    ->getResult()
                ;
                if (is_array($serv) && count($serv) > 0) {
                    foreach ($serv as $s) {
                        if (!in_array($s, $services)) {
                            $services[] = $s;
                        }
                    }
                }
            }
        }

        return array_merge($articles, $services);
    }
}
