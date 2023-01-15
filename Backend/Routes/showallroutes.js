const express = require('express');
const router = express.Router();
const db = require("../DB");

router.get("/showall",(req,resp)=>{
    const statement = "select * from bbday"
    db.execute(statement,(err,data)=>{
        resp.send(data)
        console.log(err);
    })
})
        
module.exports = router;
