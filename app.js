require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser"); 
const ejs = require("ejs");
const fetch = require("node-fetch");

const app = express();
 
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");



//Routes

app.get("/",(req,res)=>{
   res.render("index");

});

app.post("/",(req,res)=>{
    const city = req.body.searchbar;

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`; 
 
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.main.temp);
            res.render("index",{weatherTemp: data.main.temp});
        })

 
 
    
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
}) 