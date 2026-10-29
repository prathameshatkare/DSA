import express from "express";

const app = express();

// function isoldenough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isoldenoughmiddleware(req,res,next) {
//   const age = req.query.age;
//   if (age >= 14) {
//     next()
//   } else {
//     res.status(411).json({
//       msg: "You are not allowed you are underage",
//     });
//   }
// }

// let count =0;
// function globalmid(req,res,next){
//   count =count +1;
//   next()

// }
// app.use(globalmid)

// let userdata = {};

// setInterval(() => {
//   userdata = {};
// }, 5000);

// function ratelimiter(req, res, next) {
//   const userid = req.headers["userid"];
//   if (!userid) {
//     return res.status(400).json({
//       msg: "userid header is required",
//     });
//   }

//   if (userdata[userid]) {
//     userdata[userid] = userdata[userid] + 1;
//     if (userdata[userid] > 5) {
//       res.status(429).json({
//         msg: "Too many requests",
//       });
//     } else {
//       next();
//     }
//   } else {
//     userdata[userid] = 1;
//     next();
//   }
// }




// app.use(ratelimiter);





app.get("/", (req, res) => {
  
  res.json({
    msg: "You are allowed!!!",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    name: "John",
  });
});

// app.get('/requestcount',(req,res)=>{

//   res.json({
//     count
//   })
// })

app.listen(3000);
