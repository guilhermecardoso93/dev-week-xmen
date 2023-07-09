const nightMode = document.querySelector('#night-mode')
const lightMode = document.querySelector('#light-mode')

nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('night-mode')
})

lightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-mode')
})