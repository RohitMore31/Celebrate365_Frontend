const express = require('express');
const router = express.Router();
const db = require("../DB");

router.get("/",(req,resp)=>{
    resp.send("hellow from server");
})

router.post("/deletebyid",(req,resp)=>{
    console.log("router is called......inside deletebyid");
    const {id}=req.body;
    console.log(id);
    const statement = `delete from friend_list where id=${id}`
    console.log(statement);
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
       console.log(err);
        } else
       resp.send("deleted sucessfully");
    })

})
        
module.exports = router;
