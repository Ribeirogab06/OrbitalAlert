// alertas.js -> Filtra os cards de alerta por nível de risco

// Função que recebe o nível escolhido ("todos", "critico", "moderado" ou "baixo")
function filtrar(nivel) {
  // Pega TODOS os elementos que têm a classe "alerta" (todos os cards)
  const cards = document.querySelectorAll(".alerta");

  // Percorre cada card da lista, um por um
  cards.forEach(function (card) {
    // Se o filtro for "todos", mostra o card removendo a classe "escondido"
    if (nivel === "todos") {
      card.classList.remove("escondido");
    }
    // Se o card TEM a classe do nível escolhido mostra ele
    else if (card.classList.contains(nivel)) {
      card.classList.remove("escondido");
    }
    // senao esconde o card adicionando a classe "escondido"
    else {
      card.classList.add("escondido");
    }
  });
}
