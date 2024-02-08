const privaateMessageModel = require('../models/privateMessage.js');
const userModel = require('../models/User.js');

// Sending message
exports.sendMessage = async (req, res) => {
    const from_user = await userModel.findOne({username: req.body.from_user});
    const to_user = await userModel.findOne({ username: req.body.to_user });

    if (from_user && to_user) {
        try {
            const newMessage = new privaateMessageModel({
                ...req.body
            });
            await newMessage.save();
            res.status(201).send(newMessage);
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(500).send({
            "status": false,
            "Error": "User doesn't exist."
        })
    }
}