const taskFieldElement = document.getElementById("taskField");
const addTaskElement = document.getElementById("plus");
const listElement = document.getElementById("list");
const doneElement = document.getElementById("done");

let task;
let toDo = [];

addTaskElement.onclick = addToTaskList;

function addToTaskList() {
  task = taskFieldElement.value;

  toDo.push(task);

  const toDoList = document.createElement("li");
  const toDoText = document.createElement("p");

  toDoText.innerText = task;

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
}
