function darkTheme() {
  document.body.classList.toggle("dark-theme");
}

const characters = document.querySelectorAll(".character");

const description = document.getElementById("description");
const name = document.getElementById("name");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const characterSelected = document.getElementsByClassName("selected");
    characterSelected.classList.remove("selected");

    character.classList.add("selected");
  });
});
