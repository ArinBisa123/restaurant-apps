/* eslint-disable no-undef */
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';
import * as TestFactories from './helpers/testFactories';
import 'core-js/stable/structured-clone';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Unfavoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantSource.putRestaurant({ id: 1 });
  });
  afterEach(async () => {
    await FavoriteRestaurantSource.deleteRestaurant(1);
  });
  it('should show the unfavorite button when the restaurant has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });
  it('should not show the unfavorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });
  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(FavoriteRestaurantSource.getAllRestaurants()).toEqual([]);
  });
  it('should not throw error when user click unfavorite widget if the unfavorited movie is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    await FavoriteRestaurantSource.deleteRestaurant(1);

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(FavoriteRestaurantSource.getAllRestaurants()).toEqual([]);
  });
});
