const express = require('express')
const app = express();

app.get("/",(req,resp)=>{
    resp.send("hellow from server");
})

app.post("/product",(req,resp)=>{
    resp.send("inside a post method");
    console.log(req);
})

app.listen(4000,(req,resp)=>{
    console.log("server starred on port 30000")
})