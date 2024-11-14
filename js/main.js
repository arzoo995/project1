
let currentIndex = 0;
const images = [
    'path/to/cantor_atrium_1.jpg',
    'path/to/cantor_atrium_2.jpg',
    'path/to/cantor_atrium_3.jpg'
];

function setModal(mythis) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    currentIndex = images.indexOf(mythis.src);
    
    modal.style.display = "block";
    modalImg.src = mythis.src;
    captionText.innerHTML = "Full View";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Add functionality for next and previous buttons
    document.getElementById("next").onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    }

    document.getElementById("prev").onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    }
}
let currentIndex = 0;
const images = [
    'path/to/cantor_atrium_1.jpg',
    'path/to/cantor_atrium_2.jpg',
    'path/to/cantor_atrium_3.jpg'
];

// Function to open the modal and display the selected image
function setModal(mythis) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    currentIndex = images.indexOf(mythis.src);
    
    modal.style.display = "block";
    modalImg.src = mythis.src;
    captionText.innerHTML = "Full View";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Add functionality for next and previous buttons
    document.getElementById("next").onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    }

    document.getElementById("prev").onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    }
}

// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slideshow li');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add active class to the current slide
        }
    });
}

document.getElementById('next').onclick = function() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlideIndex);
};

document.getElementById('prev').onclick = function() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    showSlide(currentSlideIndex);
};

// Show the first slide initially
showSlide(currentSlideIndex);

// Optional: Auto-advance slides every 5 seconds
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlideIndex);
}, 5000); // Change 5000 to your desired interval in milliseconds