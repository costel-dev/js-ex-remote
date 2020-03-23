/* 
5. Create a random number checker

   - Create an array from 1 to 6 with 6 elements
   - Use map method to make them double (like 1 x 2 = 2)
   - Add a button and when you click the button show your random value inside the new array (because of map)
   - Write your normal array above the button inside the page */

function task05() {
  let myArray = [2, 5, 34, 76, 12, 8];
  alert("Initial Array is: " + myArray);

  let myDoubleArray = myArray.map(doubleFunc);

  function doubleFunc(value) {
    return value * 2;
  }
  let render = function() {
    alert("My Double Array is " + myDoubleArray);
  };
  render();
}
