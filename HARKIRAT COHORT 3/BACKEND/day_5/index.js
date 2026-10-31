import express from "express";
import bodyParser from "body-parser";
const app = express()


let reqcount =  0;


function handlereqcount(req,res,next){
    reqcount = reqcount + 1;
    console.log("The total requests are ",reqcount)
    next()
}

function handlesum(req,res,next){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans :a+b
    })
}
app.use(bodyParser.json() )
app.get("/",handlereqcount,handlesum)

app.post("/add",(req,res)=>{
    console.log(req.body)
const a = parseInt(req.body.a)
const b = parseInt(req.body.b)
res.json({
    ans : a +b 
})

})

app.listen(3000);