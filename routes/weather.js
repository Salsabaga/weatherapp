const express = require("express");
const fetch = require("node-fetch");
let router = express.Router();

router
.route("/")
.get((req,res)=>{
    res.render("index",{message:null, city: null, weatherTemp:null, weatherDescrip:null, weatherWind:null, weatherIcon:null, weatherHumid:null});
 
 });
 
 router
 .route("/")
 .post((req,res)=>{
     const city = req.body.searchbar; 
     const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`; 
    
  
     fetch(url)
     .then(res=>res.json())
        .then(data=>{
             if(data.message==="city not found"){
                res.render("error")
                }
             
             else{
                const city = data.name;
                const weatherTemp = data.main.temp;
                const weatherDescrip = data.weather[0].description;
                const weatherWind = data.wind.speed;
                const weatherHumid = data.main.humidity
                const weatherIcon = data.weather[0].icon;
               
                res.render("index",{city,weatherTemp,weatherDescrip,weatherWind,weatherIcon,weatherHumid});    
             }
     
             
                              
         }) 
     
        })

module.exports = router;

