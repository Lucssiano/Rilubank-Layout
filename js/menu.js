/* ### VARIABLES #### */

// Botón hamburguesa
const burger = document.querySelector(".menu-button");
// Lista de navegación del header
const nav = document.querySelector(".ul-list");
// Header
const header = document.querySelector(".main-header");
// Contenedor del header
const headerContainer = document.querySelector(".header-container");
// Listas del nav
const listNav = document.querySelector(".li-header"); // Solo toma la primer lista, las otras no (?)

/* ### FUNCIONES #### */

// Abrir el menú de navegación en mobile
burger.addEventListener("click", () => {
  nav.classList.toggle("burger-action");
});

// Si se presiona la tecla ESCAPE se cierra el menú de navegación
function escPushed() {
  teclaEsc = event.keyCode;
  if (teclaEsc == 27) {
    nav.classList.remove("burger-action");
  }
}

// Si se presiona en alguna parte que no sea el header se cierra el menú de navegación
window.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    nav.classList.contains("burger-action") &&
    e.target !== header &&
    e.target !== headerContainer &&
    e.target !== listNav &&
    e.target !== burger
  ) {
    nav.classList.remove("burger-action");
  }
});

// Inmediatamente que se presione la tecla ESCAPE se cierra el menú de navegación
window.onkeydown = escPushed;

// Scroll reveals
// window.sr = ScrollReveal();

// sr.reveal(".arrow-container", {
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
// });