<script>
let position = 0;
const moveAmount = 100; // Ajuste a distância que o peixe se move a cada clique
const maxMoves = 7;
const peixe = document.getElementById('peixe');

function movePeixe() {
    position += moveAmount;
    if (position > maxMoves * moveAmount) {
        position = 0; // Reseta a posição
    }
    peixe.style.transform = `translateX(${position}px)`;
}
</script>