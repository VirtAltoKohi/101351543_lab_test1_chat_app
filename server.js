const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const userRoute = require(__dirname + '/routes/userRoutes.js');
const groupMessageRoute = require(__dirname + '/routes/groupMessageRoutes.js');
const privateMessageRoute = require(__dirname + '/routes/privateMessageRoutes.js');

const SERVER_PORT = process.env.PORT || 3000;

// App Startup
const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

app.use(express.json())
app.use(express.urlencoded());

mongoose.connect('mongodb+srv://admin:KNZJwkdoAfSrpiA2@comp3133.bhrgzig.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log(`MongoDB connected ${success}`)
}).catch(err => {
    console.log(`Error while MongoDB connection ${err}`)
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/groupMessaging", groupMessageRoute);
app.use("/api/v1/privateMessaging", privateMessageRoute);

const indexRoute = require('./routes/index.js');
app.use('/', indexRoute);

// Start Server
app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
});

