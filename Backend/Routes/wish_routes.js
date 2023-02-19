// const express = require('express')
// const db = require('../db');

// const router = express.Router();


// router.post('/user/signup',(req,resp)=>{
//     console.log(`req received = ${req.url}`);
//     const {email,password}=req.body;
//     // encript password  
//     const encrptPassword = ''+ crypto.SHA256(`${password}`)
//     const statement = `insert into user (fname,email,password) values('${fname}','${email}','${encrptPassword}')`
//     console.log("Encrypted pass = ",encrptPassword);
//     db.execute(statement,(error,data)=>{
//         const result = {
//             Status:''
//         }

//         if(error){
//             result['Status']="error"
//             result['error']=error;
//             console.log(result);
//         }else{
//             result['Status']="sucess"
//             result['data']=data;
//         }
//         resp.send(result);
//     })
// })

// router.post('/user/signin',(req,resp)=>{
//     console.log(`req received = ${req.url}`);
//     const {email,password}=req.body;
//     // encript password  
//     const encrptPassword = ''+ crypto.SHA256(`${password}`)
//     const statement = `select * from user where email='${email}' && password='${encrptPassword}'`
//     console.log("statement pass = ",statement);
//     db.execute(statement,(error,data)=>{
//         const result = {
//             Status:''
//         }
//         if(error || data.length===0){
//             result['Status']="error"
//             result['error']=error;
//             console.log(result);
//         }else{
//             result['Status']="sucess"
//             result['data']=data;
//             console.log(data.fname);
//             console.log(data.email);
//             console.log(data.uid);
//             console.log(data);


//         }
//         resp.send(result);
//     })
// })






// // FOR Delete Account
// router.delete('/user',(req,resp)=>{
//     console.log('req received inside delete');
//     resp.send('hellow from server')
// })

// module.exports= router;