const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  const abierto = menu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
  botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});