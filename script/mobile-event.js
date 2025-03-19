const fosforo = document.querySelector('.fosforo img');
const coracao = document.querySelector('.coracao');
const nos = document.querySelector('.nos');

let isDragging = false;

// Evento para iniciar o movimento em dispositivos móveis
fosforo.addEventListener('touchstart', (e) => {
  e.preventDefault();  // Impede o comportamento padrão
  isDragging = true;
});

// Evento para mover o fósforo em dispositivos móveis
document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    fosforo.style.position = 'absolute';
    fosforo.style.left = `${touch.pageX - fosforo.offsetWidth / 2}px`;
    fosforo.style.top = `${touch.pageY - fosforo.offsetHeight / 2}px`;

    // Verifica colisão entre o fósforo e o coração
    const fosforoRect = fosforo.getBoundingClientRect();
    const coracaoRect = coracao.getBoundingClientRect();

    if (
      fosforoRect.right > coracaoRect.left &&
      fosforoRect.left < coracaoRect.right &&
      fosforoRect.bottom > coracaoRect.top &&
      fosforoRect.top < coracaoRect.bottom
    ) {
      coracao.style.opacity = 0; // Esconde o coração
      coracao.style.pointerEvents = 'none'; // Desativa interações
      setTimeout(() => {
        nos.style.opacity = 1; // Mostra a imagem e o texto
      }, 500);
    }
  }
});

// Evento para parar o movimento em dispositivos móveis
document.addEventListener('touchend', () => {
  isDragging = false;
});
