const DrawerInitiator = {
  init({ button_drawer, drawer, content }) {
    button_drawer.addEventListener('click', (event) => {
      console.log('ok');
      this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};
export default DrawerInitiator;