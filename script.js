function flipCoin() {
    const coin = document.getElementById('coin');
    const coinContainer = document.getElementById('coin-container');
    const flipButton = document.getElementById('flip-button');

    // Si la moneda ya está girando, no hacemos nada
    if (coinContainer.classList.contains('flipping')) {
        return;
    }

    // Marcar que la moneda está girando
    coinContainer.classList.add('flipping');
    flipButton.disabled = true;

    // Reiniciar la animación
    coin.style.animation = 'none';

    // Forzar reflow
    void coin.offsetWidth;

    // Decidir aleatoriamente si cae cara o cruz
    const random = Math.random();
    const isTails = random < 0.5;

    // Aplicar la animación adecuada
    if (isTails) {
        coin.style.animation = 'flip-tails 3s forwards';
        setTimeout(() => {
            coinContainer.classList.remove('flipping');
            flipButton.disabled = false;
        }, 3000);
    } else {
        coin.style.animation = 'flip-heads 3s forwards';
        setTimeout(() => {
            coinContainer.classList.remove('flipping');
            flipButton.disabled = false;
        }, 3000);
    }
}

// Añadir evento de clic al botón
document.getElementById('flip-button').addEventListener('click', flipCoin);

// Añadir evento de clic a la moneda
document.getElementById('coin-container').addEventListener('click', flipCoin);