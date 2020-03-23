/* 2. Create a script which calculates how old someone is based on their birth year.
   - Redo task #1 but based on birth year and this year (2020)
   - In this case, use switch case the solution and a function */

let howOld = function() {
  let year = prompt("Enter your birth year");
  if (year > 0) {
    let age = 2020 - year;
    alert(`You are ${age} years old!`);
  } else alert(`Enter a valid year!`);
};
howOld();
