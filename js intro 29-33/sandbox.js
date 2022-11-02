/*
//function declarations & expressions

// function expression
const speak = function(){
    console.log('Good day!');
};

greet();
greet();
greet();

speak();
speak();
speak();

// function declaration
function greet(){
    console.log('Hello there.');
}
*/

// arguments & parameters
/*
const speak = function(name, time){
    console.log(`Good ${time}, ${name}!`);
};

// speak('Mario', 'morning');
speak();
*/

// returning values
/*
const speak = function(name = 'Luigi', time = 'night'){
    console.log(`Good ${time}, ${name}!`);
};
*/
/*
const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(area){

};

calcVol(area)
*/

// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// går att korta ner till
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('Area is:', area);

// practice arrow functions

// 1
// const greet = function(){
//     return 'hello, world';
// };

// const greet = () => 'hello, world';

// const result = greet();
// console.log(result);

// 2
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
