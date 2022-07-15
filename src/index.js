import pageLoad from "./page.js";
import './style.css';


function createTabGroup() {
    const tabGroup = document.createElement('nav');
    tabGroup.classList.add('tabs');

    const tabList = document.createElement('ul');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    tabList.append(homeTab, menuTab, contactTab)

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact';

    tabGroup.append(tabList);
    
    return tabGroup;
}

function createTabContent(parent) {
    const homeDiv = document.createElement('div');
    const MenuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    const tabDiv =[homeDiv, MenuDiv, contactDiv]
    let counter = 1;
    tabDiv.forEach(div => {
        div.classList.add('tabContent');
        // insert tab module's function here
        div.textContent = `This is a tab content div for ${div.classList} ${counter++}!`;
    });

    parent.append(homeDiv, MenuDiv, contactDiv);
}

// Load tab group
document.body.appendChild(createTabGroup());

// Create our skeleton #content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
createTabContent(contentDiv);
document.body.appendChild(contentDiv);

// Load the placeholder homepage into #content div
const content = pageLoad(document);

console.log(__webpack_public_path__);
console.log(content);
