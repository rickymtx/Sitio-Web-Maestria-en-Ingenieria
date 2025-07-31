//Srcipt para Eventos
document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector(".tabla-eventos");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3 // Ajusta la sensibilidad (0.3 = 30% visible)
    });

    if (tabla) {
      observer.observe(tabla);
    }
});