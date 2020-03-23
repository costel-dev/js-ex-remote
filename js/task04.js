/* 
4. Find the biggest element in an array of numbers

   - Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.
   - I want to see function, for loop and if statement in your solution. Please think a solution which uses all of them */

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let number = parseInt(prompt("Add a number to your Array"));
myArray.push(number);
function checkArray() {
  myArray.sort(function(a, b) {
    return b - a;
  });
  alert(myArray[0]);
}
checkArray();
