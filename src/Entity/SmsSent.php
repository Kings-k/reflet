<?php

namespace App\Entity;

use App\Repository\SmsSentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SmsSentRepository::class)
 */
class SmsSent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity=Licence::class, inversedBy="smsSents")
     */
    private $license;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLicense(): ?Licence
    {
        return $this->license;
    }

    public function setLicense(?Licence $license): self
    {
        $this->license = $license;

        return $this;
    }
}
