import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../scripts/restaurant-list.js"

const drawer = document.querySelector("#nav__drawer");
const navMenu = document.querySelector("#nav__menu");
const restaurantListElement = document.querySelector('restaurant-list')
console.log(restaurantListElement)
drawer.addEventListener("click", (event) => {
  if (navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
  } else {
    navMenu.classList.add("open");
  }
  event.stopPropagation();
  // console.log("yo");
});
navMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

const getAllData= ()=>{
  fetch('../DATA.json')
    .then(response=>{
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then (responseJson=>{
      console.log(responseJson)
      const restaurants=responseJson.restaurants
      restaurantListElement.restaurant= restaurants
    })
    .catch(error=>{
      console.log(error)
    })
}
getAllData()