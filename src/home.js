import shinjukuVending from './images/shinjuku-vending.jpg';

export default function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');
    
    const homeImage = new Image();
    // homeImage.src = shinjukuVending;
    // homeImage.className = 'homeSplash';

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Bringing convenience back to the streets.';
    paragraph.textContent = 'Welcome to Shinjuku 2049 Vending Corp! We have the largest selection of edibles and accessories.';

    parent.append(headingOne, headingTwo, paragraph, homeImage);
}
