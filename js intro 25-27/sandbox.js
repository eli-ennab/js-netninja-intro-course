// logical NOT (!)
/*
let user = false;
// false = not logged in

if(!user){
    console.log('You must be logged in to continue.');
}

console.log(!true);
console.log(!false);
*/

// break and continue
/*
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('Your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('Congrats, you got the top score!');
        break; //breaks out of the loop!
    }

}
*/

// switch statements
const grade = 'C';

/* DEN LÅNGA
if (grade === 'A'); {
 
} else if(grade === 'B'){

} else if(grade === 'C'){
    
} else if(grade === 'D'){
    
} else if(grade === 'E'){
    
} else {

}
*/

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade.');
}

// using if statements

