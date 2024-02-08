const groupMessageModel = require('../models/GroupMessage.js');
const userModel = require('../models/User.js');

// Sending message
exports.sendMessage = async (req, res) => {
    const user = await userModel.findOne({ username: req.body.from_user})

    if (user) {
        try {
            const newMessage = new groupMessageModel({
                ...req.body
            });
            await newMessage.save();
            res.status(201).send(newMessage); 
        } catch (err) {
            res.status(500).send(err);
        }
    }
}