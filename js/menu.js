const burguer = document.querySelector(".menu-button");
const nav = document.querySelector(".ul-list");


burguer.addEventListener("click", () => {
  nav.classList.toggle("burger-action");
});


