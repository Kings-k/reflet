<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\PointOfSale;
use App\Entity\Guichet;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RapportCloturesController extends AbstractController
{
    /**
     * @Route("/rapportclotures", name="rapportclotures")
     */
    public function index(Request $request): Response
    {
        $ent=$this->getDoctrine()->getManager();
        $pos=$ent->getRepository(PointOfSale::class);
        $guich=$ent->getRepository(Guichet::class);
        $typeUser=$this->getUser()->getType();
        $cloturesFind=null;
        $pos_id=null;
        $pointOfSale =null;
        $dusent=date('Y-m-d');
        $ausent=date('Y-m-d');

        $sql=$this->db->getPdo()->prepare("SELECT DATE(C.created_at) created_at, U.full_name,C.montant_du,C.montant_verse,C.solde FROM cloture C INNER JOIN user U ON U.id=C.done_by_id WHERE DATE(C.created_at) BETWEEN ? AND ? ");
        $sql->execute(array($dusent,$ausent));
        $cloturesFind=$sql->fetchAll();

      
        $poslist=$pos->findBy([],['name'=>'ASC']);
      
        if($typeUser=="financepos"){
 
            $pos_id=$this->getPos($this->getUser()->getId());
            $pointOfSale = $pos->find(intval($pos_id));
        
            $sql =$this->db->getPdo()->prepare("SELECT * FROM guichet  WHERE pos_id=?");
            $sql->execute(array(intval($pos_id)));
            $guichets=$sql->fetchAll();
        }
        else{

            $sql =$this->db->getPdo()->query("SELECT * FROM guichet");
            $guichets=$sql->fetchAll();
        }
        
       return $this->renderTemplate('rapportclotures/new.html.php', [
        'title' => isset($id) ? 'Rapport Financier' : 'Clotures',
        'breadcrumb' => [
            ['name' => 'Clotures']
        ],
            'listpos'=>$poslist,
            'listguichets'=>$guichets,
            'typeuser'=>$typeUser,
            'posUser'=>$pointOfSale,
            'cloturesSent'=>$cloturesFind,
            'titlesent'=>"RAPPORT DES CLOTURES DU ".$this->frdate($dusent)." AU ".$this->frdate($ausent)
        ]);
    }

    /**
     * @Route("/rapportscloture/filtre",name="rapportscloturesfiltre")
     */

     public function rapportscloturesfiltre(Request $request):Response
     {
        $ent=$this->getDoctrine()->getManager();
        $pos=$ent->getRepository(PointOfSale::class);
        $typeUser=$this->getUser()->getType();
        $cloturesFind=null;
        $pos_id=null;
        $pointOfSale =null;
      
        
            $dusent=$request->request->get('datedebut');
            $ausent=$request->request->get('datefin');
            $possent=$request->request->get('pos');
            $guichetsent=$request->request->get('guichet');

            $startDate = strlen($dusent) > 0 ? (new \DateTime($dusent))->format('Y-m-d') : '1970-01-01';
            $endDate = (new \DateTime($ausent))->format('Y-m-d');

            if(!empty($dusent) && !empty($ausent) && $possent>0 && $guichetsent>0){

                $sql=$this->db->getPdo()->prepare("SELECT DATE(C.created_at) created_at, U.full_name,C.montant_du,C.montant_verse,C.solde FROM cloture C INNER JOIN user U ON U.id=C.done_by_id INNER JOIN user_guichet G ON G.user_id=C.done_by_id WHERE G.id=? AND DATE(C.created_at) BETWEEN ? AND ?  ");
                $sql->execute(array(intval($guichetsent),$startDate,$endDate));
                $cloturesFind=$sql->fetchAll();
            } 
            elseif(!empty($dusent) && !empty($ausent) && $possent>0 && $guichetsent==0){

                $sql=$this->db->getPdo()->prepare("SELECT DATE(C.created_at) created_at, U.full_name,C.montant_du,C.montant_verse,C.solde FROM cloture C INNER JOIN user U ON U.id=C.done_by_id INNER JOIN affectation A ON A.user_id=U.id WHERE A.pos_id=? AND DATE(C.created_at) BETWEEN ? AND ?  ");
                $sql->execute(array(intval($possent),$startDate,$endDate));
                $cloturesFind=$sql->fetchAll();
            }
            elseif(!empty($dusent) && !empty($ausent) && $possent==0 && $guichetsent==0){

                $sql=$this->db->getPdo()->prepare("SELECT DATE(C.created_at) created_at, U.full_name,C.montant_du,C.montant_verse,C.solde FROM cloture C INNER JOIN user U ON U.id=C.done_by_id WHERE DATE(C.created_at) BETWEEN ? AND ? ");
                $sql->execute(array($startDate,$endDate));
                $cloturesFind=$sql->fetchAll();
            }
            else{

            }
      
       return $this->renderTemplate('rapportclotures/filtre.html.php', [
        'title' => isset($id) ? 'Rapport Financier' : 'Clotures',
        'breadcrumb' => [
            ['name' => 'Rapports', 'path' => '/rapportclotures'],
            ['name' => 'Clotures']
        ],
            'typeuser'=>$typeUser,
            'posUser'=>$pointOfSale,
            'cloturesSent'=>$cloturesFind,
            'titlesent'=>"RAPPORT DES CLOTURES DU ".$this->frdate($startDate)." AU ".$this->frdate($endDate)
        ]);

     }
}
