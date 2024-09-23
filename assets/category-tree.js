const toggler = document.getElementsByClassName("box");

for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("check-box");
    });
}
