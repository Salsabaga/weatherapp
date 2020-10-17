require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser"); 
const ejs = require("ejs");


const app = express();

//Router Middleware

const weatherRouter = require("./routes/weather")

//Middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//Routes
app.use("/",weatherRouter);


app.set("view engine","ejs");

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
}) 