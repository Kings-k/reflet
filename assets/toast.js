const alertElt = document.querySelector('.alert');

if (alertElt !== null) {
    setTimeout(() => {
        alertElt.parentNode.innerHTML = '';
    }, 5000);
}

function showAlert(message, type, reload = true) {
    const jsAlertElt = document.querySelector('#jsAlert');

    window.scrollTo(0, 0);

    if (!!jsAlertElt) {
        let icon;

        switch (type) {
            case 'success':
                icon = 'check-circle-fill';
                break;

            case 'warning':
                icon = 'exclamation-triangle-fill';
                break;

            case 'danger':
                icon = 'exclamation-triangle-fill';
                break;

            case 'info':
                icon = 'info-fill';
                break;
        }

        jsAlertElt.removeAttribute('hidden');
        jsAlertElt.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show d-flex align-items-center" style="margin: 0;" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="${type.substr(0, 1).toUpperCase() + type.substr(1)}:"><use xlink:href="#${icon}"/></svg>
                <div class="ml-3 mr-5">${message}</div>
                <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        jsAlertElt.querySelector('.alert').style.boxShadow = '0 5px 5px 2px rgba(0, 0, 0, .3)';
        jsAlertElt.style.borderRadius = '5px';
        setTimeout(() => {
            if (reload) {
                window.location.reload();
            } else {
                jsAlertElt.setAttribute('hidden', 'hidden');
                jsAlertElt.innerHTML = '';
                jsAlertElt.style.boxShadow = '0 0 0 0 #fff';
            }
        }, 5000);
    }
}
