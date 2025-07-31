
window.addEventListener('scroll', function() {
    const imagenesContainer = document.querySelector('.imagenes-container');
    const navbarMaestria = document.querySelector('.navbarMaestria');
    
    const scrollY = window.scrollY;

    if (scrollY > 80) {
        imagenesContainer.style.display = 'none';
        navbarMaestria.classList.add('fixed-navbar');
    } else {
        imagenesContainer.style.display = 'flex';
        navbarMaestria.classList.remove('fixed-navbar');
    }
});

