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

    }
}
(function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelector('.slides');
  }();

  let currentIndex = 0; 