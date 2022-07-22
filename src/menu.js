import drink from './images/menu/brawndo.webp';
import foodPill from './images/menu/food-pills.webp';

export default function loadMenu(parent) {
    const headingOne = document.createElement('h1');

    
    function createMenuItem(name, description, price, image) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('span');

        itemName.textContent = name;
        itemDescription.textContent = description;
        itemPrice.textContent = price;

        const menuImage = new Image();
        menuImage.src = image;
        menuImage.className = 'menuImage';

        menuItem.append(itemName, itemDescription, itemPrice, menuImage);

        return menuItem;
    }
    
    headingOne.textContent = 'Menu';

    parent.append(headingOne);
}
