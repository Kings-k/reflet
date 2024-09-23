<?php

namespace App\Controller;

use App\AbstractController;
use App\Entity\Client;
use App\Entity\CategorieClient;
use App\Http\ApiResponse;
use App\Tools\OneServiceToYouSMS\MessageApi;
use App\Tools\Validator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class SmsController extends AbstractController
{
    protected $smsTool;

    public function __construct(MessageApi $smsTool, AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, Validator $validator = null)
    {
        parent::__construct($securityChecker, $requestStack, $validator);
        $this->smsTool = $smsTool;
    }

    /**
     * @Route("/sms/sendtonewclient/{id}", name="sms_send_to_new_client")
     */
    public function sendToNewClient($id): JsonResponse
    {
        $client = $this->getDoctrine()->getManager()->getRepository(Client::class)->find(intval($id));
        $phoneNumber = $client->getTelephone();

        if (!is_null($phoneNumber) && '' !== $phoneNumber) {
            $response = $this
                ->smsTool
                ->setMessage(sprintf('Cher%s %s, Naledi Services vous remercie de participer a la presentation de son logiciel Reflet. Pour Naledi: +243994528241, www.nalediservices.com', ($client->getSexe() == 'F' ? 'e' : ''), $client->getNomClient()), MessageApi::SIMPLE_TEXT_MESSAGE)
                ->setSenderId('Naledi')
                ->setMobileNumbers([$phoneNumber])
                ->send()
            ;

            if (is_int(strpos($response, 'OK:'))) {
                return new ApiResponse('SMS envoyé avec succès à '.$client->getNomClient());
            }

            return new ApiResponse('Erreur lors de l\'envoi du message.');
        }
    }

    /**
     * @Route("/sms/new",name="new_sms")
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $cl=$em->getRepository(Client::class);
        $categ=$em->getRepository(CategorieClient::class);
        $clients=$cl->findBy([],['nomClient'=>'ASC']);
        $categories=$categ->findBy([],['name'=>'ASC']);
            
        return $this->renderTemplate('sms/new.html.php', [
            'title' => 'MESSAGERIE (SMS)',
            'breadcrumb' => [
                [
                    'name' => 'Sms',
                    'path' => '/sms'
                ]
            ],
            'clients' => $clients,
            'categories' => $categories
        ]);
    }

    /**
     * @Route("/sendindividualsms", name="sendindividualsms")
     */
    public function singlemsg(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $cl=$em->getRepository(Client::class);
        $idconvert=intval($request->request->get('clientindiv'));
        $client=$cl->find($idconvert);

        $phone=$client->getTelephone();
        $name=$client->getNomClient();
        $sexe=$client->getSexe();
        $appelation="Cher ".$name.".";
        if($sexe=="F"){

            $appelation="Chere ".$name.".";
        }
        $msg=$request->request->get('messageindiv');
        $newmsg=$appelation.$msg;
    
        $this->sendmessage($newmsg,$phone);

        return $this->redirectToRoute('new_sms');
    }

     /**
     * @Route("/sendsmstoall",name="sendsmstoall")
     */
    public function sendsmstoallcustomers(Request $request){

        $em = $this->getDoctrine()->getManager();
        $cl=$em->getRepository(Client::class);
        $msg=$request->request->get('messageall');

        $clientslist=$cl->createQueryBuilder('c')
            ->select('c.telephone','c.nomClient','c.sexe')
            ->getQuery()
            ->getResult()
        ;
      
        $arrAll=array_chunk($clientslist,30);

        foreach($arrAll as $list){

           $this->sendmessage($msg,($this->implode_key(",",$list,"telephone")));
        }

        return $this->redirectToRoute('new_sms');
    }
    /**
     * @Route("/sendcategsms",name="sendcategsms")
     */
    public function sendsmsbycategorie(Request $request){

        $em = $this->getDoctrine()->getManager();
        $cl=$em->getRepository(Client::class);
        $idcateconvert=intval($request->request->get('categorychoice'));
        $msg=$request->request->get('messagecateg');

        $clientslist=$cl->createQueryBuilder('c')
            ->select('c.telephone')
            ->andWhere('cat.id=:catId')
            ->innerJoin('c.category', 'cat')
            ->setParameter('catId', $idcateconvert)
            ->getQuery()
            ->getResult()
        ;
      
        $arrAll=array_chunk($clientslist,30);

        foreach($arrAll as $list){

            $this->sendmessage($msg,($this->implode_key(",",$list,"telephone")));
        }

        return $this->redirectToRoute('new_sms');
    }

    private function implode_key($glue,$arr,$key){
        $arra2=array();
        foreach($arr as $f){
            if(!isset($f[$key])) continue;
            $arra2[]=$f[$key];
        }
        return implode($glue,$arra2);
    }

    private function extract_name($arr){
        $name=null;
        foreach($arr as $k){
            $name=$k['nomClient'];
        }
        return $name;
    }
    
    public function sendmessage($msg,$phonenumbers)
    {
        /*
        * Requirements: your PHP installation needs cUrl support, which not all PHP installations
        * include by default.
        *
        * Substitute your own username, password, mno, Sid, fl, mt, and message in seven_bit_msg
        *then run the code:
        */
        $username = '';
        $password = '';
        $mt = '0';
        $fl = '0';
        $seven_bit_msg = $msg;
        /*
        * Your phone number, including country code, i.e. 60123456756:
        */
        $mno = $phonenumbers;
        $Sid = 'EREST';
        /*
        * 
        */
        $url = 'https://api.1s2u.io/bulksms';
        $post_fields = array(
            'username' => $username,
            'password' => $password,
            'mt' => $mt,
            'fl' => $fl,
            'Sid' => $Sid,
            'mno' => $mno,
            'msg' => $seven_bit_msg
        );
        $get_url = $url . "?" . http_build_query($post_fields);
        /*
        * A 7-bit GSM SMS message can contain up to 160 characters (longer messages can be
        * achieved using concatenation).
        *
        * All non-alphanumeric 7-bit GSM characters are included in this example. Note that Greek characters,
        * and extended GSM characters (e.g. the caret "^"), may not be supported
        * to all networks. Please let us know if you require support for any characters that
        * do not appear to work to your network.
        */
        /*
        * Sending 7-bit message
        */
        $post_body = $this->seven_bit_sms( $username, $password, $seven_bit_msg, $mno, $Sid, $fl, $mt);
        $result = $this->send_message( $post_body, $get_url );
        if( $result['success'] ) {
         $this->print_ln( $this->formatted_server_response( $result ) );
        }
        else {
         $this->print_ln($this->formatted_server_response( $result ) );
        }
        /*
        * If you don't see this, and no errors appeared to screen, you should
        * check your Web server's error logs for error output:
        */
        $this->print_ln("Message envoye avec succes!");
       
    }

    private function print_ln($content) {
        if (isset($_SERVER["SERVER_NAME"])) {
            print $content."<br />";
        }
        else {
            print $content."\n";
        }
    }

    private function formatted_server_response( $result ) {
        $this_result = "";
        if ($result['success']) {
            $this_result .= "Success ID : ".$result['id'];
        }
        else {
            $this_result .= "Fatal error: HTTP status " .$result['http_status_code']. ", API status " .$result['api_status_code']. " Full details " .$result['details'];
        }
        return $this_result;
    }

    private function send_message ( $post_body, $get_url ) 
    {
        $ch = curl_init( );
        curl_setopt ( $ch, CURLOPT_URL, $get_url );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        // Allowing cUrl funtions 20 second to execute
        curl_setopt ( $ch, CURLOPT_TIMEOUT, 20 );
        // Waiting 20 seconds while trying to connect
        curl_setopt ( $ch, CURLOPT_CONNECTTIMEOUT, 20 );
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response_string = curl_exec( $ch );
        $curl_info = curl_getinfo( $ch );
        $sms_result = array();
        $sms_result['success'] = 0;
        $sms_result['details'] = '';
        $sms_result['http_status_code'] = $curl_info['http_code'];
        $sms_result['api_status_code'] = '';
        $sms_result['id'] = $response_string;
        if ( $response_string == FALSE ) {
            $sms_result['details'] .= "cURL error: " . curl_error( $ch ) . "\n";
        } elseif ( $curl_info[ 'http_code' ] != 200 ) {
            $sms_result['details'] .= "Error: non-200 HTTP status code: " . $curl_info[ 'http_code' ] . "\n";
        }
        else {
            $sms_result['details'] .= "Response from server: $response_string\n";
            $api_result = substr($response_string, 0, 2);
            $status_code = $api_result;
            $sms_result['api_status_code'] = $status_code;
            if ( $api_result != 'OK' ) {
            $sms_result['details'] .= "Error: could not parse valid return data from server.\n" . $api_result;
            } else {
            if ($status_code == 'OK') {
                $sms_result['success'] = 1;
            }
            }
        }
        curl_close( $ch );
        return $sms_result;
    }

    private function seven_bit_sms ( $username, $password, $message, $mno, $sid, $fl, $mt) 
    {
        $post_fields = array (
        'username' => $username,
        'password' => $password,
        'mno'   => $mno,
        'sid' => $sid,
        'sfl' => $fl,
        'mt' => $mt,
        'message'  => $message
        );
        return $this->make_post_body($post_fields);
    }

    private function make_post_body($post_fields) 
    {
        $stop_dup_id = $this->make_stop_dup_id();
        if ($stop_dup_id > 0) {
            $post_fields['stop_dup_id'] = $this->make_stop_dup_id();
        }
        $post_body = '';
        foreach( $post_fields as $key => $value ) {
            $post_body .= urlencode( $key ).'='.urlencode( $value ).'&';
        }
        $post_body = rtrim( $post_body,'&' );
        return $post_body;
    }

    private function make_stop_dup_id() 
    {
        return 0;
    }
}
