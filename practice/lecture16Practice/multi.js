const express=requires('express');
const app =express();
const PORT=2000;

app.get('/home',(req,res)=>{
    res.send("home page helloo");
});

app.get('/about',(req,res)=>{
    res.send("about i am leaning express js for web dev ");
});

app.get('/contact',(req,res)=>{});