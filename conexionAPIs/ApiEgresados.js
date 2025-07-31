
// Tabla de Egresados
fetch('http://localhost:5000/egresados')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tabla1').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const imagenEgresados = documento.image || '';

      tablaHTML += `
        <tr>
            <td>
                <img src="${imagenEgresados}">
            </td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});
