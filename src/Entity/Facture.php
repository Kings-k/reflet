<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Facture
 *
 * @ORM\Table(name="facture")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 * @ApiFilter(SearchFilter::class, properties={"client": "exact"})
 */
class Facture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="total", type="float", precision=10, scale=0, nullable=false)
     */
    private $total;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_fact", type="datetime", nullable=false)
     */
    private $dateFact;

    /**
     * @var string
     *
     * @ORM\Column(name="type_facture", type="text", length=100, nullable=false)
     */
    private $typeFacture;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="factures")
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $editedBy;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="factures")
     * @ORM\JoinColumn(nullable=true)
     * @ApiSubresource()
     */
    private $client;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleHistory::class, mappedBy="invoice")
     */
    private $pointOfSaleHistories;

    /**
     * @ORM\ManyToOne(targetEntity=Licence::class, inversedBy="factures")
     * @ApiSubresource()
     */
    private $licence;

    /**
     * @ORM\ManyToOne(targetEntity=Expertise::class, inversedBy="factures")
     * @ApiSubresource()
     */
    private $expertise;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $amountPaid;

    /**
     * @ORM\Column(type="string", length=7, nullable=true)
     */
    private $paymentMode;

    /**
     * @ORM\OneToMany(targetEntity=Facturedateretrait::class, mappedBy="invoice", orphanRemoval=true)
     */
    private $facturedateretraits;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $workforce;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $workforcePercent;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $discount;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFacture::class, mappedBy="facture")
     */
    private $detailsFactures;

    /**
     * @ORM\OneToOne(targetEntity=Dettes::class, mappedBy="facture", cascade={"persist", "remove"})
     */
    private $dettes;

    public function __construct()
    {
        $this->pointOfSaleHistories = new ArrayCollection();
        $this->facturedateretraits = new ArrayCollection();
        $this->detailsFactures = new ArrayCollection();
    }

    /**
     * @ApiProperty(identifier=true)
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(float $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getDateFact(): ?\DateTimeInterface
    {
        return $this->dateFact;
    }

    public function setDateFact(\DateTimeInterface $dateFact): self
    {
        $this->dateFact = $dateFact;

        return $this;
    }

    public function getTypeFacture(): ?string
    {
        return $this->typeFacture;
    }

    public function setTypeFacture(string $typeFacture): self
    {
        $this->typeFacture = $typeFacture;

        return $this;
    }

    public function getEditedBy(): ?User
    {
        return $this->editedBy;
    }

    public function setEditedBy(?User $editedBy): self
    {
        $this->editedBy = $editedBy;

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

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDateFact(new \DateTime());
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
            $pointOfSaleHistory->setInvoice($this);
        }

        return $this;
    }

    public function removePointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if ($this->pointOfSaleHistories->removeElement($pointOfSaleHistory)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleHistory->getInvoice() === $this) {
                $pointOfSaleHistory->setInvoice(null);
            }
        }

        return $this;
    }

    public function getLicence(): ?Licence
    {
        return $this->licence;
    }

    public function setLicence(?Licence $licence): self
    {
        $this->licence = $licence;

        return $this;
    }

    public function getExpertise(): ?Expertise
    {
        return $this->expertise;
    }

    public function setExpertise(?Expertise $expertise): self
    {
        $this->expertise = $expertise;

        return $this;
    }

    public function getAmountPaid(): ?float
    {
        return $this->amountPaid;
    }

    public function setAmountPaid(?float $amountPaid): self
    {
        $this->amountPaid = $amountPaid;

        return $this;
    }

    public function getPaymentMode(): ?string
    {
        return $this->paymentMode;
    }

    public function setPaymentMode(?string $paymentMode): self
    {
        $this->paymentMode = $paymentMode;

        return $this;
    }

    /**
     * @return Collection|Facturedateretrait[]
     */
    public function getFacturedateretraits(): Collection
    {
        return $this->facturedateretraits;
    }

    public function addFacturedateretrait(Facturedateretrait $facturedateretrait): self
    {
        if (!$this->facturedateretraits->contains($facturedateretrait)) {
            $this->facturedateretraits[] = $facturedateretrait;
            $facturedateretrait->setInvoice($this);
        }

        return $this;
    }

    public function removeFacturedateretrait(Facturedateretrait $facturedateretrait): self
    {
        if ($this->facturedateretraits->removeElement($facturedateretrait)) {
            // set the owning side to null (unless already changed)
            if ($facturedateretrait->getInvoice() === $this) {
                $facturedateretrait->setInvoice(null);
            }
        }

        return $this;
    }

    public function getWorkforce(): ?float
    {
        return $this->workforce;
    }

    public function setWorkforce(?float $workforce): self
    {
        $this->workforce = $workforce;

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

    public function getDiscount(): ?float
    {
        return $this->discount;
    }

    public function setDiscount(?float $discount): self
    {
        $this->discount = $discount;

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
            $detailsFacture->setFacture($this);
        }

        return $this;
    }

    public function removeDetailsFacture(DetailsFacture $detailsFacture): self
    {
        if ($this->detailsFactures->removeElement($detailsFacture)) {
            // set the owning side to null (unless already changed)
            if ($detailsFacture->getFacture() === $this) {
                $detailsFacture->setFacture(null);
            }
        }

        return $this;
    }

    public function getDettes(): ?Dettes
    {
        return $this->dettes;
    }

    public function setDettes(?Dettes $dettes): self
    {
        // unset the owning side of the relation if necessary
        if ($dettes === null && $this->dettes !== null) {
            $this->dettes->setFacture(null);
        }

        // set the owning side of the relation if necessary
        if ($dettes !== null && $dettes->getFacture() !== $this) {
            $dettes->setFacture($this);
        }

        $this->dettes = $dettes;

        return $this;
    }
}
