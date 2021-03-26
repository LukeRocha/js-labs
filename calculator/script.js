const display = document.querySelector(".display");
let values = 0;
display.innerHTML = values;

function number(integer) {
  if (values <= 0) {
    values = "";
    display.innerHTML = values;
  }
  values += integer.value;
  display.innerHTML = values;
}

function operation(signal) {
  let tempValue = eval(values);
  values = `${tempValue} ${signal.value} `;
  display.innerHTML = values;
}

function limpar() {
  const older = values;
  console.log(older);
  values = 0;
  let tempValue = values;
  display.innerHTML = values;
}

function equals() {
  values = eval(values);
  display.innerHTML = values;
}
