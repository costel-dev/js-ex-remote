/* 
9. Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number */

function task09() {
  let password = prompt("Enter your password");
  let checkNumber = /\d/g; // this will check if our string contains digits
  if (
    password.length >= 5 &&
    password.length <= 20 &&
    password.match(checkNumber)
  ) {
    alert("Your password is strong enough!");
  } else
    alert(
      "Your password must contain min 5 and max 20 characters and at least one number"
    );
}
