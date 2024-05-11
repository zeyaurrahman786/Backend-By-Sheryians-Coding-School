// Day 1 :-)

// alert("Hello");




// Fundamenatals of JavaScript :----------------------------------------------------------------

// arrays and objects 
// functions return 
// async js coding







// arrays :-)


/*
    Array ek data structure hai jo ek ya multiple values ko ek variable mein store karta hai. Ye values ek sequence mein hote hain, jise hum index ke zariye access kar sakte hain. Har value ko array mein ek specific index assign hota hai, jisse us value ko retrieve karna asaan hojata hai. Ye ek flexible aur powerful tool hai programming mein, jo ki multiple values ko organize aur manipulate karne mein madad karta hai. Har programming language mein arrays ka istemal hota hai, lekin syntax aur functionality language se language vary karta hai. 
*/

// var arr = [1,2,3, "Hey", {}, true, false, function(){}, []];





// foreach    map     filter      find    indexOf  :--------------------------------


// foreach :-)

/**
    JavaScript mein, `forEach` array ke har element par ek function ko apply karta hai. Is function ko hum parameter ke roop mein pass karte hain. Har iteration mein, `forEach` function array ke ek element ko lekar apne function ko call karta hai. Is tareeke se, hum array ke har element par ek action perform kar sakte hain.
*/

// var arr = [1,2,3,4];
// arr.forEach(function (val){
//     console.log(val+" Hello");
// }) 







// map :-)

/**
    `map` bhi ek programming concept hai jo arrays ko manipulate karne mein istemal hota hai, lekin `forEach` se thoda alag hota hai. `map` method ek naya array banata hai jo original array ke har element par ek function ko apply karta hai, aur phir uss function se return kiya gaya result ko naye array mein store karta hai.
*/

// var arr = [1,2,3,4];
// var newArr = arr.map(function (val){
//     return val;
// })
// console.log(newArr); // [1,2,3,4]


// var arr = [1,2,3,4];
// var newArr = arr.map(function (val){
//     return 10;
// })
// console.log(newArr); // [10,10,10,10]



// var arr = [1,2,3,4];
// var newArr = arr.map(function (val){
//     return val*10;
// })
// console.log(newArr); // [10, 20, 30, 40]








// filter :-)

/*
    `filter` ek aur programming concept hai jo arrays ko manipulate karne mein istemal hota hai. `filter` method ek naya array banata hai jo original array se un elements ko contain karta hai jo ek specific condition ko satisfy karte hain.
*/

// var arr = [1,2,3,4,5];
// var newArr = arr.filter(function (val){
//     return val > 3;
// })
// console.log(newArr); // [4,5]







// find :-)

/*
    `find` ek programming concept hai jo arrays mein specific elements ko dhundhne ke liye istemal hota hai. `find` method ek array ke har element par ek function ko apply karta hai aur pehla element ko return karta hai jo function ke dwara true return karta hai.
*/

// var arr = [1,2,3,4,5,6];
// var newArr = arr.find(function(val){
//     return val > 5;
// })
// console.log(newArr); // 6


// var arr = [1,2,3,4,5,6];
// var newArr = arr.find(function(val){
//     if(val === 4) return val;
// })
// console.log(newArr); // 4








// indexOf :-)

/*
    `indexOf` ek JavaScript array method hai jo ek specified value ko dhundhne ke liye istemal hota hai. Ye method ek array mein di gayi value ya element ka index return karta hai. Agar value array mein nahi milti hai, to -1 return hota hai.


    const fruits = ['apple', 'banana', 'orange', 'grape', 'banana'];

    const bananaIndex = fruits.indexOf('banana');
    console.log(bananaIndex); // Output: 1 (kyunki 'banana' ka pehla index 1 hai)

    const kiwiIndex = fruits.indexOf('kiwi');
    console.log(kiwiIndex); // Output: -1 (kyunki 'kiwi' array mein nahi hai)

*/

// var arr = [1,2,3,4,5];
// var newArr = arr.indexOf(4);
// console.log(newArr); // 3







// objects :----------------------------------------------------------------

/*
    Objects ek fundamental concept hai JavaScript mein. Ye ek composite data type hote hain jo key-value pairs ki collection ko represent karte hain. Har ek key ek unique identifier hoti hai aur us key ke corresponding value ko access karne ke liye use kiya jata hai.

    Objects curly braces `{}` ke andar define kiye jate hain, jismein har ek key-value pair comma ke saath separate hota hai. Key ek string ya symbol hoti hai aur value koi bhi JavaScript data type ho sakta hai, jaise number, string, array, function, aur even another object.


    const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking', 'traveling'],
    greet: function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
    };

    console.log(person.name); // Output: John
    console.log(person.age); // Output: 30
    console.log(person.hobbies[0]); // Output: reading

    person.greet(); // Output: Hello, my name is John and I am 30 years old.


    Is example mein, `person` object ko define kiya gaya hai jismein `name`, `age`, `hobbies`, aur `greet` keys hain. Har ek key ke saath uska corresponding value diya gaya hai. Object ke properties aur methods ko access karne ke liye dot notation (`objectName.propertyName`) ka istemal kiya ja sakta hai.
*/


// var obj = {
//     name : "Zeyaur Rahman",
//     age: 21
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);




// var obj = {
//     name : "Zeyaur Rahman",
//     age: 21
// }
// Object.freeze(obj); // freeze karne ke baad kuch bhi change nahi kar sakte hai 
// obj.age = 25;
// console.log(obj.age);








// function :----------------------------------------------------------------

/*
    JavaScript mein functions ek essential part hain. Ye programming mein reusability ko promote karte hain aur code ko organize aur modular banate hain.

    Functions ek block of code hote hain jo specific task ko perform karte hain. In functions ko define kiya ja sakta hai aur phir unhe multiple baar call kiya ja sakta hai.
*/


// function abcd() {
//     return 12;
// }
// console.log(abcd());



// function abcd() {
//     return "Hello world";
// }
// console.log(abcd());









// asynchronous JavaScript :----------------------------------------------------------------

/*
    Async JavaScript refers to writing asynchronous code in JavaScript using concepts like Promises, async/await, and asynchronous functions.

    Asynchronous code allows JavaScript to execute tasks without blocking other operations, making it particularly useful for handling time-consuming tasks like fetching data from servers or performing I/O operations.

    Here's a brief overview of some async JavaScript concepts :-



    1. Callbacks :- Callbacks are functions passed as arguments to other functions. They are commonly used in asynchronous operations to handle the result of an operation once it completes.

    function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched!');
    }, 2000);
    }

    fetchData((result) => {
    console.log(result); // Output: Data fetched!
    });



    2. Promises :- Promises provide a cleaner alternative to callbacks for managing asynchronous operations. They represent a future value or event that may or may not happen. Promises can be in one of three states :- pending, fulfilled, or rejected.

    function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Data fetched!');
        }, 2000);
    });
    }

    fetchData().then((result) => {
    console.log(result); // Output: Data fetched!
    });



    3. Async/Await: Async functions and the await keyword provide syntactic sugar for working with promises. Async functions return promises implicitly, and the await keyword pauses the execution of an async function until the promise is settled (resolved or rejected).

    async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Data fetched!');
        }, 2000);
    });
    }

    async function printData() {
    const result = await fetchData();
    console.log(result); // Output: Data fetched!
    }

    printData();


    Async JavaScript allows developers to write more readable and maintainable code, especially when dealing with complex asynchronous operations.
*/



// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api`);
//     var ans = await blob.json();
//     // console.log(ans);

//     console.log(ans.results[0].name);
// }
// abcd();