import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import createNav from './nav';
import './styles.css';

const content = document.getElementById('content');
content.innerHTML = '';

// Add the nav bar
content.appendChild(createNav());

// Add a content area
const main = document.createElement('div');
main.id = 'main-content';
content.appendChild(main);

// Default to Home
main.appendChild(loadHome());

// Add button logic
function clearContent() {
  main.innerHTML = '';
}

document.getElementById('homeBtn').addEventListener('click', () => {
  clearContent();
  main.appendChild(loadHome());
});

document.getElementById('menuBtn').addEventListener('click', () => {
  clearContent();
  main.appendChild(loadMenu());
});

document.getElementById('contactBtn').addEventListener('click', () => {
  clearContent();
  main.appendChild(loadContact());
});
