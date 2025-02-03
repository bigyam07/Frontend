let inputBtn = document.getElementById("input-value");
let addBtn = document.getElementById("add-button");
let tasksBox = document.getElementById("tasks-box")
let here = document.getElementById("here");
let tasksBoxContainer = document.getElementById("tasks");
addBtn.addEventListener('click', addTask);
inputBtn.addEventListener('keypress', (e) => {
    if(e.key == "Enter") {
        addTask();
    }
})
function addTask() {
    if(inputBtn.value == "") {
        return;
    }
   
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
    // Para.setAttribute("id", "paragraph");
    Para.innerText = inputBtn.value;
    Para.style.color = isDarkMode ? "white" : "#444";


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
    deleteBtn.addEventListener('click', () => {
        task.remove();
        if(tasksBox.children.length === 1) {
            here.classList.remove("hide");
        }
    });

    editBtn.addEventListener('click', () => {
        let inputField = document.createElement("input");
        inputField.type = text;
        inputField.value = Para.innerText;
        inputField.classList.add("input-replace");
        taskLeft.replaceChild(inputField, Para);
        inputField.focus();

        inputField.addEventListener('blur', () => {
            if(inputField.value.trim() !== "") {
                Para.innerText = inputField.value;
            }
            taskLeft.replaceChild(Para, inputField);
        });

        inputField.addEventListener("keypress", (e) => {
            if(e.key == "Enter") {
                inputField.blur(); //trigger blur event
            }
        });
    });
}

let darkBtn = document.getElementById("dark-mode");
let isDarkMode = false;
darkBtn.addEventListener('click', darkMode);


function darkMode() {
    let container = document.querySelector(".container");
    let box = document.querySelector(".box");
    let labels = document.querySelectorAll("label");
    let Para = document.querySelectorAll("p");

    if(!isDarkMode) {
        container.style.backgroundColor = "#282828";
        box.style.backgroundColor = "#444";
        box.style.boxShadow = "0 0 15px white";
        Para.forEach((paragraph) => {
            paragraph.style.color = "white";
        });
        
        labels.forEach((label) => {
            label.style.color = "white";
        });
        tasksBox.addEventListener("mouseover", (e) => {
            if (e.target.closest(".tasks")) {
                e.target.style.backgroundColor = "#8b8b8b";
            }
        });
        
        tasksBox.addEventListener("mouseout", (e) => {
            if (e.target.closest(".tasks")) {
                e.target.style.backgroundColor = "transparent";
            }
        });
        isDarkMode = true;
    } else {
        container.style.backgroundColor = "white";
        box.style.backgroundColor = "#F8F9FA";
        box.style.boxShadow = "0px 0px 6px #b0b0b0";
        labels.forEach((label) => {
            label.style.color = "#6c757d";
        });
        Para.forEach((paragraph) => {
            paragraph.style.color = "#444";
        });
        tasksBox.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("tasks")) {
                e.target.style.backgroundColor = "#eceef0";
            }
        });
        
        tasksBox.addEventListener("mouseout", (e) => {
            if (e.target.classList.contains("tasks")) {
                e.target.style.backgroundColor = "transparent";
            }
        });
        isDarkMode = false;
    }
}

