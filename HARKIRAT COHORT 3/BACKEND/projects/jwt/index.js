const jwt = require("jsonwebtoken")

const value = {
    name : "Prathamesh",
    date: Date() ,
    account_no :12346
}

const token1 = jwt.sign(value,"Random")
console.log(token1)