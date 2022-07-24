import robo from './images/contact/robo.jpg';
import inventor from './images/contact/gepetto.jpg';
import vending from './images/contact/vending-machine.jpg';

export default function loadContact(parent) {
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Contact';

    function createContactItem(name, description, number, image) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contactItem');
        
        const contactInfo = document.createElement('div');
        const contactName = document.createElement('h3');
        const contactDescription = document.createElement('p');
        const contactNumber = document.createElement('span');
        
        contactName.textContent = name;
        contactDescription.textContent = description;
        contactNumber.textContent = number;
        contactInfo.append(contactName, contactDescription, contactNumber);

        const contactImage = new Image();
        contactImage.src = image;
        contactImage.className = 'contactImage';

        contactItem.append(contactInfo, contactImage);

        return contactItem;
    }

    const contactContainer = document.createElement('div');

    const robot = createContactItem('Robo', 'Robo tends to our vending machines.', '0400-555-2049', robo);
    const gepetto = createContactItem('Gepetto', 'Our chief inventor.', '0400-555-2049', inventor);
    const vendingMachine = createContactItem('Vendy', 'Our vendies provide impeccable service.', '0400-555-2049', vending);

    contactContainer.append(robot, gepetto, vendingMachine);
    parent.append(headingOne, contactContainer);
}
