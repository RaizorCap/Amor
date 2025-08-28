// Funciones del modal y navegación
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

// Efecto de escritura
function startTypeWriter() {
    const messageBox = document.getElementById('messageBox');
    
    if (!messageBox) {
        console.error('No se encontró el elemento messageBox');
        return;
    }

    // Hacer visible el message box
    messageBox.style.opacity = '1';
    messageBox.classList.add('visible');

    // El mensaje completo
    const fullMessage = `Mi querida Anahí,

Desde el momento en que te conocí, supe que eras alguien especial. Tu fuerza, tu dedicación hacia tu familia, y la manera en que has enfrentado cada desafío con valentía, me han inspirado profundamente.

Admiro cómo has tomado el rol de madre soltera para cuidar de tus hermanos, sacrificando tus propios sueños por el bienestar de ellos. Eso habla de la hermosa persona que eres por dentro, una persona con un corazón gigante y lleno de amor.

Sé que las palabras no pueden cambiar tu situación actual, y lamento no poder estar ahí físicamente para apoyarte en los momentos difíciles. La distancia que nos separa es un obstáculo que duele, pero quiero que sepas que mis sentimientos hacia ti son reales y profundos.

Tu amor por los animales refleja tu naturaleza compasiva y tierna. Cada vez que veo algo que me recuerda a ti, mi corazón se llena de cariño y también de una profunda nostalgia.

Aunque el destino nos haya colocado en caminos diferentes, quiero que sepas que siempre estarás en mi corazón. Mereces toda la felicidad del mundo, alguien que pueda estar contigo y darte el apoyo que necesitas día a día.

Gracias por todos los momentos compartidos, por hacerme conocer lo que es amar de verdad, y por mostrarme que existen personas extraordinarias como tú en este mundo.


Con todo mi amor y respeto,
Rubén`;

    let currentIndex = 0;
    
    // Limpiar contenido
    messageBox.innerHTML = '';
    
    function typeCharacter() {
        if (currentIndex < fullMessage.length) {
            const currentChar = fullMessage[currentIndex];
            
            // Obtener el texto actual
            let currentText = fullMessage.substring(0, currentIndex + 1);
            
            // Procesar el texto para mostrar
            let displayText = currentText
                .replace(/\n\n/g, '<br><br>') // Dobles saltos de línea
                .replace(/\n/g, '<br>'); // Saltos de línea simples
            
            // Aplicar formato especial para la firma
            if (displayText.includes('Con todo mi amor y respeto,')) {
                displayText = displayText.replace(
                    /Con todo mi amor y respeto,<br>Rubén/g,
                    '<p>Con todo mi amor y respeto,<br><strong>Rubén</strong></p>'
                );
            }
            
            // Actualizar contenido
            messageBox.innerHTML = displayText;
            
            currentIndex++;
            
            // Velocidad de escritura (más rápido para espacios y saltos de línea)
            const delay = (currentChar === ' ' || currentChar === '\n') ? 10 : 50;
            setTimeout(typeCharacter, delay);
        }
    }
    
    // Comenzar la escritura
    typeCharacter();
}

// Múltiples formas de inicializar para máxima compatibilidad
function initializePage() {
    console.log('Inicializando página...');
    setTimeout(startTypeWriter, 1000);
}

// Método principal
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Respaldo adicional
window.addEventListener('load', function() {
    // Solo ejecutar si no se ha ejecutado ya
    const messageBox = document.getElementById('messageBox');
    if (messageBox && messageBox.innerHTML.trim() === '') {
        console.log('Ejecutando respaldo de inicialización...');
        setTimeout(startTypeWriter, 500);
    }
});

// Respaldo final para móviles
setTimeout(function() {
    const messageBox = document.getElementById('messageBox');
    if (messageBox && messageBox.innerHTML.trim() === '') {
        console.log('Ejecutando inicialización de emergencia...');
        startTypeWriter();
    }
}, 3000);