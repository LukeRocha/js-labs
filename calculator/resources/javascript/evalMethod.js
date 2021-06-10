  const display = document.querySelector(".display");
  let displayValue = 0;
  display.innerHTML = displayValue;

  function number(integer) {
    if(displayValue === 0){
      displayValue = "";
      display.innerHTML = integer.value;
    }
    displayValue += integer.value;
    display.innerHTML = displayValue;
  }

  function operation(signal) {
    let tempValue = eval(displayValue);
    displayValue = `${tempValue} ${signal.value} `;
    display.innerHTML = displayValue;
  }

  function clearDisplay() {
    displayValue = 0;
    display.innerHTML = displayValue;
  }

  function equals() {
    displayValue = eval(displayValue);
    display.innerHTML = displayValue;
  }

  function mathPoint(point) {
    displayValue += point.value
    display.innerHTML = displayValue
  }

  //I know, this isn't the right way to make a calculator, but i tried from the vrey scratch with almost no experience, so after all I'm glad I've done this work!