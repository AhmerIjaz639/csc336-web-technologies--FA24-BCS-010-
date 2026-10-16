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
    const span = document.createElement("span");
    span.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.append(checkbox, span, deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});