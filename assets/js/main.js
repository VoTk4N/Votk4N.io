const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

let showMenu = false;


menuBtn.addEventListener("click", toogleMenu);


function toogleMenu() {
    if(!showMenu) {
        hamburger.classList.add("open");

        showMenu = true;

    } else {
        hamburger.classList.remove("open");

        showMenu = false;
    }
}
