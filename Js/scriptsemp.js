let currentIndex = 0; 
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Volta para a última imagem
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Vai para a primeira imagem
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
}

// Atualiza a imagem principal ao clicar nas miniaturas
function changeMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

// Função para alterar a imagem principal ao clicar nas miniaturas
function changeMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
  }
  