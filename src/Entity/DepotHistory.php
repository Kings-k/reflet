<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DepotHistoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DepotHistoryRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class DepotHistory
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $quantity;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Depot::class, inversedBy="depotHistories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $depot;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $expirationDate;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $bonLivraison;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="depotHistories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $releases = [];

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $motifDestockage;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="depotHistories")
     */
    private $stockManager;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $codeBar;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $note;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): self
    {
        $this->price = $price;

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

    public function getDepot(): ?Depot
    {
        return $this->depot;
    }

    public function setDepot(?Depot $depot): self
    {
        $this->depot = $depot;

        return $this;
    }

    public function getExpirationDate(): ?\DateTimeInterface
    {
        return $this->expirationDate;
    }

    public function setExpirationDate(?\DateTimeInterface $expirationDate): self
    {
        $this->expirationDate = $expirationDate;

        return $this;
    }

    public function getBonLivraison(): ?string
    {
        return $this->bonLivraison;
    }

    public function setBonLivraison(?string $bonLivraison): self
    {
        $this->bonLivraison = $bonLivraison;

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

    public function getReleases(): ?array
    {
        return $this->releases;
    }

    public function setReleases(?array $releases): self
    {
        $this->releases = $releases;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }

    public function getMotifDestockage(): ?string
    {
        return $this->motifDestockage;
    }

    public function setMotifDestockage(?string $motifDestockage): self
    {
        $this->motifDestockage = $motifDestockage;

        return $this;
    }

    public function getStockManager(): ?User
    {
        return $this->stockManager;
    }

    public function setStockManager(?User $stockManager): self
    {
        $this->stockManager = $stockManager;

        return $this;
    }

    public function getCodeBar(): ?string
    {
        return $this->codeBar;
    }

    public function setCodeBar(?string $codeBar): self
    {
        $this->codeBar = $codeBar;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): self
    {
        $this->note = $note;

        return $this;
    }
}
