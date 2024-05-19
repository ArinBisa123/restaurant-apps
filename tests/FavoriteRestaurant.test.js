/* eslint-disable no-undef */
// import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';
import 'core-js/stable/structured-clone';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Favoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };
  beforeEach(() => {
    addFavoriteButtonContainer();
  });
  it('should show the favorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });
  it('should not show the unfavorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });
  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantSource.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurantSource.deleteRestaurant(1);
  });
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    await FavoriteRestaurantSource.putRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantSource.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantSource.deleteRestaurant(1);
  });
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenter({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantSource.getAllRestaurants()).toEqual([]);
  });
});
