// step-1: add a click event handler with submit buttongit

document.getElementById('submit-btn').addEventListener('click', function(){
//     console.log('Submit Button Clicked');
// step-2: get the email address inside email field
//always remember to use .value to get text from an input field

const emailField = document.getElementById('user-email');
const email = emailField.value;
console.log(email);




 })