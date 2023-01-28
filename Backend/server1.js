
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
// app.use(cors())clapp.use(cors())

app.use(bodyParser.json());

const showallroutes = require('./Routes/showallroutes');
const addnewroutes = require('./Routes/addnewroutes');
const deleteroutes = require('./Routes/deleteroutes');
const showbyname = require('./Routes/showbyname');
const deletebyid = require('./Routes/deletebyid');

app.use(deletebyid);
app.use(showbyname);
app.use(deleteroutes);
app.use(addnewroutes);
app.use(showallroutes);

app.listen(4000, '0.0.0.0',()=>{
    console.log('server started on port 4000 successfully');

})