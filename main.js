const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = nav.querySelectorAll("a");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

navLinks.forEach(link => {
        link.addEventListener("click",()=>{
            nav.classList.toggle("nav-open");
            burger.classList.toggle("toggle");
        })
})