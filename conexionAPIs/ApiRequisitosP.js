
// Requisitos de la permanencia en el programa
fetch('http://localhost:5000/requisitosPermanencia')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('requisitos-container');
    contenedor.innerHTML = '';

    data.forEach(documento => {
      const requisitos = documento.requisitos || [];

      const aboutTextDiv = document.createElement('div');
      aboutTextDiv.classList.add('about-text');

      const titulo = document.createElement('h2');
      titulo.textContent = 'Requisitos de la permanencia en el programa';
      aboutTextDiv.appendChild(titulo);

      requisitos.forEach(req => {
        const parrafo = document.createElement('p');
        parrafo.textContent = `• ${req}`;
        aboutTextDiv.appendChild(parrafo);
      });

      // Agregar al contenedor principal
      contenedor.appendChild(aboutTextDiv);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});
