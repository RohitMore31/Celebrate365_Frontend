const express = require('express')
const db = require('../db');
// For Encription importing crypto-js package
const crypto = require('crypto-js');
// const send_the_email = require('../mail');

const router = express.Router();

// FOR Sign up
router.post('/user/signup',(req,resp)=>{
    console.log(`req received = ${req.url}`);
    const {fname,email,password}=req.body;
    // encript password  
    const encrptPassword = ''+ crypto.SHA256(`${password}`)
    const statement = `insert into user (fname,email,password) values('${fname}','${email}','${encrptPassword}')`
    console.log("Encrypted pass = ",encrptPassword);
    db.execute(statement,(error,data)=>{
        const result = {
            Status:''
        }

        if(error){
            result['Status']="error"
            result['error']=error;
            console.log(result);
        }else{
            result['Status']="sucess"
            result['data']=data;
        }
        resp.send(result);
    })
})

router.post('/user/signin',(req,resp)=>{
    console.log(`req received = ${req.url}`);
    const {email,password}=req.body;
    // encript password  
    const encrptPassword = ''+ crypto.SHA256(`${password}`)
    const statement = `select * from user where email='${email} && password='${encrptPassword}'`
    console.log("Encrypted pass = ",encrptPassword);
    db.execute(statement,(error,data)=>{
        const result = {
            Status:''
        }

        if(error){
            result['Status']="error"
            result['error']=error;
            console.log(result);
        }else{
            result['Status']="error"
            result['data']=data;
        }
        resp.send(result);
    })
})






// FOR Delete Account
router.delete('/user',(req,resp)=>{
    console.log('req received inside delete');
    resp.send('hellow from server')
})

module.exports= router;