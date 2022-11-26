// Event listeners on icons 

const ul = document.querySelector('ul')
const searchForm = document.querySelector('#search-form')
const inputForm = document.querySelector('#input-form')
const liArray = Array.from(ul.children)
const magnifyingGlassIcon = document.querySelector('.fa-magnifying-glass')
const fileIcon = document.querySelector('.fa-file')

const removeItemIfIconWasClicked = event => {
  if(event.target.nodeName === 'I') {
    document.querySelector(`[data-to-do="${event.target.dataset.trash}"]`).remove()
  }
}

ul.addEventListener('click', event => removeItemIfIconWasClicked(event))

const addNewLiIfValueIsValid = event => {
  const inputValue = inputForm.input.value
  if (inputValue) {
    ul.innerHTML += `<li data-to-do="${inputValue}">${inputValue}<i data-trash="${inputValue}" class="fa-solid fa-trash"></i></li>`
    scrollTo(0, 100000000)
  }
}

inputForm.addEventListener('submit', event => {
  event.preventDefault()
  addNewLiIfValueIsValid(event)
})

fileIcon.addEventListener('click', () => addNewLiIfValueIsValid())

const showOnlyMatchingToDos = () => {
  searchValue = searchForm.search.value.trim().toLowerCase()
  liArray.forEach(li => {
    if (li.textContent.toLowerCase().includes(searchValue)) {
      li.classList.remove('hidden')
    } else {
      li.classList.add('hidden')
    }
  })
}

searchForm.addEventListener('submit', event => {
  event.preventDefault()
  showOnlyMatchingToDos()
})

magnifyingGlassIcon.addEventListener('click', showOnlyMatchingToDos())

searchForm.addEventListener('input', () => showOnlyMatchingToDos())