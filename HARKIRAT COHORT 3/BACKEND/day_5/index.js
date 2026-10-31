import express from "express";

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

app.get("/",handlereqcount,handlesum)

app.listen(3000);