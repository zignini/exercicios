// Calcula o IMC a partir do peso e da altura informados pelo usuário em prompts. 

let weight = prompt("Qual é o peso em kg?");
let height = prompt("Qual é a altura em metros? Use o ponto como separador de decimais, ex.: 1.65");

let imc = weight / height ** 2

console.log(`O IMC é ${imc}.`);

// Curiosidade: um if performa melhor que um switch para comparações de maior ou menor. https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than

if (imc < 18.5) {
    console.log("Esse IMC é classificado como magreza.")
} else if (imc <= 24.9) {
    console.log("Esse IMC é classificado como normal.")
} else if (imc <= 29.9) {
    console.log("Esse IMC é classificado como sobrepeso.")
} else if (imc <= 34.9) {
    console.log("Esse IMC é classificado como grau I de obesidade.")
} else if (imc <= 39.9) {
    console.log("Esse IMC é classificado como grau II de obesidade.")
} else {
    console.log("Esse IMC é classificado como grau III de obesidade.")
}
