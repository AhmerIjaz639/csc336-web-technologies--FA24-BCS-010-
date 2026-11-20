const express = require("express");
const app = express();
app.use(express.json());   
app.use(express.static(""))




app.use((req,res)=>{
  res.status(404).json({error:"No route for "+req.method +req.url});
});
app.listen(3000,()=>{
  console.log("listening on http://localhost:3000")
})
