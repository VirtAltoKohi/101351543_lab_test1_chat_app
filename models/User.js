const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    creation: { type: Date, default: Date.now }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;