const burgerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener('click',()=>{
    console.log("s")
    navbarMenu.classList.toggle('is-active');
})