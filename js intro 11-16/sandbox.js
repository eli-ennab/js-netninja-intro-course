// template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// arrays!
// let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken'; // how to overwrite
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'chrystal', 30, 20];
// console.log(random);

// console.log(ninjas.length); // length of an array, how many elements are inside the array

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken', 'chrystal']);
// let result = ninjas.push('ken'); // a destroptive method, that returning the new length of the new array
// result = ninjas.pop();

// console.log(result);

// null and undefined
// let age; // undefined
// let age = null; // null
// console.log(age, age + 3, `the age is ${age}`);

// booleans and comparisons
// console.log(true, false);

// methods can return booleans
// let email = 'eli@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');
// console.log(result);

// comparison operators

// let age = 25;

// console.log(age == 25); // equal
// console.log(age == 30);
// console.log(age != 30); // not equal
// console.log(age > 20); // greater than
// console.log(age < 20); // less than
// console.log(age <= 25); // less than or equal to
// console.log(age >= 25); // greater than or equal to

// let name = 'eli';

// console.log(name == 'eli');
// console.log(name == 'Eli');
// console.log(name > 'chrystal'); // greater than but with letters, A is greater than B and so on.
// console.log(name > 'Eli'); // lower case letters is greater that uppercase letters
// console.log(name > 'Chrystal');

// loose comparisons (different types can still be equal)

let age = 25;

// console.log(age == 25); // loose comparison
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparisons (different types can still be equal)
// no conversion! so they are not equal
console.log(age === 25); // strict comparison
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');