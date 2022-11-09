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
    return `Você quase acertou metade (${score}%). Recomendamos conviver mais com gatinhos.`
  } else if (score <= 80) {
    return `Ufa! Você quase acertou todas (${score}%)! Continue observando gatinhos.`
  } else {
    return "Uau! Quer dizer, miau! Você acertou todas! Você deve ser um expert em expressão corporal felina!"
  }
}

const getUserAnswers = function () {
  let userAnswers = correctAnswers.map((_, index) => {
    return form[`question${index + 1}Option`].value
  })
  return userAnswers
}

const showScore = score => { 
  h2.textContent = "Resultado"
  resultP.textContent = createResultMessage(score)
  resultDiv.classList.add('alert')
  resultDiv.classList.add('alert-primary')

  scrollTo({
    top: 0, 
    left: 0,
    behavior: 'smooth'
  })
}

form.addEventListener('submit', event => {
  event.preventDefault()

  submittedAnswers = getUserAnswers()

  const score = compareAnswers(submittedAnswers, correctAnswers)

  showScore(score)
 
})
