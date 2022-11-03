/**
 * Adding & removing styles
 */

const title = document.querySelector('h1');

// this will overwrite style from html
// title.setAttribute('style', 'margin: 50px;');

// this is the better way!
console.log(title.style);
console.log(title.style.color);

// Adding styles
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';

// Removing styles
title.style.margin = '';




