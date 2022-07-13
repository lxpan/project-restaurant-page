export default function pageLoad(doc) {
    const content = doc.querySelector('#content');
    const headingOne = doc.createElement('h1');
    const headingTwo = doc.createElement('h2');
    const image = doc.createElement('img');
    const paragraph = doc.createElement('p');

    headingOne.textContent = 'The Trevor James Appreciation Restaurant';
    headingTwo.textContent = 'Tai Hao Le!';
    paragraph.textContent = 'Hey guys check it out it\'s Trevor James! Let me dazzle you with my slurping and mastication skills!';

    return content.append(headingOne, headingTwo, paragraph);
}
