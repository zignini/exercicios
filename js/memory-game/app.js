/*
To-do
x Show card when card is clicked
- Show another card when another card is clicked
- If it is a match, leave shown. Otherwise, hide both cards 
- Declare winner when all cards are shown
*/

const animals = [
    { name: 'Girafa', src: 'https://yesofcorsa.com/wp-content/uploads/2017/12/4K-Giraffe-Wallpaper-Background1.jpg' },
    { name: 'Hipopótamo', src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Hippo_at_dawn.jpg'}
]

const cardsToAnimalsMap = {
    card1: 0,
    card2: 1, 
    card3: 0, 
    card4: 1
}

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')

const showCard = (cardId) => {
    // let animalId = cardsToAnimalsMap.cardId
    console.log(cardId)
    console.log(animalId)
    console.log(animals[animalId].src)
    // cardId.setAttribute('src', `${animals[animalId].src}`)
}

const hideCard = (cardId) => {
    cardId
}

card1.addEventListener('click', (event) => {
    showCard(card1)
})