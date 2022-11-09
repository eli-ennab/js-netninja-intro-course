/**
 * Events & event listeners
 */

// Button click event
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('You clicked me.');
// });

// Attach event(listener) to items(the li-tags)
// Circle trhough the node list
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // console.log('Item clicked.')                     //'Item clicked'
//         // console.log(e);                                  // <li>content</li>                          
//         // console.log(item);                               // <li>content</li> 
//         // console.log(e.target);                           // <li>content</li> 
//         e.target.style.textDecoration = 'line-through';     // overwitten content
//     });
// });

/**
 * Creating and removing tags
 */

// Deleting items

// // Deleting the ul
// const ul = document.querySelector('ul');
// // ul.remove();

// // When pressing the button, we add a new <li>
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>something new</li>';            // add a new <li>
//     const li = document.createElement('li')                 // an alternative way
//     li.textContent = 'something new to do';
//     // ul.append(li);                                       // append adds to the bottom of the parent
//     ul.prepend(li);                                         // append adds to the top of the parent
// });

// // When click the item is removed!
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // e.target.style.textDecoration = 'line-through';     // overwitten content
//         // e.target.remove();                                  // The clicked <li> removed
//     });
// });

/**
 * Event bubbling & delegation
 */

 const ul = document.querySelector('ul');
 const button = document.querySelector('button')
 
 button.addEventListener('click', () => {
     const li = document.createElement('li')                 // an alternative way
     li.textContent = 'something new to do';
     ul.prepend(li);                                         // append adds to the top of the parent
 });
 
//  const items = document.querySelectorAll('li');
 
//  items.forEach(item => {
//      item.addEventListener('click', (e) => {
//         console.log('Event in LI.');
//         e.stopPropagation();                                // Stop the event from bubbling up to the parent (ul)
//         e.target.remove();                                  // The clicked <li> removed
//      });
//  });

// Targetting new and old li-tags 
 ul.addEventListener('click', e => {
    // console.log('Event in UL.');
    // console.log(e.target);                                      // <li>content</li>
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});