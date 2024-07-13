const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});
