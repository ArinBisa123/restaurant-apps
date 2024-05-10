import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./views/pages/restaurant-list.js"
import "./views/pages/detail-restaurant.js"
import App from "./views/app.js";
import swRegister from "./utils/sw-register.js";

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
  await swRegister();
})
