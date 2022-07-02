// Variables
const inputBox = document.querySelector(".input-box");
const inputBoxEdit = document.querySelector(".input-box-edit");
const taskName = document.querySelector(".task-name");
const taskDesc = document.querySelector(".task-desc");
const taskList = document.querySelector(".task-list");
const editBtn = document.querySelector(".edit-task");
const editTaskName = document.querySelector(".edit-task-name");
const editTaskDesc = document.querySelector(".edit-task-desc");

const toDoApp = () => {
    // Selecting HTML Elements
    const addBtn = document.querySelector(".add-btn");
    const addTaskBtn = document.querySelector(".add-task");
    const cancelTaskBtn = document.querySelector(".cancel-task");
    const cancelEditTaskBtn = document.querySelector(".cancel-edit-task");

    addBtn.addEventListener("click", openTaskFrom);
    taskList.addEventListener("click", delCheckTask);
    addTaskBtn.addEventListener("click", addTask);
    cancelTaskBtn.addEventListener("click", cancelTask);
    cancelEditTaskBtn.addEventListener("click", cancelEditTask);

    animateBackground();
};

const openTaskFrom = () => {
    inputBox.classList.add("show");
    taskList.style.filter = "blur(10px)";
};

const addTask = (e) => {
    createTask();
    inputBox.classList.remove("show");
    taskList.style.filter = "blur(0)";
};

const cancelTask = (e) => {
    inputBox.classList.remove("show");
    taskList.style.filter = "blur(0)";
};

const cancelEditTask = (e) => {
    inputBoxEdit.classList.remove("show");
    taskList.style.filter = "blur(0)";
};

const editTask = (e) => {
    editTaskName.value = e.target.parentElement.parentElement.children[0].children[0].innerText;
    editTaskDesc.value = e.target.parentElement.parentElement.children[0].children[1].innerText;
    editBtn.addEventListener("click", () => {
        e.target.parentElement.parentElement.children[0].children[0].innerText = editTaskName.value;
        e.target.parentElement.parentElement.children[0].children[1].innerText = editTaskDesc.value;
        cancelEditTask();
    });

    inputBoxEdit.classList.add("show");
    taskList.style.filter = "blur(5px)";
};

const delCheckTask = (e) => {
    const item = e.target;
    if (item.classList[1] === "fa-times") {
        item.parentElement.parentElement.parentElement.remove();
    }
    if (item.classList[1] === "fa-check") {
        item.parentElement.parentElement.firstChild.classList.toggle("checked");
    }
    if (item.classList[1] === "fa-edit") {
        editTask(e);
    }
};

const createTask = () => {
    // Variables to create list items in Javascript
    console.log("create-task-hit!");
    if (taskName.value === "") {
        alert("Please Enter a Task!");
        return;
    }

    const ul = document.querySelector(".task-list");
    const div = document.createElement("div");
    const li = document.createElement("li");
    const divText = document.createElement("div");
    const divIcons = document.createElement("div");
    const crossIcon = document.createElement("i");
    const checkIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.innerText = taskName.value;
    p2.innerText = taskDesc.value;
    li.style.textTransform = "capitalize";
    div.classList.add("task-item");
    divText.classList.add("task-text");
    divIcons.classList.add("div-icons");
    editIcon.classList.add("fas", "fa-edit", "edit-icon");
    crossIcon.classList.add("fas", "fa-times");
    checkIcon.classList.add("fas", "fa-check", "check");

    divText.appendChild(p1);
    divText.appendChild(p2);
    li.appendChild(divText);
    div.appendChild(li);
    divIcons.appendChild(checkIcon);
    divIcons.appendChild(crossIcon);
    divIcons.appendChild(editIcon);
    li.appendChild(divIcons);
    ul.append(div);

    taskName.value = "";
    taskDesc.value = "";
};

toDoApp();