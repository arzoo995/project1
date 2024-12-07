var navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.style.right = navLinks.style.right === "0" ? "-200px" : "0";
}

///slideshow

var slideIndex = 0;
var slides;
var dots;

function showSlides() {
  slides = document.getElementsByClassName("slide");
  dots = document.getElementsByClassName("dot");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

showSlides();

