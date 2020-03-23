/* 
6. Create an script that lists everyone in the class from a prompt, 1 prompt per name

   - Ask "How many students are there in the class" and 'what is student #2 name' by prompt */

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
  alert(element.firstN + " " + element.secondN);
});
