function darkTheme() {
  document.body.classList.toggle('dark-theme');
}

const character = document.getElementsByClassName('character')
const characterSelected = document.getElementsByClassName('character-selected')
const description = document.getElementById('description')
const name = document.getElementById('name')


function changeValue() {
  character.classList.toggle('selected')
}

character.addEventListener('mouseover', changeValue())