const express = require("express");
const app = express();

app.get('/tasks',(req,res)=>{
  res.json([{id:1,title:"learn http module"}]);
});

app.use((req,res)=>{
  res.status(404).json({error:"No route for "+req.method +req.url});
});
app.listen(3000,()=>{
  console.log("listening on http://localhost:3000")
})



