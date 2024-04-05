const express = require("express");
const bodyPaser = require("body-parser");
const { Server } = require("socket.io");


const { db } = require("./db/db.connect");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");

const io = new Server(8000, {
  cors: true,

});
const app = express();

app.use(bodyPaser.json());

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {

  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { emailId, roomId } = data;
    emailToSocketIdMap.set(emailId, socket.id);
    socketidToEmailMap.set(socket.id, emailId);
    io.to(roomId).emit("user:joined", { emailId, id: socket.id });
    socket.join(roomId);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
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

io.listen(8001)
