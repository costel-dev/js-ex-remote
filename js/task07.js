/* 
7. Create an script that calculates the average number from an array

   - Numbers then can be added from prompt and new average given */

function task07() {
  let task07Array = [23, 34, 1, 56, 90];
  let avg = task07Array.reduce(function(total, num) {
    return (total + num) / task07Array.length;
  });
  alert(avg);
}
