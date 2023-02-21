const express = require('express')
const send_the_email = require('../mailer');

const router = express.Router();


// FOR send Mail
router.post('/user/bdaywish',(req,resp)=>{
    console.log(`req received = ${req.url}`);
    const {fname,lname,email,message}=req.body;
    const result = send_the_email(email,message);
    console.log("inside wish_route",result);
    resp.send(result);
})


module.exports= router;