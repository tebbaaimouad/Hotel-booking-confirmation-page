const menuBtn = document.getElementById("hotel__menu-btn");

const body = document.body;

menuBtn.addEventListener("click", function () {
  body.classList.toggle("menu-open");
});
