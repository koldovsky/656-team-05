const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");
const header = document.querySelector(".header");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("active-nav"); 
  header.classList.toggle("active-nav");
  body.classList.toggle("active-nav");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-nav");
  navMenu.classList.remove("active-nav");
  header.classList.remove("active-nav");
  body.classList.remove("active-nav");
}))