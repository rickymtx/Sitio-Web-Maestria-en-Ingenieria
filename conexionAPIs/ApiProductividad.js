
// Tabla Cuerpos Académicos (Tabla 1)
fetch('http://localhost:5000/cuerposAcademicos')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla1').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const nombreProyecto = documento.nomProy || '';
      const integrantes = documento.integrantes ? documento.integrantes.join('<br>') : '';
      const id = documento.id || documento._id;

      tablaHTML += `
        <tr data-id="${id}">
          <td>
            <div class="vista">
              ${nombreProyecto}<br>${integrantes}
            </div>
            <div class="edicion" style="display: none;">
              <textarea class="nombreEditado" rows="3" style="width: 100%;">${nombreProyecto}</textarea><br>
              <textarea class="integrantesEditados" rows="10" style="width: 100%;">${documento.integrantes ? documento.integrantes.join('\n') : ''}</textarea><br>
            </div>
          </td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
})


// Tabla Sistema Nacional de Investigadoras e Investigadores (Tabla 2)
fetch('http://localhost:5000/sistemaNacional') 
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla2').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const numeroProfesores = documento.numProfesores || '';
      const nivelSistema = documento.nivelC || '';
      const nivelNacional = documento.nivel1 || '';
      const id = documento._id || documento.id; 

      tablaHTML += `
        <tr data-id="${id}">
          <td class="editable">${numeroProfesores}</td>
          <td class="editable">${nivelSistema}</td>
          <td class="editable">${nivelNacional}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


//Tabla Perfil Deseable (Tabla 3)
fetch('http://localhost:5000/perfilDeseable')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla3').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const numeroProfesores = documento.numProfesores || '';
      const id = documento.id; 

      tablaHTML += `
        <tr data-id="${id}">
          <td class="editable">${numeroProfesores}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


//Tabla Otros reconocimientos (Tabla 4)
fetch('http://localhost:5000/otrosReconocimientos')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tabla4').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const id = documento.id; 
      const otroProfesor = documento.profesor || '';
      const tipoReconocimiento = documento.tipoRec || '';

      tablaHTML += `
        <tr data-id="${id}">
          <td class="profesor">${otroProfesor}</td>
          <td class="tipoRec">${tipoReconocimiento}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


//Tabla Convenios Firmados (Tabla 5)
fetch('http://localhost:5000/conveniosFirmados')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla5').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const conveniosFirmados = documento.empresaProd || '';
      const id = documento.id; 

      tablaHTML += `
        <tr data-id="${id}">
          <td class="editable">${conveniosFirmados}</td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


//Tabla Participación en redes de investigación científica y tecnológica (Tabla 6)
fetch('http://localhost:5000/participacionRedes')
  .then(response => response.json())
  .then(data => {
    const tablaBody = document.getElementById('tabla6').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const participacionRedes = documento.nombre || '';
      const id = documento.id;

      tablaHTML += `
        <tr data-id="${id}">
          <td><span class="nombre-red">${participacionRedes}</span></td>
        </tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Ingeniería en Sistemas (ARTICULOS)
fetch('http://localhost:5000/lgacArticulos')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaArticulos').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-articulo" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-articulo">${tituloArticulo}</strong><br>
                <span class="descripcion-articulo">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Ingeniería en Sistemas (CAPITULOS)
fetch('http://localhost:5000/lgacCapitulos')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaCapitulos').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-capitulos" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-capitulos">${tituloArticulo}</strong><br>
                <span class="descripcion-capitulos">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Ingeniería en Sistemas (PROYECTOS)
fetch('http://localhost:5000/lgacProyectos')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaProyectos').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-proyectos" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-proyectos">${tituloArticulo}</strong><br>
                <span class="descripcion-proyectos">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Producción LGAC:  Instrumentación y Bioelectrónica (ARTICULOS) 
fetch('http://localhost:5000/lgacArticulos2')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaArticulos2').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-articulo" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-articulo">${tituloArticulo}</strong><br>
                <span class="descripcion-articulo">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Producción LGAC:  Instrumentación y Bioelectrónica (CAPITULOS) 
fetch('http://localhost:5000/lgacCapitulos2')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaCapitulos2').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-capitulos" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-capitulos">${tituloArticulo}</strong><br>
                <span class="descripcion-capitulos">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Producción LGAC:  Instrumentación y Bioelectrónica (PROYECTOS) 
fetch('http://localhost:5000/lgacProyectos2')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaProyectos2').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloProyecto = documento.titulo || '';
      const descripcionProyecto = documento.descripcion || '';
      const urlProyecto = documento.url || '';

      tablaHTML += `
        <tr class="fila-proyectos" onclick="window.open('${urlProyecto}', '_blank')">
            <td>
                <strong class="titulo-proyectos">${tituloProyecto}</strong><br>
                <span class="descripcion-proyectos">${descripcionProyecto}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// LGAC: Desarrollo y Gestión de Proyectos de Ingeniería para el Desarrollo Regional (ARTICULOS) -->
fetch('http://localhost:5000/lgacArticulos3')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaArticulos3').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloProyecto = documento.titulo || '';
      const descripcionProyecto = documento.descripcion || '';
      const urlProyecto = documento.url || '';

      tablaHTML += `
        <tr class="fila-articulo" onclick="window.open('${urlProyecto}', '_blank')">
            <td>
                <strong class="titulo-articulo">${tituloProyecto}</strong><br>
                <span class="descripcion-articulo">${descripcionProyecto}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// LGAC: Desarrollo y Gestión de Proyectos de Ingeniería para el Desarrollo Regional (CAPITULOS) 
fetch('http://localhost:5000/lgacCapitulos3')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaCapitulos3').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloCapitulo = documento.titulo || '';
      const descripcionCapitulo = documento.descripcion || '';
      const urlCapitulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-capitulos" onclick="window.open('${urlCapitulo}', '_blank')">
            <td>
                <strong class="titulo-capitulos">${tituloCapitulo}</strong><br>
                <span class="descripcion-capitulos">${descripcionCapitulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// LGAC: Desarrollo y Gestión de Proyectos de Ingeniería para el Desarrollo Regional (PROYECTOS) -->
fetch('http://localhost:5000/lgacProyectos3')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaProyectos3').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloProyecto = documento.titulo || '';
      const descripcionProyecto = documento.descripcion || '';
      const urlProyecto = documento.url || '';

      tablaHTML += `
        <tr class="fila-proyectos" onclick="window.open('${urlProyecto}', '_blank')">
            <td>
                <strong class="titulo-proyectos">${tituloProyecto}</strong><br>
                <span class="descripcion-proyectos">${descripcionProyecto}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Desarrollo de Tecnología e Innovación (ARTICULOS)
fetch('http://localhost:5000/lgacArticulos4')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaArticulos4').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloArticulo = documento.titulo || '';
      const descripcionArticulo = documento.descripcion || '';
      const urlArticulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-articulo" onclick="window.open('${urlArticulo}', '_blank')">
            <td>
                <strong class="titulo-articulo">${tituloArticulo}</strong><br>
                <span class="descripcion-articulo">${descripcionArticulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Desarrollo de Tecnología e Innovación (CAPITULOS) 
fetch('http://localhost:5000/lgacCapitulos4')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaCapitulos4').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloCapitulo = documento.titulo || '';
      const descripcionCapitulo = documento.descripcion || '';
      const urlCapitulo = documento.url || '';

      tablaHTML += `
        <tr class="fila-capitulos" onclick="window.open('${urlCapitulo}', '_blank')">
            <td>
                <strong class="titulo-capitulos">${tituloCapitulo}</strong><br>
                <span class="descripcion-capitulos">${descripcionCapitulo}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});


// Tabla LGAC: Desarrollo de Tecnología e Innovación (PROYECTOS) -->
fetch('http://localhost:5000/lgacProyectos4')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const tablaBody = document.getElementById('tablaProyectos4').getElementsByTagName('tbody')[0];
    let tablaHTML = '';

    data.forEach(documento => {
      const tituloProyecto = documento.titulo || '';
      const descripcionProyecto = documento.descripcion || '';
      const urlProyecto = documento.url || '';

      tablaHTML += `
        <tr class="fila-proyectos" onclick="window.open('${urlProyecto}', '_blank')">
            <td>
                <strong class="titulo-proyectos">${tituloProyecto}</strong><br>
                <span class="descripcion-proyectos">${descripcionProyecto}</span>
            </td>
        </tr>
        <tr class="espacio separator"></tr>
      `;
    });

    tablaBody.innerHTML = tablaHTML;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
});
