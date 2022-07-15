import pageLoad from "./page.js";
import './style.css';


const TAB_ID = ['#tabOne', '#tabTwo', '#tabThree'];


function createTabs() {
    const tabGroup = document.createElement('nav');
    tabGroup.classList.add('tabs');

    const tabList = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    tabList.append(homeTab, menuTab, contactTab)

    for (let i = 0; i < tabList.children.length; i++) {
        const tab = tabList.children[i];
        const tabAnchor = document.createElement('a');

        tabAnchor.href = TAB_ID[i];
        tabAnchor.textContent = 'TabName';
        tab.appendChild(tabAnchor);
    }

    tabGroup.append(tabList);
    
    return tabGroup;
}

function createTabContent(parent) {
    const homeDiv = document.createElement('div');
    const MenuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    const tabDivArr =[homeDiv, MenuDiv, contactDiv]
    let counter = 1;

    for (let i = 0; i < tabDivArr.length; i++) {
        const div = tabDivArr[i];
        div.classList.add('tabContent');
        div.id = TAB_ID[i];
        // insert tab module's function here
        div.textContent = `This is a tab content div for ${div.classList} ${counter++}!`;
    }

    parent.append(homeDiv, MenuDiv, contactDiv);
}

// Load tab group
document.body.appendChild(createTabs());

// Create our skeleton #content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
createTabContent(contentDiv);
document.body.appendChild(contentDiv);

// Load the placeholder homepage into #content div
const content = pageLoad(document);

console.log(__webpack_public_path__);
console.log(content);
