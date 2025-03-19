const fosforo = document.querySelector('.fosforo img');
const coracao = document.querySelector('.coracao');
const nos = document.querySelector('.nos');

let isDragging = false;

// Evento para iniciar o movimento
fosforo.addEventListener('mousedown', () => {
  isDragging = true;
});

// Evento para mover o fósforo
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    fosforo.style.position = 'absolute';
    fosforo.style.left = `${e.pageX - fosforo.offsetWidth / 2}px`;
    fosforo.style.top = `${e.pageY - fosforo.offsetHeight / 2}px`;

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

// Evento para parar o movimento
document.addEventListener('mouseup', () => {
  isDragging = false;
});
