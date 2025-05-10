// Loading.js

document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');

  if (loadingScreen) {
    // Esconde a tela de loading inicialmente para evitar flashes rápidos
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => {
      if (loadingScreen && loadingScreen.parentNode) {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }
    }, 300);
  }
});

window.onload = function() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';

    setTimeout(() => {
      if (loadingScreen && loadingScreen.parentNode) {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }
    }, 500);
  }
};