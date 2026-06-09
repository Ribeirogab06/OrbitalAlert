// ================================================================
// validacao.js -> Valida o formulário de contato antes de "enviar"
// ================================================================

// Pega o formulário no HTML pelo seu id "formContato"
const formContato = document.getElementById("formContato");

// Pega o parágrafo onde vamos mostrar a mensagem de erro ou sucesso
const mensagem = document.getElementById("mensagem");

// Adiciona um ouvinte para o evento "submit" (quando o formulário é enviado)
formContato.addEventListener("submit", function (evento) {
  // Impede o envio real da página (preventDefault), pois é um site estático
  evento.preventDefault();

  // Lê o valor digitado no campo "nome" e remove espaços das pontas (trim)
  const nome = document.getElementById("nome").value.trim();

  // Lê o valor digitado no campo "email" e remove espaços das pontas
  const email = document.getElementById("email").value.trim();

  // Lê o valor digitado no campo "mensagem" e remove espaços das pontas
  const texto = document.getElementById("texto").value.trim();

  // Se algum dos campos estiver vazio, mostra um erro e para a função
  if (nome === "" || email === "" || texto === "") {
    // Coloca a cor vermelha no texto da mensagem (usa a cor crítica do CSS)
    mensagem.style.color = "#c0392b";
    // Escreve o texto de erro para o usuário
    mensagem.textContent = "Por favor, preencha todos os campos.";
    // "return" interrompe aqui, não continua o resto do código
    return;
  }

  // Verifica de forma simples se o email tem "@" e "." (formato básico)
  if (!email.includes("@") || !email.includes(".")) {
    // Texto da mensagem fica vermelho (erro)
    mensagem.style.color = "#c0392b";
    // Avisa que o email é inválido
    mensagem.textContent = "Digite um e-mail válido.";
    // Interrompe a função
    return;
  }

  // Se passou por todas as validações, mostra mensagem de sucesso em verde
  mensagem.style.color = "#27ae60";
  // Escreve a confirmação para o usuário
  mensagem.textContent = "Mensagem enviada com sucesso! (simulação)";

  // Limpa todos os campos do formulário após o "envio"
  formContato.reset();
});
