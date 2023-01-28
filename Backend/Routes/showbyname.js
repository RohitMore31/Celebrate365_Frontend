const express = require('express');
const router = express.Router();
const db = require("../DB");

router.get("/",(req,resp)=>{
    resp.send("hellow from server");
})

router.post("/showbyname",(req,resp)=>{
    console.log("router is called......inside showbyname");
    const {fname}=req.body;
    console.log(fname);
    const statement = `select * from bbday where fname='${fname}'`
    console.log(statement);
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
       console.log(err);
        } else
       resp.send(data);
    })

})
        
module.exports = router;
