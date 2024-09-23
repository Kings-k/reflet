const typeSelect = document.querySelector('#type'),
    formChecks = document.querySelectorAll('.form-check');

if (typeSelect.value == '2') {
    formChecks.forEach(item => {
        item.removeAttribute('hidden');
    });
}

typeSelect.addEventListener('change', e => {
    formChecks.forEach(item => {
        e.currentTarget.value == '2' ? item.removeAttribute('hidden') : item.hidden = 'hidden';
    });
});
