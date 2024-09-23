<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
// use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\VehiculeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VehiculeRepository::class)
 * @ApiResource()
 */
class Vehicule
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $numeroImmatriculation;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $anneeFabrication;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $dateMiseEnCirculation;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $genre;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $marque;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $typeOuModele;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $puissance;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $numeroDansLaSerie;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $energie;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $kilometrage;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     */
    private $usageVehicule;

    /**
     * @ORM\Column(type="string", length=100,nullable=true)
     */
    private $couleur;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $numeroChassis;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $numeroMoteur;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="vehicules")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\OneToMany(targetEntity=Licence::class, mappedBy="vehicule")
     */
    private $licences;

    /**
     * @ORM\OneToMany(targetEntity=ControleTechnique::class, mappedBy="vehicule")
     */
    private $controleTechniques;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFicheTravail::class, mappedBy="vehicule")
     */
    private $ficheTravails;

    /**
     * @ORM\OneToMany(targetEntity=FicheTravail::class, mappedBy="vehicule")
     */
    private $travails;

    /**
     * @ORM\OneToMany(targetEntity=Expertise::class, mappedBy="vehicule")
     */
    private $expertises;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="vehicules")
     */
    private $createdBy;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="vehicules")
     */
    private $updatedBy;

    public function __construct()
    {
        $this->licences = new ArrayCollection();
        $this->controleTechniques = new ArrayCollection();
        $this->ficheTravails = new ArrayCollection();
        $this->travails = new ArrayCollection();
        $this->expertises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroImmatriculation(): ?string
    {
        return $this->numeroImmatriculation;
    }

    public function setNumeroImmatriculation(string $numeroImmatriculation): self
    {
        $this->numeroImmatriculation = $numeroImmatriculation;

        return $this;
    }

    public function getAnneeFabrication(): ?string
    {
        return $this->anneeFabrication;
    }

    public function setAnneeFabrication(string $anneeFabrication): self
    {
        $this->anneeFabrication = $anneeFabrication;

        return $this;
    }

    public function getDateMiseEnCirculation(): ?string
    {
        return $this->dateMiseEnCirculation;
    }

    public function setDateMiseEnCirculation(string $dateMiseEnCirculation): self
    {
        $this->dateMiseEnCirculation = $dateMiseEnCirculation;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }

    public function getTypeOuModele(): ?string
    {
        return $this->typeOuModele;
    }

    public function setTypeOuModele(string $typeOuModele): self
    {
        $this->typeOuModele = $typeOuModele;

        return $this;
    }

    public function getPuissance(): ?string
    {
        return $this->puissance;
    }

    public function setPuissance(string $puissance): self
    {
        $this->puissance = $puissance;

        return $this;
    }

    public function getNumeroDansLaSerie(): ?string
    {
        return $this->numeroDansLaSerie;
    }

    public function setNumeroDansLaSerie(string $numeroDansLaSerie): self
    {
        $this->numeroDansLaSerie = $numeroDansLaSerie;

        return $this;
    }

    public function getEnergie(): ?string
    {
        return $this->energie;
    }

    public function setEnergie(string $energie): self
    {
        $this->energie = $energie;

        return $this;
    }

    public function getKilometrage(): ?float
    {
        return $this->kilometrage;
    }

    public function setKilometrage(?float $kilometrage): self
    {
        $this->kilometrage = $kilometrage;

        return $this;
    }

    public function getUsageVehicule(): ?string
    {
        return $this->usageVehicule;
    }

    public function setUsageVehicule(string $usageVehicule): self
    {
        $this->usageVehicule = $usageVehicule;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getNumeroChassis(): ?string
    {
        return $this->numeroChassis;
    }

    public function setNumeroChassis(?string $numeroChassis): self
    {
        $this->numeroChassis = $numeroChassis;

        return $this;
    }

    public function getNumeroMoteur(): ?string
    {
        return $this->numeroMoteur;
    }

    public function setNumeroMoteur(?string $numeroMoteur): self
    {
        $this->numeroMoteur = $numeroMoteur;

        return $this;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    /**
     * @return Collection|Licence[]
     */
    public function getLicences(): Collection
    {
        return $this->licences;
    }

    public function addLicence(Licence $licence): self
    {
        if (!$this->licences->contains($licence)) {
            $this->licences[] = $licence;
            $licence->setVehicule($this);
        }

        return $this;
    }

    public function removeLicence(Licence $licence): self
    {
        if ($this->licences->removeElement($licence)) {
            // set the owning side to null (unless already changed)
            if ($licence->getVehicule() === $this) {
                $licence->setVehicule(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ControleTechnique[]
     */
    public function getControleTechniques(): Collection
    {
        return $this->controleTechniques;
    }

    public function addControleTechnique(ControleTechnique $controleTechnique): self
    {
        if (!$this->controleTechniques->contains($controleTechnique)) {
            $this->controleTechniques[] = $controleTechnique;
            $controleTechnique->setVehicule($this);
        }

        return $this;
    }

    public function removeControleTechnique(ControleTechnique $controleTechnique): self
    {
        if ($this->controleTechniques->removeElement($controleTechnique)) {
            // set the owning side to null (unless already changed)
            if ($controleTechnique->getVehicule() === $this) {
                $controleTechnique->setVehicule(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DetailsFicheTravail[]
     */
    public function getFicheTravails(): Collection
    {
        return $this->ficheTravails;
    }

    public function addFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if (!$this->ficheTravails->contains($ficheTravail)) {
            $this->ficheTravails[] = $ficheTravail;
            $ficheTravail->setVehicule($this);
        }

        return $this;
    }

    public function removeFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if ($this->ficheTravails->removeElement($ficheTravail)) {
            // set the owning side to null (unless already changed)
            if ($ficheTravail->getVehicule() === $this) {
                $ficheTravail->setVehicule(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FicheTravail[]
     */
    public function getTravails(): Collection
    {
        return $this->travails;
    }

    public function addTravail(FicheTravail $travail): self
    {
        if (!$this->travails->contains($travail)) {
            $this->travails[] = $travail;
            $travail->setVehicule($this);
        }

        return $this;
    }

    public function removeTravail(FicheTravail $travail): self
    {
        if ($this->travails->removeElement($travail)) {
            // set the owning side to null (unless already changed)
            if ($travail->getVehicule() === $this) {
                $travail->setVehicule(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Expertise[]
     */
    public function getExpertises(): Collection
    {
        return $this->expertises;
    }

    public function addExpertise(Expertise $expertise): self
    {
        if (!$this->expertises->contains($expertise)) {
            $this->expertises[] = $expertise;
            $expertise->setVehicule($this);
        }

        return $this;
    }

    public function removeExpertise(Expertise $expertise): self
    {
        if ($this->expertises->removeElement($expertise)) {
            // set the owning side to null (unless already changed)
            if ($expertise->getVehicule() === $this) {
                $expertise->setVehicule(null);
            }
        }

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

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updatedBy;
    }

    public function setUpdatedBy(?User $updatedBy): self
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }
}
