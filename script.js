document.addEventListener('DOMContentLoaded', () => {
    const fish = document.getElementById('fish');
    const moveFishButton = document.getElementById('moveFish');

    let position = 0;

    moveFishButton.addEventListener('click', () => {
        position += 50; // Ajuste a distância conforme necessário
        fish.style.transform = `translateX(${position}px)`;
    });
});