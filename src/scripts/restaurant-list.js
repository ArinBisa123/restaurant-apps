class RestaurantList extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurants) {
    this._restaurant = restaurants;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
      .restaurant {
        display: grid;
        grid-row-gap: 16px;
        margin: 20px auto auto;
        text-align: left;
      }
      .restaurant__list {
        box-shadow: 4px 4px 0 #e3d5ca;
        max-height: 500px;
        background-color: #d5bdaf;
        overflow: auto;
        border-radius: 5px;
        margin: auto;
      }
      .restaurant__image {
        width: 100%;
        height: 200px;
      }
      .restaurant__thumbnail {
        position: relative;
        margin: auto;
      }
      .restaurant__name {
        font-size: 25px;
      }
      .restaurant__description {
        text-align: justify;
      }
      .restaurant figcaption {
        position: absolute;
        top: 2%;
        left: 5%;
        background-color: #d6ccc2;
      }
      .restaurant figcaption:hover {
        box-shadow: 4px 4px 2px #edede9;
        font-weight: 200;
        font-size: 25px;
      }
      .restaurant__content {
        padding: 16px 32px 32px 32px;
      }
      </style>
      <div class="restaurant" id="maincontent" tabindex="0" aria-label="This is Content ">
      
      </div>
    `;

    const restaurantList = this._shadowRoot.querySelector('.restaurant');
    this._restaurant.forEach((data) => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');
      restaurantItem.innerHTML = `
      <article class="restaurant__list" tabindex="0 >
        <div class="restaurant__thumbnail">
          <img src="${data.pictureId}">
          <figcaption tabindex="0">${data.city}</figcaption>
        </div>
        <div class="restaurant__content">
          <p class="rating" tabindex="0">&#11088 Rating: ${data.rating} </p>
          <h5 class="restaurant__name" tabindex="0">${data.name}</h5>
          <p class="restaurant__description" tabindex="0">${data.description}</p>
        </div>
      </article>
      `;
      restaurantList.appendChild(restaurantItem);
    });
  }
}
customElements.define('restaurant-list', RestaurantList);
