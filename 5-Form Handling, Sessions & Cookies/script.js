// Day 5 :-)




// Form handling and working with  the forms :-)

// Handle backend process of forms and making sure the data coming from any frontend library, framework , templating engines, we still handle it at the backend 


/*
    Form handling is the process of taking user input from a form and processing it in a way that is useful to the user. It is also known as user input validation, which is the process of ensuring that the user's input is valid and can be used in a meaningful way.


    Form handling ek web development concept hai jismein web forms ka data collect, validate aur process karna hota hai. Jab users web pages par kisi information ko submit karte hain, jaise ki text fields, dropdowns, checkboxes, ya radio buttons se, woh data ek form ke through server tak pahunchta hai. Form handling ka kaam yeh hota hai ki woh data sahi tarike se receive kiya jaye, validate kiya jaye (yani ki user ne sahi tarike se data diya hai ya nahi), aur fir us data ko appropriate actions ke liye process kiya jaye, jaise ki database mein store karna, email bhejna, ya kuch aur response generate karna.

    Form handling ke liye server-side languages jaise ki PHP, Python, Node.js, etc. ka istemal hota hai. Ye languages form data ko receive karte hain, validate karte hain, aur fir desired actions perform karte hain. Iske alawa client-side scripting languages jaise ki JavaScript bhi form handling mein madad karte hain, jaise ki client-side validation, yani ki form data ko user ke browser par hi validate karna, server par jane se pehle.
*/






// Cookies installation :-) npm i cookie-parser



// Session Cookies :-) Hum log kuchh bhi data frontend par browser par rakh sakte hai and jab bhi aap kuch bhi request backend par karoge wo frontend par saved dat automatically backend  chala jayega 



/*
    Session cookies ek prakar ke temporary cookies hote hain jo web browser ke memory mein store kiye jaate hain jab aap kisi website ko visit karte hain. Ye cookies session ke dauran temporary hote hain aur session khatam hone par automatically delete ho jaate hain.

        Jab aap kisi website ko visit karte hain, server aapko ek unique session ID assign karta hai aur ye session ID session cookies mein store hota hai. Is session ID ke saath, server aapke dwara kiye gaye activities aur preferences ko track karta hai. Jab aap apne browser ko band karte hain ya session samapt ho jaata hai, session cookies automatically delete ho jaate hain.

    Session cookies ka upyog user ko website mein navigate karne mein madad karte hain aur temporary information ko store karne mein madad karte hain, jaise ki shopping cart mein items ko store karna ya user ke login status ko track karna. Ye cookies security aur privacy ke liye bhi mahatvapurna hote hain kyunki ye sirf ek session ke dauran hi valid hote hain aur long-term tracking ko allow nahi karte hain.
*/










// express.json & express.urlencoded :-)


// const express = require('express');
// const app = express();

// app.use(express.json());  // API me json data ko read karne ke liye isko use karte hain
// app.use(express.urlencoded({ extended: true})); // API me  urlencoded ko read karne ke liye isko use karte hain

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