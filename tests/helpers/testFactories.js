/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantSource from '../../src/scripts/data/favorite-restaurant-source';
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantSource,
    data: {
      restaurant,
    },
  });
};
export { createFavoriteButtonPresenter };
