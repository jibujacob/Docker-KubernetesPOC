const express = require("express");
const redis = require("redis");

const app=express();
const client = redis.createClient();
client.set("visits",0);

app.get("/", (req,res)=>{
     client.get("visits",(err,visits)=>{
         res.send("The number of visits is "+visits);
         client.set("visits",parseInt(visits)+1);
     });
});

const port = process.env.PORT||5001
app.listen(port,()=> console.log(`Server up and runninon on port ${port}`))