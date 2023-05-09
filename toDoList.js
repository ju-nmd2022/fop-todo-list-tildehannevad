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

// My object = text written in taskField
// Push my objects to the array
function taskObject() {
  let newTask = {
    taskName: taskFieldElement.value,
    checked: false,
  };
  toDo.push(newTask);
  taskFieldElement.value = "";
  localStorageString();
  render();
}

addTaskElement.addEventListener("click", () => {
  taskObject();
});

// LocalStorage function
// First convert the object to string to save in localStorage
function localStorageString() {
  let jsonString = JSON.stringify(toDo);
  localStorage.setItem(LOCALSTORAGEKEY, jsonString);
}

// Then convert back from string to object to show in ToDoList
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

  // Explains that the objectname is related to all functions created with (task)
  toDoText.innerText = task.taskName;

  //Creates the checkbox and the click-function of it
  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = task.checked;

  // task.whatever explains that it belongs to the object
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

  // listElement is parent for toDoList and toDoList is parent for everything in the list
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

// Finds the right number of the object in the list and removes it
function deletedTask(task) {
  let index = toDo.findIndex(
    (taskIndex) => taskIndex.taskName === task.taskName
  );
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
