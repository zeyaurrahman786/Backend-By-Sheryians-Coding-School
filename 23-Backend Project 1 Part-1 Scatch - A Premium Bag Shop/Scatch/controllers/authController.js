const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require("../utils/generateToken");



module.exports.registerUser = async (req, res) => {
    try {
    let {fullname, email, password} = req.body;

    let user = await userModel.findOne({email: email});
    if(user) return res.status(500).send("You already have an account, Please login");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if(err) return res.send(err.message);
            else {
                 let user = await userModel.create({
                    fullname,
                    email,
                    password : hash,
                });

                let token = generateToken(user);
                res.cookie("token", token);
                res.send("user created successfully");

            }
        });
    });
    } catch (err) {
        res.send(err.messege);
    }
};


module.exports.loginUser = async (req, res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({email: email});
    if(!user) return res.status(500).send("You don't have an account, Please register");

    bcrypt.compare(password, user.password, async (err, result) => {
        if(err) return res.send(err.message);
        else if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("user logged in successfully");
        }
        else return res.status(500).send("Incorrect password");
    });
};