<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\User;
// use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class AuthenticationTest extends ApiTestCase
{
    // use ReloadDatabaseTrait;

    public function testLogin(): void
    {
        $client = self::createClient();

        $response = $client->request('POST', '/api/authentication_token', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'username' => 'admin',
                'password' => '123456',
            ],
        ]);

        $json = $response->toArray();
        $this->assertResponseIsSuccessful();
        $this->assertArrayHasKey('token', $json);

        // test not authorized
        $client->request('GET', '/api/categories');
        $this->assertResponseStatusCodeSame(401);

        // test authorized
        $client->request('GET', '/api/categories', ['auth_bearer' => $json['token']]);
        $this->assertResponseIsSuccessful();
    }
}
