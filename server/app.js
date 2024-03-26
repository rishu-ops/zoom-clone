const express = require("express");
const { db } = require("./db/db.connect");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");
const app = express();

db();
app.use(express.json());
app.use(userRoutes);
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Zoom-clone APIs!</h1>`);
});

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}`)
);
