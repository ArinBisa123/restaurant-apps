import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h5 class="restaurant__title" tabindex="0">${restaurant.name}</h5>
  <img class="lazyload restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name} image" crossorigin="anonymous" tabindex="0"/>
  <div class="restaurant__info">
    <h6 tabindex="0">Information</h6>
    <h7 tabindex="0" class="restaurant__city">City</h7>
    <p tabindex="0">${restaurant.city}</p>
    <h7 tabindex="0" class="restaurant__address">Address</h7>
    <p tabindex="0">${restaurant.address}</p>
    <h7 tabindex="0" class="restaurant__rating">Rating</h7>
    <p tabindex="0">${restaurant.rating} &#11088 </p>
    <h7 tabindex="0" class="restaurant__desc">Description About Restaurant</h7>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="restaurant__menu tabindex="0">
    <div class="menu_head">
      <h6 tabindex="0">Menu</h6>
    </div>
    <div class="foods_detail">
      <h7 class="menu_title" tabindex="0">Foods</h7>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="drinks_detail">
      <h7 tabindex="0" class="menu_title">Drinks</h7>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li class="list" tabindex="0">${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="resturant__review">
    <h6 tabindex="0">Review</h6>
    ${restaurant.customerReviews.map((reviewer) => `
        <h7 tabindex="0">${reviewer.name} - ${reviewer.date}</h7>
        <p tabindex="0">${reviewer.review}</p>`).slice(0, 3)}
  </div>
`;
const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__item" tabindex="0 >
    <div class="restaurant__thumbnail">
      <img class="lazyload restaurant__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name} image" crossorigin="anonymous">
      <div class="restaurant__content">
        <a href="/#/detail/${restaurant.id}">
          <p tabindex="0">Lokasi : ${restaurant.city}</p>
          <p class="rating" tabindex="0">&#11088 Rating: ${restaurant.rating} </p>
          <h5 class="restaurant__name" tabindex="0">${restaurant.name}</h5>
          <p class="restaurant__description" tabindex="0">${restaurant.description.slice(0, 225)}</p>
        </a>
      </div>
    </div>
  </article>
`;
const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate, createFavoritedButtonTemplate,
};
