
// Crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Crear corazones cada segundo
setInterval(createHeart, 1000);

// Función para abrir la carta
function openLetter() {
    const overlay = document.getElementById('letterOverlay');
    const letter = document.getElementById('letter');

    overlay.classList.add('show');

    setTimeout(() => {
        letter.classList.add('open');
    }, 200);
}

// Función para ir a Destellos
function goToDestellos() {
    window.location.href = 'Parte1/Destellos.html';
}

// Cerrar carta si se hace clic fuera de ella
document.getElementById('letterOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('show');
        document.getElementById('letter').classList.remove('open');
    }
});
