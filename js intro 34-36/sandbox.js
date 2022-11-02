/*
 * Functions vs methods
*/

/*
const name = 'shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);
*/

/*
 * Callback functions & foreach
*/

// callback
/*
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});
*/

// foreach
/*
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);
*/

/*
 * Callback functions in action
*/

// callback functions in action

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

// people.forEach(function(person){
people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;




