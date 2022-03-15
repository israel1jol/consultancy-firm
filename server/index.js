const express = require("express");
const cors = require("cors");
const  http = require("http");
const mongoose = require("mongoose");
const socket_io  = require("socket.io");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = socket_io(server, {cors:{origin:"*"}});


const PORT = process.env.PORT;
server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));