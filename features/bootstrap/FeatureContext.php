<?php

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;

/**
 * Defines application features from the specific context.
 */
class FeatureContext implements Context
{
    /**
     * @Given je suis sur ma page d'acceuil
     */
    public function jeSuisSurMaPageDacceuil()
    {
        // TODO: write pending definition
    }

    /**
     * @When je fais une demande d'approvisionnement
     */
    public function jeFaisUneDemandeDapprovisionnement()
    {
        throw new PendingException();
    }

    /**
     * @Then le gestionnaire de stock approvisionne mon magasin
     */
    public function leGestionnaireDeStockApprovisionneMonMagasin()
    {
        throw new PendingException();
    }

    /**
     * @Then j'accuse la réception
     */
    public function jaccuseLaReception()
    {
        throw new PendingException();
    }

    /**
     * @Then le gestionnaire de stock me fournit la quantité disponible
     */
    public function leGestionnaireDeStockMeFournitLaQuantiteDisponible()
    {
        throw new PendingException();
    }

    /**
     * @Then j'accuse la réception de la quantité fournie
     */
    public function jaccuseLaReceptionDeLaQuantiteFournie()
    {
        throw new PendingException();
    }
}
