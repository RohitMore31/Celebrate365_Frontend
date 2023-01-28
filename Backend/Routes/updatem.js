const express = require('express');
const router = express.Router();
const db = require("../DB");


router.put("/updatem",(req,resp)=>{
    console.log("router is called......inside updatem");
    const {id,fname,lname,date}=req.body;
    console.log(fname);
    const statement = `update bbday set fname='${fname}',lname='${lname}',dob='${date}' where id=${id}`
    console.log(statement);
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
       console.log(err);
        } else
       resp.send("updated Sucessfully");
    })

})
        
module.exports = router;
