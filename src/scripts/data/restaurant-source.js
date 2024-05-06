import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

const restaurants = RestaurantSource.getAllRestaurants()
console.log(restaurants)

export default RestaurantSource;