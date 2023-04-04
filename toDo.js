const taskFieldElement = document.getElementById("taskField");
const addTaskElement = document.getElementById("plus");
const listElement = document.getElementById("list");
const doneElement = document.getElementById("done");

let task;

addTaskElement.onclick = addToTaskList;

function addToTaskList() {
  task = taskFieldElement.value;
  listElement.innerText = task;
}
