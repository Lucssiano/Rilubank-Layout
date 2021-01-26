// ###### VARIABLES ###### //

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
// const listNav = document.querySelectorAll(".li-header"); // Solo toma la primer lista, las otras no (?)

/* ### PREGUNTAS FRECUENTES ### */
// Flecha para arriba (pregunta sin respuesta abierta)
const upQuestionArrow = document.querySelectorAll(".fa-chevron-up");
// Flecha para abajo (pregunta con respuesta abierta)
const downQuestionArrow = document.querySelectorAll(".fa-chevron-down");
// Caja de cada pregunta
const questionBox = document.querySelectorAll(".frequently-question-box");
// Respuesta de la pregunta
const answerText = document.querySelectorAll(".answer-text");

/* ### USER CARDS ### */
// Flechas de las cartas para pasar las opiniones de los usuarios
const arrowCards = document.getElementsByClassName("arrow-card");
// Botones para pasar las cards (además de las flechas)
const buttonSlide = document.querySelectorAll(".btn-slide");
// Caja de opinion de cada usuario
const userOpinionBox = document.getElementsByClassName("user-opinion-box");
// Índice para los botones y las flechas
let j = 0;

// ###### FUNCIONES ###### //

/* ### HEADER ### */
// Para que el header cambie cuando se scrollea //
// Ubicación principal de la página (cuando está arriba de todo)
let principalUbication = window.pageYOffset;
window.onscroll = function () {
  // Cuando se empieza a scrollear se toma el valor del scroll
  let actualUbication = window.pageYOffset;
  // Si se scrollea un poco se le aplica la sombra al header
  if (principalUbication < actualUbication) {
    document.querySelector(".main-header").style.boxShadow = "2px 7px 7px -2px rgba(0, 0, 0, 0.35)";
  } else {
    document.querySelector(".main-header").style.boxShadow = "none";
  }
};

// Función para manejar las clases del header en mobile
function mobileHeader() {
  nav.classList.toggle("active");
  // Clase para que el boton burguer sea una x
  burger.classList.toggle("bx-x");
  if (burger.classList.contains("bx-x")) {
    burger.style.color = "var(--full-black)";
  } else {
    burger.style.color = "var(--primary-color)";
  }
}

// Abrir el menú de navegación en mobile
burger.addEventListener("click", () => {
  mobileHeader();
});

// Si se presiona en alguna parte que no sea el header se cierra el menú de navegación en mobile
window.addEventListener("click", (e) => {
  if (nav.classList.contains("active") && e.target !== header && e.target !== headerContainer && e.target !== burger) {
    mobileHeader();
  }
});
/* ######################### /*

/* ### USER CARDS ### */
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
// ######################### //

/* ### PREGUNTAS FRECUENTES ### */
// Dependiendo de la pregunta que se presione se ve la respuesta correspondiente
for (let p = 0; p < upQuestionArrow.length; p++) {
  questionBox[p].onclick = function () {
    if (downQuestionArrow[p].classList.contains("icon-change")) {
      upQuestionArrow[p].classList.add("icon-change");
      downQuestionArrow[p].classList.remove("icon-change");
      answerText[p].classList.add("display-block");
    } else {
      upQuestionArrow[p].classList.remove("icon-change");
      downQuestionArrow[p].classList.add("icon-change");
      answerText[p].classList.remove("display-block");
    }
  };
}

// Por si se quiere hacer con cada flecha
// upQuestionArrow[p].onclick = function () {
//   upQuestionArrow[p].classList.remove("icon-change");
//   downQuestionArrow[p].classList.add("icon-change");
//   answerText[p].classList.add("display-block");
// };
// downQuestionArrow[p].onclick = function () {
//   upQuestionArrow[p].classList.add("icon-change");
//   downQuestionArrow[p].classList.remove("icon-change");
//   answerText[p].classList.remove("display-block");
// };

// Si se presiona la tecla ESCAPE se cierra el menú de navegación (creo que está al dope pq las compu son de más de 768px)
// function escPushed() {
// teclaEsc = event.keyCode;
// if (teclaEsc == 27) {
// nav.classList.remove("active");
// }
// }
// Inmediatamente que se presione la tecla ESCAPE se cierra el menú de navegación
// window.onkeydown = escPushed;

/* ### Scroll reveals ### */
// window.sr = ScrollReveal();

// ScrollReveal().reveal(".answer-text", {
//   duration: 1000,
//   delay: 375 ,
//   reset: true
// });
// ScrollReveal().reveal('.answer-text', { delay: 500 });
