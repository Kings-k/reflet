<?php

namespace App\Entity;

use App\Repository\NatureProchaineVisiteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NatureProchaineVisiteRepository::class)
 */
class NatureProchaineVisite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visiteTechnique;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $ctao;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateVisite;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVisiteTechnique(): ?bool
    {
        return $this->visiteTechnique;
    }

    public function setVisiteTechnique(bool $visiteTechnique): self
    {
        $this->visiteTechnique = $visiteTechnique;

        return $this;
    }

    public function getCtao(): ?string
    {
        return $this->ctao;
    }

    public function setCtao(string $ctao): self
    {
        $this->ctao = $ctao;

        return $this;
    }

    public function getDateVisite(): ?\DateTimeInterface
    {
        return $this->dateVisite;
    }

    public function setDateVisite(?\DateTimeInterface $dateVisite): self
    {
        $this->dateVisite = $dateVisite;

        return $this;
    }
}
