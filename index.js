function updateDisplayWithValue(digit) {
  //Get the existing value in 'cname' element
  var existingValue = document.getElementById("cname").value;
  console.log("existingValue:", existingValue);
  //if value is zero
  if (existingValue == "0") {
    //show digit in display
    document.getElementById("cname").value = digit;
    return;
  }
  // if digit is desimal point then check if it alerady exist(54.6)
  if (digit == ".") {
    let index = existingValue.indexOf(".");
    if (index >= 0) {
      // if yes then do nothing
      return;
    }
  }

  //else not zero
  //append the digit in existing value and display
  var newValue = existingValue + digit;
  document.getElementById("cname").value = newValue;
}

function myClearContainer() {
  document.getElementById("cname").value = "0";
}
