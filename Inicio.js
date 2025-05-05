function iniciarTransicion() {
  const liquid = document.getElementById('liquid-transition');
  liquid.classList.add('active');

  setTimeout(() => {
    window.location.href = 'Conte.html';
  }, 1000); // Cambia a Conte.html después de 1s
}