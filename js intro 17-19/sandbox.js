// type conversion
// let score = 100;

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100); // remember! 0 (zero) is false.
// let result = Boolean('');

// console.log(result, typeof result);

// for loops
// the job of a loop through a portions of code
// over and over a set number of times! 

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// };

// console.log('loop finished');

// let i = 0; is a initialisation variable
// i < 5; is is a condition, evaluate wether true or false. if true, then it'll be in the codeblock.
// i++ is the end of the code block, at the end it'll take i and add one to it.
// hela loopar tills i är mer än fem!

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    // console.log(names [i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// one iteration is one loop!