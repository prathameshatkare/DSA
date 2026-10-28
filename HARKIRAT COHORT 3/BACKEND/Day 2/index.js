import express from "express";
const app = express();

let users = [
  {
    name: "john",
    kedneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];


app.use(express.json())
app.get("/", function (reeq, res) {
  const johnkednys = users[0].kedneys;
  const numberofkdneys = users[0].kedneys.length;
  const healthykedneys = users[0].kedneys.filter(
    (kedneys) => kedneys.healthy === true,
  );
  const numberofhealthykedneys =  healthykedneys.length
  res.json({
    numberofkdneys,
    numberofhealthykedneys,
    healthykedneys
  })
});

app.post('/addk',(req,res)=>{
   
    const isHealthy = req.body.isHealthy;
    users[0].kedneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })

})
app.put("/updatek",(req,res)=>{
    for(let i =0;i<users[0].kedneys.length;i++){
    users[0].kedneys[i].healthy =true
    }
    res.json({
        msg:"done"
    })

})

app.delete('/delete',(req,res)=>{

    const onlyhelthykdneys = users[0].kedneys.filter((kedneys)=>kedneys.healthy == true)
    res.send(onlyhelthykdneys)



})
app.listen(3000, () => {
  console.log("Server is running!!");
});
