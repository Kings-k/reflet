<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProcurementRequestRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProcurementRequestRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
#[ApiResource]
class ProcurementRequest
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="procurementRequests")
     * @ORM\JoinColumn(nullable=true)
     */
    private $product;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $approvedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="procurementRequests")
     */
    private $approvedBy;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="procurementRequests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $emittedBy;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $grantedQuantity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getProduct(): ?service
    {
        return $this->product;
    }

    public function setProduct(?service $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getApprovedAt(): ?\DateTimeImmutable
    {
        return $this->approvedAt;
    }

    public function setApprovedAt(?\DateTimeImmutable $approvedAt): self
    {
        $this->approvedAt = $approvedAt;

        return $this;
    }

    public function getApprovedBy(): ?User
    {
        return $this->approvedBy;
    }

    public function setApprovedBy(?User $approvedBy): self
    {
        $this->approvedBy = $approvedBy;

        return $this;
    }

    public function getEmittedBy(): ?User
    {
        return $this->emittedBy;
    }

    public function setEmittedBy(?User $emittedBy): self
    {
        $this->emittedBy = $emittedBy;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTimeImmutable());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setUpdatedAt(new \DateTimeImmutable());
    }

    public function getGrantedQuantity(): ?int
    {
        return $this->grantedQuantity;
    }

    public function setGrantedQuantity(?int $grantedQuantity): self
    {
        $this->grantedQuantity = $grantedQuantity;

        return $this;
    }
}
