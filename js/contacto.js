const formulario = document.getElementById("form-contacto");
const estado = document.getElementById("mensaje-estado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  estado.textContent = "¡Mensaje enviado! Te responderemos pronto.";
  formulario.reset();
});
