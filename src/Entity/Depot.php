<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DepotRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DepotRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Depot
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=DepotDetails::class, mappedBy="depot", orphanRemoval=true)
     */
    private $depotDetails;

    /**
     * @ORM\OneToMany(targetEntity=DepotHistory::class, mappedBy="depot", orphanRemoval=true)
     */
    private $depotHistories;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $type;

    /**
     * @ORM\ManyToMany(targetEntity=Service::class, mappedBy="depots")
     */
    private $services;

    public function __construct()
    {
        $this->depotDetails = new ArrayCollection();
        $this->depotHistories = new ArrayCollection();
        $this->services = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

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

    /**
     * @return Collection|DepotDetails[]
     */
    public function getDepotDetails(): Collection
    {
        return $this->depotDetails;
    }

    public function addDepotDetail(DepotDetails $depotDetail): self
    {
        if (!$this->depotDetails->contains($depotDetail)) {
            $this->depotDetails[] = $depotDetail;
            $depotDetail->setDepot($this);
        }

        return $this;
    }

    public function removeDepotDetail(DepotDetails $depotDetail): self
    {
        if ($this->depotDetails->removeElement($depotDetail)) {
            // set the owning side to null (unless already changed)
            if ($depotDetail->getDepot() === $this) {
                $depotDetail->setDepot(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DepotHistory[]
     */
    public function getDepotHistories(): Collection
    {
        return $this->depotHistories;
    }

    public function addDepotHistory(DepotHistory $depotHistory): self
    {
        if (!$this->depotHistories->contains($depotHistory)) {
            $this->depotHistories[] = $depotHistory;
            $depotHistory->setDepot($this);
        }

        return $this;
    }

    public function removeDepotHistory(DepotHistory $depotHistory): self
    {
        if ($this->depotHistories->removeElement($depotHistory)) {
            // set the owning side to null (unless already changed)
            if ($depotHistory->getDepot() === $this) {
                $depotHistory->setDepot(null);
            }
        }

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

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
            $service->addDepot($this);
        }

        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->services->removeElement($service)) {
            $service->removeDepot($this);
        }

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
}
