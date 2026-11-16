const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  res.json({message:"Hello from Node with express which is built on http"});
})
app.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});