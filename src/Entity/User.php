<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 * @UniqueEntity(fields={"username"}, message="Ce nom d'utilisateur existe déjà.")
 * @UniqueEntity(fields={"email", "telephone"}, ignoreNull=true, message="Téléphone et email déjà utilisés par un autre utilisateur")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank(message="Le nom d'utilisateur est obligatoire.")
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $fullName;

    /**
     * @ORM\Column(type="string", length=30)
     * @Assert\NotBlank(message="Vous devez choisir le type d'utilisateur.")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=15, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Client::class, mappedBy="createdBy")
     */
    private $clients;

    /**
     * @ORM\OneToMany(targetEntity=Dettes::class, mappedBy="madeby", orphanRemoval=true)
     */
    private $dettes;

    /**
     * @ORM\OneToMany(targetEntity=PayementDette::class, mappedBy="doneby")
     */
    private $payementdettes;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="editedBy")
     */
    private $factures;

    /**
     * @ORM\OneToMany(targetEntity=SortieCash::class, mappedBy="doneBy")
     */
    private $sortieCashes;

    /**
     * @ORM\OneToMany(targetEntity=Entries::class, mappedBy="doneBy", orphanRemoval=true)
     */
    private $entries;

    /**
     * @ORM\OneToMany(targetEntity=Depense::class, mappedBy="user", orphanRemoval=true)
     */
    private $depenses;

    /**
     * @ORM\OneToMany(targetEntity=UserGuichet::class, mappedBy="doneBy", orphanRemoval=true)
     */
    private $userGuichets;

    /**
     * @ORM\OneToMany(targetEntity=Guichet::class, mappedBy="createdBy")
     */
    private $guichets;

    /**
     * @ORM\OneToOne(targetEntity=Affectation::class, cascade={"persist", "remove"}, inversedBy="user")
     * @ApiSubresource()
     */
    private $affectation;

    /**
     * @ORM\OneToMany(targetEntity=DesaffectationGuichetier::class, mappedBy="doneBy", orphanRemoval=true)
     */
    private $desaffectationGuichetiers;

    /**
     * @ORM\OneToMany(targetEntity=Cloture::class, mappedBy="doneBy", orphanRemoval=true)
     */
    private $clotures;

    /**
     * @ORM\OneToMany(targetEntity=Licence::class, mappedBy="doneby")
     */
    private $licences;

    /**
     * @ORM\OneToMany(targetEntity=ControleTechnique::class, mappedBy="doneBy")
     */
    private $controleTechniques;

    /**
     * @ORM\OneToMany(targetEntity=FicheTravail::class, mappedBy="doneby")
     */
    private $travails;

    /**
     * @ORM\OneToMany(targetEntity=Expertise::class, mappedBy="doneby")
     */
    private $expertises;

    /**
     * @ORM\OneToMany(targetEntity=FicheTravail::class, mappedBy="responsable")
     */
    private $no;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $nbrgros;

    /**
     * @ORM\OneToMany(targetEntity=Versement::class, mappedBy="doneBy")
     */
    private $versements;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleHistory::class, mappedBy="stockManager")
     */
    private $pointOfSaleHistories;

    /**
     * @ORM\OneToMany(targetEntity=DepotHistory::class, mappedBy="stockManager")
     */
    private $depotHistories;

    /**
     * @ORM\OneToMany(targetEntity=ProcurementRequest::class, mappedBy="approvedBy")
     */
    private $procurementRequests;

    /**
     * @ORM\OneToMany(targetEntity=Vehicule::class, mappedBy="createdBy")
     */
    private $vehicules;

    /**
     * @ORM\OneToMany(targetEntity=DetailsExpertise::class, mappedBy="doneBy")
     */
    private $detailsExpertises;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="user")
     */
    private $messages;

    public function __construct()
    {
        $this->clients = new ArrayCollection();
        $this->dettes = new ArrayCollection();
        $this->payementdettes = new ArrayCollection();
        $this->factures = new ArrayCollection();
        $this->sortieCashes = new ArrayCollection();
        $this->entries = new ArrayCollection();
        $this->depenses = new ArrayCollection();
        $this->userGuichets = new ArrayCollection();
        $this->guichets = new ArrayCollection();
        $this->desaffectationGuichetiers = new ArrayCollection();
        $this->clotures = new ArrayCollection();
        $this->licences = new ArrayCollection();
        $this->controleTechniques = new ArrayCollection();
        $this->travails = new ArrayCollection();
        $this->expertises = new ArrayCollection();
        $this->no = new ArrayCollection();
        $this->versements = new ArrayCollection();
        $this->pointOfSaleHistories = new ArrayCollection();
        $this->depotHistories = new ArrayCollection();
        $this->procurementRequests = new ArrayCollection();
        $this->vehicules = new ArrayCollection();
        $this->detailsExpertises = new ArrayCollection();
        $this->messages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function addRole(string $role): self
    {
        if (!in_array($role, $this->roles)) {
            $this->roles[] = $role;
        }

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function __toString(): string
    {
        return $this->username;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(?string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

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

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUserIdentifier()
    {
        return $this->username;
    }

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }

    /**
     * @ORM\PreUpdate
     */
    public function preUpdate()
    {
        $this->setUpdatedAt(new \DateTime());
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
            $client->setCreatedBy($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->clients->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getCreatedBy() === $this) {
                $client->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Dettes[]
     */
    public function getDettes(): Collection
    {
        return $this->dettes;
    }

    public function addDette(Dettes $dette): self
    {
        if (!$this->dettes->contains($dette)) {
            $this->dettes[] = $dette;
            $dette->setMadeby($this);
        }

        return $this;
    }

    public function removeDette(Dettes $dette): self
    {
        if ($this->dettes->removeElement($dette)) {
            // set the owning side to null (unless already changed)
            if ($dette->getMadeby() === $this) {
                $dette->setMadeby(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Payementdette[]
     */
    public function getPayementdettes(): Collection
    {
        return $this->payementdettes;
    }

    public function addPayementdette(Payementdette $payementdette): self
    {
        if (!$this->payementdettes->contains($payementdette)) {
            $this->payementdettes[] = $payementdette;
            $payementdette->setDoneby($this);
        }

        return $this;
    }

    public function removePayementdette(Payementdette $payementdette): self
    {
        if ($this->payementdettes->removeElement($payementdette)) {
            // set the owning side to null (unless already changed)
            if ($payementdette->getDoneby() === $this) {
                $payementdette->setDoneby(null);
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
            $facture->setEditedBy($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getEditedBy() === $this) {
                $facture->setEditedBy(null);
            }
        }

        return $this;
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
            $sortieCash->setDoneBy($this);
        }

        return $this;
    }

    public function removeSortieCash(SortieCash $sortieCash): self
    {
        if ($this->sortieCashes->removeElement($sortieCash)) {
            // set the owning side to null (unless already changed)
            if ($sortieCash->getDoneBy() === $this) {
                $sortieCash->setDoneBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Entries[]
     */
    public function getEntries(): Collection
    {
        return $this->entries;
    }

    public function addEntry(Entries $entry): self
    {
        if (!$this->entries->contains($entry)) {
            $this->entries[] = $entry;
            $entry->setDoneBy($this);
        }

        return $this;
    }

    public function removeEntry(Entries $entry): self
    {
        if ($this->entries->removeElement($entry)) {
            // set the owning side to null (unless already changed)
            if ($entry->getDoneBy() === $this) {
                $entry->setDoneBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Depense[]
     */
    public function getDepenses(): Collection
    {
        return $this->depenses;
    }

    public function addDepense(Depense $depense): self
    {
        if (!$this->depenses->contains($depense)) {
            $this->depenses[] = $depense;
            $depense->setUser($this);
        }

        return $this;
    }

    public function removeDepense(Depense $depense): self
    {
        if ($this->depenses->removeElement($depense)) {
            // set the owning side to null (unless already changed)
            if ($depense->getUser() === $this) {
                $depense->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|UserGuichet[]
     */
    public function getUserGuichets(): Collection
    {
        return $this->userGuichets;
    }

    public function addUserGuichet(UserGuichet $userGuichet): self
    {
        if (!$this->userGuichets->contains($userGuichet)) {
            $this->userGuichets[] = $userGuichet;
            $userGuichet->setDoneBy($this);
        }

        return $this;
    }

    public function removeUserGuichet(UserGuichet $userGuichet): self
    {
        if ($this->userGuichets->removeElement($userGuichet)) {
            // set the owning side to null (unless already changed)
            if ($userGuichet->getDoneBy() === $this) {
                $userGuichet->setDoneBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Guichet[]
     */
    public function getGuichets(): Collection
    {
        return $this->guichets;
    }

    public function addGuichet(Guichet $guichet): self
    {
        if (!$this->guichets->contains($guichet)) {
            $this->guichets[] = $guichet;
            $guichet->setCreatedBy($this);
        }

        return $this;
    }

    public function removeGuichet(Guichet $guichet): self
    {
        if ($this->guichets->removeElement($guichet)) {
            // set the owning side to null (unless already changed)
            if ($guichet->getCreatedBy() === $this) {
                $guichet->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DesaffectationGuichetier[]
     */
    public function getDesaffectationGuichetiers(): Collection
    {
        return $this->desaffectationGuichetiers;
    }

    public function addDesaffectationGuichetier(DesaffectationGuichetier $desaffectationGuichetier): self
    {
        if (!$this->desaffectationGuichetiers->contains($desaffectationGuichetier)) {
            $this->desaffectationGuichetiers[] = $desaffectationGuichetier;
            $desaffectationGuichetier->setDoneBy($this);
        }

        return $this;
    }

    public function removeDesaffectationGuichetier(DesaffectationGuichetier $desaffectationGuichetier): self
    {
        if ($this->desaffectationGuichetiers->removeElement($desaffectationGuichetier)) {
            // set the owning side to null (unless already changed)
            if ($desaffectationGuichetier->getDoneBy() === $this) {
                $desaffectationGuichetier->setDoneBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Cloture[]
     */
    public function getClotures(): Collection
    {
        return $this->clotures;
    }

    public function addCloture(Cloture $cloture): self
    {
        if (!$this->clotures->contains($cloture)) {
            $this->clotures[] = $cloture;
            $cloture->setDoneBy($this);
        }

        return $this;
    }

    public function removeCloture(Cloture $cloture): self
    {
        if ($this->clotures->removeElement($cloture)) {
            // set the owning side to null (unless already changed)
            if ($cloture->getDoneBy() === $this) {
                $cloture->setDoneBy(null);
            }
        }

        return $this;
    }

    public function getAffectation(): ?Affectation
    {
        return $this->affectation;
    }

    public function setAffectation(?Affectation $affectation): self
    {
        $this->affectation = $affectation;

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
            $licence->setDoneby($this);
        }

        return $this;
    }

    public function removeLicence(Licence $licence): self
    {
        if ($this->licences->removeElement($licence)) {
            // set the owning side to null (unless already changed)
            if ($licence->getDoneby() === $this) {
                $licence->setDoneby(null);
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
            $controleTechnique->setDoneby($this);
        }

        return $this;
    }

    public function removeControleTechnique(ControleTechnique $controleTechnique): self
    {
        if ($this->controleTechniques->removeElement($controleTechnique)) {
            // set the owning side to null (unless already changed)
            if ($controleTechnique->getDoneby() === $this) {
                $controleTechnique->setDoneby(null);
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
            $travail->setDoneby($this);
        }

        return $this;
    }

    public function removeTravail(FicheTravail $travail): self
    {
        if ($this->travails->removeElement($travail)) {
            // set the owning side to null (unless already changed)
            if ($travail->getDoneby() === $this) {
                $travail->setDoneby(null);
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
            $expertise->setDoneby($this);
        }

        return $this;
    }

    public function removeExpertise(Expertise $expertise): self
    {
        if ($this->expertises->removeElement($expertise)) {
            // set the owning side to null (unless already changed)
            if ($expertise->getDoneby() === $this) {
                $expertise->setDoneby(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|FicheTravail[]
     */
    public function getNo(): Collection
    {
        return $this->no;
    }

    public function addNo(FicheTravail $no): self
    {
        if (!$this->no->contains($no)) {
            $this->no[] = $no;
            $no->setResponsable($this);
        }

        return $this;
    }

    public function removeNo(FicheTravail $no): self
    {
        if ($this->no->removeElement($no)) {
            // set the owning side to null (unless already changed)
            if ($no->getResponsable() === $this) {
                $no->setResponsable(null);
            }
        }

        return $this;
    }

    public function getNbrgros(): ?float
    {
        return $this->nbrgros;
    }

    public function setNbrgros(?float $nbrgros): self
    {
        $this->nbrgros = $nbrgros;

        return $this;
    }

    /**
     * @return Collection|Versement[]
     */
    public function getVersements(): Collection
    {
        return $this->versements;
    }

    public function addVersement(Versement $versement): self
    {
        if (!$this->versements->contains($versement)) {
            $this->versements[] = $versement;
            $versement->setDoneBy($this);
        }

        return $this;
    }

    public function removeVersement(Versement $versement): self
    {
        if ($this->versements->removeElement($versement)) {
            // set the owning side to null (unless already changed)
            if ($versement->getDoneBy() === $this) {
                $versement->setDoneBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PointOfSaleHistory[]
     */
    public function getPointOfSaleHistories(): Collection
    {
        return $this->pointOfSaleHistories;
    }

    public function addPointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if (!$this->pointOfSaleHistories->contains($pointOfSaleHistory)) {
            $this->pointOfSaleHistories[] = $pointOfSaleHistory;
            $pointOfSaleHistory->setStockManager($this);
        }

        return $this;
    }

    public function removePointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if ($this->pointOfSaleHistories->removeElement($pointOfSaleHistory)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleHistory->getStockManager() === $this) {
                $pointOfSaleHistory->setStockManager(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DepotHistory[]
     */
    public function getDepotHistories(): Collection
    {
        return $this->depotHistories;
    }

    public function addDepotHistory(DepotHistory $depotHistory): self
    {
        if (!$this->depotHistories->contains($depotHistory)) {
            $this->depotHistories[] = $depotHistory;
            $depotHistory->setStockManager($this);
        }

        return $this;
    }

    public function removeDepotHistory(DepotHistory $depotHistory): self
    {
        if ($this->depotHistories->removeElement($depotHistory)) {
            // set the owning side to null (unless already changed)
            if ($depotHistory->getStockManager() === $this) {
                $depotHistory->setStockManager(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProcurementRequest[]
     */
    public function getProcurementRequests(): Collection
    {
        return $this->procurementRequests;
    }

    public function addProcurementRequest(ProcurementRequest $procurementRequest): self
    {
        if (!$this->procurementRequests->contains($procurementRequest)) {
            $this->procurementRequests[] = $procurementRequest;
            $procurementRequest->setApprovedBy($this);
        }

        return $this;
    }

    public function removeProcurementRequest(ProcurementRequest $procurementRequest): self
    {
        if ($this->procurementRequests->removeElement($procurementRequest)) {
            // set the owning side to null (unless already changed)
            if ($procurementRequest->getApprovedBy() === $this) {
                $procurementRequest->setApprovedBy(null);
            }
        }

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
            $vehicule->setCreatedBy($this);
        }

        return $this;
    }

    public function removeVehicule(Vehicule $vehicule): self
    {
        if ($this->vehicules->removeElement($vehicule)) {
            // set the owning side to null (unless already changed)
            if ($vehicule->getCreatedBy() === $this) {
                $vehicule->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DetailsExpertise[]
     */
    public function getDetailsExpertises(): Collection
    {
        return $this->detailsExpertises;
    }

    public function addDetailsExpertise(DetailsExpertise $detailsExpertise): self
    {
        if (!$this->detailsExpertises->contains($detailsExpertise)) {
            $this->detailsExpertises[] = $detailsExpertise;
            $detailsExpertise->setDoneBy($this);
        }

        return $this;
    }

    public function removeDetailsExpertise(DetailsExpertise $detailsExpertise): self
    {
        if ($this->detailsExpertises->removeElement($detailsExpertise)) {
            // set the owning side to null (unless already changed)
            if ($detailsExpertise->getDoneBy() === $this) {
                $detailsExpertise->setDoneBy(null);
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
            $message->setUser($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getUser() === $this) {
                $message->setUser(null);
            }
        }

        return $this;
    }

}
