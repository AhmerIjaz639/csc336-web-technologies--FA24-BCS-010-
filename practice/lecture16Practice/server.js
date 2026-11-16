const express=require('express')
const app =express();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send("welcome to my server");
});

app.listen(PORT,()=>{
    console.log("server is runnign at http://listneing:",PORT);

});