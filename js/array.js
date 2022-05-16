// Dado um conjunto de números, verifica o máximo e calcula a média
/*
Tarefas 
- mínimo
*/

let array = [
    1, 2, 3, 4, 5, 6, 8, 9, 234, 45, 56, 1324, 56, 14, 56, 13445, 34646
];

var max = 0;

// Vendo qual é o maior número: 
for (var index = 0; index < array.length; index ++) {
    if (array[index] > max) {
        max = array[index];
    };
}

console.log(`${max} é o maior número no conjunto.`)

// Calculando a média: 
var sum = 0
for (var i of array) {
    sum += i;
}

var avg = sum / array.length

console.log(`A média do conjunto é ${avg}`)
