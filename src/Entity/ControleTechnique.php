<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ControleTechniqueRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ControleTechniqueRepository::class)
 * @ApiResource()
 */
class ControleTechnique
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="controleTechniques")
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="controleTechniques")
     */
    private $doneBy;

    /**
     * @ORM\ManyToOne(targetEntity=Licence::class, inversedBy="controleTechniques")
     */
    private $licence;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $observation;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $expert;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $quantity;

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

    public function getLicence(): ?Licence
    {
        return $this->licence;
    }

    public function setLicence(?Licence $licence): self
    {
        $this->licence = $licence;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getDoneBy(): ?User
    {
        return $this->doneBy;
    }

    public function setDoneBy(?User $doneBy): self
    {
        $this->doneBy = $doneBy;

        return $this;
    }

    public function getExpert(): ?string
    {
        return $this->expert;
    }

    public function setExpert(?string $expert): self
    {
        $this->expert = $expert;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(?int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }
}
