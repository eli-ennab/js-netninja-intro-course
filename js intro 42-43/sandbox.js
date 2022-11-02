/**
 * math object
 */

/*
console.log(Math);
console.log(Math.PI);   // PI
console.log(Math.E);    // Eulers number (2.71828)

const area = 7.7;

console.log(Math.round(area));  // Runda av
console.log(Math.floor(area));  // Runda neråt
console.log(Math.ceil(area));   // Runda uppåt
console.log(Math.trunc(area));  // Tar bort decimaltalet och lämnar heltalet kvar

// random number

const random = Math.random();             // Random nummer mellan 0-1
console.log(random);
console.log(Math.round(random * 100));    // Heltal mellan 1-100
*/

/**
 * primitive & reference types, stack & heap
 */

/*
const scoreOne = 50;        // 50 (stack)
const scoreTwo = scoreOne;  // 50 (heap)
scoreOne = 100;             // 100, uppdaterar bara scoreOne (stack)

const userOne = { name: 'eli', score: 100}; // (stack)
const userTwo = userOne;                    // uppdateras om userOne ändras! (heap)
userOne = { name: 'eli', score: 50};        // userTwo blir som userOne (stack)
*/

// primitive values

/*
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
*/

// reference values

/*
const userOne = { name: 'eli', age: 31 }; 
const userTwo = userOne;  
console.log(userOne, userTwo);

userOne.name = 'tina';
userOne.age = 38;
console.log(userOne, userTwo);
*/
