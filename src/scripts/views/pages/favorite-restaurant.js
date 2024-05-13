import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template';

const Favorite = {
  async render() {
    return `
    <div class="favorite_container">
        <h4>Your Favorite Restaurant</h4>
        <div id="favorite_content" class="favorite_content"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#favorite_content');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
