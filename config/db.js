const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://admin:KNZJwkdoAfSrpiA2@comp3133.bhrgzig.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log(`MongoDB connected ${success}`)
}).catch(err => {
    console.log(`Error while MongoDB connection ${err}`)
});

module.exports = db;