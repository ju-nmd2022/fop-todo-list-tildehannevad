// Foundations Of Programming
// Tilde Hannevad
// To Do List
// 2023-04-18

const taskFieldElement = document.getElementById("taskField");
const addTaskElement = document.getElementById("plus");
const listElement = document.getElementById("list");

const LOCALSTORAGEKEY = "localStorageKey";

let toDo = [];
getLocalStorage();

// My object, taskName = taskFieldElement value
// Push my objects to the array
function taskObject() {
  let newTask = {
    taskName: taskFieldElement.value,
    checked: false,
  };
  toDo.push(newTask);
  taskFieldElement.value = "";
  localStorageString();
}

addTaskElement.addEventListener("click", () => {
  taskObject();
});

// LocalStorage function
function localStorageString() {
  let jsonString = JSON.stringify(toDo);
  localStorage.setItem(LOCALSTORAGEKEY, jsonString);
}

function getLocalStorage() {
  let jsonGet = localStorage.getItem(LOCALSTORAGEKEY);

  if (jsonGet !== null) {
    let jsonParse = JSON.parse(jsonGet);
    toDo = jsonParse;
    render();
  }
}

// My main function where I create everything
function addAndRemoveTasks(task) {
  const toDoList = document.createElement("li");
  const toDoText = document.createElement("p");

  toDoText.innerText = task.taskName;

  //Creates the checkbox and the click-function of it
  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = task.checked;

  task.inputButton = checkBox;
  task.text = toDoText;
  task.parent = toDoList;

  checkBox.addEventListener("click", () => {
    checkedTask(task);
  });

  const trashBin = document.createElement("img");
  trashBin.src = "images.jpeg";

  trashBin.addEventListener("click", () => {
    deletedTask(task);
  });

  toDoList.appendChild(checkBox);
  toDoList.appendChild(trashBin);
  toDoList.appendChild(toDoText);
  listElement.appendChild(task.parent);

  taskFieldElement.value = "";
}

function checkedTask(task) {
  task.checked = true;
  localStorageString();
}

function deletedTask(task) {
  let index = toDo.findIndex((taskIndex) => taskIndex.name === task.taskName);
  if (index > -1) {
    toDo.splice(index, 1);
  }
  listElement.removeChild(task.parent);
  localStorageString();
}

function render() {
  listElement.innerHTML = "";
  toDo.forEach((task) => {
    addAndRemoveTasks(task);
  });
}
