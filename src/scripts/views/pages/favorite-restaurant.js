import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template';

const Favorite = {
  async render() {
    return `
    <div class="favorite_container">
        <h4>Your Favorite Restaurant</h4>
        <div id="empty_content" class="empty_content"></div>
        <div id="favorite_content" class="favorite_content"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#favorite_content');
    const emptyRestaurant = document.querySelector('.empty_content');
    if (restaurants.length === 0) {
      emptyRestaurant.innerHTML = 'Nothing to show here. Add your favorite restaurant';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
