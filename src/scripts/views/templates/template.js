import CONFIG from '../../globals/config';
 
// const createRestaurantDetailTemplate = (restaurants) => `
//   <h2 class="movie__title">${movie.title}</h2>
//   <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
//   <div class="movie__info">
//     <h3>Information</h3>
//     <h4>Tagline</h4>
//     <p>${movie.tagline}</p>
//     <h4>Release Date</h4>
//     <p>${movie.release_date}</p>
//     <h4>Duration</h4>
//     <p>${movie.runtime} minutes</p>
//     <h4>Rating</h4>
//     <p>${movie.vote_average}</p>
//   </div>
//   <div class="movie__overview">
//     <h3>Overview</h3>
//     <p>${movie.overview}</p>
//   </div>
// `;
 
const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__list" tabindex="0 >
    <div class="restaurant__thumbnail">
      <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}">
      <p tabindex="0">Lokasi : ${restaurant.city}</p>
    </div>
    <div class="restaurant__content">
      <p class="rating" tabindex="0">&#11088 Rating: ${restaurant.rating} </p>
      <h5 class="restaurant__name" tabindex="0">${restaurant.name}</h5>
      <p class="restaurant__description" tabindex="0">${restaurant.description}</p>
    </div>
  </article>
`;
 
export { createRestaurantItemTemplate };