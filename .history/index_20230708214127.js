function darkTheme() {
  document.body.classList.toggle("dark-theme");
}

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const characterSelected = document.getElementsByClassName("selected");
    characterSelected.classList.remove("selected");

    character.classList.add("selected");

    const characterFullImage = document.querySelector(".character-selected");
    const idCharacter = character.attributes.id.value;

    characterFullImage.src = `./src/assets/imagens/card-${idCharacter}.png`;

    
    const name = document.getElementById("name");
    name.innerText = character.getAttribute("data-name");

    const description = document.getElementById("description");
    description.innerText = character.getAttribute("data-description");
  });
});
