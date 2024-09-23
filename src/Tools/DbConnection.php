<?php

namespace App\Tools;

/**
 * Cette connexion est faite par le pattern singleton
 * pour gerer l'instanciation PDO
 */
class DbConnection
{
    private static $instance = null;

    public static function getPdo(): \PDO
    {
        if (self::$instance == null) {

            self::$instance = new \PDO('mysql:host=localhost;dbname=reflet;charset=utf8', 'root', '', [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
            ]);
        }
        return self::$instance;
    }
}
