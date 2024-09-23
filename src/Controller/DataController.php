<?php

namespace App\Controller;

use App\AbstractController;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class DataController extends AbstractController
{
    private $connection;

    public function __construct(AuthorizationCheckerInterface $securityChecker, RequestStack $requestStack, Connection $connection)
    {
        parent::__construct($securityChecker, $requestStack);
        $this->connection = $connection;
    }

    /**
     * @Route("/data/import", name="data_import")
     */
    public function import(Request $request): Response
    {
        if ($request->isMethod('POST')) {
            $table = $request->request->get('table');
            $sourceFile = $request->files->get('source-file');
            $extension = $sourceFile->guessExtension();

            if ($extension !== 'csv') {
                throw new FileException("Seuls les fichiers CSV sont supportés.");
            }

            if ($sourceFile) {
                $dir = $this->getParameter('kernel.project_dir').'\\'.$table;
                if (!file_exists($dir)) {
                    mkdir($dir);
                }
                $originalFilename = pathinfo($sourceFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $extension;

                try {
                    $sourceFile->move($dir, $newFilename);
                } catch (FileException $e) {
                    throw new FileException("Erreur dans le traitement du fichier. " . $e, 1);
                }

                $fileContent = fopen($dir.'/'.$newFilename, 'r');
            }
        }

        $tables = $this->connection->createSchemaManager()->listTableNames();
        // dump($this->connection->createSchemaManager()->listTables());

        return $this->renderTemplate('data/import.html.php', [
            'title' => 'Import data',
            'breadcrumb' => [
                ['name' => 'Import data']
            ],
            'tables' => $tables
        ]);
    }
}
