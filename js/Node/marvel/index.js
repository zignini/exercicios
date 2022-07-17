// imports
import {example, results} from "./app.js";

// DOM

const button = document.getElementById("btn-submit");
var search = document.getElementById("search");
var heroesDiv = document.getElementById("dheroes");

search.addEventListener("Form", () => {
  console.log("Oi, tô ouvindo!")
  // var term = searched.value;
  // var hero = document.createElement("p");
  // heroesDiv.append(hero);
  // list.append(term);
});

// function manualListener() {
//   var confirmp = document.createElement("p");
//   var confirmvalue = document.append("Oi, estou ouvindo!");
//   confirmp.append(confirmvalue);
//   heroesDiv.append(confirmp);
// }


for (var charIndex = 0; charIndex <= results.length(); charIndex ++) {
  console.log(example[charIndex]);
};