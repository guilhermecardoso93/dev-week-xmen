function trocarTema(tema) {
  // Remove todas as classes de tema existentes
  document.body.classList.remove('tema-claro', 'tema-escuro');

  // Adiciona a classe de tema desejada
  document.body.classList.add(tema);
}

let themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", () => {
  let targetTheme;
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    targetTheme = "dark";
  } else {
    targetTheme = "light";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
});

let browserTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";
