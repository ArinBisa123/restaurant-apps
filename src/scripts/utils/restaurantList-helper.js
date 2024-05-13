import RestaurantSource from '../data/restaurant-source';
import { createRestaurantItemTemplate } from '../views/templates/template';

class RestaurantListHelper {
  static async render() {
    return `
      <div class="headline"> 
        <h4 tabindex="0">Explore Restaurant<span> &#10032</span></h4>
      </div>
      <restaurant-list></restaurant-list>
    `;
  }

  static async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurants();
    console.log(restaurants);
    const restaurantListElement = document.querySelector('restaurant-list');
    const restaurantListContainer = restaurantListElement.querySelector('.restaurant');
    restaurants.forEach((data) => {
      // const restaurantItem = document.createElement("div");
      // restaurantItem.classList.add("restaurant-item")
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(data);
      // restaurantListContainer.appendChild(restaurantItem);
    });
  }
}
export default RestaurantListHelper;
