import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail-restaurant';
// import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantList, // default page
  '/detail/:id': Detail,
  // '/': Favorite,
};

export default routes;
