document.addEventListener('DOMContentLoaded', () => {
  const pillsContainer = document.getElementById('pills');
  
  // Criando 5 pílulas
  for (let i = 0; i < 5; i++) {
    const pill = document.createElement('div');
    pill.classList.add('pill');
    
    // Adiciona a pílula na tela
    pillsContainer.appendChild(pill);
  }

  // Função para mover as pílulas aleatoriamente
  function movePills() {
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      pill.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  }

  // Move as pílulas a cada 2 segundos
  setInterval(movePills, 2000);
});
