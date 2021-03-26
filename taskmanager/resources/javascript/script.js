const tasks = document.querySelector(".taskArea").children;

function createTask() {
  document.querySelector(".newTask-bg").style.display = "flex";
  document.getElementById("taskinput").focus();
}

function doneTask(element) {
  if (element.checked != false) {
    setTimeout(() => {
      element.parentNode.style.background = "#6dd06d";
    }, 200);
    element.parentNode.classList.add("completedTask");
  }
  element.parentNode.style.background = "slategrey";
}

function showAllTasks() {
  for (elements of tasks) {
    elements.style.display = "flex";
  }
}

function addTask() {
  const p = document.createElement("p");
  const task = document.getElementById("taskInput");
  const taskArea = document.querySelector(".taskArea");
  const div = document.createElement("div");

  div.className = "tasks";
  taskArea.append(div);
  div.innerHTML = "<input type='checkbox' onclick='doneTask(this)'>";
  div.append(p);
  p.append(task.value);

  task.value = " ";
  document.querySelector(".newTask-bg").style.display = "none";
}

function showcompleteTasks() {
  for (elements of tasks) {
    if (elements.className !== "completedTask") {
      elements.style.display = "none";
    } else {
      elements.style.display = "flex";
    }
  }
}

function showImCompleteTasks() {
  for (elements of tasks) {
    if (elements.className !== "completedTask") elements.style.display = "flex";
  }
  return (elements.style.display = "none");
}

function filter() {
  const tasks = document.querySelector(".taskArea").children;
  const term = document.getElementById("filter").value.toUpperCase();

  for (task of tasks) {
    console.log(task.innerText);
    if (task.innerText.toUpperCase().indexOf(term) > -1) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  }
}
