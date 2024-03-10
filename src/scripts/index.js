import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

const drawer = document.querySelector("#nav__drawer");
const navMenu = document.querySelector("#nav__menu");

drawer.addEventListener("click", (event) => {
  if (navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
  } else {
    navMenu.classList.add("open");
  }
  event.stopPropagation();
  console.log("yo");
});
navMenu.addEventListener("click", (event) => {
  navMenu.classList.remove("open");
});
