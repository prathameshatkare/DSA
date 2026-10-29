import express from "express";
const app = express();

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  let ans = a + b;
  res.send(ans);
});
app.get("/substract", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  let ans = a - b;
  res.send(ans);
});
app.get("/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  let ans = a * b;
  res.send(ans);
});

app.get("/divide", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  let ans = a / b;
  res.send(ans);
});
app.listen(3000, () => {
  console.log("Server is running");
});
