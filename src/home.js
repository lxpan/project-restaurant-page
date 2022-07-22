import shinjukuVending from './images/shinjuku-vending.jpg';

export default function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');

    const hoursHeading = document.createElement('h2');
    const hoursPre = document.createElement('pre');

    const locationHeading = document.createElement('h2');
    const locationPara = document.createElement('p');
    
    const homeImage = new Image();
    // homeImage.src = shinjukuVending;
    // homeImage.className = 'homeSplash';

    function createContentDiv() {
        const contentPane = document.createElement('div');
        contentPane.classList.add('contentPane');
        return contentPane;
    }

    // const introDiv = document.createElement('div');
    const introDiv = createContentDiv();
    const hoursDiv = createContentDiv();
    const locationDiv = createContentDiv();

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Bringing convenience back to the streets.';
    paragraph.textContent = 'Located on the streets of Shinjuku, Toyko, in an unnamed alleyway, is your gateway to convenience. From salarymen burning the midnight oil to errant travellers, you can find everything that you need (and more) at Shinjuku 2049. We have the largest selection of beverages and snacks guaranteed to give you that buzz. We are Shinjuku 2049.';

    introDiv.append(headingTwo, paragraph);
    
    hoursHeading.textContent = 'Hours';
    const hoursOpen = 'Open 24 hours';
    hoursPre.textContent = `Monday: ${hoursOpen}\nTuesday: ${hoursOpen}\nWednesday: ${hoursOpen}*\nThursday: ${hoursOpen}\nFriday: ${hoursOpen}\nSaturday: ${hoursOpen}\nSunday: ${hoursOpen}\n\n*Machines may occasionally be serviced at 12am midnight.`;
    hoursPre.className = 'hoursOpen';
    hoursDiv.append(hoursHeading, hoursPre)


    locationHeading.textContent = 'Location';
    locationPara.textContent = 'Located in Alleyway 2049, Shinjuku, Tokyo.'
    locationDiv.append(locationHeading, locationPara);

    parent.append(
        headingOne,
        introDiv,
        hoursDiv,
        locationDiv
    );
}
