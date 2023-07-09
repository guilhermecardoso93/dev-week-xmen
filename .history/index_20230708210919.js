function darkTheme() {
  document.body.classList.toggle('dark-theme');
}

const characters = document.querySelectorAll('.character')
const characterSelected = document.getElementsByClassName('character-selected')
const description = document.getElementById('description')
const name = document.getElementById('name')

characters.forEach(character => {
  character.addEventListener('mouseenter', () => {
    character.appendChild.classList = 'selecionado'
  })
})