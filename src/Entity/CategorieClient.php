<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategorieClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CategorieClientRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 * @UniqueEntity(fields={"name"}, message="Le nom de la catégorie doit être unique.")
 */
class CategorieClient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le nom ne doit pas être vide")
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Client::class, mappedBy="category")
     */
    private $clients;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $discountApplicable;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=Service::class)
     */
    private $discountables;

    public function __construct()
    {
        $this->clients = new ArrayCollection();
        $this->discountables = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Client[]
     */
    public function getClients(): Collection
    {
        return $this->clients;
    }

    public function addClient(Client $client): self
    {
        if (!$this->clients->contains($client)) {
            $this->clients[] = $client;
            $client->setCategory($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->clients->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getCategory() === $this) {
                $client->setCategory(null);
            }
        }

        return $this;
    }

    public function isDiscountApplicable(): ?bool
    {
        return $this->discountApplicable;
    }

    public function setDiscountApplicable(?bool $discountApplicable): self
    {
        $this->discountApplicable = $discountApplicable;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): self
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

    /**
     * @return Collection|Service[]
     */
    public function getDiscountables(): Collection
    {
        return $this->discountables;
    }

    public function addDiscountable(Service $discountable): self
    {
        if (!$this->discountables->contains($discountable)) {
            $this->discountables[] = $discountable;
        }

        return $this;
    }

    public function removeDiscountable(Service $discountable): self
    {
        $this->discountables->removeElement($discountable);

        return $this;
    }
}
