<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * PayementDette
 *
 * @ORM\Table(name="payement_dette")
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity
 * @ApiResource()
 */
class PayementDette
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
     * @ORM\Column(name="date_paye", type="datetime", nullable=false)
     */
    private $datePaye;

    /**
     * @var float
     *
     * @ORM\Column(name="montant_paye", type="float", precision=10, scale=0, nullable=false)
     */
    private $montantPaye;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="payementdettes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneby;

    /**
     * @ORM\ManyToOne(targetEntity=Dettes::class, inversedBy="payementdettes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $dette;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDatePaye(): ?\DateTimeInterface
    {
        return $this->datePaye;
    }

    public function setDatePaye(\DateTimeInterface $datePaye): self
    {
        $this->datePaye = $datePaye;

        return $this;
    }

    public function getMontantPaye(): ?float
    {
        return $this->montantPaye;
    }

    public function setMontantPaye(float $montantPaye): self
    {
        $this->montantPaye = $montantPaye;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDatePaye(new \DateTime());
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

    public function getDette(): ?dettes
    {
        return $this->dette;
    }

    public function setDette(?dettes $dette): self
    {
        $this->dette = $dette;

        return $this;
    }
}
