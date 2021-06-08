const tasks = document.querySelector(".taskArea").children;

function createNewTask() {
  document.querySelector(".newTask-bg").style.display = "flex";
  document.getElementById("taskInput").focus();
}

function addTask() {
  const p = document.createElement("p");
  const task = document.getElementById("taskInput");
  const taskArea = document.querySelector(".taskArea");
  const div = document.createElement("div");
  const deleteButton = button = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = 'X';
  deleteButton.className = 'main-buttons';
  deleteButton.onclick = function deleteTask() { this.parentNode.remove()}
  
  div.className = "tasks";
  taskArea.append(div);
  div.innerHTML = "<input type='checkbox' name='checkBeforeYouGetShreked' onclick='doneTask(this)'>"
  
  div.append(p);
  div.append(deleteButton)
  
  p.append(task.value);
  task.value = " ";
  document.querySelector(".newTask-bg").style.display = "none";
}

function doneTask(element) {
  if (element.checked != false) {
    setTimeout(() => {
      element.parentNode.style.background = "#6dd06d";
    }, 200);
    element.parentNode.classList.add("completedTask");
  }
  element.parentNode.style.background = "#3b3f42";
}

function filter() {
  const tasks = document.querySelector(".taskArea").children;
  const term = document.getElementById("filter").value.toUpperCase();

  for (task of tasks) {
    if (task.innerText.toUpperCase().indexOf(term) > -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  }
}

function showDoneTasks() {
  for(let element of tasks) {
    element.firstChild.checked? element.style.display ="flex" : element.style.display = "none"
  }
}

function showUndoneTasks() {
  for(let element of tasks) {
    element.firstChild.checked? element.style.display ="none" : element.style.display = "flex"
  }
}
