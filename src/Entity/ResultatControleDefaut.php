<?php

namespace App\Entity;

use App\Repository\ResultatControleDefautRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ResultatControleDefautRepository::class)
 */
class ResultatControleDefaut
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $resultatControle;

    /**
     * @ORM\Column(type="boolean")
     */
    private $acceptationVehicule;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $defautsSansContreVisite = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $defautsAvecContreVisite = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getResultatControle(): ?string
    {
        return $this->resultatControle;
    }

    public function setResultatControle(string $resultatControle): self
    {
        $this->resultatControle = $resultatControle;

        return $this;
    }

    public function getAcceptationVehicule(): ?bool
    {
        return $this->acceptationVehicule;
    }

    public function setAcceptationVehicule(bool $acceptationVehicule): self
    {
        $this->acceptationVehicule = $acceptationVehicule;

        return $this;
    }

    public function getDefautsSansContreVisite(): ?array
    {
        return $this->defautsSansContreVisite;
    }

    public function setDefautsSansContreVisite(?array $defautsSansContreVisite): self
    {
        $this->defautsSansContreVisite = $defautsSansContreVisite;

        return $this;
    }

    public function getDefautsAvecContreVisite(): ?array
    {
        return $this->defautsAvecContreVisite;
    }

    public function setDefautsAvecContreVisite(?array $defautsAvecContreVisite): self
    {
        $this->defautsAvecContreVisite = $defautsAvecContreVisite;

        return $this;
    }
}
