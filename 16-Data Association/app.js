const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');
const post = require('./models/post');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "zeyaur",
        age: 21,
        email: "zeyaur@gmail.com"
    });
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdta: "Hello kaise ho sabhi",
        user: "666f4213fb0db6916e936dcc"
    })

    let user = await userModel.findOne({_id: "666f4213fb0db6916e936dcc"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(4000);