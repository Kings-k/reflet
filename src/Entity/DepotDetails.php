<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DepotDetailsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DepotDetailsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class DepotDetails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $safetyStock;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="depotDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity=Depot::class, inversedBy="depotDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $depot;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $codeBars = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(?float $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getSafetyStock(): ?int
    {
        return $this->safetyStock;
    }

    public function setSafetyStock(?int $safetyStock): self
    {
        $this->safetyStock = $safetyStock;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Service
     */
    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getDepot(): ?Depot
    {
        return $this->depot;
    }

    public function setDepot(?Depot $depot): self
    {
        $this->depot = $depot;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setUpdatedAt(new \DateTime());
    }

    public function getCodeBars(): ?array
    {
        return $this->codeBars;
    }

    public function setCodeBars(?array $codeBars): self
    {
        $this->codeBars = $codeBars;

        return $this;
    }
}
