
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

 
app.use(bodyParser.json());

// importing routes
// const userroute = require('./allrouters/userroute')
const showallroutes = require('./Routes/showallroutes');

// app.use(userroute);
app.use(showallroutes);

app.listen(4000, '0.0.0.0',()=>{
    console.log('server started on port 4000 successfully');

})