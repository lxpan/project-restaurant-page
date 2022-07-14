import pageLoad from "./page.js";

// Create our skeleton #content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

const content = pageLoad(document);
console.log(__webpack_public_path__);
console.log(content);
