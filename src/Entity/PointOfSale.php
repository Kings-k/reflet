<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PointOfSaleRepository")
 * @ORM\HasLifecycleCallbacks()
 * @UniqueEntity(fields={"name"}, message="Le nom du point de vente doit être unique")
 * @ApiResource()
 */
class PointOfSale
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=false)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $type;

    /**
     * Date de creation du point de service
     *
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * Createur du magasin
     *
     * @ORM\ManyToOne(targetEntity="User")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleDetails::class, mappedBy="pointOfSale", orphanRemoval=true)
     * @ApiSubresource()
     */
    private $pointOfSaleDetails;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, mappedBy="pointOfSales")
     * @ApiSubresource()
     */
    private $categories;

    /**
     * @ORM\ManyToMany(targetEntity=Service::class, mappedBy="pointOfSales")
     * @ApiSubresource()
     */
    private $services;

    /**
     * @ORM\OneToMany(targetEntity=Client::class, mappedBy="pos")
     */
    private $clients;

    /**
     * @ORM\OneToMany(targetEntity=SortieCash::class, mappedBy="pos")
     */
    private $sortieCashes;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sold;

    /**
     * @ORM\OneToMany(targetEntity=Entries::class, mappedBy="pos", orphanRemoval=true)
     */
    private $entries;

    /**
     * @ORM\OneToMany(targetEntity=Guichet::class, mappedBy="pos", orphanRemoval=true)
     * @ApiSubresource()
     */
    private $guichets;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleHistory::class, mappedBy="pos", orphanRemoval=true)
     */
    private $pointOfSaleHistories;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbSalesBonus;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $bonusPercentage;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $workforcePercent;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFacture::class, mappedBy="pos")
     */
    private $detailsFactures;

    public function __construct()
    {
        $this->pointOfSaleDetails = new ArrayCollection();
        $this->services = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->clients = new ArrayCollection();
        $this->sortieCashes = new ArrayCollection();
        $this->entries = new ArrayCollection();
        $this->guichets = new ArrayCollection();
        $this->pointOfSaleHistories = new ArrayCollection();
        $this->detailsFactures = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }
    public function getType(): int
    {
        return $this->type;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function setType(int $type)
    {
        $this->type = $type;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description)
    {
        $this->description = $description;
    }

    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt)
    {
        $this->createdAt = $createdAt;
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

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user)
    {
        $this->user = $user;
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

    /**
     * @return Collection|PointOfSaleDetails[]
     */
    public function getPointOfSaleDetails(): Collection
    {
        return $this->pointOfSaleDetails;
    }

    public function addPointOfSaleDetail(PointOfSaleDetails $pointOfSaleDetail): self
    {
        if (!$this->pointOfSaleDetails->contains($pointOfSaleDetail)) {
            $this->pointOfSaleDetails[] = $pointOfSaleDetail;
            $pointOfSaleDetail->setPointOfSale($this);
        }

        return $this;
    }

    public function removePointOfSaleDetail(PointOfSaleDetails $pointOfSaleDetail): self
    {
        if ($this->pointOfSaleDetails->removeElement($pointOfSaleDetail)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleDetail->getPointOfSale() === $this) {
                $pointOfSaleDetail->setPointOfSale(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addPointOfSale($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removePointOfSale($this);
        }

        return $this;
    }

    /**
     * @return Collection|Service[]
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Service $service): self
    {
        if (!$this->services->contains($service)) {
            $this->services[] = $service;
            $service->addPointOfSale($this);
        }

        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->services->removeElement($service)) {
            $service->removePointOfSale($this);
        }

        return $this;
    }

    /**
     * @return Collection|Client[]
     */
    public function getClients(): Collection
    {
        return $this->clients;
    }

    public function addClient(Client $client): self
    {
        if (!$this->clients->contains($client)) {
            $this->clients[] = $client;
            $client->setPos($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->clients->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getPos() === $this) {
                $client->setPos(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SortieCash[]
     */
    public function getSortieCashes(): Collection
    {
        return $this->sortieCashes;
    }

    public function addSortieCash(SortieCash $sortieCash): self
    {
        if (!$this->sortieCashes->contains($sortieCash)) {
            $this->sortieCashes[] = $sortieCash;
            $sortieCash->setPos($this);
        }

        return $this;
    }

    public function removeSortieCash(SortieCash $sortieCash): self
    {
        if ($this->sortieCashes->removeElement($sortieCash)) {
            // set the owning side to null (unless already changed)
            if ($sortieCash->getPos() === $this) {
                $sortieCash->setPos(null);
            }
        }

        return $this;
    }

    public function getSold(): ?float
    {
        return $this->sold;
    }

    public function setSold(?float $sold): self
    {
        $this->sold = $sold;

        return $this;
    }

    /**
     * @return Collection|Entries[]
     */
    public function getEntries(): Collection
    {
        return $this->entries;
    }

    public function addEntry(Entries $entry): self
    {
        if (!$this->entries->contains($entry)) {
            $this->entries[] = $entry;
            $entry->setPos($this);
        }

        return $this;
    }

    public function removeEntry(Entries $entry): self
    {
        if ($this->entries->removeElement($entry)) {
            // set the owning side to null (unless already changed)
            if ($entry->getPos() === $this) {
                $entry->setPos(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Guichet[]
     */
    public function getGuichets(): Collection
    {
        return $this->guichets;
    }

    public function addGuichet(Guichet $guichet): self
    {
        if (!$this->guichets->contains($guichet)) {
            $this->guichets[] = $guichet;
            $guichet->setPos($this);
        }

        return $this;
    }

    public function removeGuichet(Guichet $guichet): self
    {
        if ($this->guichets->removeElement($guichet)) {
            // set the owning side to null (unless already changed)
            if ($guichet->getPos() === $this) {
                $guichet->setPos(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PointOfSaleHistory[]
     */
    public function getPointOfSaleHistories(): Collection
    {
        return $this->pointOfSaleHistories;
    }

    public function addPointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if (!$this->pointOfSaleHistories->contains($pointOfSaleHistory)) {
            $this->pointOfSaleHistories[] = $pointOfSaleHistory;
            $pointOfSaleHistory->setPos($this);
        }

        return $this;
    }

    public function removePointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if ($this->pointOfSaleHistories->removeElement($pointOfSaleHistory)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleHistory->getPos() === $this) {
                $pointOfSaleHistory->setPos(null);
            }
        }

        return $this;
    }

    public function getNbSalesBonus(): ?int
    {
        return $this->nbSalesBonus;
    }

    public function setNbSalesBonus(?int $nbSalesBonus): self
    {
        $this->nbSalesBonus = $nbSalesBonus;

        return $this;
    }

    public function getBonusPercentage(): ?float
    {
        return $this->bonusPercentage;
    }

    public function setBonusPercentage(?float $bonusPercentage): self
    {
        $this->bonusPercentage = $bonusPercentage;

        return $this;
    }

    public function getWorkforcePercent(): ?float
    {
        return $this->workforcePercent;
    }

    public function setWorkforcePercent(?float $workforcePercent): self
    {
        $this->workforcePercent = $workforcePercent;

        return $this;
    }

    /**
     * @return Collection|DetailsFacture[]
     */
    public function getDetailsFactures(): Collection
    {
        return $this->detailsFactures;
    }

    public function addDetailsFacture(DetailsFacture $detailsFacture): self
    {
        if (!$this->detailsFactures->contains($detailsFacture)) {
            $this->detailsFactures[] = $detailsFacture;
            $detailsFacture->setPos($this);
        }

        return $this;
    }

    public function removeDetailsFacture(DetailsFacture $detailsFacture): self
    {
        if ($this->detailsFactures->removeElement($detailsFacture)) {
            // set the owning side to null (unless already changed)
            if ($detailsFacture->getPos() === $this) {
                $detailsFacture->setPos(null);
            }
        }

        return $this;
    }
}
