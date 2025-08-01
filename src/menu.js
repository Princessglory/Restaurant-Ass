function loadMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const heading = document.createElement('h2');
  heading.textContent = "Our Menu";

  const item1 = document.createElement('p');
  item1.textContent = "🍕 Pizza - ₦3,000";

  const item2 = document.createElement('p');
  item2.textContent = "🍔 Burger - ₦2,000";

  const item3 = document.createElement('p');
  item3.textContent = "🥤 Drinks - ₦1,000";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);

  return menuDiv;
}

export default loadMenu;
