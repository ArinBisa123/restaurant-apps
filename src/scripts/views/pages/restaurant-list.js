class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set restaurant(restaurants){
    this._restaurant = restaurants;
    console.log(this._restaurant)
    this.render();
  }
  connectedCallback(){
    this.render()
  }
  render() {
    this._shadowRoot.innerHTML = `
      <style>
      .restaurant {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
        text-align: left;
        width:100%;
        margin: 20px 20px;
      }
      .restaurant-item{
        width:400px;
        box-shadow: 4px 4px 0 #e3d5ca;
        background-color: #d5bdaf;
        border-radius: 5px;
        margin-top:15px
      }
      .restaurant__list{
        padding:16px;
      }
      .restaurant__image {
        width:100%;
      }
      .restaurant__name {
        font-size: 25px;
      }
      .restaurant__description {
        text-align: justify;
      }
      @media screen and (max-width:599px){
        .restaurant {
          display: grid;
          grid-template-columns:1fr;
          gap: 10px;
          margin: 20px 20px;
          width:100%;
        }
        .restaurant-item{
          width:100%;
        }
      }
      @media screen and (min-width:600px){
        .restaurant {
          display: grid;
          grid-template-columns:repeat(2,1fr);
          gap: 10px;
          margin: 20px 20px;
          width:100%;
        }
        .restaurant-item{
          width:300px;
        }
      }
      @media screen and (min-width: 900px) {
        .restaurant {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width:100%;
          margin:20px 20px;
        }
        .restaurant-item{
          width:400px;
        }
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
          <img class="restaurant__image" src="${data.pictureId}">
          <p tabindex="0">Lokasi : ${data.city}</p>
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
customElements.define("restaurant-list", RestaurantList);

export default RestaurantList