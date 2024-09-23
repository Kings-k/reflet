<?php 

namespace App\Tools;

use App\Tools\OneServiceToYouSMS\MessageApi;

class SmsUtils
{
    private $smsTool;

    public function __construct(MessageApi $smsTool)
    {
        $this->smsTool = $smsTool;
    }

    public function sendMessage(array $queue): ?array
    {
        $response = $this
            ->smsTool
            ->setMessage($queue[0]['message'], MessageApi::SIMPLE_TEXT_MESSAGE)
            ->setSenderId('EREST')
            ->setMobileNumbers([$queue[0]['telephone']])
            ->send()
        ;

        $result = [];

        if (is_int(strpos($response, 'OK:'))) {
            $result[$queue[0]['clientId']] = ['status' => 1, 'statusText' => 'SMS envoyé à '.$queue[0]['nomClient']];
            array_shift($queue);
            if (count($queue) > 0) {
                $this->sendMessage($queue);
            }
        } else {
            $result[$queue[0]['clientId']] = ['status' => 0, 'statusText' => 'Erreur d\'envoi du SMS à '.$queue[0]['nomClient']];
            // $this->sendMessage($queue);
        }

        return $result;
    }
}
