//Get the existing value in 'cname' element

function multiply() {}

function digitPressed1() {
  updateDisplayWithValue("1");
}

function digitPressed2() {
  updateDisplayWithValue("2");
}

function updateDisplayWithValue(digit) {
  //Get the existing value in 'cname' element
  var existingValue = document.getElementById("cname").value;
  console.log('existingValue:', existingValue);
  //if value is zero
  if (existingValue == "0") {
    //show digit in display
    document.getElementById("cname").value = digit;
  } else {
    //else not zero
    //append the digit in existing value and display
    var newValue = digit + existingValue ;
    document.getElementById("cname").value = newValue;
  }
}
