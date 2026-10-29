import express from "express";
const app = express();

function isoldenough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

app.get("/", (req, res) => {
  const userage = req.query.age;

  if (!userage) {
    res.status(400).send("please send age");
  }
  const validage = isoldenough(userage);
  if (validage) {
    res.json({
      msg: "You arte allowed for the ride",
    });
  } else {
    res.status(411).json({
      msg: "You are not allowed",
    });
  }
});

app.listen(3000);
