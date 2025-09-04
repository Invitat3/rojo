// Por ahora no hay funcionalidades dinámicas
// Aquí puedes agregar más interactividad en el futuro
console.log("Página lista 🎉");

// Función para mostrar elementos al hacer scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // margen antes de que aparezca

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('visible');
        }
    });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Fecha objetivo
const targetDate = new Date("November 28, 2025 00:00:00").getTime();

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "¡La fecha llegó!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar valores
    setTimeWithAnimation('days', days);
    setTimeWithAnimation('hours', hours);
    setTimeWithAnimation('minutes', minutes);
    setTimeWithAnimation('seconds', seconds);
}

// Función para animar cada cambio de número
function setTimeWithAnimation(id, value) {
    const el = document.getElementById(id);
    if (el.innerText != value) {
        el.innerText = value;
        el.classList.remove('pop');
        void el.offsetWidth; // reinicia animación
        el.classList.add('pop');
    }
}



// Actualizar cada segundo
const interval = setInterval(updateCountdown, 1000);
updateCountdown();


//musica

const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');
const barras = document.querySelectorAll('.barra');
let playing = false;

// Reproducir música al hacer click en cualquier parte de la página
document.body.addEventListener('click', () => {
    if (!playing) {
        music.play();
        playing = true;
        barras.forEach(bar => bar.style.animationPlayState = 'running');
    }
});

// Botón para pausar/reproducir
playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (music.paused) {
        music.play();
        barras.forEach(bar => bar.style.animationPlayState = 'running');
        playing = true;
    } else {
        music.pause();
        barras.forEach(bar => bar.style.animationPlayState = 'paused');
        playing = false;
    }
});
//carrusel
const swiper = new Swiper('.mi-carrusel .swiper', {
    loop: true,
    autoplay: {
        delay: 3000, // Cambia de slide cada 3 segundos
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});