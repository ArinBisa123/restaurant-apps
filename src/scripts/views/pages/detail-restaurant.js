import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import FavoriteRestaurantSource from '../../data/favorite-restaurant-source';

const Detail = {
  async render() {
    return `
      <div class="detail_head" tabindex="0">
        <h4>About Restaurant</h4>
      </div>
      <div class="detail_container" tabindex="0">
        <div id="detail_content" class="detail_content" tabindex="0"></div>
        <div id="favoriteButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const detailContentContainer = document.querySelector('#detail_content');
    detailContentContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantSource,
      data,
    });
  },
};

export default Detail;
