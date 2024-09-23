# language: fr
Fonctionnalité: Approvisionnement
    Afin d'ajouter des articles dans mon magasin
    En tant que gestionnaire du magasin
    Je dois faire une demande d'approvisionnement

    Scénario: Demande d'approvisionnement lorsque le stock contient les articles et la quantité demandés
        Étant donné que je suis sur ma page d'acceuil
        Quand je fais une demande d'approvisionnement
        Alors le gestionnaire de stock approvisionne mon magasin
        Et j'accuse la réception

    Scénario: Demande d'approvisionnement lorsque le stock ne contient pas les articles et la quantité demandés
        Étant donné que je suis sur ma page d'acceuil
        Quand je fais une demande d'approvisionnement
        Alors le gestionnaire de stock me fournit la quantité disponible
        Et j'accuse la réception de la quantité fournie


