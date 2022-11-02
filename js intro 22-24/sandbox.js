// if statements
/*
const age = 25;

if(age > 20){
    console.log('You are over 20 years old.');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
    console.log("That's a lot of ninjas.");
}
*/

// logical operators - OR || and AND &&

const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')) {
    console.log('That password is mighty strong.');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('That password is strong enough.');
} else {
    console.log('That password is not strong enough.');
}