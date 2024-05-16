// 1. Cookie kaise set karte hai aur read karte hai




// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();

// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.cookie("Name", "Zeyaur")
//     res.send('Cookies are secure and will be automatically refreshed every 30 minutes.');
// });

// app.get('/read', (req, res) => {
//     console.log(req.cookies);
//     res.send('Read page');
// });

// app.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// });










// 2. Bcrypt kaise use karte hai for password encryption and decryption 


// Encryption :-)

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("zeyaur", salt, function(err, hash) {
//             console.log(hash);
//         });
//     });
// })

// app.listen(3000);




// Decryption :-)

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.get('/', (req, res) => {
//     bcrypt.compare("isme hamara password rahega", "isme hash password rahega", function(err, result) {
//         console.log(result);
//     });
// });

// app.listen(3000);










// 3. JWT kya hai, JWT mein data kaise store karein and bahaar nikalein



const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get('/', (req, res) => {
    const token = jwt.sign({email: "zeyaur@gmail.com"}, "secret", {expiresIn: "1h"});
    res.cookie('token', token)
    res.send('Cookies are secure and will be automatically refreshed every 1 hour.');
});

app.get('/read', (req, res) => {
    // console.log(req.cookies);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);