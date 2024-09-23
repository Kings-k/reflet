<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LicenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LicenceRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Licence
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Vehicule::class, inversedBy="licences")
     * @ORM\JoinColumn(nullable=false)
     */
    private $vehicule;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="licences")
     */
    private $doneby;

    /**
     * @ORM\Column(type="date")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="date")
     */
    private $prochainevisite;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroPv;

    /**
     * @ORM\OneToMany(targetEntity=ControleTechnique::class, mappedBy="licence")
     */
    private $controleTechniques;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $resultat;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $vehiculeaccepte;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ctao;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="licence")
     */
    private $factures;

    /**
     * @ORM\OneToMany(targetEntity=SmsSent::class, mappedBy="license")
     */
    private $smsSents;

    public function __construct()
    {
        $this->controleTechniques = new ArrayCollection();
        $this->factures = new ArrayCollection();
        $this->smsSents = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVehicule(): ?Vehicule
    {
        return $this->vehicule;
    }

    public function setVehicule(?Vehicule $vehicule): self
    {
        $this->vehicule = $vehicule;

        return $this;
    }

    public function getDoneby(): ?User
    {
        return $this->doneby;
    }

    public function setDoneby(?User $doneby): self
    {
        $this->doneby = $doneby;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getProchainevisite(): ?\DateTimeInterface
    {
        return $this->prochainevisite;
    }

    public function setProchainevisite(\DateTimeInterface $prochainevisite): self
    {
        $this->prochainevisite = $prochainevisite;

        return $this;
    }

    public function getNumeroPv(): ?string
    {
        return $this->numeroPv;
    }

    public function setNumeroPv(string $numeroPv): self
    {
        $this->numeroPv = $numeroPv;

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
            $controleTechnique->setLicence($this);
        }

        return $this;
    }

    public function removeControleTechnique(ControleTechnique $controleTechnique): self
    {
        if ($this->controleTechniques->removeElement($controleTechnique)) {
            // set the owning side to null (unless already changed)
            if ($controleTechnique->getLicence() === $this) {
                $controleTechnique->setLicence(null);
            }
        }

        return $this;
    }

    public function getResultat(): ?string
    {
        return $this->resultat;
    }

    public function setResultat(?string $resultat): self
    {
        $this->resultat = $resultat;

        return $this;
    }

    public function getVehiculeaccepte(): ?string
    {
        return $this->vehiculeaccepte;
    }

    public function setVehiculeaccepte(?string $vehiculeaccepte): self
    {
        $this->vehiculeaccepte = $vehiculeaccepte;

        return $this;
    }

    public function getCtao(): ?string
    {
        return $this->ctao;
    }

    public function setCtao(?string $ctao): self
    {
        $this->ctao = $ctao;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist(){
        $this->setCreatedAt(new \DateTime());
        $this->setProchainevisite(new \DateTime('6 month'));
    }

    /**
     * @return Collection|Facture[]
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(Facture $facture): self
    {
        if (!$this->factures->contains($facture)) {
            $this->factures[] = $facture;
            $facture->setLicence($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getLicence() === $this) {
                $facture->setLicence(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SmsSent[]
     */
    public function getSmsSents(): Collection
    {
        return $this->smsSents;
    }

    public function addSmsSent(SmsSent $smsSent): self
    {
        if (!$this->smsSents->contains($smsSent)) {
            $this->smsSents[] = $smsSent;
            $smsSent->setLicense($this);
        }

        return $this;
    }

    public function removeSmsSent(SmsSent $smsSent): self
    {
        if ($this->smsSents->removeElement($smsSent)) {
            // set the owning side to null (unless already changed)
            if ($smsSent->getLicense() === $this) {
                $smsSent->setLicense(null);
            }
        }

        return $this;
    }

}
