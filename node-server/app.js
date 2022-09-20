//app.js

const express = require('express');
const http = require("http");

const cors = require('cors');
const path = require('path');
const corsOptions = {
  origin: "*", //origin: ['https://xxx.nu.ac.th', 'http://xxx.nu.ac.th/']
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  credentials: true,
};

var app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

/**
 Create my-route
**/
/** specify the directory from where to serve static assets such as JavaScript, CSS, images **/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sweetalert2', express.static(__dirname + '/node_modules/sweetalert2/dist/'));
/** remove fix route and use path solution **/

const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: corsOptions
});

const welcomeMsg = "Connected Successfully!!";

io.on("connection", (socket) => {
  console.log("a user connected");  
  socket.emit("hi", welcomeMsg);

  setInterval(() => {
    let number = Math.random();
    socket.volatile.emit("random", number);
  }, 3000);

  //Work exercise ,Insert code here


});

var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});