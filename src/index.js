import pageLoad from "./page.js";
import './style.css';


const TAB_ID = ['#tabOne', '#tabTwo', '#tabThree'];
const TAB_NAMES = ['Home', 'Menu', 'Contact'];


function createTabs() {
    const tabGroup = document.createElement('nav');
    tabGroup.classList.add('tabs');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    const tabList = document.createElement('ul');
    tabList.append(homeTab, menuTab, contactTab)

    // removes 'is-active' class from all tabs (tab nav elements)
    function removeActiveTabNav() {
        const tabContentDivs = document.querySelector('#content');

        // console.log(tabList.children);
        // console.log(content.children);

        for (const tab of tabList.children) {
            tab.classList.remove('is-active');
        }

        for (const div of tabContentDivs.children) {
            div.classList.remove('is-active');
        }
    }

    function makeTabSectionActive(navTab) {
        const href = navTab.querySelector('a').getAttribute('href');
        // console.log(href);
        const matchingTabSection = document.getElementById(href);
        // console.log(matchingTabSection);
        matchingTabSection.classList.add('is-active');
    }

    // for each tab
    for (let i = 0; i < tabList.children.length; i++) {
        const tab = tabList.children[i];
        const tabAnchor = document.createElement('a');

        tabAnchor.href = TAB_ID[i];
        tabAnchor.textContent = TAB_NAMES[i];
        tab.appendChild(tabAnchor);

        // add eventListener to tab
        tab.addEventListener('click', e => {
            e.preventDefault();
            // remove all other active tabs (including content divs)
            removeActiveTabNav();
            // make this tab active
            tab.classList.add('is-active');

            // make the matching section active
            makeTabSectionActive(tab);
        })
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

    // Add classes and IDs to each tab container
    for (let i = 0; i < tabDivArr.length; i++) {
        const div = tabDivArr[i];

        div.classList.add('tabContent');
        div.id = TAB_ID[i];

        // Make 'home' tab active by default and inject content from module
        if(i == 0) { 
            div.classList.add('is-active');
            pageLoad(div);
        } else {
            div.textContent = `This is a tab content div for ${div.classList[0]} ${counter++}!`;
        }
        // insert tab module's function here
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
// const content = pageLoad(document);
// console.log(__webpack_public_path__);
// console.log(contentDiv);
