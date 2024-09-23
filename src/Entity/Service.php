<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Entity\UnitOfMeasure;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Service
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @UniqueEntity(fields={"codeManuel"}, message="Le code manuel doit être unique")
 * @UniqueEntity(fields={"name"}, message="Le nom doit être unique")
 * @ApiResource()
 * @ApiFilter(SearchFilter::class, properties={"type": "exact"})
 * @ApiFilter(SearchFilter::class, properties={"name": "start"})
 */
class Service
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
     * @ORM\Column(type="string", length=100, unique=true)
     * @Assert\NotBlank(message="Le nom est obligatoire")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer", length=1)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="UnitOfMeasure")
     */
    private $uom;

    /**
     * @ORM\Column(type="float")
     */
    private $unitPrice;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $wholesalePrice;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $deflatedPrice;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $codebar;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=DepotDetails::class, mappedBy="service")
     */
    private $depotDetails;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleDetails::class, mappedBy="service")
     */
    private $pointOfSaleDetails;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="services", fetch="EAGER")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotNull(message="La catégorie est obligatoire")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity=Depot::class, inversedBy="services")
     */
    private $depots;

    /**
     * @ORM\ManyToMany(targetEntity=PointOfSale::class, inversedBy="services")
     */
    private $pointOfSales;

    /**
     * @ORM\Column(type="integer", nullable=true, unique=true)
     */
    private $codeManuel;

    /**
     * @ORM\OneToMany(targetEntity=DepotHistory::class, mappedBy="service", orphanRemoval=true)
     */
    private $depotHistories;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\OneToMany(targetEntity=PointOfSaleHistory::class, mappedBy="service", orphanRemoval=true)
     */
    private $pointOfSaleHistories;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $point;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $nbrgros;

    /**
     * @ORM\OneToMany(targetEntity=ControleTechnique::class, mappedBy="service")
     */
    private $controleTechniques;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFicheTravail::class, mappedBy="service")
     */
    private $ficheTravails;

    /**
     * @ORM\OneToMany(targetEntity=DetailsExpertise::class, mappedBy="service")
     */
    private $detailsExpertises;

    /**
     * @ORM\Column(type="boolean")
     */
    private $bonusApplicable;

    /**
     * @ORM\OneToMany(targetEntity=Client::class, mappedBy="serviceVisite")
     */
    private $clients;

    /**
     * @ORM\OneToMany(targetEntity=DetailsFacture::class, mappedBy="service")
     */
    private $detailsFactures;

    /**
     * @ORM\OneToMany(targetEntity=ProcurementRequest::class, mappedBy="product")
     */
    private $procurementRequests;

    public function __construct()
    {
        $this->depotDetails = new ArrayCollection();
        $this->pointOfSaleDetails = new ArrayCollection();
        $this->saleHistories = new ArrayCollection();
        $this->depots = new ArrayCollection();
        $this->pointOfSales = new ArrayCollection();
        $this->depotHistories = new ArrayCollection();
        $this->pointOfSaleHistories = new ArrayCollection();
        $this->controleTechniques = new ArrayCollection();
        $this->ficheTravails = new ArrayCollection();
        $this->detailsExpertises = new ArrayCollection();
        $this->clients = new ArrayCollection();
        $this->detailsFactures = new ArrayCollection();
        $this->procurementRequests = new ArrayCollection();
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
    
    public function getNbrGros(): ?float
    {
        return $this->nbrgros;
    }

    public function setNbrGros(float $nbrgros): self
    {
        $this->nbrgros = $nbrgros;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getUnitPrice(): ?float
    {
        return $this->unitPrice;
    }

    public function setUnitPrice(float $unitPrice): self
    {
        $this->unitPrice = $unitPrice;

        return $this;
    }

    public function getWholesalePrice(): ?float
    {
        return $this->wholesalePrice;
    }

    public function setWholesalePrice(?float $wholesalePrice): self
    {
        $this->wholesalePrice = $wholesalePrice;

        return $this;
    }

    public function getDeflatedPrice(): ?float
    {
        return $this->deflatedPrice;
    }

    public function setDeflatedPrice(?float $deflatedPrice): self
    {
        $this->deflatedPrice = $deflatedPrice;

        return $this;
    }

    public function getCodebar(): ?string
    {
        return $this->codebar;
    }

    public function setCodebar(?string $codebar): self
    {
        $this->codebar = $codebar;

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

    public function getCodeManuel(): ?int
    {
        return $this->codeManuel;
    }

    public function setCodeManuel(?int $codeManuel): self
    {
        $this->codeManuel = $codeManuel;

        return $this;
    }

    public function getUom(): ?UnitOfMeasure
    {
        return $this->uom;
    }

    public function setUom(?UnitOfMeasure $uom): self
    {
        $this->uom = $uom;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|DepotDetails[]
     */
    public function getDepotDetails(): Collection
    {
        return $this->depotDetails;
    }

    public function addDepotDetail(DepotDetails $depotDetail): self
    {
        if (!$this->depotDetails->contains($depotDetail)) {
            $this->depotDetails[] = $depotDetail;
            $depotDetail->setService($this);
        }

        return $this;
    }

    public function removeDepotDetail(DepotDetails $depotDetail): self
    {
        if ($this->depotDetails->removeElement($depotDetail)) {
            // set the owning side to null (unless already changed)
            if ($depotDetail->getService() === $this) {
                $depotDetail->setService(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PointOfSaleDetails[]
     */
    public function getPointOfSaleDetails(): Collection
    {
        return $this->pointOfSaleDetails;
    }

    public function addPointOfSaleDetail(PointOfSaleDetails $pointOfSaleDetail): self
    {
        if (!$this->pointOfSaleDetails->contains($pointOfSaleDetail)) {
            $this->pointOfSaleDetails[] = $pointOfSaleDetail;
            $pointOfSaleDetail->setService($this);
        }

        return $this;
    }

    public function removePointOfSaleDetail(PointOfSaleDetails $pointOfSaleDetail): self
    {
        if ($this->pointOfSaleDetails->removeElement($pointOfSaleDetail)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleDetail->getService() === $this) {
                $pointOfSaleDetail->setService(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Depot[]
     */
    public function getDepots(): Collection
    {
        return $this->depots;
    }

    public function addDepot(Depot $depot): self
    {
        if (!$this->depots->contains($depot)) {
            $this->depots[] = $depot;
        }

        return $this;
    }

    public function removeDepot(Depot $depot): self
    {
        $this->depots->removeElement($depot);

        return $this;
    }

    /**
     * @return Collection|PointOfSale[]
     */
    public function getPointOfSales(): Collection
    {
        return $this->pointOfSales;
    }

    public function addPointOfSale(PointOfSale $pointOfSale): self
    {
        if (!$this->pointOfSales->contains($pointOfSale)) {
            $this->pointOfSales[] = $pointOfSale;
        }

        return $this;
    }

    public function removePointOfSale(PointOfSale $pointOfSale): self
    {
        $this->pointOfSales->removeElement($pointOfSale);

        return $this;
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
            $depotHistory->setService($this);
        }

        return $this;
    }

    public function removeDepotHistory(DepotHistory $depotHistory): self
    {
        if ($this->depotHistories->removeElement($depotHistory)) {
            // set the owning side to null (unless already changed)
            if ($depotHistory->getService() === $this) {
                $depotHistory->setService(null);
            }
        }

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
            $pointOfSaleHistory->setService($this);
        }

        return $this;
    }

    public function removePointOfSaleHistory(PointOfSaleHistory $pointOfSaleHistory): self
    {
        if ($this->pointOfSaleHistories->removeElement($pointOfSaleHistory)) {
            // set the owning side to null (unless already changed)
            if ($pointOfSaleHistory->getService() === $this) {
                $pointOfSaleHistory->setService(null);
            }
        }

        return $this;
    }

    public function getPoint(): ?float
    {
        return $this->point;
    }

    public function setPoint(?float $point): self
    {
        $this->point = $point;

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
            $controleTechnique->setService($this);
        }

        return $this;
    }

    public function removeControleTechnique(ControleTechnique $controleTechnique): self
    {
        if ($this->controleTechniques->removeElement($controleTechnique)) {
            // set the owning side to null (unless already changed)
            if ($controleTechnique->getService() === $this) {
                $controleTechnique->setService(null);
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
            $ficheTravail->setService($this);
        }

        return $this;
    }

    public function removeFicheTravail(DetailsFicheTravail $ficheTravail): self
    {
        if ($this->ficheTravails->removeElement($ficheTravail)) {
            // set the owning side to null (unless already changed)
            if ($ficheTravail->getService() === $this) {
                $ficheTravail->setService(null);
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
            $detailsExpertise->setService($this);
        }

        return $this;
    }

    public function removeDetailsExpertise(DetailsExpertise $detailsExpertise): self
    {
        if ($this->detailsExpertises->removeElement($detailsExpertise)) {
            // set the owning side to null (unless already changed)
            if ($detailsExpertise->getService() === $this) {
                $detailsExpertise->setService(null);
            }
        }

        return $this;
    }

    public function isBonusApplicable(): ?bool
    {
        return $this->bonusApplicable;
    }

    public function setBonusApplicable(bool $bonusApplicable): self
    {
        $this->bonusApplicable = $bonusApplicable;

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
            $client->setServiceVisite($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->clients->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getServiceVisite() === $this) {
                $client->setServiceVisite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|DetailsFacture[]
     */
    public function getDetailsFactures(): Collection
    {
        return $this->detailsFactures;
    }

    public function addDetailsFacture(DetailsFacture $detailsFacture): self
    {
        if (!$this->detailsFactures->contains($detailsFacture)) {
            $this->detailsFactures[] = $detailsFacture;
            $detailsFacture->setService($this);
        }

        return $this;
    }

    public function removeDetailsFacture(DetailsFacture $detailsFacture): self
    {
        if ($this->detailsFactures->removeElement($detailsFacture)) {
            // set the owning side to null (unless already changed)
            if ($detailsFacture->getService() === $this) {
                $detailsFacture->setService(null);
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
            $procurementRequest->setProduct($this);
        }

        return $this;
    }

    public function removeProcurementRequest(ProcurementRequest $procurementRequest): self
    {
        if ($this->procurementRequests->removeElement($procurementRequest)) {
            // set the owning side to null (unless already changed)
            if ($procurementRequest->getProduct() === $this) {
                $procurementRequest->setProduct(null);
            }
        }

        return $this;
    }
}
