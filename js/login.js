// step-1: add a click event handler with submit buttongit

document.getElementById("submit-btn").addEventListener("click", function () {
  //     console.log('Submit Button Clicked');
  // step-2: get the email address inside email field
  //always remember to use .value to get text from an input field

  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // console.log(email);

  // step-3: get a password
  // 3.a. set id on the html element
  // 3.b. get the element
  // 3.c. get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  // console.log(email, password);

  // denger: do not verify email and password on the  clint side
  // step-4: verify email and password
  if (email === "sm@islamibank.com" && password === "sm0003") {
    // console.log('valid user');
    window.location.href = "bank.html";
  } else {
    // console.log('invalid user');
    alert("invalid user: you are not a right user");
  }
});
