<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Guichet
 *
 * @ORM\Table(name="guichet")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Guichet
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom_guichet", type="text", length=100, nullable=false)
     */
    private $nomGuichet;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Depense::class, mappedBy="guichet", orphanRemoval=true)
     */
    private $depenses;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $montantdispo;

    /**
     * @ORM\ManyToOne(targetEntity=PointOfSale::class, inversedBy="guichets")
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $pos;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="guichets")
     */
    private $createdBy;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typevente;

    public function __construct()
    {
        $this->depenses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomGuichet(): ?string
    {
        return $this->nomGuichet;
    }

    public function setNomGuichet(string $nomGuichet): self
    {
        $this->nomGuichet = $nomGuichet;

        return $this;
    }

    public function getPointOfSale(): PointOfSale
    {
        return $this->pos;
    }

    public function setPointOfSale(PointOfSale $pointOfSale)
    {
        $this->pos = $pointOfSale;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }

    /**
     * @return Collection|Depense[]
     */
    public function getDepenses(): Collection
    {
        return $this->depenses;
    }

    public function addDepense(Depense $depense): self
    {
        if (!$this->depenses->contains($depense)) {
            $this->depenses[] = $depense;
            $depense->setGuichet($this);
        }

        return $this;
    }

    public function removeDepense(Depense $depense): self
    {
        if ($this->depenses->removeElement($depense)) {
            // set the owning side to null (unless already changed)
            if ($depense->getGuichet() === $this) {
                $depense->setGuichet(null);
            }
        }

        return $this;
    }

    public function getMontantdispo(): ?float
    {
        return $this->montantdispo;
    }

    public function setMontantdispo(?float $montantdispo): self
    {
        $this->montantdispo = $montantdispo;

        return $this;
    }

    public function getPos(): ?PointOfSale
    {
        return $this->pos;
    }

    public function setPos(?PointOfSale $pos): self
    {
        $this->pos = $pos;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getTypevente(): ?string
    {
        return $this->typevente;
    }

    public function setTypevente(string $typevente): self
    {
        $this->typevente = $typevente;

        return $this;
    }
}
