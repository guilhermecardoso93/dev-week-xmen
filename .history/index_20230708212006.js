function darkTheme() {
  document.body.classList.toggle('dark-theme');
}

const characters = document.querySelectorAll('.character')

const description = document.getElementById('description')
const name = document.getElementById('name')

characters.forEach(character => {
  character.addEventListener('mouseenter', () => {
    character.classList.add('selecionado')
    const characterSelected = document.querySelector('.selecionado')
    characterSelected.classList.remove('selecionado')
  })
})