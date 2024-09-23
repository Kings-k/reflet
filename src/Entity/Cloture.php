<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ClotureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Cloture
 *
 * @ORM\Table(name="cloture")
 * @ORM\Entity(repositoryClass=ClotureRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Cloture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="float")
     */
    private $montantDu;

    /**
     * @ORM\Column(type="float")
     */
    private $montantVerse;

    /**
     * @ORM\Column(type="float")
     */
    private $solde;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="clotures")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Versement::class, mappedBy="cloture")
     */
    private $versements;

    public function __construct()
    {
        $this->versements = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMontantDu(): ?float
    {
        return $this->montantDu;
    }

    public function setMontantDu(float $montantDu): self
    {
        $this->montantDu = $montantDu;

        return $this;
    }

    public function getMontantVerse(): ?float
    {
        return $this->montantVerse;
    }

    public function setMontantVerse(float $montantVerse): self
    {
        $this->montantVerse = $montantVerse;

        return $this;
    }

    public function getSolde(): ?float
    {
        return $this->solde;
    }

    public function setSolde(float $solde): self
    {
        $this->solde = $solde;

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
     * @return Collection|Versement[]
     */
    public function getVersements(): Collection
    {
        return $this->versements;
    }

    public function addVersement(Versement $versement): self
    {
        if (!$this->versements->contains($versement)) {
            $this->versements[] = $versement;
            $versement->setCloture($this);
        }

        return $this;
    }

    public function removeVersement(Versement $versement): self
    {
        if ($this->versements->removeElement($versement)) {
            // set the owning side to null (unless already changed)
            if ($versement->getCloture() === $this) {
                $versement->setCloture(null);
            }
        }

        return $this;
    }
}
