document.addEventListener('DOMContentLoaded', () => {
  const pillsContainer = document.getElementById('pills');
  for (let i = 0; i < 5; i++) {
    const pill = document.createElement('div');
    pill.classList.add('pill');
    pillsContainer.appendChild(pill);
  }
});
