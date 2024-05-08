import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    const restaurantList = responseJson.restaurants
    // console.log(restaurantList)
    return restaurantList
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
console.log(RestaurantSource.getAllRestaurants())
export default RestaurantSource;