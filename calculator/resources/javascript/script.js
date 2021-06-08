const display = document.getElementById("display")
let value = 0
display.innerHTML = value

function numbers(integer) {
  if(value <= 0) {
    value = ""
      display.innerHTML = value
  }
  value += integer.values
  display.innerHTML = value
}