function darkTheme() {
  document.body.classList.toggle('dark-theme');
}

const characters = document.querySelectorAll('.character')
const character = document.getElementsByClassName('character')
const characterSelected = document.getElementsByClassName('character-selected')
const description = document.getElementById('description')
const name = document.getElementById('name')

characters.addEventListener('mouseenter', () => {
  character.classList.toggle = 'selecionado'
})