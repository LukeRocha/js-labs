const complementNames = ["da", "do", "de", "das", "dos"];
const separator = " ";

function capitalize(array, string) {
  if (complementNames.includes(string.toLowerCase())) {
    array.push(string.slice().toLowerCase());
  } else {
    let stringCapitalize =
      string[0].toUpperCase() + string.slice(1).toLowerCase();
    array.push(stringCapitalize);
  }
}

function capitalizeElements(n) {
  let elementText = n.textContent;
  let nameArray = elementText.split(separator);
  let formatedNames = [];
  for (string of nameArray) {
    capitalize(formatedNames, string);
  }
  let newDiv = document.createElement("div");
  document.querySelector(".formated").append(newDiv);
  let doneNames = formatedNames.join(separator);
  newDiv.append(doneNames);
}

function addName() {
  let newDiv = document.createElement("div");
  let name = document.createTextNode(document.getElementById("name").value);
  let regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  if (!name.textContent.match(regex)) {
    alert("Input a valid Name");
  } else {
    newDiv.className = "pending-name";
    newDiv.innerHTML =
      "<input type='button' class='single-format' onclick='singleFormatation(this)' value='Format'>";
    document.querySelector(".pending").append(newDiv);
    newDiv.appendChild(name);
  }
}

function singleFormatation(x) {
  let nameString = x.nextSibling.textContent;
  let nameArray = nameString.split(separator);
  let namesArray = [];
  for (names of nameArray) {
    capitalize(namesArray, names);
  }
  let newDiv = document.createElement("div");
  let doneName = namesArray.join(separator);
  document.querySelector(".formated").append(newDiv);
  newDiv.append(doneName);
  x.parentElement.style = "display: none";
}

function formatAllNames() {
  let nameList = document.querySelectorAll(".pending-name");
  for (element of nameList) {
    capitalizeElements(element);
  }
  let serase = document.querySelectorAll(".pending-name");
  serase.clearChildren();
}
