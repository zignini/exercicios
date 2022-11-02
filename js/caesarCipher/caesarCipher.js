// Caesar cipher

const higherAlphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
const lowerAlphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

function encrypt(str, rot) {
  let newStr = ''
  const lastIndex = higherAlphabet.length - 1
  for (let char of str) {
    if (higherAlphabet.includes(char)) {
      const inputIndex = higherAlphabet.indexOf(char)
      const outputIndex = inputIndex + rot > lastIndex ? inputIndex + rot - higherAlphabet.length : inputIndex + rot
      newStr += higherAlphabet[outputIndex]
    } else if (lowerAlphabet.includes(char)) {
      const inputIndex = lowerAlphabet.indexOf(char)
      const outputIndex = inputIndex + rot > lastIndex ? inputIndex + rot - lowerAlphabet.length : inputIndex + rot
      newStr += lowerAlphabet[outputIndex]
    } else {
      newStr += char
    }

  }
  return newStr
}

function decrypt(str, rot) {
  let newStr = ''
  for (let char of str) {
    if (higherAlphabet.includes(char)) {
      const inputIndex = higherAlphabet.indexOf(char)
      let outputIndex = inputIndex - rot
      if (outputIndex < 0) {
        outputIndex += higherAlphabet.length
      }
      newStr += higherAlphabet[outputIndex]
    } else if (lowerAlphabet.includes(char)) {
      const inputIndex = lowerAlphabet.indexOf(char)
      let outputIndex = inputIndex - rot
      if (outputIndex < 0) {
        outputIndex += lowerAlphabet.length
      }
      newStr += lowerAlphabet[outputIndex]
    } else {
      newStr += char
    }

  }
  return newStr
}

// Elements 

const form = document.querySelector('form')
const encryptButton = document.querySelector('#encrypt-button')
const decryptButton = document.querySelector('#decrypt-button')
const number = form.number
const message = form.message
const h2 = document.querySelector('h2')

// Validate number and provide feedback 

let numberFeedback = document.createElement('p')
number.insertAdjacentElement('afterend', numberFeedback)

const validateNumber = function (aNumber) {
  const numberRegex = /^([1-9]|1\d|2[0-5])$/
  const isNumberValid = numberRegex.test(aNumber)
  return isNumberValid
}

const showNumberFeedback = function () {
  if (!validateNumber(number.value)) {
    numberFeedback.textContent = "Insira um número de 1 a 25" 
    numberFeedback.classList.add('is-invalid')
    numberFeedback.classList.add('small')
  } else {
    numberFeedback.textContent = "" 
  }
}

number.addEventListener('input', showNumberFeedback)

// Encrypt message based on number and show output

let result = document.createElement('p')
h2.insertAdjacentElement('afterend', result) 

form.addEventListener('submit', event => event.preventDefault())


encryptButton.addEventListener('click', () => {

  if (!validateNumber(number.value)) {
    return
  }

  result.textContent = encrypt(message.value, Number(number.value))
  
})

decryptButton.addEventListener('click', () => {

  if (!validateNumber(number.value)) {
    return
  }

  result.textContent = decrypt(message.value, Number(number.value))
  
})

