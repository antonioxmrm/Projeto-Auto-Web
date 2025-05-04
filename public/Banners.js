// Banners.js

const banner = document.querySelector('.banner');
const slidesContainer = banner.querySelector('.slides');
const slides = slidesContainer.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
let intervalId;
const autoSlideInterval = 4000; // Tempo em milissegundos para mudar de slide automaticamente

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

    updateDots();
}

// Cria as bolinhas de navegação
function createDots() {
    const navigationDots = document.createElement('div');
    navigationDots.classList.add('navigation-dots');
    banner.appendChild(navigationDots);

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        navigationDots.appendChild(dot);
    }
    updateDots(); // Define a primeira bolinha como ativa inicialmente
}

// Atualiza a classe 'active' nas bolinhas de navegação
function updateDots() {
    const navigationDots = banner.querySelector('.navigation-dots');
    if (navigationDots) {
        const dots = navigationDots.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
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

banner.addEventListener('mouseenter', stopAutoSlide);
banner.addEventListener('mouseleave', startAutoSlide);

// Inicializa as bolinhas e o slide automático
createDots();
startAutoSlide();

// Garante que o primeiro slide seja exibido corretamente ao carregar a página
goToSlide(0);