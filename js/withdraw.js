/*
1.add event handler with the withdraw buttton
2.get the withdraw elements from the withdraw field
2.5. Also make sure convert the input field into a number by using parsefloat
3.get previous withdraw total
4.calculate total withdraw amont



*/

// step-1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw button clicked");
  //step-2:

  const withdrawField = document.getElementById("withdraw-field");

  const newWithDrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);
  //   console.log(newWithdrawAmount);

  // step-3:

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  //   console.log(previousWithdrawTotal);

  //step-4:

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-7: clear the input field
  withdrawField.value = "";
});
