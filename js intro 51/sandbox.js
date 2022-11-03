/**
 * Adding & removing classes
 */

// const content = document.querySelector('p');

// console.log(content.classList);

// // adding classes
// content.classList.add('error');

// // removing classes
// content.classList.remove('error');

// // adding another class
// content.classList.add('success');

/**
 *  Adding classes
 */

const paras = document.querySelectorAll('p');

paras.forEach(p =>{
    // we will get all the visible text available
    // console.log(p.innerText);
    // we will get all of the text inside of the tag regardless if it's hidden or not
    // console.log(p.textContent);

    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
})

// Toggle method

const title = document.querySelector('.title');

// we give it the class of 'test' instead of 'title'
title.classList.toggle('test');
// if we use it again we remove 'test'
// title.classList.toggle('test');


