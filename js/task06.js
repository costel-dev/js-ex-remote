/* 
6. Create an script that lists everyone in the class from a prompt, 1 prompt per name

   - Ask "How many students are there in the class" and 'what is student #2 name' by prompt */

function task06() {
  const fbw10 = [
    { firstN: "Costel", secondN: "Cuconoiu" },
    { firstN: "Cristian", secondN: "Rogojina" },
    { firstN: "Kriss", secondN: "Meyer" },
    { firstN: "Tim", secondN: "Nauman" },
    { firstN: "Marcio", secondN: "Duarte" },
    { firstN: "Daniel", secondN: "Bakare" },
    { firstN: "Kalu", secondN: "Annas" }
  ];
  fbw10.forEach(element => {
    alert("Our students are: " + element.firstN + " " + element.secondN);
  });

  function check() {
    let answer = prompt(
      "What you want to do? Type '1' to see how many students are in FbW10 or Type '2' to see student #2 name"
    );

    if (answer == 1) {
      alert("FbW10 has " + fbw10.length + " students!");
    } else if (answer == 2) {
      alert("Our student #2 name is: " + fbw10[1].secondN);
    } else check();
  }
  check();
}
