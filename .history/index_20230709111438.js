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


/**OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        passo 3 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande 
*/

/** OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo */
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')
// Inicio passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => { 
        /** if para celular ao tocar no celular no personagem na lista, como a lista está em baixo voltar ao topo para mostrar a imagem do personagem grande */
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        // passo 2 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem()
        
        // passo 3 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        // console.log(personagem.classList) // classList mostra as classes que o elemento html possui
        personagem.classList.add('selecionado') // vai adicinar classe selecionado ao elemento html onde o mouse passar
        
        /** OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande */
        
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem) 

        // passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem)

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoDoPersonagem(personagem)
    })
})

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagm = document.getElementById('descricao-personagem')
    descricaoPersonagm.innerHTML = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem') //Pegar elemento pelo id nome-personagem, que contém o nome do personagem
    nomePersonagem.innerText = personagem.getAttribute('data-name') // usar o innerText para colocar alterar o nome do personagem por meio do atributo data-name que está no html
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value //Pegando o atributo id da classe personagem que passei o mouse em cima e salvando na const idPersonagem
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png` //usando a Template string interpolação de string com a const idPersonagem
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}