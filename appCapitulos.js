document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos con la clase "evento"
    var capitulos = document.querySelectorAll(".capitulo");

    // Creamos el Intersection Observer para animar los eventos
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            // Si el evento es visible en la pantalla
            if (entry.isIntersecting) {
                // Agregar la clase "visible" para mostrar el evento
                entry.target.classList.add("visible");
                // Dejar de observar el elemento una vez que ha sido visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,  // Observamos en la ventana del navegador
        rootMargin: "0px",  // Sin margen adicional
        threshold: 0.2  // Se activa cuando el 20% del evento es visible
    });

    // Observamos todos los eventos para detectar cuando aparecen en la pantalla
    capitulos.forEach(function(capitulo) {
        observer.observe(capitulo);
    });
});

