import shinjukuVending from './images/shinjuku-vending.jpg';

export default function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');
    const hoursHeading = document.createElement('h2');
    const hoursPara = document.createElement('p');
    const locationHeading = document.createElement('h2');
    const locationPara = document.createElement('p');
    
    const homeImage = new Image();
    // homeImage.src = shinjukuVending;
    // homeImage.className = 'homeSplash';

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Bringing convenience back to the streets.';
    paragraph.textContent = 'Located on the streets of Shinjuku, Toyko, in an unnamed alleyway, is your gateway to convenience. From salarymen burning the midnight oil to errant travellers, you can find everything that you need (and more) at Shinjuku 2049. We have the largest selection of beverages and snacks guaranteed to give you that buzz. We are Shinjuku 2049.';
    
    hoursHeading.textContent = 'Hours';
    hoursPara.textContent = 'Open 24/7, 7 days a week.'
    locationHeading.textContent = 'Location';
    locationPara.textContent = 'Located in Alleyway 2049, Shinjuku, Tokyo.'

    parent.append(
        headingOne,
        headingTwo,
        paragraph,
        homeImage,
        hoursHeading,
        hoursPara,
        locationHeading,
        locationPara
        );
}
