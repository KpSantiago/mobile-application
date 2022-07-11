let menu = document.querySelector(".menuToggle");
let menu2 = document.querySelector(".menuHamb");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
menu.addEventListener("click", ()=>{
    p1.classList.toggle("active")
    p2.classList.toggle("active")
    menu2.classList.toggle("active");
});
let menu3 = document.querySelector(".menuToggle2");
let menu4 = document.querySelector(".menuHamb2");

menu3.addEventListener("click", ()=>{
     menu4.classList.toggle("active");
});
