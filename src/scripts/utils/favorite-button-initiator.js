import FavoriteRestaurantSource from '../data/favorite-restaurant-source';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, data }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantSource.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    // console.log(favoriteButton);
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantSource.putRestaurant(this._restaurant);
      // alert("Success")
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantSource.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
export default FavoriteButtonInitiator;
