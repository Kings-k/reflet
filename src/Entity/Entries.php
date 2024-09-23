<?php

namespace App\Entity;

use App\Repository\EntriesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EntriesRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Entries
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=PointOfSale::class, inversedBy="entries")
     * @ORM\JoinColumn(nullable=true)
     */
    private $pos;

    /**
     * @ORM\Column(type="datetime")
     */
    private $doneAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="entries")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    /**
     * @ORM\Column(type="float")
     */
    private $amount;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $provenance;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $motif;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDoneAt(): ?\DateTimeInterface
    {
        return $this->doneAt;
    }

    public function setDoneAt(\DateTimeInterface $doneAt): self
    {
        $this->doneAt = $doneAt;

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

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getProvenance(): ?string
    {
        return $this->provenance;
    }

    public function setProvenance(?string $provenance): self
    {
        $this->provenance = $provenance;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(?string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDoneAt(new \DateTime());
    }
}
