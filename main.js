document.getElementById("contatoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome && email && mensagem) {
    alert("Obrigado pelo seu contato, " + nome + "! Responderemos em breve.");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
