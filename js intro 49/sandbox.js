/**
 * Getting & setting attributes
 */

// How to get the attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// How to change the attribute
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

// Changing existing class attributes
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
// Adding class attribute
mssg.setAttribute('style', 'color: green');



