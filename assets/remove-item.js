document.querySelectorAll('tbody > tr > td:last-child > a').forEach(btn => {
    const path = btn.dataset.delete, entityName = btn.parentNode.parentNode.querySelector('td:nth-of-type(1)').textContent.trim();
    btn.addEventListener('click', () => {
        if (confirm(`Voulez-vous vraiment supprimer ${entityName} ?`)) {
            fetch(`${baseUrl}${path}/delete`, {
                method: 'DELETE'
            })
            .then(resp => {
                if (resp.ok) {
                    resp.text().then(data => {
                        showAlert(JSON.parse(data), 'success');
                    });
                } else {
                    showAlert('Une erreur est survenue', 'danger', false);
                }
            });
        }
    });
});
