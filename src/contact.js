function loadContact() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const heading = document.createElement('h2');
  heading.textContent = "Contact Us";

  const phone = document.createElement('p');
  phone.textContent = "📞 Phone: 0808-524-4266";

  const email = document.createElement('p');
  email.textContent = "📧 Email: mofogofoluwa744@gmail.com";

  const address = document.createElement('p');
  address.textContent = "📍 Address: Princess Kitchen, Nigeria";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contactDiv.appendChild(address);

  return contactDiv;
}

export default loadContact;
