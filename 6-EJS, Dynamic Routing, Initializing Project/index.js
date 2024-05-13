const express = require("express");
const app = express();
const path = require("path");


// setting up parsers for form :-)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// setting up public static files :-)
app.use(express.static(path.join(__dirname, "public")));


// setup ejs as a view engine
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile/:username", function(req, res){
    res.send(`Welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function(req, res){
    // res.send(req.params);
    res.send(`Welcome,  ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("Its running");
})