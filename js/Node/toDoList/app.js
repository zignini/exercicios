// Insert task
const button = document.getElementById("btn-insert");
var input = document.getElementById("new-task");
var list = document.getElementById("list");

button.addEventListener("click", () => {
  var value = input.value;
  var theLi = document.createElement("li");
  theLi.append(value);
  list.append(theLi);
});