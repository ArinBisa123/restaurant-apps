import RestaurantSource from "../data/restaurant-source";
class RestauranListHelper {
  static async render() {
    return '<restaurant-list></restaurant-list>';
  }
  static async afterRender(){
    const restaurants = RestaurantSource.getAllRestaurants();
    console.log(restaurants);
    const restaurantListElement = document.querySelector('restaurant-list')
    const restaurantListContainer = restaurantListElement.querySelector(".restaurant");
    restaurants.forEach((data) => {
      // const restaurantItem = document.createElement("div");
      // restaurantItem.classList.add("restaurant-item")
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(data);
      // restaurantListContainer.appendChild(restaurantItem);
    });
  }
}
export default RestauranListHelper;