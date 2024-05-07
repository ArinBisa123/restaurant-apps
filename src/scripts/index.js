import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./views/pages/restaurant-list.js"
import "./views/pages/detail-restaurant.js"
import App from "./views/app.js";

const app = new App ({
  button_drawer:document.querySelector('#nav__drawer'),
  drawer: document.querySelector('#nav__menu'),
  content: document.querySelector('#mainContent'),
})
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
})
// drawer.addEventListener("click", (event) => {
//   if (navMenu.classList.contains("open")) {
//     navMenu.classList.remove("open");
//   } else {
//     navMenu.classList.add("open");
//   }
//   event.stopPropagation();
//   // console.log("yo");
// });
// navMenu.addEventListener("click", () => {
//   navMenu.classList.remove("open");
// });

// const getAllData= ()=>{
//   fetch('../DATA.json')
//     .then(response=>{
//       if(!response.ok){
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }
//       return response.json()
//     })
//     .then (responseJson=>{
//       console.log(responseJson)
//       const restaurants=responseJson.restaurants
//       restaurantListElement.restaurant= restaurants
//     })
//     .catch(error=>{
//       console.log(error)
//     })
// }
// getAllData()