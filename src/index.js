import pageLoad from "./page.js";


function createTabGroup() {
    const tabGroup = document.createElement('div');
    tabGroup.classList.add('tabs');

    const buttonA = document.createElement('button');
    const buttonB = document.createElement('button');
    const buttonC = document.createElement('button');

    buttonA.id = 'tabA';
    buttonB.id = 'tabB';
    buttonC.id = 'tabC';

    buttonA.textContent = 'Button A';
    buttonB.textContent = 'Button B';
    buttonC.textContent = 'Button C';

    tabGroup.append(buttonA, buttonB, buttonC);
    
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
