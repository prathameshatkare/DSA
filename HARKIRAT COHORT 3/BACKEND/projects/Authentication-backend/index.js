const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
dotenv.config();

let users = [];

function generateToken() {
  const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
}


app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //   if(users.find(u=>u.username === username)){
  //     res.json({
  //         msg:"you are already signup"
  //     })
  //   }

  users.push({
    username: username,
    password: password,
  });
  res.json({
    msg: "hey you are sign",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userfound = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (userfound) {
    const token = generateToken();
    userfound.token = token;
    res.json({
      message: token,
    });
  } else {
    res.json({
      msg: "Please signup first!!!!",
    });
  }
});



app.get("/me", (req, res) => {
  const token = req.header("token");
  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
      founduser = users[i];
    }
  }
  if(founduser){
    res.json({
      username : founduser.username ,
      password : founduser.password
    })
  }else{
    res.json({
      msg:"Invalid token "
    })
  }
});
app.listen(3000, () => {
  console.log("Server is on");
});
