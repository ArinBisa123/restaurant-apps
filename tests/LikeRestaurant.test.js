/* eslint-disable no-undef */
// import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';

describe('Liking A Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });
  it('should be able to like the restaurant', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantSource.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurantSource.deleteRestaurant(1);
  });
});
