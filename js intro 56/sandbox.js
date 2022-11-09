/**
 * More events
 */

// Copy event
// Om du högerklickar på något och kopierar
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! My content is copyright');
});

// Mouse move event (in the box)
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

// Wheel event (scroll)
// Funkar inte?
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});
