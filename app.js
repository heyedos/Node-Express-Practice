const express = require('express');
const app = express();

app.use('/Users',(req,res,next)=>{
    console.log("hello from users");
    res.send('<h1>Hello From Users Page</h1>');
})

app.use('/',(req,res,next)=>{
    console.log("hello from second middleware");
    res.send("<h1>Hello From Home Page</h1>");
})

app.listen(3000);
