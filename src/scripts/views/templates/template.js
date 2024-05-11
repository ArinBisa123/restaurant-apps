import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h3 class="restaurant__title">${restaurant.name}</h3>
  <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4 class="restaurant__city">City</h4>
    <p>${restaurant.city}</p>
    <h4 class="restaurant__address">Address</h4>
    <p>${restaurant.address}</p>
    <h4 class="restaurant__rating">Rating</h4>
    <p>${restaurant.rating} minutes</p>
    <h4 class="restaurant__desc">Description About Restaurant</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu>
    <div class="foods_detail">
      <h4 class="menu_title">Foods</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="drinks_detail">
      <h4 class="menu_title">Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li class="list">${drink.name}</li>`).join('')}</p>
      </ul>
    </div>
  </div>
  <div class="resturant__review">
    <h3>Review</h3>
    ${restaurant.customerReviews.map((reviewer) => `
        <h4>${reviewer.name} - ${reviewer.date}</h4>
        <p>${reviewer.review}</p>`).slice(0, 3)}
  </div>
`;
const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__item" tabindex="0 >
    <div class="restaurant__thumbnail">
      <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}">
      </div>
      <div class="restaurant__content">
        <a href="/#/detail/${restaurant.id}">
          <p tabindex="0">Lokasi : ${restaurant.city}</p>
          <p class="rating" tabindex="0">&#11088 Rating: ${restaurant.rating} </p>
          <h5 class="restaurant__name" tabindex="0">${restaurant.name}</h5>
          <p class="restaurant__description" tabindex="0">${restaurant.description.slice(0,225)}</p>
        </a>
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
 
export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createFavoriteButtonTemplate, createFavoritedButtonTemplate};