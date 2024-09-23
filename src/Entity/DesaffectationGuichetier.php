<?php

namespace App\Entity;

use App\Repository\DesaffectationGuichetierRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DesaffectationGuichetierRepository::class)
 */
class DesaffectationGuichetier
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=User::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity=Guichet::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $guichet;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateDesaffectation;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="desaffectationGuichetiers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $doneBy;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getGuichet(): ?Guichet
    {
        return $this->guichet;
    }

    public function setGuichet(Guichet $guichet): self
    {
        $this->guichet = $guichet;

        return $this;
    }

    public function getDateDesaffectation(): ?\DateTimeInterface
    {
        return $this->dateDesaffectation;
    }

    public function setDateDesaffectation(\DateTimeInterface $dateDesaffectation): self
    {
        $this->dateDesaffectation = $dateDesaffectation;

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
}
