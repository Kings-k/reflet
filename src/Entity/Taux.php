<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Taux
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Taux
{
    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="taux_change", type="float", precision=10, scale=0, nullable=false)
     */
    private $tauxChange;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="du", type="datetime", nullable=false)
     */
    private $du;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="au", type="datetime", nullable=true)
     */
    private $au;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTauxChange(): ?float
    {
        return $this->tauxChange;
    }

    public function setTauxChange(float $tauxChange): self
    {
        $this->tauxChange = $tauxChange;

        return $this;
    }

    public function getDu(): ?\DateTimeInterface
    {
        return $this->du;
    }

    public function setDu(\DateTimeInterface $du): self
    {
        $this->du = $du;

        return $this;
    }

    public function getAu(): ?\DateTimeInterface
    {
        return $this->au;
    }

    public function setAu(\DateTimeInterface $au): self
    {
        $this->au = $au;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setDu(new \DateTime());
    }
}
