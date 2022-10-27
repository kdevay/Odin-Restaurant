
// Imports
import './style.css';
import OvalIcon from './oval.png';
import ClickedOvalIcon from './clickedOval.png';
import StorefrontIcon from './storefront.png';
import CafeLogo from './cafeLogo.png';

// DOM
const content = document.getElementById('content');

// Create content children
const header = document.createElement('div');// header container
header.setAttribute('id', 'header');
content.appendChild(header)
const tabButtons = document.createElement('div');// button container
tabButtons.setAttribute('id', 'tab-buttons');
content.appendChild(tabButtons)
const ovals = document.createElement('div');// ovals container
ovals.setAttribute('id', 'ovals');
content.appendChild(ovals)
const body = document.createElement('div');// body container
body.setAttribute('id', 'body');
content.appendChild(body)
// Header text
const headText = document.createElement('h1');
headText.textContent = 'RESTAURANT';
header.appendChild(headText);
// Buttons
const homeButton = document.createElement('button');
homeButton.setAttribute('id', 'h-button'); // Home
homeButton.textContent = 'Home';
tabButtons.appendChild(homeButton);
const menuButton = document.createElement('button');
menuButton.setAttribute('id', 'm-button'); // Menu 
menuButton.textContent = 'Menu';
tabButtons.appendChild(menuButton);
const aboutButton = document.createElement('button');
aboutButton.setAttribute('id', 'a-button'); // About
aboutButton.textContent = 'About';
tabButtons.appendChild(aboutButton);
// Ovals
let ovalCount = 0;
const ovalIds = ['h', 'm', 'a'];
while (ovalCount < 3) {
    let tempContainer = document.createElement('div');
    tempContainer.setAttribute('class', 'tab');
    ovals.appendChild(tempContainer);
    let tempOval = document.createElement('img');
    tempOval.setAttribute('class', 'logo');
    tempOval.setAttribute('id', ovalIds[ovalCount]);
    tempOval.setAttribute('src', OvalIcon);
    tempContainer.appendChild(tempOval);
    ovalCount++;
}
// Body children
const storefront = document.createElement('img');// home
storefront.setAttribute('id', 'storefront');
storefront.setAttribute('src', StorefrontIcon);
body.appendChild(storefront);
const menuTab = document.createElement('div');// menu-tab
menuTab.setAttribute('id', 'menu-tab');
body.appendChild(menuTab);
const aboutTab = document.createElement('div');// about-tab
aboutTab.setAttribute('id', 'about-tab');
body.appendChild(aboutTab);

// Menu Tab children
const menuImage = document.createElement('img');// image
menuImage.setAttribute('id', 'mlogo');
menuImage.setAttribute('src', CafeLogo);
menuTab.appendChild(menuImage);
const menuHeading = document.createElement('h1');// heading
menuHeading.setAttribute('id', 'monk');
menuTab.appendChild(menuHeading);
const menu = document.createElement('div');// menu
menu.setAttribute('id', 'menu');
menuTab.appendChild(menu);
// Menu text
const menuItems = [
    [
        'Salads & Snacks',
        'Big Salad.....................................$7.50',
        'Joe\'s Fruit Salad........................$5.00',
        'Thirsty Pretzels..........................$5.00',
    ],
    [
        'Lunch',
        'Pastrami + Spicy Mustard........$5.00',
        'Atomic Sub.................................$5.00',
        'H&H Bagel.................................$5.00',
        'No Soup for You.........................$5.00'
    ],
    [
        'Beverages',
        'Coffee..........................................$2.50',
        'Bosco Milk..................................$2.00',
        'Pepsi............................................$1.00'
    ],
    [
        'Dessert',
        'Muffin Tops(2)............................$3.00',
        'Garbage Eclair...........................$0.50',
        'Gentleman\'s snickers.................$1.00',
        'Pudding Skin Singles.................$0.20'
    ]];
let counter = 0;
while (counter < 4) {
    let section = menuItems[counter];
    let i = 0;
    let type = 'h3';
    while (i < section.length) {
        if (i !== 0) {
            type = 'h4';
        }
        let temp = document.createElement(type);
        temp.textContent = section[i];
        menu.appendChild(temp);
        if (type === 'h3') {
            menu.appendChild(document.createElement('hr'));
        }
        i++;
    }
    if (counter !== 3) {
        menu.appendChild(document.createElement('br'));
        counter++;
    } else {
        counter++;
    }
}

// About Tab children
const aboutHeading = document.createElement('h1');
aboutHeading.textContent = 'Welcome to Monk\'s';
aboutTab.appendChild(aboutHeading);
aboutTab.appendChild(document.createElement('br'));
aboutTab.appendChild(document.createElement('br'));
const p1 = document.createElement('h4');
p1.textContent = 'Yada yada yada. The sea was angry that day my friends. Jerry, just remember, it’s not a lie if you believe it. I lie every second of the day. My whole life is a sham. I’m disturbed, I’m depressed, I’m inadequate. I’ve got it all! I feel like my old self again. Totally inadequate, completely insecure, paranoid, neurotic. It’s a pleasure. ';
aboutTab.appendChild(p1);
aboutTab.appendChild(document.createElement('br'));
const p2 = document.createElement('h4');
p2.textContent = 'When you look annoyed all the time, people think that you’re busy. I’m much more comfortable criticizing people behind their backs. Yeah, I’m a great quitter. It’s one of the few things I do well. I come from a long line of quitters. If she can’t find me, she can’t break up with me. You\'re killing independent George! A George divided against itself cannot stand! You know it\'s funny, the tomato never took on as a hand fruit. I happen to dress based on mood. Yada yada yada. Don\'t insult me, my friend.Remember who you\'re talking to. No one\'s a bigger idiot than me.';
aboutTab.appendChild(p2);


// set default page behavior
storefront.style.display = 'block';
menuTab.style.display = 'none';
aboutTab.style.display = 'none';
body.style.backgroundColor = '';
body.style.border = 'none';

function changeButtonStyling(x, y, z) {
    console.log(x, y, z);
    let clickedOval = document.getElementById(x);
    clickedOval.setAttribute('src', ClickedOvalIcon);
    // change button text color
    document.getElementById(x + '-button').style.color = 'rgb(245, 233, 174)';

    let unclicked1 = document.getElementById(y);
    unclicked1.setAttribute('src', OvalIcon);
    document.getElementById(y + '-button').style.color = 'rgb(120, 9, 9)';

    let unclicked2 = document.getElementById(z);
    console.log(unclicked2);
    unclicked2.setAttribute('src', OvalIcon);
    document.getElementById(z + '-button').style.color = 'rgb(120, 9, 9)';
}

function changeTab(e) {
    // Get button's id
    let id = e.target.getAttribute('id');

    // If home button clicked
    if (id === 'h-button') {
        // Change button backgrounds & remove body styling
        changeButtonStyling('h', 'm', 'a');
        body.style.backgroundColor = 'rgb(245, 233, 174, 0)';
        body.style.border = 'none';
        // Display image tab, hide others
        storefront.style.display = 'block';
        menuTab.style.display = 'none';
        aboutTab.style.display = 'none';

    // If about button clicked
    } else if (id === 'm-button') {
        // Change button backgrounds & set body to default
        changeButtonStyling('m', 'h', 'a');
        body.style.backgroundColor = 'rgb(245, 233, 174)';
        body.style.border = '10px solid #5e2121';
        // Display about, hide others
        menuTab.style.display = 'grid';
        storefront.style.display = 'none';
        aboutTab.style.display = 'none';

    // If menu button clicked
    } else {
        // Change button backgrounds & set body to default
        changeButtonStyling('a', 'h', 'm');
        body.style.backgroundColor = 'rgb(245, 233, 174)';
        body.style.border = '10px solid #5e2121';
        // Display menu, hide others
        aboutTab.style.display = 'flex';
        storefront.style.display = 'none';
        menuTab.style.display = 'none';
    }

    // Change button text color
    e.target.style.color = 'rgb(245, 233, 174)';
    return;
}

// Event listeners
homeButton.addEventListener('click', changeTab);
menuButton.addEventListener('click', changeTab);
aboutButton.addEventListener('click', changeTab);