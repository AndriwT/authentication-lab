const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// db connection
mongoose
  .connect("mongodb://localhost/soccerteams")
  .then(() => console.log("DB connected...✔️"))
  .catch(() => console.log("Could not connect to DB ❌"));

// general middlwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use("/user", require("./routes/user"));
app.use("/player", require("./routes/player"));
app.use("/team", require("./routes/team"));

// listen to port
app.listen(5000, () => {
  console.log("Server up and running ⚡");
});
