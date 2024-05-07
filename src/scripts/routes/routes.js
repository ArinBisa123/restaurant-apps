import RestaurantListHelper from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail-restaurant';
// import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantListHelper, // default page
  '/detail/:id': Detail,
  // '/': Favorite,
};

export default routes;
