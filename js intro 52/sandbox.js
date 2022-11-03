/**
 * Parents, children & siblings
 */

const article = document.querySelector('article');

// // Blir en HTML collection och det går inte att göra forEach på den
// console.log(article.children);
// // Blir en array och möjligt att göra forEach (non-destructive)
// console.log(Array.from(article.children));

// Give all elements inside a parent a class 
// Array.from(article.children).forEach((child) =>{
//     child.classList.add('article-element');
// })

const title = document.querySelector('h2');
// Finding out the parent
console.log(title.parentElement);
// Finding out the parents parent
console.log(title.parentElement.parentElement);
// Finding out the next sibling
console.log(title.nextElementSibling);
// Finding out the previous sibling
console.log(title.previousElementSibling);  // null if it doesn't have one

// Chaining
console.log(title.nextElementSibling.parentElement.children);

