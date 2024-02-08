const userModel = require('../models/User.js');

// Signing up new user
exports.userSignup = async (req, res) => {
    try {
        const newUser = new userModel({
            ...req.body
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send(error);
    }
}

// loging in existing user
exports.userLogin = async (req, res) => {
    const user = await userModel.findOne({ username: req.body.username });

    if (user) {
        if (req.body.password === user.password) {
            res.status(200).send({
                "status": true,
                "username": req.body.username,
                "message": "User Logged in successfully"
            });
        } else {
            res.status(401).send({
                "status": false,
                "message": "invalid password"
            });
        }
    } else {
        res.status(401).send({
            "status": false,
            "message": "Invalid Username and Password"
        });
    }
}