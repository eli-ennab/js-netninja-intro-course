/**
 * objects at glance
 */

// Se ordlista javascript

/**
 * object literals
 */

/*
let user = {
    name: 'crystal', 
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// update a property on an object
user.age = 35;
console.log(user.age);

// another way to access properties
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

// another way, less common
const key = 'location';
console.log(user[key]);

console.log(typeof user);
*/

/**
 * adding methods && 'this' keyword && objects in arrays
 */

// objects in arrays
// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

 let user = {
    name: 'crystal', 
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('The user logged in.');
    },
    // logout: function(){ kan också skrivas så här:
    logout(){
        console.log('The user logged out.');
    },
    logBlogs: function(){ //funkar inte om denna är arrow function!
        // console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            // console.log(blog);
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
console.log(this);


// user.login();
// user.logout();

// a string method
// const name = 'mario';
// name.toUpperCase();




