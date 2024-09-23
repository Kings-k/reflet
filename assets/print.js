function printelements(divtoprint) {
    $.print("#" + divtoprint);
}

function printElementsWithHead(divtoprint, title = '') {
    fetch(`${baseUrl}/maison/getHead/`, {
        method: 'GET',
    }).then(resp => {
        if (resp.ok) {
            resp.text().then(responseBody => {
                const maison = JSON.parse(responseBody).data.maison;
                const divHead = divtoprint.querySelector('#divHead');
                const divFoot = divtoprint.querySelector('#divFoot');

                divHead.removeAttribute('hidden');
                divHead.innerHTML = `
                    <div class="mb-2">
                        <div style="text-align: center;">
                            ${maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" style="height: 8rem !important; width: 100% !important; padding: 0 !important; margin: 0 !important;">' : '<h1>' + maison['nomSociete'] + '</h1>'}
                            <div style="margin-top: 0 !important; padding-top: 0 !important;">
                                <small><small><em>${!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : ''}${!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : ''}${!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : ''}${!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : ''}</em></small></small><br>
                                <small><small><em>${maison['adressePhysique'] ?? ''}${!!maison['telephone'] ? ', ' + maison['telephone'] : ''}${!!maison['mail'] ? ', ' + maison['mail'] : ''}${!!maison['site'] ? ', ' + maison['site'] : ''}</em></small></small>
                            </div>
                        </div>
                        <hr>
                    </div>
                    ${title}
                `;
                if (null !== divFoot) {
                    const sessionExpert = sessionStorage.getItem('expert');
                    let expert;
                    if (null !== sessionExpert) {
                        expert = sessionExpert;
                        sessionStorage.removeItem('expert');
                    } else {
                        expert = user;
                    }
                    divFoot.removeAttribute('hidden');
                    divFoot.innerHTML = `
                        <br>
                        <div style="float: right;">Fait à Goma le ${(new Date()).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</div><br>
                        <div style="float: right;">Par l'expert ${expert}</div>
                    `;
                }
                $.print(divtoprint);
                setTimeout(() => {
                    divHead.setAttribute('hidden', 'hidden');
                }, 1000);
            });
        }
    });
}
