/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ____Daniel Park____________ Student ID: __174136218__ Date: __Sept 16, 2022____
*
*  Cyclic Web App URL: ___https://app.cyclic.sh/#/deploy/danpark91/helloworld____________
*
*  GitHub Repository URL: ____danpark91/helloworld (github.com)_________________
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Daniel Park - 174136218");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);