function openModal() {
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function goToDeclaracion() {
    window.location.href = '../Parte3/Declaracion.html';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Efecto de escritura simplificado
function typeWriter() {
    const messageBox = document.getElementById('messageBox');
    
    // El mensaje completo como array de líneas
    const lines = [
        "Mi querida Anahí,",
        "",
        "Desde el momento en que te conocí, supe que eras alguien especial. Tu fuerza, tu dedicación hacia tu familia, y la manera en que has enfrentado cada desafío con valentía, me han inspirado profundamente.",
        "",
        "Admiro cómo has tomado el rol de madre soltera para cuidar de tus hermanos, sacrificando tus propios sueños por el bienestar de ellos. Eso habla de la hermosa persona que eres por dentro, una persona con un corazón gigante y lleno de amor.",
        "",
        "Sé que las palabras no pueden cambiar tu situación actual, y lamento no poder estar ahí físicamente para apoyarte en los momentos difíciles. La distancia que nos separa es un obstáculo que duele, pero quiero que sepas que mis sentimientos hacia ti son reales y profundos.",
        "",
        "Tu amor por los animales refleja tu naturaleza compasiva y tierna. Cada vez que veo algo que me recuerda a ti, mi corazón se llena de cariño y también de una profunda nostalgia.",
        "",
        "Aunque el destino nos haya colocado en caminos diferentes, quiero que sepas que siempre estarás en mi corazón. Mereces toda la felicidad del mundo, alguien que pueda estar contigo y darte el apoyo que necesitas día a día.",
        "",
        "Gracias por todos los momentos compartidos, por hacerme conocer lo que es amar de verdad, y por mostrarme que existen personas extraordinarias como tú en este mundo.",
        "",
        "",
        "Con todo mi amor y respeto,",
        "Rubén"
    ];
    
    // Unir todas las líneas
    const fullText = lines.join('\n');
    
    // Limpiar el contenido
    messageBox.innerHTML = '';
    messageBox.style.opacity = '1';
    
    let currentIndex = 0;
    
    function type() {
        if (currentIndex < fullText.length) {
            let currentText = fullText.substring(0, currentIndex + 1);
            
            // Convertir saltos de línea a <br> y aplicar formato
            let displayText = currentText.replace(/\n/g, '<br>');
            
            // Si hemos llegado a la firma, aplicar formato especial
            if (currentText.includes('Con todo mi amor y respeto,')) {
                displayText = displayText.replace(
                    'Con todo mi amor y respeto,<br>Rubén',
                    '<p>Con todo mi amor y respeto,<br><strong>Rubén</strong></p>'
                );
            }
            
            messageBox.innerHTML = displayText;
            currentIndex++;
            
            // Velocidad de escritura
            setTimeout(type, 30);
        }
    }
    
    type();
}

// Iniciar cuando la página esté lista
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);
});