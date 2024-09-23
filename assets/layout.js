import $ from 'jquery';
import Sidenav from './mdb/src/js/pro/sidenav';

const sidenav = document.getElementById("sidenav-1");
const instance = mdb.Sidenav.getInstance(sidenav);

let innerWidth = null;

const setMode = (e) => {
  // Check necessary for Android devices
  if (window.innerWidth === innerWidth) {
    return;
  }

  innerWidth = window.innerWidth;

  if (window.innerWidth < 1400) {
    instance.changeMode("over");
    instance.hide();
  } else {
    instance.changeMode("side");
    instance.show();
  }
};

      setMode();

      // Event listeners
window.addEventListener("resize", setMode);

(() => {
    'use strict';
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('form');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
