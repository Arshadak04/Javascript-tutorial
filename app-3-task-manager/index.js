console.log("script loaded");
/*
task list
* initialize the variables of dom element
1. collect the user form data
2. validate the user input
3. manage the list of tasks inside array data structure.
4. list out the task array
5. add click listiner to remove from the array
6. update the ui

*/

let form = document.getElementById("form");
let taskTable = document.getElementById("table");

let taskList = JSON.parse(localStorage.getItem("task")) || [];

updateUi();

function handleUserData(e) {
  e.preventDefault();
  let currentTask = e.target.task.value;
  if (currentTask) {
    taskList.push(currentTask);
  }
  e.target.reset();

  updateUi();
}

function updateUi() {
  taskTable.innerHTML = null;
  const elm = `<div class="bg-yellow-300 flex justify-between">
                    <p class="p-4">##TASK##</p>
                    <button data-id="##ID##" class="p-2 px-4 bg-[#2a2a2a] text-white">Delete</button>
                </div>`;

  let index = 0;
  taskList.forEach((task) => {
    let uiElm = elm.replace("##TASK##", task).replace("##ID##", index);
    taskTable.insertAdjacentHTML("beforeend", uiElm);
    index++;
  });
}

function handleDelete(id) {
  taskList.splice(id, 1);
  updateUi();
}

taskTable.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.dataset.id) {
    let taskId = e.target.dataset.id;
    console.log(taskId);
    handleDelete(taskId);
  }
});

window.onbeforeunload = () => {
  localStorage.setItem("task", JSON.stringify(taskList));
};

form.addEventListener("submit", handleUserData);
