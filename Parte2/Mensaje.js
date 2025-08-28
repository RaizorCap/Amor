
function openModal() {
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Efecto de escritura para el mensaje
function typeWriter() {
    const messageBox = document.getElementById('messageBox');
    const text = messageBox.innerHTML;
    messageBox.innerHTML = '';
    messageBox.style.opacity = '1';

    let i = 0;
    function type() {
        if (i < text.length) {
            messageBox.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

// Iniciar el efecto cuando carga la página
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});
