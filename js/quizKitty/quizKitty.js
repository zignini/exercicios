const correctAnswers = ['B', 'A', 'A', 'A', 'B']

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



