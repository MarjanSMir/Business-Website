const menu = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", ()=>{
    navbar.classList.toggle("change");
    menu.classList.toggle('change');
});