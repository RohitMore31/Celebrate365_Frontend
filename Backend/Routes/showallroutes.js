const express = require('express');
const router = express.Router();
const db = require("../DB");

router.get("/",(req,resp)=>{
    resp.send("hellow from server");
})

router.get("/showall",(req,resp)=>{
    console.log("router is called......");
    const statement = "select * from bbday"
    db.execute(statement,(err,data)=>{
        resp.send(data)
        console.log(err);
    })
})
        
module.exports = router;
