import RestaurantSource from "../data/restaurant-source";

class RestauranListHelper {
  static async render() {
    return '<restaurant-list></restaurant-list>';
  }
 
  static async afterRender() {
    // Silakan disesuaikan dengan kebutuhan, method ini akan dipanggil setelah render() selesai
    const restaurantAPI = RestaurantSource.getAllRestaurants()
    console.log(restaurantAPI)
  }
}
 
export default RestauranListHelper;