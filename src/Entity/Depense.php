<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DepenseRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DepenseRepository::class)
 * @ORM\HasLifecycleCallBacks
 * @ApiResource()
 */
class Depense
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
    private $amount;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $doneAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="depenses")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $motif;

    /**
     * @ORM\Column(type="integer")
     */
    private $typeDepense;

    /**
     * @ORM\Column(type="integer")
     */
    private $isvalidate;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDoneAt(): ?\DateTimeInterface
    {
        return $this->doneAt;
    }

    public function setDoneAt(?\DateTimeInterface $doneAt): self
    {
        $this->doneAt = $doneAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setdoneAt(new \DateTime());
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

    public function getTypeDepense(): ?int
    {
        return $this->typeDepense;
    }

    public function setTypeDepense(int $typeDepense): self
    {
        $this->typeDepense = $typeDepense;

        return $this;
    }

    public function getIsvalidate(): ?int
    {
        return $this->isvalidate;
    }

    public function setIsvalidate(int $isvalidate): self
    {
        $this->isvalidate = $isvalidate;

        return $this;
    }
}
