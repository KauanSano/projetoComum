var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-item");
var controls = document.getElementsByClassName("carousel-control");

function showSlide(index) {
  slideIndex += index;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    controls[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  controls[slideIndex].classList.add("active");
}

function changeSlide(index) {
  showSlide(index);
}

// Iniciar o carrossel
showSlide(0);