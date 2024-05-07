import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template";

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._DOMRoot = null
  }
  // set restaurant(restaurants){
  //   this._restaurant = restaurants;
  //   console.log(this._restaurant)
  //   this.render();
  // }
  connectedCallback(){
    this.render()
    this.afterRender()
  }
  render() {
    this._DOMRoot.innerHTML = `
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
  }
  afterRender(){
    const restaurants = RestaurantSource.getAllRestaurants()
    console.log(restaurants)
    const restaurantListContainer = this._DOMRoot.querySelector('.restaurant');
    restaurants.forEach((data) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(data)
      }
    )
  }
}
customElements.define("restaurant-list", RestaurantList);

export default RestaurantList