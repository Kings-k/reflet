const servicesFilter = async (query) => {
    const url = `${baseUrl}/depots/approvisionnement?search=${encodeURI(query.trim())}`;
    const response = await fetch(url, {
        headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})
    });
    const data = await response.json();
    return data;
};
const serviceAutocomplete = document.querySelector('#service');
const dropdownMenu = document.querySelector('#service-dropdown');

function selectItem(event) {
    serviceAutocomplete.value = event.currentTarget.textContent;
    dropdownMenu.style.display = 'none';
}

document.getElementById('cancelBtn').addEventListener('click', () => {
    document.querySelectorAll('input:not([type="submit"])').forEach(input => {
        input.value = '';
    });
});

serviceAutocomplete.addEventListener('keyup', (e) => {
    const searchQuery = e.currentTarget.value;

    if (searchQuery.length > 1) {
        const spinner = document.querySelector('#service-spinner');
        spinner.removeAttribute('hidden');
        servicesFilter(searchQuery).then(data => {
            spinner.setAttribute('hidden', 'hidden');
            dropdownMenu.style.display = 'block';
            if (data.length > 0) {
                let listItems = '';
                data.forEach(item => {
                    listItems += `<li class="dropdown-item" onclick="selectItem(event)">${item.name}</li>`;
                });
                dropdownMenu.innerHTML = listItems;
            } else {
                dropdownMenu.innerHTML = '<li class="dropdown-item">No results found</li>';
            }
        });
    } else {
        dropdownMenu.style.display = 'none';
    }
});
