
function goToMensaje() {
    window.location.href = '../Parte2/Mensaje.html';
}

// Reiniciar animaciones cada 5 segundos para mantener los mensajes apareciendo
setInterval(() => {
    const messages = document.querySelectorAll('.floating-message');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.animation = 'none';
            setTimeout(() => {
                msg.style.animation = `floatMessage 4s ease-in-out infinite`;
            }, 10);
        }, index * 100);
    });
}, 5000);
