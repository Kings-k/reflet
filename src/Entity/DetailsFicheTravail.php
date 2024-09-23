<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DetailsFicheTravailRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DetailsFicheTravailRepository::class)
 * @ORM\Table(name="details_fiche_travail")
 * @ApiResource()
 */
class DetailsFicheTravail
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="ficheTravails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\Column(type="float")
     */
    private $qty;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $travail;

    /**
     * @ORM\ManyToOne(targetEntity=FicheTravail::class, inversedBy="ficheTravails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $fichetravail;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="ficheTravails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getQty(): ?float
    {
        return $this->qty;
    }

    public function setQty(float $qty): self
    {
        $this->qty = $qty;

        return $this;
    }

    public function getTravail(): ?string
    {
        return $this->travail;
    }

    public function setTravail(string $travail): self
    {
        $this->travail = $travail;

        return $this;
    }

    public function getFichetravail(): ?FicheTravail
    {
        return $this->fichetravail;
    }

    public function setFichetravail(?FicheTravail $fichetravail): self
    {
        $this->fichetravail = $fichetravail;

        return $this;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }
}
