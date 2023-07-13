const burgerEl = document.getElementById("bg-burger");
const menuEl = document.getElementById("menu");
const logoEl = document.getElementById("logo");
const logo1El = document.getElementById("logo-1");
const arrowEl = document.getElementById("arrow");
const eggSectionEl = document.getElementById("egg");

burgerEl.addEventListener("click", () => {
  menuEl.classList.toggle("hidden");
  menuEl.classList.toggle("flex");
});

logoEl.addEventListener("mouseover", () => {
  logoEl.src = "../images/logo.svg";
});

logoEl.addEventListener("mouseout", () => {
  logoEl.src = "../images/logo-dark.svg";
});

logo1El.addEventListener("mouseout", () => {
  logo1El.src = "../images/logo.svg";
});

logo1El.addEventListener("mouseover", () => {
  logo1El.src = "../images/logo-dark.svg";
});

arrowEl.addEventListener("click", () => {
  eggSectionEl.scrollIntoView({ behavior: "smooth" });
});
