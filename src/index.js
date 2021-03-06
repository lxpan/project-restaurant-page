import loadHome from "./home.js";
import loadMenu from './menu';
import loadContact from './contact.js';
import './style.css';
import credits from './attribution.txt';


const TAB_ID = ['#tabOne', '#tabTwo', '#tabThree'];
const TAB_NAMES = ['Home', 'Menu', 'Contact'];
const TAB_LOADER = [loadHome, loadMenu, loadContact];


function createHeader(parent) {
    const header = document.createElement('header');
    const tabNavGroup = document.createElement('nav');
    tabNavGroup.classList.add('tabs');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    const tabList = document.createElement('ul');
    tabList.append(homeTab, menuTab, contactTab)

    // removes 'is-active' class from all tabs (tab nav elements)
    function removeActiveTabNav() {
        const tabContentDivs = document.querySelector('#content');

        for (const tab of tabList.children) {
            tab.classList.remove('is-active');
        }

        for (const div of tabContentDivs.children) {
            div.classList.remove('is-active');
        }
    }

    function makeTabSectionActive(navTab) {
        const href = navTab.querySelector('a').getAttribute('href');
        const matchingTabSection = document.getElementById(href);

        matchingTabSection.classList.add('is-active');
    }

    // for each tab
    for (let i = 0; i < tabList.children.length; i++) {
        const tab = tabList.children[i];
        const tabAnchor = document.createElement('a');

        tabAnchor.href = TAB_ID[i];
        tabAnchor.textContent = TAB_NAMES[i];
        tabAnchor.classList.add('neonText');

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

    tabNavGroup.append(tabList);
    header.appendChild(tabNavGroup);
    
    parent.body.appendChild(header);
}

function populateTabContent(parent) {
    const homeDiv = document.createElement('div');
    const MenuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    const tabDivArr =[homeDiv, MenuDiv, contactDiv]

    // Add classes and IDs to each tab container
    for (let i = 0; i < tabDivArr.length; i++) {
        const div = tabDivArr[i];

        div.classList.add('tabContent');
        div.id = TAB_ID[i];

        // Make 'home' tab active by default and inject content from module
        if(i == 0) { 
            div.classList.add('is-active');
            TAB_LOADER[0](div);
        } else {
            TAB_LOADER[i](div);
        }
    }

    parent.append(homeDiv, MenuDiv, contactDiv);
}

function loadTabContent(parent) {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    populateTabContent(contentDiv);
    parent.body.appendChild(contentDiv);
}

function createFooter(parent) {
    const footer = document.createElement('footer');
    
    const bgCredit = document.createElement('span');
    const bgCreditLink = document.createElement('a');
    const otherCredit = document.createElement('span');
    const otherCreditLink = document.createElement('a');

    const disclaimer = document.createElement('span');
    disclaimer.textContent = 'Created for The Odin Project';

    bgCreditLink.href = 'https://www.pexels.com/photo/lighted-vending-machines-on-street-2338113/';
    bgCreditLink.textContent = 'Aleksandar Pasaric';
    bgCreditLink.style.textDecoration = 'underline';
    bgCredit.textContent = 'Background photo by ';
    bgCredit.appendChild(bgCreditLink);

    otherCredit.textContent = 'Full image attribution ';
    otherCreditLink.textContent = 'here';
    otherCreditLink.href = credits;
    otherCreditLink.style.textDecoration = 'underline';
    otherCredit.appendChild(otherCreditLink);

    footer.append(bgCredit, otherCredit, disclaimer);

    parent.body.appendChild(footer);
}

createHeader(document);
loadTabContent(document);
createFooter(document);