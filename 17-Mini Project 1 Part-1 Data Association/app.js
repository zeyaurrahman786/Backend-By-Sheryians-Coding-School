const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', async (req, res) => {

    let {name, username, age, email, password} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                name,
                username,
                age,
                email,
                password:  hash
            });

            let token = jwt.sign({email: email, userid: user._id}, "shhhh");
            res.cookie('token', token);
            res.send('registered');
        });
    });
});

app.get('/login', isLoggedIn, (req, res) => {
    console.log(req.user);
    res.render('login');
});

app.get('/profile', (req, res) =>{
    res.render('login');
});

app.post('/login', async (req, res) => {

    let {email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(505).send("Something went wrong");

   bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
          let token = jwt.sign({email: email, userid: user._id}, "shhhh");
          res.cookie('token', token);  
          res.status(200).send("You can now login");
        } 
        else res.redirect("/login");
   })
});

app.get('/logout', function(req, res) {
    res.cookie("token", "");
    res.redirect("/login");
});

function isLoggedIn(req, res) {
    if(req.cookies.token === "") res.send("You must be logged in");
    else{
        let data = jwt.verify(req.cookies.token, "shhhh");
        req.user = data;
        next();
    } 
    
}

app.listen(3000);