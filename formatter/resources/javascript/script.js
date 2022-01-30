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
  li.className = "listed-names";
  li.innerHTML = `<p class="queued-name" id="name">${nameInput}</p><button onclick="singleFormatation(this)" class="single-button">Format</button>`;
  document.querySelector(".queue-list").appendChild(li);
  document.getElementById("name-input").value = "";
}

function singleFormatation(button) {
  let li = document.createElement("li");
  let ul = button.parentNode;
  let name = button.previousSibling.textContent;

  li.innerHTML = capitalizeName(name);
  document.querySelector(".formatted-list").append(li);
  ul.remove();
}

function formatAllNames() {
  const namesQuery = document.querySelectorAll(".queued-name");
  for (namer of namesQuery) {
    let li = document.createElement("li");
    li.append(capitalizeName(namer.innerText));
    document.querySelector(".formatted-list").append(li);
  }
  document.querySelector(".queue-list").innerHTML = "";
}
