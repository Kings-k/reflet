<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FicheTravailRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FicheTravailRepository::class)
 * @ORM\Table(name="fiche_travail")
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class FicheTravail
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Vehicule::class, inversedBy="travails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $vehicule;

    /**
     * @ORM\Column(type="date")
     */
    private $created_at;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="travails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneby;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFicheTravail::class, mappedBy="fichetravail")
     */
    private $ficheTravails;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="no")
     * @ORM\JoinColumn(nullable=true)
     */
    private $responsable;

    public function __construct()
    {
        $this->ficheTravails = new ArrayCollection();
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
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

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
     * @return Collection|DetailsFicheTravail[]
     */
    public function getFicheTravails(): Collection
    {
        return $this->ficheTravails;
    }

    public function addFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if (!$this->ficheTravails->contains($ficheTravail)) {
            $this->ficheTravails[] = $ficheTravail;
            $ficheTravail->setFichetravail($this);
        }

        return $this;
    }

    public function removeFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if ($this->ficheTravails->removeElement($ficheTravail)) {
            // set the owning side to null (unless already changed)
            if ($ficheTravail->getFichetravail() === $this) {
                $ficheTravail->setFichetravail(null);
            }
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

    public function getResponsable(): ?User
    {
        return $this->responsable;
    }

    public function setResponsable(?User $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
    }
}
