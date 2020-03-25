/* 
8. Create a script that asks for x amount of people. And then asks for their ages and finds the oldest and youngest age. As well as the average age

   - Create an empty array and push all entered ages by promt in that array
   - Write "oldest person is age", "yougnest person is age", "the average age is age" by using console */

function task08() {
  const peoplesAge = [];
  let amount = parseInt(prompt("Enter the number of people"));
  for (let i = 0; i < amount; i++) {
    peoplesAge.push(parseInt(prompt("Enter peoples age")));
  }
  alert("Our array now is: " + peoplesAge);
  //method for average age
  let avg = peoplesAge.reduce(function(total, num) {
    return (total + num) / peoplesAge.length;
  });
  alert("The average age is: " + avg);
  //method that will show our oldest person
  peoplesAge.sort(function(a, b) {
    return b - a;
  });
  alert("The oldest person age is " + peoplesAge[0]);
  //method that will show our youngest person
  peoplesAge.sort(function(a, b) {
    return a - b;
  });
  alert("The youngest person age is " + peoplesAge[0]);
}
