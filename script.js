document.querySelectorAll('.grid-item img').forEach(image => {
  image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;

      // Añadir el evento de clic al modal para cerrarlo cuando se haga clic fuera de la imagen
      modal.addEventListener('click', (e) => {
          // Verificar si el clic fue en el fondo oscuro (no en la imagen)
          if (e.target === modal) {
              modal.remove();
          }
      });

      setTimeout(() => {
          modal.classList.add('active');
      }, 10);

      document.body.appendChild(modal);
  });
});
