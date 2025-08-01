function loadHome() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const heading = document.createElement('h2');
  heading.textContent = "Welcome to Princess Kitchen";

  const description = document.createElement('p');
  description.textContent = "Enjoy delicious, home-cooked meals made with love. We serve happiness on a plate!";

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80';

  image.alt = 'Restaurant food photo';

  homeDiv.appendChild(heading);
  homeDiv.appendChild(description);
  homeDiv.appendChild(image);

  return homeDiv;
}

export default loadHome;
