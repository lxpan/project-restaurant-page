import shinjukuVending from './images/shinjuku-vending.jpg';

export default function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');
    
    const homeImage = new Image();
    homeImage.src = shinjukuVending;
    homeImage.className = 'homeSplash';

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Tai Hao Le!';
    paragraph.textContent = 'Hey guys check it out it\'s Trevor James! Let me dazzle you with my slurping and mastication skills!';

    parent.append(headingOne, headingTwo, paragraph, homeImage);
}
