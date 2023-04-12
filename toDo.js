// Foundations Of Programming
// Tilde Hannevad
// To Do List
// 2023-04-04

const taskFieldElement = document.getElementById("taskField");
const addTaskElement = document.getElementById("plus");
const listElement = document.getElementById("list");
const doneElement = document.getElementById("done");

<<<<<<< HEAD
<<<<<<< HEAD
let toDo = [];
collectLocalStorage();

=======
>>>>>>> parent of e8d7162 (storage not working)
=======
>>>>>>> parent of e8d7162 (storage not working)
// when plus-button is pressed the function addAndRemoveTasks starts
addTaskElement.onclick = addAndRemoveTasks;

function addAndRemoveTasks(collectedTasks) {
  //Causes the input value to be in the list
<<<<<<< HEAD
=======

  let toDo = [];
<<<<<<< HEAD
>>>>>>> parent of e8d7162 (storage not working)
=======
>>>>>>> parent of e8d7162 (storage not working)
  let task = taskFieldElement.value;

  toDo.push(task);
  saveToLocalStorage();

  const toDoList = document.createElement("li");
  const toDoText = document.createElement("p");

  toDoText.innerText = collectedTasks;

  //Creates the checkbox and the click-function of it
  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;

    const doneList = document.createElement("li");
    const doneText = document.createElement("p");

    doneText.innerText = collectedTasks;

    doneList.appendChild(doneText);
    doneElement.appendChild(doneList);

<<<<<<< HEAD
<<<<<<< HEAD
    saveToLocalStorage();
=======
    listElement.removeChild(toDoList);
>>>>>>> parent of e8d7162 (storage not working)
=======
    listElement.removeChild(toDoList);
>>>>>>> parent of e8d7162 (storage not working)
  });

  //Removes the task when the trashbin is pressed
  const trashBin = document.createElement("img");
  trashBin.src = "images.jpeg";

  trashBin.addEventListener("click", () => {
<<<<<<< HEAD
    deleteLocalStorage(collectedTasks);
    readList();
=======
    listElement.removeChild(toDoList);
<<<<<<< HEAD
>>>>>>> parent of e8d7162 (storage not working)
=======
>>>>>>> parent of e8d7162 (storage not working)
  });

  toDoList.appendChild(checkBox);
  toDoList.appendChild(trashBin);
  toDoList.appendChild(toDoText);
  listElement.appendChild(toDoList);

  taskFieldElement.value = "";
<<<<<<< HEAD
<<<<<<< HEAD
  saveToLocalStorage();
}

// Local storage
function saveToLocalStorage() {
  let json = JSON.stringify(toDo);
  localStorage.setItem("tasksKey", json);
}

function collectLocalStorage() {
  let json = localStorage.getItem("tasksKey");

  if (json != null) {
    let mask = JSON.parse(json);
    toDo = mask;
    readList();
  }
}

function deleteLocalStorage(collectedTasks) {
  let index = toDo.findIndex((toDoTask) => toDoTask === collectedTasks);
  if (index > -1) {
    toDo.splice(index, 1);
  }
  saveToLocalStorage();
}

function readList() {
  listElement.textContent = "";
  toDo.forEach((collectedTasks) => {
    addAndRemoveTasks(collectedTasks);
  });
}
=======

  toDo = JSON.stringify(toDo);
  localStorage.setItem("savedTasks", toDo);
}

window.addEventListener("load", () => {
  // const task = localStorage.getItem(task);
});
>>>>>>> parent of e8d7162 (storage not working)
=======

  toDo = JSON.stringify(toDo);
  localStorage.setItem("savedTasks", toDo);
}

window.addEventListener("load", () => {
  // const task = localStorage.getItem(task);
});
>>>>>>> parent of e8d7162 (storage not working)
