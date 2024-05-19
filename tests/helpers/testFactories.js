/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    data: {
      restaurant,
    },
  });
};
export { createFavoriteButtonPresenter };
