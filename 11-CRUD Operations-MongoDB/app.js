const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "zeyaur",
        email: "zeyaurrahman@gmail.com",
        username: "zeyaurrahman",
    })

    res.send(createduser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.find({username: "zeyaurrahman"});
    res.send(users)
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "zeyaurrahman"}, {name: "rahman zeyaur"}, {new: true})
    res.send(updateduser);
})

app.get("/delete", async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({username: "zeyaurrahman"});
    res.send(deleteduser);
})

app.listen(5000);