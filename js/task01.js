/* 1. Create a script which checks to see if someone is old enough to by drive
   1.1 - 1st Way : Do it in a simple way
   1.2 - 2nd Way : I want to see at least one function
   1.3 - 3rd Way : I want to see a class
   Hint 1: Ask "How old are you?" by prompt
   Hint 2: Write console messages / alert messages "You can drive", "You can not drive", "need to start again" if the client enter a character! */

function task01() {
  let age = prompt("How old are you?");
  if (age >= 18) {
    alert(`You are ${age} years old, so you can drive!`);
  } else if (age < 18) {
    alert(`You are ${age} years old, so you can not drive!`);
  } else {
    alert("Enter a valid age");
  }
}

/* class Driver {
  constructor(age) {
    this.age = age;
  }
  drive() {
    if (this.age >= 18) {
      return alert("You can drive");
    } else if (this.age < 18) {
      return alert("You can't drive");
    } else {
      return alert("Enter a valid age");
    }
  }
}

let newDriver = new Driver(prompt("How old are you?"));
newDriver.drive(); */
