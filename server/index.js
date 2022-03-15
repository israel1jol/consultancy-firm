const express = require("express");
const cors = require("cors");
const  http = require("http");
const mongoose = require("mongoose");
const socket_io  = require("socket.io");

//Import env variables
require("dotenv").config();

const app = express()
cors({origin:"*"});
const server = http.createServer(app);

//Connect to Database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true});

//MongoDB Connection Listener
mongoose.connection.once("open", () => {
    console.log("MONGODB Connection established");
})

//socket.io Instance
const io = socket_io(server, {cors:{origin:"*"}});


//Socket.io connection Listener
io.on("connection", (socket) => {
    console.log("New socket instance created");


    socket.on("join", () => {
        console.log("New user has been added to room");
    })
})

app.use("/api/v1/auth", require("./routes/Auth"));

const PORT = process.env.PORT;

//Mount server instance on port
server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));