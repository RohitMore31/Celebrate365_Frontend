const express = require('express');
const router = express.Router();
const db = require("../DB");

router.get("/",(req,resp)=>{
    resp.send("hellow from server");
})

router.post("/deletemember",(req,resp)=>{
    console.log("router is called......inside addnew");
    const {id}=req.body;
    const statement = `delete from bbday where id=${id}`
    console.log(statement);
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
       console.log(err);
        } else
       resp.send("Added Sucessfully");
    })

})
        
module.exports = router;
