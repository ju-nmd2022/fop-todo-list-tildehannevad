// Foundations Of Programming
// Tilde Hannevad
// To Do List
// 2023-04-04

const taskFieldElement = document.getElementById("taskField");
const addTaskElement = document.getElementById("plus");
const listElement = document.getElementById("list");
const doneElement = document.getElementById("done");

// when plus-button is pressed the function addAndRemoveTasks starts
addTaskElement.onclick = addAndRemoveTasks;

function addAndRemoveTasks() {
  //Causes the input value to be in the list

  let toDo = [];
  let task = taskFieldElement.value;

  toDo.push(task);

  const toDoList = document.createElement("li");
  const toDoText = document.createElement("p");

  toDoText.innerText = task;

  //Creates the checkbox and the click-function of it
  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;

    const doneList = document.createElement("li");
    const doneText = document.createElement("p");

    doneText.innerText = task;

    doneList.appendChild(doneText);
    doneElement.appendChild(doneList);

    listElement.removeChild(toDoList);
  });

  //Removes the task when the trashbin is pressed
  const trashBin = document.createElement("img");
  trashBin.src = "images.jpeg";

  trashBin.addEventListener("click", () => {
    listElement.removeChild(toDoList);
  });

  toDoList.appendChild(checkBox);
  toDoList.appendChild(trashBin);
  toDoList.appendChild(toDoText);
  listElement.appendChild(toDoList);

  taskFieldElement.value = "";

  toDo = JSON.stringify(toDo);
  localStorage.setItem("savedTasks", toDo);
}

window.addEventListener("load", () => {
  // const task = localStorage.getItem(task);
});
