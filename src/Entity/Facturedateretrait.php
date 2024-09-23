<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FacturedateretraitRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FacturedateretraitRepository::class)
 * @ApiResource()
 */
class Facturedateretrait
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
    private $dateRetrait;

    /**
     * @ORM\ManyToOne(targetEntity=Facture::class, inversedBy="facturedateretraits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $invoice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateRetrait(): ?\DateTimeInterface
    {
        return $this->dateRetrait;
    }

    public function setDateRetrait(\DateTimeInterface $dateRetrait): self
    {
        $this->dateRetrait = $dateRetrait;

        return $this;
    }

    public function getInvoice(): ?Facture
    {
        return $this->invoice;
    }

    public function setInvoice(?Facture $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }
}
