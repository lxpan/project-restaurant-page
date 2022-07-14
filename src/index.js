import pageLoad from "./page.js";


function createTabGroup() {
    const tabGroup = document.createElement('div');
    tabGroup.classList.add('tabs');

    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    homeTab.id = 'home';
    menuTab.id = 'menu';
    contactTab.id = 'contact';

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact';

    tabGroup.append(homeTab, menuTab, contactTab);
    
    return tabGroup;
}

// Load tab group
document.body.appendChild(createTabGroup());

// Create our skeleton #content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

// Load the placeholder homepage into #content div
const content = pageLoad(document);

console.log(__webpack_public_path__);
console.log(content);
