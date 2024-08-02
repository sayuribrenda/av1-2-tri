let position = 0; // Posição inicial do peixe

function moveFish() {
    const fish = document.getElementById('fish');
    position += 50; // Move o peixe 50 pixels para frente
    fish.style.transform = `translateX(${position}px)`;
}