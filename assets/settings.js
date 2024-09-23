let step = 1;
const prevBtn = document.querySelector('#prevBtn'),
    nextBtn = document.querySelector('#nextBtn');

nextBtn.addEventListener('click', e => {

    step = step + 1;

    if (step === 2) {
        prevBtn.removeAttribute('hidden');
        e.currentTarget.parentNode.classList = 'flex-grow-1 d-flex justify-content-between align-items-end';
    }

    if (document.getElementById(`step${step}`) !== null) {
        document.querySelectorAll(`form > div:not(:nth-child(${step}))`).forEach(elt => {
            elt.setAttribute('hidden', 'hidden');
        });
        document.querySelector(`form > div:nth-child(${step})`).removeAttribute('hidden');
        if (document.getElementById(`step${step+1}`) === null) {
            nextBtn.textContent = 'Terminer';
        }
    } else {
        const formData = new FormData(document.querySelector('form'));
        fetch(`${baseUrl}/settings`, {
            method: 'POST',
            body: formData
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(data => {
                    console.log(JSON.parse(data));
                    window.location.assign(`${baseUrl}/dashboard`);
                });
            } else {
                showAlert('Une erreur est survenue', 'danger', false);
            }
        });
    }

});

prevBtn.addEventListener('click', e => {
    step = step - 1;
    nextBtn.textContent = 'Suivant';
    document.querySelectorAll(`form > div:not(:nth-child(${step}))`).forEach(elt => {
        elt.setAttribute('hidden', 'hidden');
    });
    document.querySelector(`form > div:nth-child(${step})`).removeAttribute('hidden');
    if (step === 1) {
        e.currentTarget.hidden = 'hidden';
        e.currentTarget.parentNode.classList = 'flex-grow-1 d-flex justify-content-end align-items-end';
    } else {
        e.currentTarget.removeAttribute('hidden');
        e.currentTarget.parentNode.classList = 'flex-grow-1 d-flex justify-content-between align-items-end';
    }
});
