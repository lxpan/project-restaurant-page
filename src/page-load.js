import Trevor from './tjames.jpg';

export default function pageLoad(doc) {
    const content = doc.querySelector('#content');
    const headingOne = doc.createElement('h1');
    const headingTwo = doc.createElement('h2');
    const paragraph = doc.createElement('p');
    
    const homeImage = new Image();
    homeImage.src = Trevor;

    headingOne.textContent = 'The Trevor James Appreciation Restaurant';
    headingTwo.textContent = 'Tai Hao Le!';
    paragraph.textContent = 'Hey guys check it out it\'s Trevor James! Let me dazzle you with my slurping and mastication skills!';

    content.append(headingOne, headingTwo, paragraph, homeImage);
    return content;
}
