function createNav() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'homeBtn';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.id = 'menuBtn';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.id = 'contactBtn';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  header.appendChild(nav);

  return header;
}

export default createNav;
