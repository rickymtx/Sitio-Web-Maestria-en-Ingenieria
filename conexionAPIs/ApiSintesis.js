//Tabla Maestría con Orientación Profesional
fetch('http://localhost:5000/maestriaOrientacion')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tabla1').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const id = documento.id;
      const materiaMaestria = documento.materia || '';
      const creditosMaestria = documento.creditos || '';

      tablaHTML += `
        <tr data-id="${id}">
          <td class="materia">${materiaMaestria}</td>
          <td class="creditos">${creditosMaestria}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});

// Tabla Distribución de Asignaturas
fetch('http://localhost:5000/distribucionAsignaturas')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla2').getElementsByTagName('tbody')[0];
    tablaBody.innerHTML = '';

    data.forEach(doc => {
      const fila = document.createElement('tr');
      fila.setAttribute('data-id', doc.id); 

      fila.innerHTML = `
        <td>${doc.materia}</td>
        <td>${doc.creditos}</td>
      `;

      tablaBody.appendChild(fila);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});

// Tabla Asignaturas Básicas
fetch('http://localhost:5000/asignaturasBasicas')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla3').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const id = documento.id;
      const materiasBasicas = documento.materia || '';
      const creditosBasicas = documento.creditos || '';

      tablaHTML += `
        <tr data-id="${id}">
          <td>${materiasBasicas}</td>
          <td>${creditosBasicas}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});

// Tabla Asignaturas Optativas
fetch('http://localhost:5000/asignaturasOptativas')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tabla4').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const id = documento.id; 
      const materiasOptativas = documento.materia || '';
      const creditosOptativas = documento.creditos || '';

      tablaHTML += `
        <tr data-id="${id}">
          <td class="materia">${materiasOptativas}</td>
          <td class="creditos">${creditosOptativas}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});
