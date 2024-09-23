<?php

namespace App\Entity;

// use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\UserGuichetRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserGuichetRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class UserGuichet
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Guichet::class, cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @ApiSubresource()
     */
    private $guichet;

    /**
     * @ORM\OneToOne(targetEntity=User::class, cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateAffectation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateReaffectation;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="userGuichets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGuichet(): ?Guichet
    {
        return $this->guichet;
    }

    public function setGuichet(Guichet $guichet): self
    {
        $this->guichet = $guichet;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDateAffectation(): ?\DateTimeInterface
    {
        return $this->dateAffectation;
    }

    public function setDateAffectation(\DateTimeInterface $dateAffectation): self
    {
        $this->dateAffectation = $dateAffectation;

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

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDateAffectation(new \DateTime());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setDateReaffectation(new \DateTime());
    }

    public function getDateReaffectation(): ?\DateTimeInterface
    {
        return $this->dateReaffectation;
    }

    public function setDateReaffectation(?\DateTimeInterface $dateReaffectation): self
    {
        $this->dateReaffectation = $dateReaffectation;

        return $this;
    }
}
