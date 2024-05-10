import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="detail_container">
          <h2 class="detail_head">About Restaurant</h2>
          <div id="detail_content" class="detail_content"></div>
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
      data,
    });
  },
};

export default Detail;