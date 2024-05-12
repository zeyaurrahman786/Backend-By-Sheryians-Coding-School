// Day 4 :-)



// Express.js Framework :----------------------------------------------------------------

/*
    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
*/


// Introduction to Express.js.
// Setting up a basic Express application.
// Routing.
// Middleware.
// Request and Response handling.
// Error handling.








// Introduction to Express.js :-)

/*
    Express.js ek Node.js framework hai jo server-side web applications aur APIs banane mein madad karta hai. Yeh ek minimalist, flexible, aur powerful framework hai jo developers ko web applications ko jaldi se develop aur scale karne ki suvidha deta hai. Express.js, Node.js ke saath mil kar JavaScript par aadharit hai aur routing, middleware, template engines, aur HTTP requests ke saath interact karne ke liye ek set of methods aur tools provide karta hai. Ye popular hai kyunki iska learning curve kam hota hai aur isme flexibility aur customization ki bhar poori hai.



    Express.js ek npm package hai
    Express.js framework hota hai
    manages everything from receiving the request and giving the response
*/









// Setting up a basic Express application :-) npm i express


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000);










// Routing :-)

/*
    Routing is the process of determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
*/



// app.get(route, requestHandler)


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send("Zeyaur Rahman Service Provider");
// });

// app.get('/about', function (req, res) {
//     res.send("I'm a web developer.");
// });

// app.listen(3000);







// {npm i nodemon -g} -> Package install karna hai terminal par 
// {npx nodemon '.\4-Express js\script.js'} -> yeh code terminal par likh kar enter karne se baar baar localhost ko start karne ka jarurat nahi padega auto update hoga.









// Middleware :-)

/*
    Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.


    Middleware functions can perform the following tasks :-
    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware function in the stack.
    If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.


    Jab bhi seerver request accept karta hai waha se route ke beech pahunchne tak agar aap us request ko beech me rokte ho and kuchh perform karte ho, to ye element middlleware kahlaata hai.
*/


// const express = require('express')
// const app = express()

// app.use(function(req, res, next) {
//     console.log("Middleware Chala");
//     next();
// });

// app.use(function(req, res, next) {
//     console.log("Ek baar aur Middleware Chala");
//     next();
// });

// app.get('/', function (req, res) {
//     res.send("Zeyaur Rahman Web Developer");
// });

// app.get('/about', function (req, res) {
//     res.send("About Page hai yeh");
// });

// app.get('/profile', function (req, res) {
//     res.send("Profile Page hai yeh");
// });

// app.listen(3000);










// Error Handler :-)

// const express = require('express')
// const app = express()

// app.use(function(req, res, next) {
//     console.log("Middleware Chala");
//     next();
// });

// app.use(function(req, res, next) {
//     console.log("Ek baar aur Middleware Chala");
//     next();
// });

// app.get('/', function (req, res) {
//     res.send("Zeyaur Rahman Web Developer");
// });

// app.get('/about', function (req, res) {
//     res.send("About Page hai yeh");
// });

// app.get('/profile', function (req, res, next) {
//     return next(new Error ("Something went wrong!"));  // Yeh jayega console pe
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something went wrong, please try again');  // yeh jayega frontEnd pe
// })

// app.listen(3000);