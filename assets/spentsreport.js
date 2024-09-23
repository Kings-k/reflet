let selectedPos = Number.parseInt(document.querySelector('#pos').value);
const spents = JSON.parse(document.querySelector('#spents').textContent);
const totalElt = document.createElement('div');
const total = JSON.parse(document.querySelector('#spents').textContent).reduce((accu, next) => accu + next.amount, 0);

const hideGuichets = pos => {
    document.querySelectorAll('#guichet > option').forEach(option => {
        option.removeAttribute('hidden');
        if (Number.parseInt(option.dataset.pos, 10) !== pos) {
            option.setAttribute('hidden', 'hidden');
        }
    });
};

if (!isNaN(selectedPos)) {
    hideGuichets(selectedPos);
}

document.querySelector('#pos').addEventListener('change', event => {
    selectedPos = Number.parseInt(event.currentTarget.value, 10);
    hideGuichets(selectedPos);
});

totalElt.style.flexGrow = '1';
totalElt.style.marginLeft = '1.5em';
totalElt.textContent = `Total : ${(total).toFixed(2)} $`;

document.querySelector('.datatable-pagination').prepend(totalElt);
document.querySelector('.datatable-pagination').style.justifyContent = 'space-between';

document.getElementById('print').addEventListener('click', () => {
    let title;
    let subtitle = '';
    let table = `<table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Montant</th>
                <th scope="col">Motif</th>
                <th scope="col">Type de dépense</th>
                <th scope="col">Agent</th>
            </tr>
        </thead>
        <tbody>`;
    const divToPrint = document.createElement('div');
    let divHead = divToPrint.querySelector('#divHead');
    const from = JSON.parse(document.getElementById('selected-from').textContent);
    const to = JSON.parse(document.getElementById('selected-to').textContent);
    const pos = JSON.parse(document.getElementById('selected-pos').textContent);
    const guichet = JSON.parse(document.getElementById('selected-guichet').textContent);

    if (!!from && !!to) {
        subtitle += `Du ${(new Date(from)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})} au ${(new Date(to)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})}`;
    } else if (!!from && !to) {
        subtitle += `Du ${(new Date(from)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})} à aujourd'hui`;
    } else if (!from && !!to) {
        subtitle += `Jusqu'au ${(new Date(to)).toLocaleDateString('fr-Fr', {year: 'numeric', month: 'long', day: 'numeric'})}`;
    } else {
        subtitle += `Jusqu'à aujourd'hui`;
    }

    if (pos !== null) {
        subtitle += `, Point de vente : ${pos.name}`;
    }

    if (guichet !== null) {
        subtitle += `, Guichet : ${guichet.nomGuichet}`;
    }

    title = `
        <h1 class="h4 text-center p-1 border text-white bg-primary">DEPENSES</h1>
        <div class="text-center border bg-light mb-2">${subtitle}</div>
    `;

    spents.forEach((spent, idx) => {
        table += `<tr>
            <td>${idx + 1}</td>
            <td>${(new Date(spent['doneAt']['date'])).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'})}</td>
            <td>${spent['amount'].toFixed(2)} $</td>
            <td>${spent['motif']}</td>
            <td>${spent['typeDepense']}</td>
            <td>${spent['fullName'] ?? spent['username']}</td>
        </tr>`;
    });

    table += `</tbody>
        <tfoot>
            <tr>
                <td colspan="8" class="font-weight-bold">Total : ${(total).toFixed(2)} $</td>
            </tr>
        </tfoot>
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
