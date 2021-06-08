const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root", //change to run
  host: "127.0.0.1", //change to run
  password: "password", //change to run
  database: "loginsystem", //change to run
});

// Register
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

// Login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({err: err});
      }
      if (result.length > 0) {
        res.send({message: "Welcome " + result[0].username});
      } else {
        res.send({message: "Wrong username/ password combination!"});
      }
    }
  );
});

//might need to change port?
app.listen(3001, () => {
  console.log("Server is running... I hope...");
});
