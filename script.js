/*function myfunction(){
    var x = document.getElementById("menu");
    x.style.transition = "0.75s"
    if(x.style.top == "-1000%"){
        x.style.top ="100%";
    }else{
        x.style.top = "-1000%"
    }
}*/
const menu = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", ()=>{
    navbar.classList.toggle("change");
    menu.classList.toggle('change');
});