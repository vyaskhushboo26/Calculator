var firstOperand = "";
var secondOperand = "";
var operator = "";

function updateDisplayWithValue(digit) {
  //Get the existing value in 'cname' element

  var existingValue = document.getElementById("cname").innerText;
  var upperValue = document.getElementById("pname").innerText;
  console.log("existingValue:", existingValue);

  //if value is zero
  if (existingValue == "0") {
    //show digit in display
    if (digit == "x" || digit == "/" || digit == "+" || digit == "-") {
      return;
    }
    document.getElementById("cname").innerText = digit;
    return;
  }
  // if digit is desimal point then check if it alerady exist(54.6)
  if (digit == ".") {
    if (checkIfTextExist(digit, existingValue)) {
      return;
    }
  }
  // on click of any opration
  //store existing value in variable
  //then store that clickable oprator in operator
  //then store after operator value in second operand
  //
  if (digit == "x" || digit == "/" || digit == "+" || digit == "-") {
    //console.log("hello");
    if (checkIfTextExist("x", upperValue)) {
      return;
    }
    if (checkIfTextExist("/", upperValue)) {
      return;
    }
    if (checkIfTextExist("+", upperValue)) {
      return;
    }
    if (checkIfTextExist("-", upperValue)) {
      return;
    }

    if(existingValue == '.'){
      existingValue = '0';
    }
    document.getElementById("pname").innerText = existingValue + " " + digit;
    document.getElementById("cname").innerText = "0";
    firstOperand = existingValue;
    operator = digit;
    return;
  }

  //else not zero
  //append the digit in existing value and display
  var newValue = existingValue + digit;
  document.getElementById("cname").innerText = newValue;
}

function checkIfTextExist(text, existingValue) {
  let index = existingValue.indexOf(text);
  if (index >= 0) {
    // if yes then do nothing
    return true;
  }
  return false;
}

function myFinalReultOnDisplay() {
  if (firstOperand != "" && operator != "") {
    secondOperand = document.getElementById("cname").innerText;
    var finalResult = 0;
    switch (operator) {
      case "x":
       finalResult = Number(firstOperand) * Number(secondOperand);
        break;
      case "/":{
        if(secondOperand == '0'){
          myClearContainer();
          return;
        }
        finalResult = Number(firstOperand) / Number(secondOperand);}
        break;
      case "+":
        finalResult = Number(firstOperand) + Number(secondOperand);
        break;
      case "-":
        finalResult = Number(firstOperand) - Number(secondOperand);
        break;
      default:
      myClearContainer();
    }
    if(finalResult == NaN){
      finalResult = 0;
    }
    myClearContainer();
    document.getElementById("cname").innerText = String(finalResult);

  }
}

function myClearContainer() {
  document.getElementById("cname").innerText = "0";
  document.getElementById("pname").innerText = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
}
