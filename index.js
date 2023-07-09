function darkTheme() {
  document.body.classList.toggle("dark-theme");
}

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removeSelectedCharacter(character);
    character.classList.add("selected");
    changeCharacterImageSelected(character);
    changeCharacterNameSelected(character);
    changeCharacterDescriptionSelected(character);
  });
});

function changeCharacterNameSelected(character) {
  const characterName = document.getElementById("name");
  characterName.innerText = character.getAttribute("data-name");
}

function changeCharacterDescriptionSelected(character) {
  const descriptionCharacter = document.getElementById("description");
  descriptionCharacter.innerHTML = character.getAttribute("data-description");
}

function changeCharacterImageSelected(character) {
  const imgCharacterFull = document.querySelector(".full-img");
  const idCharacter = character.attributes.id.value;
  imgCharacterFull.src = `./src/assets/imagens/card-${idCharacter}.png`;
}

function removeSelectedCharacter() {
  const personagemSelecionado = document.querySelector(".selected");
  personagemSelecionado.classList.remove("selected");
}
