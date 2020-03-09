const Menu = [
  {
    title: 'index',
    group: 'apps',
    icon: 'mdi-magnify',
    name: 'search-txn',
    href: '/project/index',

  },
  {
    title: 'logout',
    group: 'extra',
    icon: 'mdi-logout',
    href: '/login'
  }


];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
