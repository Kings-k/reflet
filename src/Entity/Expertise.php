<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ExpertiseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExpertiseRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Expertise
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Vehicule::class, inversedBy="expertises")
     * @ORM\JoinColumn(nullable=false)
     */
    private $vehicule;

    /**
     * @ORM\Column(type="date")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="expertises")
     */
    private $doneby;

    /**
     * @ORM\OneToMany(targetEntity=DetailsExpertise::class, mappedBy="expertise")
     */
    private $detailsExpertises;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="expertise")
     */
    private $factures;

    public function __construct()
    {
        $this->detailsExpertises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVehicule(): ?Vehicule
    {
        return $this->vehicule;
    }

    public function setVehicule(?Vehicule $vehicule): self
    {
        $this->vehicule = $vehicule;

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

    public function getDoneby(): ?User
    {
        return $this->doneby;
    }

    public function setDoneby(?User $doneby): self
    {
        $this->doneby = $doneby;

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
     * @return Collection|DetailsExpertise[]
     */
    public function getDetailsExpertises(): Collection
    {
        return $this->detailsExpertises;
    }

    public function addDetailsExpertise(DetailsExpertise $detailsExpertise): self
    {
        if (!$this->detailsExpertises->contains($detailsExpertise)) {
            $this->detailsExpertises[] = $detailsExpertise;
            $detailsExpertise->setExpertise($this);
        }

        return $this;
    }

    public function removeDetailsExpertise(DetailsExpertise $detailsExpertise): self
    {
        if ($this->detailsExpertises->removeElement($detailsExpertise)) {
            // set the owning side to null (unless already changed)
            if ($detailsExpertise->getExpertise() === $this) {
                $detailsExpertise->setExpertise(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Facture[]
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(Facture $facture): self
    {
        if (!$this->factures->contains($facture)) {
            $this->factures[] = $facture;
            $facture->setExpertise($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getExpertise() === $this) {
                $facture->setExpertise(null);
            }
        }

        return $this;
    }
}
