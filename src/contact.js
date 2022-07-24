import robo from './images/contact/robo.jpg';

export default function loadContact(parent) {
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Contact';

    function createContactItem(name, description, image) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('menuItem');
        const contactName = document.createElement('h3');
        const contactDescription = document.createElement('p');

        contactName.textContent = name;
        contactDescription.textContent = description;

        const contactImage = new Image();
        contactImage.src = image;
        contactImage.className = 'menuImage';

        contactItem.append(contactName, contactDescription, contactImage);

        return contactItem;
    }

    const contactContainer = document.createElement('div');

    const robot = createContactItem('Robo', 'Robo tends to our vending machines.', robo);

    contactContainer.append(robot);
    parent.append(headingOne, contactContainer);
}
