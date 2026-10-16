var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var listItem = document.createElement("li");
    var task = document.createElement("span");
    var deleteButton = document.createElement("button");

    task.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    task.onclick = function () {
        task.classList.toggle("completed");
    };

    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(task);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

addButton.onclick = addTask;

taskInput.onkeypress = function (event) {
    if (event.key === "Enter") {
        addTask();
    }
};