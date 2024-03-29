const express = require("express");
const bodyPaser = require("body-parser");
const { Server } = require("socket.io");


const { db } = require("./db/db.connect");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");

const io = new Server({
  
  cors : true ,

});
const app = express();

app.use(bodyPaser.json());

const emailToScoketMaping = new Map();
const socketToEmailMapping = new Map();

io.on('connection' , (socket) => {
  
  console.log("new connection");

   socket.on('join-room' , data => {
     const { roomId , emailId  } = data;
     
     console.log('user' , emailId , 'joined' , roomId);

    emailToScoketMaping.set(emailId , socket.id );
    socketToEmailMapping.set(socket.id , emailId );

    socket.join(roomId);
    socket.emit('joined-room' , {roomId})
    socket.broadcast.to(roomId).emit("user-joined" , { emailId })

   })

   socket.on ('call-user' , data => {
      const { emailId , offer } = data ;
      const fromEmail  =  socketToEmailMapping.get(socket.id);
      const socketId = emailToScoketMaping.get(emailId)
      socket.to(socketId).emit('incoming-call' , {  from : fromEmail  , offer } )

   })

   socket.on('call-accepted' , (data) => {
     
    const { emailId , ans } = data ;
     const socketId  = socketToEmailMapping.get(emailId);
     socket.to(socketId).emit('call-accepted' , { ans} )

   })

});


const cors = require('cors');

db();
app.use(express.json());
app.use(cors())
app.use(userRoutes);

app.get("/", (req, res) => {

  res.send(`<h1>Welcome Zoom-clone APIs!</h1>`);

});

const PORT = process.env.PORT || 4000;

 app.listen(PORT, () =>

  console.log(`server is running on port ${PORT}`)
);

io.listen( 8001 )
