const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const homeRoute = require('./routes/home');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(homeRoute);

app.listen(3000);
