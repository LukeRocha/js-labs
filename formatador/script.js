const complementWords = ["da", "de", "do", "das", "dos"];

function capitalizeWords(name) {
  const words = name.toLowerCase().split(" ");
  const capitalizedName = [];
  for (const word of words) {
    if (complementWords.includes(word)) {
      capitalizedName.push(word);
    } else {
      capitalizedName.push(word[0].toUpperCase() + word.slice(1));
    }
  }
  return capitalizedName.join(" ");
}

function addNameToQueue() {
  const nameToAdd = document.getElementById("nameToAdd").value;
  const validCharsRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  if (!nameToAdd.match(validCharsRegex)) {
    alert("Input a valid name");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(nameToAdd));
  document.getElementById("namesQueue").appendChild(li);
  document.getElementById("nameToAdd").value = "";
}

function formatNamesOnQueue() {
  for (const element of document.getElementById("namesQueue").children) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(capitalizeWords(element.innerHTML)));
    document.getElementById("formattedNamesHistory").appendChild(li);
  }
  document.getElementById("namesQueue").innerHTML = "";
}
