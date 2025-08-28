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

// Efecto de escritura mejorado que maneja HTML correctamente
function typeWriter() {
    const messageBox = document.getElementById('messageBox');
    
    // Texto original con HTML
    const originalHTML = `Mi querida Anahí, 
            
            Desde el momento en que te conocí, supe que eras alguien especial. Tu fuerza, tu dedicación hacia tu familia, y la manera en que has enfrentado cada desafío con valentía, me han inspirado profundamente. 
            
            Admiro cómo has tomado el rol de madre soltera para cuidar de tus hermanos, sacrificando tus propios sueños por el bienestar de ellos. Eso habla de la hermosa persona que eres por dentro, una persona con un corazón gigante y lleno de amor. 
            
            Sé que las palabras no pueden cambiar tu situación actual, y lamento no poder estar ahí físicamente para apoyarte en los momentos difíciles. La distancia que nos separa es un obstáculo que duele, pero quiero que sepas que mis sentimientos hacia ti son reales y profundos. 
            
            Tu amor por los animales refleja tu naturaleza compasiva y tierna. Cada vez que veo algo que me recuerda a ti, mi corazón se llena de cariño y también de una profunda nostalgia. 
            
            Aunque el destino nos haya colocado en caminos diferentes, quiero que sepas que siempre estarás en mi corazón. Mereces toda la felicidad del mundo, alguien que pueda estar contigo y darte el apoyo que necesitas día a día. 
            
            Gracias por todos los momentos compartidos, por hacerme conocer lo que es amar de verdad, y por mostrarme que existen personas extraordinarias como tú en este mundo. 
            
            <p>Con todo mi amor y respeto,<br><strong>Rubén</strong></p>`;
    
    // Convertir HTML a texto plano manteniendo los saltos de línea
    function htmlToText(html) {
        // Crear un div temporal para procesar el HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Reemplazar <br> con saltos de línea
        tempDiv.innerHTML = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, '\n');
        
        // Procesar párrafos
        const paragraphs = tempDiv.querySelectorAll('p');
        paragraphs.forEach(p => {
            const content = p.textContent;
            p.outerHTML = '\n\n' + content + '\n\n';
        });
        
        // Procesar elementos strong/bold
        const strongElements = tempDiv.querySelectorAll('strong');
        strongElements.forEach(strong => {
            const content = strong.textContent;
            strong.outerHTML = content;
        });
        
        return tempDiv.textContent || tempDiv.innerText || '';
    }
    
    // Función para aplicar formato después de escribir
    function applyFormatting(text, currentIndex) {
        // Esta función aplicará el formato HTML conforme avanza la escritura
        let formattedText = text.substring(0, currentIndex);
        
        // Reemplazar saltos de línea con <br>
        formattedText = formattedText.replace(/\n/g, '<br>');
        
        // Si llegamos al final, aplicar formato completo
        if (currentIndex >= text.length) {
            // Aplicar formato de párrafo final
            const lines = formattedText.split('<br>');
            const lastLines = lines.slice(-3); // Las últimas 3 líneas
            
            // Si contiene "Con todo mi amor y respeto" aplicar formato de párrafo
            if (formattedText.includes('Con todo mi amor y respeto')) {
                const beforeSignature = formattedText.substring(0, formattedText.indexOf('Con todo mi amor y respeto'));
                const signature = formattedText.substring(formattedText.indexOf('Con todo mi amor y respeto'));
                
                const formattedSignature = signature
                    .replace('Con todo mi amor y respeto,', '<p>Con todo mi amor y respeto,<br>')
                    .replace('Rubén', '<strong>Rubén</strong></p>');
                
                formattedText = beforeSignature + formattedSignature;
            }
        }
        
        return formattedText;
    }
    
    // Obtener el texto plano
    const plainText = htmlToText(originalHTML);
    
    // Limpiar el contenido y preparar para escribir
    messageBox.innerHTML = '';
    messageBox.style.opacity = '1';

    let i = 0;
    function type() {
        if (i <= plainText.length) {
            // Aplicar formato y mostrar
            messageBox.innerHTML = applyFormatting(plainText, i);
            i++;
            setTimeout(type, 30); // Velocidad de escritura
        }
    }
    
    type();
}

// Iniciar el efecto cuando carga la página
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});