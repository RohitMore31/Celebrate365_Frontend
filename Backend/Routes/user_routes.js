const express = require('express')
const db = require('../db');
// For Encription importing crypto-js package
const crypto = require('crypto-js');
// const send_the_email = require('../mail');

const router = express.Router();

// router.get('/user/',(req,resp)=>{
//     console.log('req received inside get');

//     const statement = `select * from user`
//     db.execute(statement,(error,data)=>{
//         if(error){
//             console.log(`error = ${error}`)
//         }else{
//             const strdata = JSON.stringify(data);
//             resp.send(strdata);
//         }
//     })   
// })



// FOR Sign up
router.post('/user/signup',(req,resp)=>{
    console.log(`req received = ${req.url}`);
    const {uname,email,password}=req.body;
    // encript password  
    const encrptPassword = ''+ crypto.SHA256(`${password}`)
    const statement = `insert into user (user_id,email,password) values('${user_id}','${email}','${encrptPassword}')`
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
            send_the_email(email,'msg');
   
            // result['data1']={
            //     user_id:data['user_id']
            // }
            // const strdata = JSON.stringify(data);
        }
        resp.send(result);
    })
})



// For update Account 
router.put('/user/profile',(req,resp)=>{
    console.log(`req received = ${req.url}`);
    const {user_id,password,name}=req.body;
    const encrptPassword = ''+ crypto.SHA256(`${password}`)
    const statement =`update user set first_name='${name}' where user_id='${user_id}' and password='${encrptPassword}'`
    db.execute(statement,(error,data)=>{
        if(error){
            console.log(`error = ${error}`)
        }else{
            const strdata = JSON.stringify(data);
            resp.send(strdata);
        }
    })
})

// FOR Delete Account
router.delete('/user',(req,resp)=>{
    console.log('req received inside delete');
    resp.send('hellow from server')
})

module.exports= router;