let slides = document.querySelectorAll(".slide");
let current = 0;

function cls() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.style.display = "none";
  });
}

function next() {
  cls();
  current = (current + 1) % slides.length;
  slides[current].style.display = "block";
  requestAnimationFrame(() => {
    slides[current].classList.add("active");
  });
}

function prev() {
  cls();
  current = (current - 1 + slides.length) % slides.length;
  slides[current].style.display = "block";
  requestAnimationFrame(() => {
    slides[current].classList.add("active");
  });
}

function start() {
  cls();
  slides[current].style.display = "block";
  requestAnimationFrame(() => {
    slides[current].classList.add("active");
  });
}
start();

function autoplay() {
  setTimeout(function () {
    next();
    autoplay();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  start();
  autoplay();
});

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle");
  var navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", function () {
    navbar.classList.toggle("open");
    toggle.style.visibility = "hidden";
    toggle.style.pointerEvents = "none";
  });

  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
      navbar.classList.remove("open");
      toggle.checked = false;
      toggle.style.visibility = "visible";
      toggle.style.pointerEvents = "auto";
    }
  });
});
