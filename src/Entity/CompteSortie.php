<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * CompteSortie
 *
 * @ORM\Table(name="compte_sortie")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 */
class CompteSortie
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
     * @var string
     *
     * @ORM\Column(name="compte", type="text", length=65535, nullable=false)
     */
    private $compte;

    /**
     * @var bool
     *
     * @ORM\Column(name="dispo", type="boolean", nullable=false)
     */
    private $dispo;

    /**
     * @ORM\Column(name="type_sortie", type="integer", nullable=false)
     */
    private $typeCompte;

    /**
     * Date de creation
     *
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=SortieCash::class, mappedBy="type_sortie", orphanRemoval=true)
     */
    private $sortieCashes;

    public function __construct()
    {
        $this->sortieCashes = new ArrayCollection();
    }

    public function getTypeCompte(): ?int
    {
        return $this->typeCompte;
    }

    public function setTypeCompte(int $typeCompte): self
    {
        $this->typeCompte = $typeCompte;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompte(): ?string
    {
        return $this->compte;
    }

    public function setCompte(string $compte): self
    {
        $this->compte = $compte;

        return $this;
    }

    public function getDispo(): ?bool
    {
        return $this->dispo;
    }

    public function setDispo(bool $dispo): self
    {
        $this->dispo = $dispo;

        return $this;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
        $this->setDispo(1);
    }

    /**
     * @return Collection|SortieCash[]
     */
    public function getSortieCashes(): Collection
    {
        return $this->sortieCashes;
    }

    public function addSortieCash(SortieCash $sortieCash): self
    {
        if (!$this->sortieCashes->contains($sortieCash)) {
            $this->sortieCashes[] = $sortieCash;
            $sortieCash->setTypeSortie($this);
        }

        return $this;
    }

    public function removeSortieCash(SortieCash $sortieCash): self
    {
        if ($this->sortieCashes->removeElement($sortieCash)) {
            // set the owning side to null (unless already changed)
            if ($sortieCash->getTypeSortie() === $this) {
                $sortieCash->setTypeSortie(null);
            }
        }

        return $this;
    }
}
