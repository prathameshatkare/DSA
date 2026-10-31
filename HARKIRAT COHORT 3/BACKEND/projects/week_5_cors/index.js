const express = require("express");
const parser =  require("body-parser")
const app = express();
app.use(parser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/add",(req,res)=>{
    const a =parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        msg:a+b
    })

})

app.listen(3000, () => {
  console.log("Server is runnig");
});
