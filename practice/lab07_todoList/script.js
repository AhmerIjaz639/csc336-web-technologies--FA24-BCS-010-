const taskInput=document.getElementById("taskInput");
const addButton=document.getElementById("addButton");
const taskList=document.getElementById("taskList");

addButton.addEventListener("click",function(){
    const task=taskInput.value.trim();
    if(task===""){
        return;
    }
    const li =document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    
})