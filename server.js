const express = require("express");
const app = express();

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://yamini:yamini-password@cluster0.bqsuu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const user = new User({ username: 'Yamini', password: '12345' });

user.save((err) => {
  if (err) throw err;
  console.log("New user has been saved to db")
})

app.get("/", (req, res) => {
  res.send("Welcome to the game server!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
