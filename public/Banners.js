// Banners.js

const banner = document.querySelector('.banner');
const slidesContainer = banner.querySelector('.slides');
const slides = slidesContainer.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
let intervalId;
const autoSlideInterval = 4000; // Tempo em milissegundos para mudar de slide automaticamente
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');
const indicators = indicatorsContainer ? indicatorsContainer.querySelectorAll('.indicator') : [];

// Garante que apenas o primeiro slide seja visível inicialmente
slides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? 1 : 0;
    slide.style.transition = 'opacity 0.5s ease-in-out'; // Adiciona transição para o efeito de fade
});

// Função para ir para um slide específico
function goToSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Desativa todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = 0;
    });

    // Ativa o slide atual
    slides[currentIndex].classList.add('active');
    slides[currentIndex].style.opacity = 1;

    updateIndicators();
}

// Função para ir para o slide anterior
function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Função para ir para o próximo slide
function nextSlide() {
    goToSlide(currentIndex + 1);
}

// Função para ir para um slide específico clicando no indicador
function currentSlide(index) {
    goToSlide(index);
}

// Atualiza a classe 'active' nos indicadores
function updateIndicators() {
    if (indicators.length > 0) {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }
}

// Avança para o próximo slide automaticamente
function autoSlide() {
    goToSlide(currentIndex + 1);
}

// Inicia o slide automático
function startAutoSlide() {
    intervalId = setInterval(autoSlide, autoSlideInterval);
}

// Para o slide automático ao interagir com o banner (opcional)
function stopAutoSlide() {
    clearInterval(intervalId);
}

// Adiciona event listeners para os botões de controle
if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}

if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}

// Adiciona event listeners para os indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => currentSlide(index));
});

banner.addEventListener('mouseenter', stopAutoSlide);
banner.addEventListener('mouseleave', startAutoSlide);

// Inicializa o primeiro slide e o slide automático
goToSlide(0);
startAutoSlide();