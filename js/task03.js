/* 
3. Create a simple to do list from a prompt.

   - Create a button and when you click the button, it will a "Add an item to the list" as a promt message
   - When you promt a task, it will write inside the page as a list */

function toDoList() {
  let li = document.createElement("li");
  li.innerHTML = prompt("What you want to do?");
  if (li.innerHTML.length > 0) {
    document.querySelector("ul").append(li);
  }
}
