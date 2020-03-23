/* 
6. Create an script that lists everyone in the class from a prompt, 1 prompt per name

   - Ask "How many students are there in the class" and 'what is student #2 name' by prompt */

function task06() {
  alert("How many students are in FbW10? Press 'ENTER' to see the answer!");

  const fbw10 = [
    { firstN: "Costel", secondN: "Cuconoiu" },
    { firstN: "Cristian", secondN: "Rogojina" },
    { firstN: "Kriss", secondN: "Meyer" },
    { firstN: "Tim", secondN: "Nauman" },
    { firstN: "Marcio", secondN: "Duarte" },
    { firstN: "Daniel", secondN: "Bakare" },
    { firstN: "Kalu", secondN: "Annas" }
  ];
  alert(
    "FbW10 has " +
      fbw10.length +
      " students!" +
      " Press 'ENTER' to see who they are:"
  );

  fbw10.forEach(element => {
    alert(element.firstN + " " + element.secondN);
  });
}
