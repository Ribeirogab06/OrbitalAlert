// ================================================================
// menu.js -> Controla o menu "hambúrguer" no celular (abre e fecha)
// ================================================================

// Pega no HTML o botão do hambúrguer pelo seu id "botaoMenu"
const botaoMenu = document.getElementById("botaoMenu");

// Pega no HTML a lista do menu (ul) pelo seu id "menuLista"
const menuLista = document.getElementById("menuLista");

// Adiciona um "ouvinte de clique" ao botão hambúrguer
botaoMenu.addEventListener("click", function () {
  // Ao clicar, adiciona OU remove a classe "aberto" do menu (alterna)
  menuLista.classList.toggle("aberto");
});
