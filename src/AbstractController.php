<?php

namespace App;

use App\Templating\Helper\AppVariable;
use App\Templating\Helper\SecurityHelper;
use App\Templating\Helper\SlotsHelper;
use App\Tools\Validator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as BaseAbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Templating\Loader\FilesystemLoader;
use Symfony\Component\Templating\PhpEngine;
use Symfony\Component\Templating\TemplateNameParser;
use App\Tools\DbConnection;

abstract class AbstractController extends BaseAbstractController
{
    protected $securityChecker;
    protected $requestStack;
    protected $validator;
    public $db;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, Validator $validator = null)
    {
        $this->securityChecker = $securityChecker;
        $this->requestStack = $requestStack;
        $this->validator = $validator;
        $this->db = new DbConnection();
    }

    protected function renderTemplate(string $view, array $parameters = []): Response
    {
        $filesystemLoader = new FilesystemLoader(__DIR__.'/../templates/%name%');

        $templating = new PhpEngine(new TemplateNameParser(), $filesystemLoader);
        $app = new AppVariable();
        $app->setRequestStack($this->requestStack);
        $app->setTokenStorage($this->container->get('security.token_storage'));
        $templating->addGlobal('app', $app);
        $templating->set(new SlotsHelper());
        $templating->set(new SecurityHelper($this->securityChecker));

        return new Response($templating->render($view, $parameters));
    }

    protected function crud($request, $id, string $entityClass, array $properties, string $template, $criteria = [], $orderBy = null, $limit = null, array $others = []): Response
    {
        $em = $this->getDoctrine()->getManagerForClass($entityClass);
        $er = $em->getRepository($entityClass);
        $entity = null;
        $parameters = [];

        foreach ($others as $key => $value) {
            $parameters[$key] = $value;
        }

        if (!$orderBy && property_exists(new $entityClass, 'createdAt')) {
            $orderBy = ['createdAt' => 'DESC'];
        }

        if ($request->isMethod('POST')) { // if create or update
            $entity = isset($id) ? $er->find($id) : new $entityClass();
            foreach ($properties as $property) {
                if ($data = $request->request->get($property)) {
                    $setter = 'set'.ucfirst($property);
                    $entity->$setter($data);
                }
            }
            if (!isset($id)) { // if create
                $em->persist($entity);
            }
            $em->flush();
        } elseif ($request->isMethod('DELETE')) {
            $em->remove($er->find($id));
            $em->flush();
            return new JsonResponse('Supprimé avec succès');
        } elseif (isset($id)) { // if details
            $entity = $er->find($id);
        } elseif ($request->isMethod('GET') && count($properties) == 0) { // if list
            $list = $er->findBy($criteria, $orderBy, $limit);
            $parameters[explode('.', str_replace('/', '', $template))[0]] = $list;
            return $this->renderTemplate($template, $parameters);
        }

        $latestEntities = $er->findBy($criteria, $orderBy, $limit);

        $parameters[sprintf('current%s', strtoupper($template)[0])] = $entity;
        $parameters[sprintf('latest%s', ucfirst(explode('/', $template)[0]))] = $latestEntities;

        return $this->renderTemplate($template, $parameters);
    }

    protected function getcashsalesdays($userid){
       
        $cash=$this->db->getPdo()->prepare("SELECT SUM(total) as Somme FROM facture WHERE edited_by_id=? AND type_facture='cash'  AND DATE(date_fact)=CURRENT_DATE() ");
        $cash->execute(array($userid));
        $data=$cash->fetch();

        return $data['Somme'];
    }

    public function getPos($userid){

        $pos=$this->db->getPdo()->prepare("SELECT pos_id FROM affectation WHERE user_id=? ");
        $pos->execute(array($userid));
        $data=$pos->fetch();

        return $data['pos_id'];
    }

    public function getactualrate(){

        $taux=0;
        $sql=$this->db->getPdo()->query("SELECT taux_change FROM taux WHERE (((taux.au) Is Null)) ");
        $data=$sql->fetch();
        if($sql->rowCount()>0){
            $taux=$data['taux_change'];
        }
        return $taux;
    }

    public function  frdate($date)
    {
        if (strlen($date) == 10) {
            $newDate = explode('-', $date);
            return isset($newDate[2]) && isset($newDate[1]) && isset($newDate[0]) ? $newDate[2] . '/' . $newDate[1] . '/' . $newDate[0] : false;
        }
    }
}
