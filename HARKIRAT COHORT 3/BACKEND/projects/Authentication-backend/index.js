const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "RANDOM";

app.use(express.json());

let users = [];

// ==========================
// SIGNUP ROUTE
// ==========================

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if user already exists
  const existingUser = users.find((u) => {
    return u.username === username;
  });

  if (existingUser) {
    return res.json({
      msg: "You are already signed up",
    });
  }

  // Store user
  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "Hey, you are signed up!",
  });
});

// ==========================
// SIGNIN ROUTE
// ==========================

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Find user
  const founduser = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (founduser) {
    // Generate JWT token
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
    );

    // Store token inside existing user
    founduser.token = token;

    res.json({
      token: token,
    });
  } else {
    res.status(401).json({
      msg: "Invalid username or password",
    });
  }
});

// ==========================
// ME ROUTE
// ==========================

app.get("/me", (req, res) => {
  // Get token from header
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      msg: "Token is missing",
    });
  }

  try {
    // Verify JWT token
    const decodedinfo = jwt.verify(token, JWT_SECRET);

    // Get username from decoded token
    const username = decodedinfo.username;

    // Find user in users array
    const founduser = users.find((u) => {
      return u.username === username;
    });

    if (founduser) {
      return res.json({
        username: founduser.username,
        password : founduser.password
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
});

// ==========================
// START SERVER
// ==========================

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
