/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantSource from '../src/scripts/data/favorite-restaurant-source';
import 'core-js/stable/structured-clone';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Favorite Restaurant Source Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantSource.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantSource.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantSource);
});
