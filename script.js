let state = 0; // 0 = centralizado, 1 = movendo para a direita, 2 = movendo para a esquerda
const image = document.getElementById('fishImage');
const containerWidth = document.querySelector('.image-container').offsetWidth;
const imageWidth = image.offsetWidth;

document.getElementById('moveButton').addEventListener('click', function() {
    const maxTranslateX = containerWidth - imageWidth;

    if (state === 0) {
        image.style.transform = `translateX(${maxTranslateX}px)`; // Move a imagem para a direita
        state = 1;
    } else if (state === 1) {
        image.style.transform = `translateX(-${maxTranslateX}px)`; // Move a imagem para a esquerda
        state = 2;
    } else if (state === 2) {
        image.style.transform = 'translateX(0)'; // Move a imagem de volta para o centro
        state = 0;
    }
});
