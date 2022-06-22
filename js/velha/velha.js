// import * as d3 from d3

/* 
To do
1. Quando o usuário clicar num espaço vazio, aparece o símbolo do uuário (X ou O)
1. Depois que o usuário clicou e apareceu o símbolo, o computador joga
1. O computador sempre ganha se ele começa 
*/

var moveButtons = document.querySelectorAll(".moveButton");

moveButtons.forEach(moveButton => {moveButton.addEventListener("click", () => {userMove(moveButton)}, false)});

function userMove(i) {
    i.before("◯");
    i.remove();
};

function compMove() {
};