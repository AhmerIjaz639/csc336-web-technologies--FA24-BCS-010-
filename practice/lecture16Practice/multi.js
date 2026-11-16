const express=require('express');
const app =express();
const PORT=4000;

app.get('/home',(req,res)=>{
    res.send("home page helloo");
});

app.get('/about',(req,res)=>{
    res.send("about i am leaning express js for web dev ");
});

app.get('/contact',(req,res)=>{
    res.send("email me at @mial.com");
});

app.use((req, res) => res.status(404).send("404 - Page not found"));

app.listen(PORT,()=>{
    console.log("running at http://localhost:"+PORT);
});