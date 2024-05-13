class RestaurantList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="restaurant" id="maincontent" tabindex="0" aria-label="This is Content ">

      </div>
    `;
  }
}
customElements.define('restaurant-list', RestaurantList);

// console.log(RestaurantList.afterRender())
export default RestaurantList;
