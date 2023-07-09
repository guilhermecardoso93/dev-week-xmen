function trocarTema(tema) {
  // Remove todas as classes de tema existentes
  document.body.classList.remove('tema-claro', 'tema-escuro');

  // Adiciona a classe de tema desejada
  document.body.classList.add(tema);
}

console.log('oi')