/* 2. Create a script which calculates how old someone is based on their birth year.
   - Redo task #1 but based on birth year and this year (2020)
   - In this case, use switch case the solution and a function */

function task02() {
  let howOld = function() {
    let year = prompt("Enter your birth year");
    if (year > 0) {
      let age = 2020 - year;
      alert(`You are ${age} years old!`);

      switch (true) {
        case age >= 18:
          alert(`You are ${age} years old, so you can drive!`);
          break;
        case age < 18:
          alert(`You are ${age} years old, so you can not drive!`);
          break;
        default:
          alert("Enter a valid age");
      }
    } else alert(`Enter a valid year!`);
  };
  howOld();
}
