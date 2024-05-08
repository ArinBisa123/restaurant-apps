import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import RestauranListHelper from '../utils/restaurantList-helper';

//initiate app shell component

class App {
  constructor({ button_drawer, drawer, content }) {
    this._button_drawer = button_drawer;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  // Initial Drawer
  _initialAppShell() {
    DrawerInitiator.init({
      button_drawer: this._button_drawer,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    page.afterRender()
  }
}

export default App;
