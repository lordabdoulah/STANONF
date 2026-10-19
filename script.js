const startButton = document.getElementById('startButton');
const optionsPanel = document.getElementById('optionsPanel');
const appLinks = document.querySelectorAll('.app-link');

startButton.addEventListener('click', () => {
  const heroSection = document.getElementById('heroSection');
  const heroInner = document.getElementById('heroInner');
  const isOpen = optionsPanel.classList.toggle('open');
  startButton.setAttribute('aria-expanded', String(isOpen));
  heroSection.classList.toggle('active');
  heroInner.classList.toggle('active');
});

appLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const url = button.dataset.url;
    if (!url) return;
    window.location.href = url;
  });
});

document.addEventListener('click', (event) => {
  const clickedInside = startButton.contains(event.target) || optionsPanel.contains(event.target);

  if (!clickedInside) {
    optionsPanel.classList.remove('open');
    startButton.setAttribute('aria-expanded', 'false');
  }
});
