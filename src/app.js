const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const path = require('path');

//static page path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path)); 

app.get("/", (req,res)=>{
    res.render("index");
  //  res.send("Home page of Weather App");  
});

app.get("/about", (req,res)=>{
    res.render("about");
  //  res.send("About page of Weather App");  
});

app.get("/weather", (req,res)=>{
    res.render("weather");
  //  res.send("Weather page of Weather App");  
});

app.get("*", (req,res)=>{
    res.render('404error', {
        errorMsg:"404 ! Page not found "
    });
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})


