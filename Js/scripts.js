// Seleciona os elementos
const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

// Abre o menu lateral
menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

// Fecha o menu lateral
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});
