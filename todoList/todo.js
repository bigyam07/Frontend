let inputBtn = document.getElementById("input-value");
let addBtn = document.getElementById("add-button");
let tasksBox = document.getElementById("tasks-box")

addBtn.addEventListener('click', addTask);

function addTask() {
    if(inputBtn.value == "") {
        return;
    }
    let here = document.getElementById("here");
    here.classList.add("hide");

    let task =  document.createElement("div");
    task.classList.add("tasks");

    let taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left", "flex");

    let checkBox = document.createElement("div");
    checkBox.classList.add("check-box");

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check","hide");

    let Para = document.createElement("p");
    Para.innerText = inputBtn.value;

    let taskRight = document.createElement("div");
    taskRight.classList.add("task-right",  "flex");

    let editBtn = document.createElement("i");
    let deleteBtn = document.createElement("i");

    editBtn.classList.add("fa-regular", "fa-pen-to-square");
    deleteBtn.classList.add("fa-regular", "fa-trash-can");

    tasksBox.appendChild(task);
    task.appendChild(taskLeft);
    taskLeft.appendChild(checkBox);
    checkBox.appendChild(checkIcon);
    taskLeft.appendChild(Para);
    task.appendChild(taskRight);
    taskRight.appendChild(editBtn);
    taskRight.appendChild(deleteBtn);

    inputBtn.value = "";

    checkBox.addEventListener('click', () => {
        let result = checkIcon.classList.toggle("hide");
        if(!result) {
            Para.style.textDecoration = "line-through";
            Para.classList.add("new-task");
        } else {
            Para.style.textDecoration = "none";
            Para.classList.remove("new-task");
        }
    });
}

