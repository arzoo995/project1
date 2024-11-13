
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