document.getElementById('moveButton').addEventListener('click', function() {
    const image = document.getElementById('fishImage');
    let currentTransform = window.getComputedStyle(image).transform;

    // Verifica se a imagem já foi movida
    if (currentTransform === 'none' || currentTransform === 'matrix(1, 0, 0, 1, 100, 0)') {
        image.style.transform = 'translateX(475px)'; // Move a imagem para a direita
    } else {
        image.style.transform = 'translateX(-475px)'; // Move a imagem de volta para a posição original
    }
      image.style.transform = 'none'; // Move a imagem de volta para a posição original
    }
});
