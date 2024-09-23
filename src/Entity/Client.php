<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @UniqueEntity(fields={"nomClient"}, message="Ce client existe déjà")
 * @ApiResource()
 * @ApiFilter(SearchFilter::class, properties={"nomClient": "partial"})
 */
class Client
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @var string
     *
     * @Assert\NotBlank(message="Le nom du client ne doit pas être vide")
     * @Assert\NotNull(message="Le nom du client ne doit pas être null")
     * @ORM\Column(name="nom_client", type="text", length=100, nullable=false)
     */
    protected $nomClient;

    /**
     * @var string
     *
     * @ORM\Column(name="etat_civil", type="string", length=25, nullable=true)
     */
    protected $etatCivil;

    /**
     * @var string
     *
     * @ORM\Column(name="personne_contact", type="text", length=100, nullable=true)
     */
    protected $personneContact;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse_phys", type="text", length=255, nullable=true)
     */
    protected $adressePhys;

    /**
     * @var string
     *
     * @Assert\Regex(pattern="/(\+[0-9])+/", message="Seuls les chiffres et le code pays sont autorisés. (ex.: +243896376529)")
     * @ORM\Column(name="telephone", type="string", length=15, nullable=true)
     */
    protected $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="text", length=200, nullable=true)
     */
    protected $mail;

    /**
     * @var string
     *
     * @ORM\Column(name="employeur", type="text", length=100, nullable=true)
     */
    protected $employeur;

    /**
     * @var string
     *
     * @Assert\NotBlank(message="Le type de client doit être spécifié")
     * @ORM\Column(name="type_client", type="string", length=30, nullable=false)
     */
    protected $typeClient;

    /**
     * @var string
     *
     * @ORM\Column(name="sexe", type="text", length=10, nullable=true)
     */
    protected $sexe;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="createdAt", type="datetime", nullable=false)
     */
    protected $createdAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $visibility;

    /**
     * @ORM\ManyToOne(targetEntity=PointOfSale::class, inversedBy="clients")
     */
    private $pos;

    /**
     * @Assert\NotNull(message="Veuillez indiquer l'agent qui a ajouté le client")
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="clients")
     * @ORM\JoinColumn(nullable=false)
     */
    private $createdBy;

    /**
     * @ORM\OneToMany(targetEntity=Bonus::class, mappedBy="client")
     */
    private $bonuses;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="client", orphanRemoval=true)
     */
    private $factures;

    /**
     * @Assert\NotNull(message="Le client doit appartenir à une catégorie")
     * @ORM\ManyToOne(targetEntity=CategorieClient::class, inversedBy="clients")
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity=Vehicule::class, mappedBy="client")
     */
    private $vehicules;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFicheTravail::class, mappedBy="client")
     */
    private $ficheTravails;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $femmeEnceinte;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $plainteMalade;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity=Caution::class, mappedBy="client", orphanRemoval=true)
     */
    private $cautions;

    /**
     * @ORM\ManyToMany(targetEntity=Message::class, mappedBy="clients")
     */
    private $messages;

    public function __construct()
    {
        $this->bonuses = new ArrayCollection();
        $this->factures = new ArrayCollection();
        $this->vehicules = new ArrayCollection();
        $this->ficheTravails = new ArrayCollection();
        $this->cautions = new ArrayCollection();
        $this->messages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomClient(): ?string
    {
        return $this->nomClient;
    }

    public function setNomClient(string $nomClient): self
    {
        $this->nomClient = $nomClient;

        return $this;
    }

    public function getEtatCivil(): ?string
    {
        return $this->etatCivil;
    }

    public function setEtatCivil(?string $etatCivil): self
    {
        $this->etatCivil = $etatCivil;

        return $this;
    }

    public function getPersonneContact(): ?string
    {
        return $this->personneContact;
    }

    public function setPersonneContact(?string $personneContact): self
    {
        $this->personneContact = $personneContact;

        return $this;
    }

    public function getAdressePhys(): ?string
    {
        return $this->adressePhys;
    }

    public function setAdressePhys(?string $adressePhys): self
    {
        $this->adressePhys = $adressePhys;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(?string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getEmployeur(): ?string
    {
        return $this->employeur;
    }

    public function setEmployeur(?string $employeur): self
    {
        $this->employeur = $employeur;

        return $this;
    }

    public function getTypeClient(): ?string
    {
        return $this->typeClient;
    }

    public function setTypeClient(string $typeClient): self
    {
        $this->typeClient = $typeClient;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(?string $sexe): self
    {
        $this->sexe = $sexe;

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
    }

    public function getVisibility(): ?string
    {
        return $this->visibility;
    }

    public function setVisibility(?string $visibility): self
    {
        $this->visibility = $visibility;

        return $this;
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

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    /**
     * @return Collection|Bonus[]
     */
    public function getBonuses(): Collection
    {
        return $this->bonuses;
    }

    public function addBonus(Bonus $bonus): self
    {
        if (!$this->bonuses->contains($bonus)) {
            $this->bonuses[] = $bonus;
            $bonus->setClient($this);
        }

        return $this;
    }

    public function removeBonus(Bonus $bonus): self
    {
        if ($this->bonuses->removeElement($bonus)) {
            // set the owning side to null (unless already changed)
            if ($bonus->getClient() === $this) {
                $bonus->setClient(null);
            }
        }

        return $this;
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
            $facture->setClient($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getClient() === $this) {
                $facture->setClient(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?CategorieClient
    {
        return $this->category;
    }

    public function setCategory(?CategorieClient $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Vehicule[]
     */
    public function getVehicules(): Collection
    {
        return $this->vehicules;
    }

    public function addVehicule(Vehicule $vehicule): self
    {
        if (!$this->vehicules->contains($vehicule)) {
            $this->vehicules[] = $vehicule;
            $vehicule->setClient($this);
        }

        return $this;
    }

    public function removeVehicule(Vehicule $vehicule): self
    {
        if ($this->vehicules->removeElement($vehicule)) {
            // set the owning side to null (unless already changed)
            if ($vehicule->getClient() === $this) {
                $vehicule->setClient(null);
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
            $ficheTravail->setClient($this);
        }

        return $this;
    }

    public function removeFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if ($this->ficheTravails->removeElement($ficheTravail)) {
            // set the owning side to null (unless already changed)
            if ($ficheTravail->getClient() === $this) {
                $ficheTravail->setClient(null);
            }
        }

        return $this;
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(?string $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getFemmeEnceinte(): ?string
    {
        return $this->femmeEnceinte;
    }

    public function setFemmeEnceinte(?string $femmeEnceinte): self
    {
        $this->femmeEnceinte = $femmeEnceinte;

        return $this;
    }

    public function getPlainteMalade(): ?string
    {
        return $this->plainteMalade;
    }

    public function setPlainteMalade(?string $plainteMalade): self
    {
        $this->plainteMalade = $plainteMalade;

        return $this;
    }
    
    public function getParent(): ?string
    {
        return $this->parent;
    }

    public function setParent(?string $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection|Caution[]
     */
    public function getCautions(): Collection
    {
        return $this->cautions;
    }

    public function addCaution(Caution $caution): self
    {
        if (!$this->cautions->contains($caution)) {
            $this->cautions[] = $caution;
            $caution->setClient($this);
        }

        return $this;
    }

    public function removeCaution(Caution $caution): self
    {
        if ($this->cautions->removeElement($caution)) {
            // set the owning side to null (unless already changed)
            if ($caution->getClient() === $this) {
                $caution->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->addClient($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            $message->removeClient($this);
        }

        return $this;
    }
}
