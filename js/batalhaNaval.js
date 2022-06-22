// // <p id="box">Valores</p>


// function XPTO(quantos) {
//     const x = ["AB", "BC", "CD", "DE"];
//     str = " ";
//     for (i = quantos -1; i >=0; i--) {
//         str += " " + x[i]; }
//     return str;
// }

// document.getElementById("box").innerHTML += XPTO(4);

// " DE "

// function classificacao() {
//     return function (obj1, obj2) {
//         var a = (obj2["nota"] - obj1["nota"]);
//         return (a !== 0) ? a : (obj1["idade"] - obj2["idade"]);
//     }
// }
// var aprovados = [
//     { candidato: "Renata Soares", nota: 7.8, idade: 29 },
//     { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
//     { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
//     { candidato: "João Oliveira", nota: 7.8, idade: 27 },
//     { candidato: "Adriana Telles", nota: 7.8, idade: 28 }
// ];
// aprovados.sort(classificacao()); // Está usando classificacao() como compare function. Mas isso é só para determinar a ordem por nota e depois por idade? 
// document.write(aprovados[1].candidato);



// let total_divida = 1400;
// function atualizar_divida(valor_recebido) {
//     total_divida -= valor_recebido;
//     return total_divida;
// }
// for (var i = 0; i < 12; i++) {
//     atualizar_divida(70);
// }

// console.log(total_divida)

// var str = "123456789";
// var p = /[^5-7]/g;
// var resultado = str.match(p);
// console.log(resultado)

var p1 = 7;

function somaSubtrai(p1, p2) {

  p1++; p2--;

  return p1 + p2;

};

var resultado = somaSubtrai(3, 5);

console.log(resultado)