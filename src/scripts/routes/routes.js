import RestaurantListHelper from '../utils/restaurantList-helper';
import Detail from '../views/pages/detail-restaurant';
import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantListHelper, // default page
  '/home': RestaurantListHelper,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
