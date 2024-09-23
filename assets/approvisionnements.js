const stockDispo = JSON.parse(document.querySelector('#stock-dispo').textContent);
const isSuper = Number.parseInt(document.querySelector('#is-super').textContent);

document.getElementById('print').addEventListener('click', () => {
    let title;
    let subtitle = '';
    let table = `<table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Article</th>
                <th scope="col">Date d'appro.</th>
                <th scope="col" class="text-center">Qté entrée</th>
                <th scope="col" class="text-center">Qté disponible</th>
                <th scope="col" class="text-center">Prix d'achat</th>
                <th scope="col">Péremption</th>`;

    const divToPrint = document.createElement('div');
    let divHead = divToPrint.querySelector('#divHead');
    const from = JSON.parse(document.getElementById('selected-from').textContent);
    const to = JSON.parse(document.getElementById('selected-to').textContent);
    const depot = JSON.parse(document.getElementById('selected-depot').textContent);
    const stockManager = JSON.parse(document.getElementById('selected-stock-manager').textContent);

    if (isSuper === 1) {
        table += `
            <th scope="col">Dépôt</th>
            <th scope="col">Gestionnaire</th>
        `;
    }

    table += `
            </tr>
        </thead>
        <tbody>
    `;

    if (!!from && !!to) {
        subtitle += `Du ${(new Date(from)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})} au ${(new Date(to)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})}`;
    } else if (!!from && !to) {
        subtitle += `Du ${(new Date(from)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})} à aujourd'hui`;
    } else if (!from && !!to) {
        subtitle += `Jusqu'au ${(new Date(to)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})}`;
    } else {
        subtitle += `Jusqu'à aujourd'hui`;
    }

    if (depot !== null) {
        subtitle += `, Dépôt : ${depot.name}`;
    }

    if (stockManager !== null) {
        subtitle += `, Gestionnaire de stock : ${stockManager.username}`;
    }

    title = `
        <h1 class="h4 text-center p-1 border text-white bg-primary">APPROVISIONNEMENTS</h1>
        <div class="text-center border bg-light mb-2">${subtitle}</div>
    `;

    stockDispo.forEach((stock, idx) => {
        table += `<tr>
            <td>${idx + 1}</td>
            <td>${stock['article']}</td>
            <td>${(new Date(stock['createdAt']['date'])).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}</td>
            <td>${stock['quantity']} ${stock['uomSymbol'] ?? stock['uomName']}${stock['quantity'] > 1 ? 's' : ''}</td>
            <td>${stock['quantity'] - (stock['releases'].length > 0 ? stock['releases'].reduce((accu, next) => accu + next, 0) : 0)} ${stock['uomSymbol'] ?? stock['uomName']}${stock['quantity'] - (stock['releases'].length > 0 ? stock['releases'].reduce((accu, next) => accu + next, 0) : 0) > 1 ? 's' : ''}</td>
            <td>${stock['price'].toFixed(2)} $</td>
            <td>${stock['expirationDate'] !== null ? (new Date(stock['expirationDate']['date'])).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'}) : '-'}</td>`;

        if (isSuper === 1) {
            table += `
                <td>${stock['storeName']}</td>
                <td>${stock['stockManager']}</td>
            `;
        }

        table += `</tr>`;
    });

    table += `</tbody>
        </table>`;

    if (!divHead) {
        divHead = document.createElement('div');
        divHead.id = 'divHead';
        divHead.setAttribute('hidden', 'hidden');
        divToPrint.appendChild(divHead);
    }

    divToPrint.innerHTML += table;

    printElementsWithHead(divToPrint, title);
});
