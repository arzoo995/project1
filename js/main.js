let currentIndex = 0;


function setModal(mythis) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    currentIndex = [
        'path/to/cantor_atrium_1.jpg',
        'path/to/cantor_atrium_2.jpg',
        'path/to/cantor_atrium_3.jpg'
    ].indexOf(mythis.src);
    
    modal.style.display = "block";
    modalImg.src = mythis.src;
    captionText.innerHTML = "Full View";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    
    document.getElementById("next").onclick = function() {
        currentIndex = (currentIndex + 1) % [
            'path/to/cantor_atrium_1.jpg',
            'path/to/cantor_atrium_2.jpg',
            'path/to/cantor_atrium_3.jpg'
        ].length;
        modalImg.src = [
            'path/to/cantor_atrium_1.jpg',
            'path/to/cantor_atrium_2.jpg',
            'path/to/cantor_atrium_3.jpg'
        ][currentIndex];
    }

    document.getElementById("prev").onclick = function() {
        currentIndex = (currentIndex - 1 + [
            'path/to/cantor_atrium_1.jpg',
            'path/to/cantor_atrium_2.jpg',
            'path/to/cantor_atrium_3.jpg'
        ].length) % [
            'path/to/cantor_atrium_1.jpg',
            'path/to/cantor_atrium_2.jpg',
            'path/to/cantor_atrium_3.jpg'
        ].length;
        modalImg.src = [
            'path/to/cantor_atrium_1.jpg',
            'path/to/cantor_atrium_2.jpg',
            'path/to/cantor_atrium_3.jpg'
        ][currentIndex];
    }
}


let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slideshow li');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); 
        if (i === index) {
            slide.classList.add('active'); 
        }
    });
}

document.getElementById('next').onclick = function() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; 
    showSlide(currentSlideIndex);
};

document.getElementById('prev').onclick = function() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; 
    showSlide(currentSlideIndex);
};


showSlide(currentSlideIndex);


setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; 
    showSlide(currentSlideIndex);
}, 5000); 