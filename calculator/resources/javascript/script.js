  const display = document.querySelector(".display");
  let values = 0;
  display.innerHTML = values;

  function number(integer) {
    if(values === 0){
      values = "";
      display.innerHTML = integer.value;
    }
    values += integer.value;
    display.innerHTML = values;
  }

  function operation(signal) {
    let tempValue = eval(values);
    values = `${tempValue} ${signal.value} `;
    display.innerHTML = values;
  }

  function clearDisplay() {
    values = 0;
    display.innerHTML = values;
  }

  function equals() {
    values = eval(values);
    display.innerHTML = values;
  }

  function mathPoint(point) {
    values += point.value
    display.innerHTML = values
  }