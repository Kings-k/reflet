let usagesVehicule = ['Usage personnel', 'Transport des personnes', 'Transport des biens', 'Usage humanitaire', 'Véhicules spéciaux'];
const usageVehiculeDropdownMenu = document.querySelector('#usage-vehicule-dropdown');
const usagesVehiculeFilter = async (value) => usagesVehicule.filter(u => u.toLowerCase().includes(value.trim().toLowerCase()));

function selectUsageVehiculeItem(event) {
    const currentItem = event.currentTarget;
    const usageVehicule = usagesVehicule.find(u => u === currentItem.textContent);
    const usageVehiculeInput = document.querySelector('#usageVehicule');
    usageVehiculeInput.value = usageVehicule;
    usageVehiculeInput.dataset.usageVehicule = usageVehicule;
    usageVehiculeDropdownMenu.style.display = 'none';
}

document.querySelector('#usageVehicule').addEventListener('keyup', (e) => {
    const searchQuery = e.currentTarget.value;

    if (searchQuery.length > 1) {
        const spinner = document.querySelector('#usage-vehicule-spinner');
        spinner.removeAttribute('hidden');
        usagesVehiculeFilter(searchQuery).then(data => {
            spinner.setAttribute('hidden', 'hidden');
            usageVehiculeDropdownMenu.style.display = 'block';
            if (data.length > 0) {
                let listItems = '';
                data.forEach(item => {
                    listItems += `<li class="dropdown-item" onclick="selectUsageVehiculeItem(event)">${item}</li>`;
                });
                usageVehiculeDropdownMenu.innerHTML = listItems;
            } else {
                usageVehiculeDropdownMenu.innerHTML = '<li class="dropdown-item">No results found</li>';
            }
        });
    } else {
        usageVehiculeDropdownMenu.style.display = 'none';
    }
});
