import drink from './images/menu/energy-drink.jpg';
import foodPill from './images/menu/food-pills.webp';
import burger from './images/menu/burgerCan.jpeg';

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

    const menuContainer = document.createElement('div');
    const menuDrink = createMenuItem('Super Energy Drink', 'An explosive energy drink infused with electrolytes, enzymes and over 100 stimulants. Start your day off with a bang!', '$2', drink);
    const menuFoodPill = createMenuItem('Food Pill', 'For the doers of the world, for those who live fast and die young. When there ain\'t enough time to eat, pop a Food Pill for an entire meal in one!', '$4', foodPill);
    const menuBurger = createMenuItem('Burger-In-A-Can', "It's a burger! It's a can! No, it's a Burger-In-A-Can! Why settle for the real thing when you can settle for the next best thing!", '$10', burger);

    menuContainer.append(menuDrink, menuFoodPill, menuBurger);
    
    headingOne.textContent = 'Menu';

    parent.append(headingOne, menuContainer);
}
