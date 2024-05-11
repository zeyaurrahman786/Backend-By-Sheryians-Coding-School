// Day 2 :-)




// Node.js Basics :----------------------------------------------------------------

// Introduction to Node.js.
// Installing Node.js and npm.



// node & npm
// working with node and npm
// npm init -> package.json install hota hai
// node basic usage



// Working with modules .
// File system operations.
// understanding HTTPS module.









// Introduction to Node.js :-)

/*
    Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine.

    Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
*/









// Installing Node.js and npm :-)

/*
    Node.js is available for Windows, Linux, and macOS.

    To install Node.js on Windows, download the installer from the official Node.js website.
*/








// File System Operations :-)

// write file
// append file
// copy file
// rename file
// unlink file



// const fs = require('node:fs');





// write file :-

// const fs = require('fs');
// fs.writeFile("Hey.txt", "Hey hello kaise ho !", function(err){
//     if(err) console.log(err);
//     else console.log("File created done");
// })





// append file :-

// fs.appendFile("Hey.txt", " Mai to acha hu !", function(err){
//     if(err) console.log(err);
//     else console.log("File created done");
// })





// rename file :-

// fs.rename("Hey.txt", "Hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File created done");
// })






// copy file :-

// let fs = require ("fs");
// fs.copyFile("Hello.txt", "./copy/New.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("File created done");
// })







// unlink File :-)

// let fs = require("fs");
// fs.unlink("Hello.txt", function(err){
//     if(err) console.log(err.message);
//     else console.log("File removed done");
// })







// Folder remove :-)

// let fs = require("fs");
// fs.rm("copy", function(err){
//     if(err) console.log(err.message);
//     else console.log("Folder removed done");
// })






// http and https :------------------------------------------------

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Welcome to the Internet Explorer server.");
})
server.listen(3000);