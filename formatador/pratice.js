const complementWords = ["da", "de", "do", "das", "dos"];
const validCharsRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

function capitalizeWords(name) {
  const words = name.toLowerCase().split(" ");
  const capitalizedWords = [];
  for (const word of words) {
    if (complementWords.includes(word)) {
      capitalizedWords.push(word);
    } else {
      capitalizedWords.push(
        word[0].toUpperCase() + word.slice(1).toLowerCase()
      );
    }
  }
  return capitalizedWords.join(" ");
}

function addNameToQueue() {
  const nameToAdd = document.getElementById("nameToAdd").value;
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
  for (element of document.getElementById("namesQueue").children) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(capitalizeWords(element.innerHTML)));
    document.getElementById("formattedNamesHistory").appendChild(li);
  } //eu preciso usar o textNode caso queira aninhar algo pelo appendChild
  document.getElementById("namesQueue").innerHTML = "";
}
