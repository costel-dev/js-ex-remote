/* 
4. Find the biggest element in an array of numbers

   - Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.
   - I want to see function, for loop and if statement in your solution. Please think a solution which uses all of them */

function task04() {
  let task04Array = [1, 2, 3, 4, 5, 6, 7, 8];
  let number = parseInt(prompt("Add a number to your Array"));
  task04Array.push(number);
  function checkArray() {
    task04Array.sort(function(a, b) {
      return b - a;
    });
    alert(task04Array[0]);
  }
  checkArray();
}
