/* ### VARIABLES ### */

// Botón hamburguesa
const burger = document.querySelector(".menu-button");
// Lista de navegación del header
const nav = document.querySelector(".ul-list");
// Header
const header = document.querySelector(".main-header");
// Contenedor del header
const headerContainer = document.querySelector(".header-container");
// Listas del nav
// const listNav = document.querySelector(".li-header"); // Solo toma la primer lista, las otras no (?)

/* ### FUNCIONES ### */

// Abrir el menú de navegación en mobile
burger.addEventListener("click", () => {
  // nav.classList.toggle("burger-action");
  // Se le da la clase de active para hacer un movimiento de la posición absoluta para la transición
  nav.classList.toggle("active");
});

// Si se presiona la tecla ESCAPE se cierra el menú de navegación en mobile
function escPushed() {
  teclaEsc = event.keyCode;
  if (teclaEsc == 27) {
    // nav.classList.remove("burger-action");
    nav.classList.remove("active");
  }
}

// Si se presiona en alguna parte que no sea el header se cierra el menú de navegación en mobile
window.addEventListener("click", (e) => {
  if (nav.classList.contains("active") && e.target !== header && e.target !== headerContainer && e.target !== burger) {
    // nav.classList.remove("burger-action");
    nav.classList.remove("active");
  }
});

// Inmediatamente que se presione la tecla ESCAPE se cierra el menú de navegación
window.onkeydown = escPushed;

/* ### Scroll reveals ### */

// window.sr = ScrollReveal();

// sr.reveal(".burguer-action", {
//   duration: 3000,
//   origin: "top",
//   distance: "1000px",
// });

// sr.reveal(".arrow-container", {
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
// });
