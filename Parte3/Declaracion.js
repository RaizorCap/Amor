
const questions = [
    "¿Te gusta recibir sorpresas?",
    "¿Crees en el amor a primera vista?",
    "¿Te gusta que te escriba mensajes bonitos y largos?",
    "¿Te gustaría una citá romántica?",
    "¿Te gustan los gestos pequeños pero significativos?",
    "¿Crees que la distancia puede fortalecer nuestra relación?",
    "¿Te parece tierno que me preocupe por ti?",
    "¿Te gusta bailar cuando nadie te ve?",
    "¿Alguna vez has sentido mariposas en el estómago?",
    "¿Te gustaría recibir flores sin motivo especial?",
    "¿Crees que soy alguien especial para ti?",
    "¿Te gustaría que estuviéramos más cerca?",
    "¿Sientes algo especial cuando hablamos?",
    "¿Te gustaría que te dedicara más tiempo?",
    "¿Crees que podríamos ser novios en mi proxima declaración?",
    "¿Te latió más rápido el corazón en algún momento conmigo?",
    "¿Te gustaría que fuéramos más que conocidos?",
    "¿Podré verte el dia de tu cumpleaños?"
];

let currentQuestionIndex = 0;

function nextQuestion(answer) {
    createHeartEffect();
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length - 1) {
        showFinalQuestion();
    } else if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            document.getElementById('currentQuestion').textContent = questions[currentQuestionIndex];
            animateQuestion();
        }, 500);
    }
}

function showFinalQuestion() {
    setTimeout(() => {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
                    <div class="question">${questions[questions.length - 1]}</div>
                    <div class="final-message">
                        <p style="margin-bottom: 15px;">💌 Respóndeme al WhatsApp 💌</p>
                        <p style="font-size: 0.9em; opacity: 0.9;">Perdón por nunca ser claro en los mensajes...</p>
                    </div>
                `;
        createSparkles();
    }, 500);
}

function animateQuestion() {
    const questionEl = document.getElementById('currentQuestion');
    questionEl.style.opacity = '0';
    questionEl.style.transform = 'translateY(20px)';

    setTimeout(() => {
        questionEl.style.transition = 'all 0.5s ease';
        questionEl.style.opacity = '1';
        questionEl.style.transform = 'translateY(0)';
    }, 100);
}

function createHeartEffect() {
    const container = document.getElementById('questionContainer');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '80%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

function createSparkles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Crear corazones de fondo
function createBackgroundHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 15 + 's';
    document.getElementById('hearts-background').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Crear corazones de fondo cada 2 segundos
setInterval(createBackgroundHeart, 2000);

// Crear algunos corazones iniciales
for (let i = 0; i < 5; i++) {
    setTimeout(createBackgroundHeart, i * 500);
}
