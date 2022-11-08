/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

const correctAnswers = ['C', 'B', 'C', 'C', 'D']

const form = document.querySelector('form')

const formDiv = document.querySelector('#form-div')

const resultDiv = document.createElement('div')
resultDiv.classList.add('container')

const h2 = document.createElement('h2')
formDiv.insertAdjacentElement('beforebegin', resultDiv)
resultDiv.appendChild(h2)
  
const resultP = document.createElement('p')
resultDiv.appendChild(resultP)

const compareAnswers = function (array1, array2) {
  score = 0
  array1.forEach((element, index) => {
    element === array2[index]? score += 20 : score += 0
  });
  return score
}

createResultMessage = function (score) { 
  if (score === 0) {
    return "Que pena, você não acertou nenhuma!"
  } else if (score <= 40) {
    return `Você quase acertou metade (${score}%). Recomendamos conviver com mais gatinhos.`
  } else if (score <= 80) {
    return `Ufa! Você quase acertou todas (${score}%)! Continue observando gatinhos.`
  } else {
    return "Uau! Quer dizer, miau! Você acertou todas! Você deve ser um expert em expressão corporal felina!"
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()

  submittedAnswers = []
  
  submittedAnswers.push(form.question1Option.value)
  submittedAnswers.push(form.question2Option.value)
  submittedAnswers.push(form.question3Option.value)
  submittedAnswers.push(form.question4Option.value)
  submittedAnswers.push(form.question5Option.value)

  compareAnswers(submittedAnswers, correctAnswers)

  h2.textContent = "Resultado"
  
  resultP.textContent = createResultMessage(score)

  resultDiv.classList.add('alert')
resultDiv.classList.add('alert-primary')


  scrollTo(0,0)
})



