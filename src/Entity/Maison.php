<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Maison
 *
 * @ORM\Table(name="maison")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource()
 */
class Maison
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom_societe", type="text", length=255, nullable=false)
     */
    private $nomSociete;

    /**
     * @var string
     *
     * @ORM\Column(name="registre_commerce", type="string", length=100, nullable=false, options={"comment"="rccm"})
     */
    private $registreCommerce;

    /**
     * @var string
     *
     * @ORM\Column(name="id_nationnal", type="string", length=100, nullable=false)
     */
    private $idNationnal;

    /**
     * @var string
     *
     * @ORM\Column(name="num_impot", type="string", length=50, nullable=false)
     */
    private $numImpot;

    /**
     * @var string
     *
     * @ORM\Column(name="autorisation_fct", type="string", length=50, nullable=false)
     */
    private $autorisationFct;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse_physique", type="string", length=255, nullable=false)
     */
    private $adressePhysique;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=15, nullable=false)
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="string", length=255, nullable=false)
     */
    private $mail;

    /**
     * @var string
     *
     * @ORM\Column(name="site", type="string", length=255, nullable=false)
     */
    private $site;

    /**
     * @var string
     *
     * @ORM\Column(name="logo", type="text", length=65535, nullable=true)
     */
    private $logo;

    /**
     * @var string
     *
     * @ORM\Column(name="version_duka", type="string", length=50, nullable=false)
     */
    private $versionDuka;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomSociete(): ?string
    {
        return $this->nomSociete;
    }

    public function setNomSociete(string $nomSociete): self
    {
        $this->nomSociete = $nomSociete;

        return $this;
    }

    public function getRegistreCommerce(): ?string
    {
        return $this->registreCommerce;
    }

    public function setRegistreCommerce(string $registreCommerce): self
    {
        $this->registreCommerce = $registreCommerce;

        return $this;
    }

    public function getIdNationnal(): ?string
    {
        return $this->idNationnal;
    }

    public function setIdNationnal(string $idNationnal): self
    {
        $this->idNationnal = $idNationnal;

        return $this;
    }

    public function getNumImpot(): ?string
    {
        return $this->numImpot;
    }

    public function setNumImpot(string $numImpot): self
    {
        $this->numImpot = $numImpot;

        return $this;
    }

    public function getAutorisationFct(): ?string
    {
        return $this->autorisationFct;
    }

    public function setAutorisationFct(string $autorisationFct): self
    {
        $this->autorisationFct = $autorisationFct;

        return $this;
    }

    public function getAdressePhysique(): ?string
    {
        return $this->adressePhysique;
    }

    public function setAdressePhysique(string $adressePhysique): self
    {
        $this->adressePhysique = $adressePhysique;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getSite(): ?string
    {
        return $this->site;
    }

    public function setSite(string $site): self
    {
        $this->site = $site;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getVersionDuka(): ?string
    {
        return $this->versionDuka;
    }

    public function setVersionDuka(string $versionDuka): self
    {
        $this->versionDuka = $versionDuka;

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

    /**
     * @ORM\PrePersist
     */
    public function prePersist()
    {
        $this->setCreatedAt(new \DateTime());
    }
}
