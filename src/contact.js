import robo from './images/contact/robo.jpg';

export default function loadContact(parent) {
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Contact';

    function createContactItem(name, description, image) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contactItem');
        
        const contactName = document.createElement('h3');
        const contactDescription = document.createElement('p');
        const contactInfo = document.createElement('div');
        
        contactName.textContent = name;
        contactDescription.textContent = description;
        contactInfo.append(contactName, contactDescription);

        const contactImage = new Image();
        contactImage.src = image;
        contactImage.className = 'contactImage';

        contactItem.append(contactInfo, contactImage);

        return contactItem;
    }

    const contactContainer = document.createElement('div');

    const robot = createContactItem('Robo', 'Robo tends to our vending machines.', robo);

    contactContainer.append(robot);
    parent.append(headingOne, contactContainer);
}
