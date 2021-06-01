const toggler = document.querySelector(".toggler");
const subHero = document.querySelector(".sub-hero");
const links = document.querySelectorAll(".sub-hero p");

console.log(toggler)
toggler.addEventListener('click', () => {
    subHero.classList.toggle("open"); 
    
})

