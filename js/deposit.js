// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("deposit button click");
  // step-2: get the deposit amount from the deposit input field
  // for input field use.value to the value inside the input field

  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  console.log(typeof newDepositAmount);

  // step-3 get the current deposit total
  // for non-input(element other than input, textarea) use inner text to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //   console.log(typeof previousDepositTotal);
  // step-4: add number set the total deposit
  const currentDepositeTotal = previousDepositTotal + newDepositAmount;

  //   console.log(depositTotal);
  // set the deposit total
  depositTotalElement.innerText = currentDepositeTotal;
  //   console.log(depositAmount);

  // step-5: get balance current total amount
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step-7: clear the deposite feild

  depositField.value = "";
});
