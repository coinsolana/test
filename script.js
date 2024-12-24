document.addEventListener('DOMContentLoaded', () => {
    const pillsContainer = document.getElementById('pills');
    for (let i = 0; i < 5; i++) {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        pillsContainer.appendChild(pill);

        // Adicionando animação de pulso
        pill.addEventListener('mouseenter', () => {
            pill.style.transform = 'scale(1.2)';
            pill.style.boxShadow = '0 0 25px rgba(0, 255, 0, 1)';
        });

        pill.addEventListener('mouseleave', () => {
            pill.style.transform = 'scale(1)';
            pill.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.8)';
        });
    }

    // Efeito interativo para o botão de compra
    const buyButton = document.getElementById('buy-button');
    buyButton.addEventListener('click', () => {
        buyButton.style.backgroundColor = '#ff0044';
        buyButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            buyButton.style.transform = 'scale(1)';
            buyButton.style.backgroundColor = '#ff7300';
        }, 500);
    });
});
