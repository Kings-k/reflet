<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=App\Repository\AffectationRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Affectation
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * Date de l'affectation
     *
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToOne(targetEntity="User")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="PointOfSale")
     * @ApiSubresource()
     */
    private $pos;

    public function getId(): int
    {
        return $this->id;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt)
    {
        $this->createdAt = $createdAt;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user)
    {
        $this->user = $user;
    }

    public function getPointOfSale(): PointOfSale
    {
        return $this->pos;
    }

    public function setPointOfSale(PointOfSale $pos)
    {
        $this->pos = $pos;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
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
}
