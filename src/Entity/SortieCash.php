<?php

namespace App\Entity;

use App\Repository\SortieCashRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SortieCashRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class SortieCash
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $montant;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="sortieCashes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    /**
     * @ORM\ManyToOne(targetEntity=PointOfSale::class, inversedBy="sortieCashes")
     */
    private $pos;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $piecejustificative;

    /**
     * @ORM\ManyToOne(targetEntity=CompteSortie::class, inversedBy="sortieCashes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $typeSortie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

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

    public function getDoneBy(): ?User
    {
        return $this->doneBy;
    }

    public function setDoneBy(?User $doneBy): self
    {
        $this->doneBy = $doneBy;

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

    public function getPiecejustificative(): ?string
    {
        return $this->piecejustificative;
    }

    public function setPiecejustificative(?string $piecejustificative): self
    {
        $this->piecejustificative = $piecejustificative;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }

    public function getTypeSortie(): ?CompteSortie
    {
        return $this->typeSortie;
    }

    public function setTypeSortie(?CompteSortie $typeSortie): self
    {
        $this->typeSortie = $typeSortie;

        return $this;
    }
}
