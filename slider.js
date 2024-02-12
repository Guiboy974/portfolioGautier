// navbar
const menuHamburger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})


// slider header
const slide = ["images/IMG-chat2.jpg", "images/IMG-20231120-WA0014.jpg", "images/IMG-20231120-WA0063.jpg", "images/IMG-20231120-WA0015.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);