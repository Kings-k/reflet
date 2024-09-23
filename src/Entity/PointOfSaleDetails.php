<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\PointOfSaleDetailsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PointOfSaleDetailsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class PointOfSaleDetails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

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
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="pointOfSaleDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity=PointOfSale::class, inversedBy="pointOfSaleDetails")
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $pointOfSale;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $codeBars = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
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

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getPointOfSale(): ?PointOfSale
    {
        return $this->pointOfSale;
    }

    public function setPointOfSale(?PointOfSale $pointOfSale): self
    {
        $this->pointOfSale = $pointOfSale;

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
