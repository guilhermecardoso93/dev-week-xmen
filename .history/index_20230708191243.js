const nightMode = document.querySelector('#night-mode')
const lightMode = document.querySelector('#light-mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
})