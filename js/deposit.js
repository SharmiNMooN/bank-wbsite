// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("deposit button click");
  // step-2: get the deposit amount from the deposit input field
  // for input field use.value to the value inside the input field

  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;

  // step-3 get the current deposit total
  // for non-input(element other than input, textarea) use inner text to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  //   console.log(depositTotal);
  depositTotalElement.innerText = depositAmount;
  console.log(depositAmount);
});
