document.getElementById('moveLeft').addEventListener('click', function() {
    const image = document.getElementById('fishImage');
    image.style.transform = 'translateX(-100px)'; // Move a imagem para a esquerda
});

document.getElementById('moveRight').addEventListener('click', function() {
    const image = document.getElementById('fishImage');
    image.style.transform = 'translateX(100px)'; // Move a imagem para a direita
});

document.getElementById('moveCenter').addEventListener('click', function() {
    const image = document.getElementById('fishImage');
    image.style.transform = 'none'; // Move a imagem de volta para o centro
});
