// Day 7 :-) Hands-on Practice from Past Lessons

// Day 8 :-) Putting Theory into Practice

// Day 9 :-) Edit feature code 

// Three lectures merge in one folder or file in one project.




// We're making a notes taking web app



/* installation :- 
                    npm init -y
                    npm i express
                    npm i nodemon -g
*/





const express = require("express");
const app = express ();
const path = require('path');
const fs = require('fs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res){
    
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files});
    })

})

app.get('/file/:filename', function(req, res){
    
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        // console.log(filedata);
        res.render('show', {filename: req.params.filename, filedata: filedata});
    })

})

app.get('/edit/:filename', function(req, res){
    res.render('edit', {filename: req.params.filename});
})

app.post('/edit', function(req, res){
    // console.log(req.body);
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/');
    })
})

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/');
    })
})

app.listen(3000);