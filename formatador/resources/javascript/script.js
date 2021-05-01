const complementNames = ["da", "de", "do", "das", "dos"];
// domain

function capitalizeName(name) {
  nameArray = name.toLowerCase().split(" ");
  let capitalizedWords = [];
  for (word of nameArray) {
    if (!complementNames.includes(word)) {
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    } else {
      capitalizedWords.push(word);
    }
  }
  return capitalizedWords.join(" ");
}

//UI

function addNameToQueue() {
  let nameInput = document.getElementById("name-input").value;
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  if (!nameInput.match(regex)) {
    alert("Input a valid name");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `<li class="listed-names"><p id="name">${nameInput}</p><button onclick="singleFormatation(this)" class="single-button">Format</button></li>`;
  document.querySelector(".queue-list").appendChild(li);
  document.getElementById("name-input").value = "";
}

function singleFormatation(button) {
  let li = document.createElement("li");
  let ul = button.parentNode;
  let name = button.previousSibling.textContent;

  li.innerHTML = capitalizeName(name);
  document.querySelector(".formated-names").append(li);
  ul.remove();
}

function formatAllNames() {
  const namesQuery = document.querySelectorAll(".test");
  for (namer of namesQuery) {
    let li = document.createElement("li");
    li.append(capitalizeName(namer.innerText));
    document.querySelector(".formated-names").append(li);
  }
  document.querySelector(".queue-list").innerHTML = "";
}