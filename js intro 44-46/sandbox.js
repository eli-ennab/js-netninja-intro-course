/**
 * the query selector, quering the DOM
 */

// const para = document.querySelector( 'body > h1' );
// console.log(para);

// node list in the console
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para);
// });
// console.log(paras [1]);

// const errors = document.querySelectorAll('.error')
// console.log(errors);

/**
 * other ways to query the DOM
 */

//  get element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get element by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);