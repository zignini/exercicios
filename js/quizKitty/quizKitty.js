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
  return array1.reduce((accumulator, element, index) => {
    element === array2[index]? accumulator += 20 : accumulator += 0
  return accumulator}, 0)
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

const getUserAnswers = () => correctAnswers.map((_, index) => 
  form[`question${index + 1}Option`].value )

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
