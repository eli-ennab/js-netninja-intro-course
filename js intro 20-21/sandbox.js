// for loop
/*
for(let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
*/

// while loops
/*
let i = 0;

while(i < 5) {
    console.log('in loop:', i);
    i++; // utan denna så blir det en infinite loop = krasch!
}
*/
/*
const names = ['shaun', 'mario', 'luigi'];

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
*/

// do while loops
let i = 1;
do{
        console.log('value of i is: ', i)
        i++;
} while(i < 5);