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

const images = ['Cantor atrium 3.jpg', 'cantor-gallery.jpg','cantoroutside.jpg','playstation.png'];

const mainImage = document.getElementById('Cantor atrium 3.jpg');



function changeImage() {
    currentIndex =  (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}

setInterval(changeImage, 3000);
