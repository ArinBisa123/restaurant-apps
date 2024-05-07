import RestauranListHelper from '../utils/restaurantList-helper';
import Detail from '../views/pages/detail-restaurant';
// import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestauranListHelper, // default page
  '/detail/:id': Detail,
  // '/': Favorite,
};

export default routes;
