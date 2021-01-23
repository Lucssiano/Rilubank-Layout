/* ### HEADER ### */
// Botón hamburguesa
const burger = document.querySelector(".menu-button");
// Lista de navegación del header
const nav = document.querySelector(".ul-list");
// Header
const header = document.querySelector(".main-header");
// Contenedor del header
const headerContainer = document.querySelector(".header-container");
// Listas del nav
// const listNav = document.getElementsByClassName("li-header"); // Solo toma la primer lista, las otras no (?)

// Abrir el menú de navegación en mobile
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Si se presiona la tecla ESCAPE se cierra el menú de navegación (creo que está al dope pq las compu son de más de 768px)
// function escPushed() {
// teclaEsc = event.keyCode;
// if (teclaEsc == 27) {
// nav.classList.remove("burger-action");
// nav.classList.remove("active");
// }
// }
// Inmediatamente que se presione la tecla ESCAPE se cierra el menú de navegación
// window.onkeydown = escPushed;

// Si se presiona en alguna parte que no sea el header se cierra el menú de navegación en mobile
window.addEventListener("click", (e) => {
  if (nav.classList.contains("active") && e.target !== header && e.target !== headerContainer && e.target !== burger) {
    nav.classList.remove("active");
  }
});

/* ######################### /*

/* ### USER CARDS ### */
// Flechas de las cartas para pasar las opiniones de los usuarios
const arrowCards = document.getElementsByClassName("arrow-card");
// Botones para pasar las cards (además de las flechas)
// const buttonSlide = document.getElementsByClassName("btn-slide");
// console.log(buttonSlide);
const buttonSlide = document.querySelectorAll(".btn-slide");
console.log(buttonSlide);
// Caja de opinion de cada usuario
const userOpinionBox = document.getElementsByClassName("user-opinion-box");
// Índice para los botones y las flechas
let j = 0;

// Saca la carta activa y el color del botón activo
function removeProperties() {
  userOpinionBox[j].classList.remove("active-card");
  buttonSlide[j].classList.remove("active-button");
}

// Añade una nueva carta y el color del botón correspondiente
function addProperties() {
  userOpinionBox[j].classList.add("active-card");
  buttonSlide[j].classList.add("active-button");
}

// Función para ir a la carta anterior , flecha para la izquierda
function previousSlide() {
  removeProperties();
  j = (j - 1 + userOpinionBox.length) % userOpinionBox.length;
  addProperties();
}

// Función para ir a la carta siguiente , flecha para la derecha
function nextSlide() {
  removeProperties();
  j = (j + 1) % userOpinionBox.length;
  addProperties();
}

// Cuando se presiona la flecha que apunta a la izquierda se va a la carta anterior
arrowCards[0].onclick = () => {
  previousSlide();
};
// Cuando se presiona la flecha que apunta a la derecha se va a la carta posterior
arrowCards[1].onclick = () => {
  nextSlide();
};

// Dependiendo del boton que se presione se va a esa carta
for (let l = 0; l < buttonSlide.length; l++) {
  buttonSlide[l].onclick = function () {
    removeProperties();
    j = l;
    addProperties();
  };
}
/* ######################### /*

// Imagen del usuario
// const userImage = document.querySelector(".user-image");
// Nombre del usuario
// const userName = document.querySelector(".user-name");
// Opinión del usuario
// const userText = document.querySelector(".user-opinion-text");
  // userImage.url = "img/icon.png";
  // userName.innerText = "Luciano Riente";
  // userText.innerText = "Desde que empecé a usar lorem lorem lorem lorem lorem lorem lorem lorem";

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
