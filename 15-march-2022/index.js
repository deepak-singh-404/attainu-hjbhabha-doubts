const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
    
app.listen(3000,()=>{
    console.log("SERVER STARTED ON PORT:",3000)
});