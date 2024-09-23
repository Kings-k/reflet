<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Dettes
 *
 * @ORM\Table(name="dettes")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Dettes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_octroi", type="datetime", nullable=false)
     */
    private $dateOctroi;

    /**
     * Statut de la dette : 0 --> non payée, 1 --> avance payée, 2 --> payée
     * 
     * @var string
     *
     * @ORM\Column(name="statut", type="integer", nullable=false)
     */
    private $statut;

    /**
     * @ORM\Column(type="float")
     */
    private $amount;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sold;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="dettes")
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $madeby;

    /**
     * @ORM\OneToMany(targetEntity=PayementDette::class, mappedBy="dette")
     */
    private $payementdettes;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="dettes")
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $client;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $echeance;

    /**
     * @ORM\OneToOne(targetEntity=Facture::class, inversedBy="dettes", cascade={"persist", "remove"})
     */
    private $facture;

    public function __construct()
    {
        $this->payementdettes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateOctroi(): ?\DateTimeInterface
    {
        return $this->dateOctroi;
    }

    public function setDateOctroi(\DateTimeInterface $dateOctroi): self
    {
        $this->dateOctroi = $dateOctroi;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getSold(): ?float
    {
        return $this->sold;
    }

    public function setSold(float $sold): self
    {
        $this->sold = $sold;

        return $this;
    }

    public function getMadeby(): ?User
    {
        return $this->madeby;
    }

    public function setMadeby(?User $madeby): self
    {
        $this->madeby = $madeby;

        return $this;
    }

    /**
     * @return Collection|Payementdette[]
     */
    public function getPayementdettes(): Collection
    {
        return $this->payementdettes;
    }

    public function addPayementdette(Payementdette $payementdette): self
    {
        if (!$this->payementdettes->contains($payementdette)) {
            $this->payementdettes[] = $payementdette;
            $payementdette->setDette($this);
        }

        return $this;
    }

    public function removePayementdette(Payementdette $payementdette): self
    {
        if ($this->payementdettes->removeElement($payementdette)) {
            // set the owning side to null (unless already changed)
            if ($payementdette->getDette() === $this) {
                $payementdette->setDette(null);
            }
        }

        return $this;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    public function getEcheance(): ?\DateTimeInterface
    {
        return $this->echeance;
    }

    public function setEcheance(?\DateTimeInterface $echeance): self
    {
        $this->echeance = $echeance;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDateOctroi(new \DateTime());
    }

    public function getFacture(): ?Facture
    {
        return $this->facture;
    }

    public function setFacture(?Facture $facture): self
    {
        $this->facture = $facture;

        return $this;
    }
}
