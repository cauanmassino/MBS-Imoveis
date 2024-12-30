function changeMainImage(imageSrc, index) {
    // Atualiza a imagem principal
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
  
    // Marca a miniatura como ativa (opcional)
    const thumbnails = document.querySelectorAll('.thumbnail-list img');
    thumbnails.forEach((thumbnail, i) => {
      if (i === index) {
        thumbnail.style.borderColor = '#007bff'; // Borda azul para miniatura ativa
      } else {
        thumbnail.style.borderColor = 'transparent'; // Retira a borda de miniaturas não ativas
      }
    });
  
    // Atualiza o carrossel para a imagem correspondente
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'));
    carousel.to(index); // Muda para a imagem correspondente no carrossel
  }
  