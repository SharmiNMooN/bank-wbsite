/*
1.add event handler with the withdraw buttton
2.get the withdraw elements from the withdraw field
2.5. Also make sure convert the input field into a number by using parsefloat
3.get previous withdraw total
4.calculate total withdraw amont
4.5. get total withdraw amount
5. get previous balance total

7.clear the input field



*/

// step-1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw button clicked");
  //step-2:

  const withdrawField = document.getElementById("withdraw-field");

  const newWithDrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);
  //   console.log(newWithdrawAmount);

  addToWithdrawAmount(newWithdrawAmount);

  removeFromTotalBalance(newWithdrawAmount);

  // step-3:

  //step-7: clear the input field
  withdrawField.value = "";
});

function addToWithdrawAmount(withdrawAmount) {
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  //   console.log(previousWithdrawTotal);

  //step-4:

  const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
}

function removeFromTotalBalance(withdrawAmount) {
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  previousBalanceTotal = parseFloat(previousBalanceTotalString);
  //   console.log(previousBalanceTotal);

  // step-6:
  const newBalanceTotal = previousBalanceTotal - withdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
}
