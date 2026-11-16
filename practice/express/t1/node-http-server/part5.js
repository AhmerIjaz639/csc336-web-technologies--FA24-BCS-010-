const express = require("express");
const app = express();
app.use(express.json());  

let tasks = [
  { id: 1, title: "Learn the http module", done: false },
  { id: 2, title: "Build a tiny API with no framework", done: false },
];
let nextid=3;
app.get('/all',(req,res)=>{
    res.json(tasks);
});
app.get('/tasks/:id',(req,res)=>{
    const id=Number(req.params.id);
    const task=tasks.find((t)=>t.id===id);
    if(!task) return res.status(404).json({error:"task not found"});
    res.json(task);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "'title' is required" });
  }
  const newTask = { id: nextid++, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.use((req,res)=>{
  res.status(404).json({error:"No route for "+req.method +req.url});
});
app.listen(3000,()=>{
  console.log("listening on http://localhost:3000")
})
