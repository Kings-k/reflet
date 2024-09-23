<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Versement
 * @ORM\Table(name="versement")
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity
 */
class Versement
{
    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_concerne", type="date", nullable=false)
     */
    private $createdAt;

    /**
     * @var float
     *
     * @ORM\Column(name="montant_recu", type="float", precision=10, scale=0, nullable=false)
     */
    private $montantRecu;

    /**
     * @var float
     *
     * @ORM\Column(name="montant_dol", type="float", precision=10, scale=0, nullable=false)
     */
    private $montantDol;

    /**
     * @var float
     *
     * @ORM\Column(name="montant_fr", type="float", precision=10, scale=0, nullable=false)
     */
    private $montantFr;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="versements")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    /**
     * @ORM\ManyToOne(targetEntity=Cloture::class, inversedBy="versements")
     * @ORM\JoinColumn(nullable=false)
     */
    private $cloture;

    public function getMontantRecu(): ?float
    {
        return $this->montantRecu;
    }

    public function setMontantRecu(float $montantRecu): self
    {
        $this->montantRecu = $montantRecu;

        return $this;
    }

    public function getMontantDol(): ?float
    {
        return $this->montantDol;
    }

    public function setMontantDol(float $montantDol): self
    {
        $this->montantDol = $montantDol;

        return $this;
    }

    public function getMontantFr(): ?float
    {
        return $this->montantFr;
    }

    public function setMontantFr(float $montantFr): self
    {
        $this->montantFr = $montantFr;

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

    public function getCloture(): ?Cloture
    {
        return $this->cloture;
    }

    public function setCloture(?Cloture $cloture): self
    {
        $this->cloture = $cloture;

        return $this;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt):self
    {
        
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    // public function prePersist()
    // {
    //     $this->setCreatedAt(new \Date());
    // }
}
