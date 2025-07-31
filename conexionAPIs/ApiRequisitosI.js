
// Requisitos y antecedentes académicos de ingreso de los candidatos
fetch('http://localhost:5000/requisitosIngreso')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('requisitos-container');
        contenedor.innerHTML = ''; // Limpiar contenido anterior

        data.forEach(documento => {
            const antecedentes = documento.antecedentes || [];
            const requisitos = documento.requisitos || [];
            const seleccion = documento.seleccion || [];

            // Contenedor general
            const aboutContainer = document.createElement('div');
            aboutContainer.classList.add('about-container');

            // Imagen
            const aboutImageDiv = document.createElement('div');
            aboutImageDiv.classList.add('about-image');
            aboutImageDiv.innerHTML = `<img src="images/estudiante2.jpg" alt="Descripción de la imagen">`;
            aboutContainer.appendChild(aboutImageDiv);

            // Contenido textual
            const aboutTextDiv = document.createElement('div');
            aboutTextDiv.classList.add('about-text');

            // Título principal
            const tituloPrincipal = document.createElement('h2');
            tituloPrincipal.textContent = 'Requisitos y antecedentes académicos de ingreso de los candidatos';
            aboutTextDiv.appendChild(tituloPrincipal);

            // === Sección: Antecedentes ===
            const tituloAntecedentes = document.createElement('h3');
            tituloAntecedentes.classList.add('centrado');
            tituloAntecedentes.textContent = 'Antecedentes';
            aboutTextDiv.appendChild(tituloAntecedentes);

            antecedentes.forEach(item => {
                const p = document.createElement('p');
                p.textContent = `• ${item}`;
                aboutTextDiv.appendChild(p);
            });

            // === Sección: Requisitos ===
            const tituloRequisitos = document.createElement('h3');
            tituloRequisitos.classList.add('centrado');
            tituloRequisitos.textContent = 'Requisitos';
            aboutTextDiv.appendChild(tituloRequisitos);

            // Párrafo inicial fijo
            const pIntroReq = document.createElement('p');
            pIntroReq.textContent = 'Los alumnos que soliciten ingreso al programa deberán de cubrir la fase de selección que incluye los siguientes puntos:';
            aboutTextDiv.appendChild(pIntroReq);

            requisitos.forEach(req => {
                const p = document.createElement('p');
                p.textContent = `• ${req}`;
                aboutTextDiv.appendChild(p);
            });

            // === Sección: Proceso de Selección ===
            const tituloSeleccion = document.createElement('h3');
            tituloSeleccion.classList.add('centrado');
            tituloSeleccion.textContent = 'Proceso de Selección de Aspirantes';
            aboutTextDiv.appendChild(tituloSeleccion);

            // Párrafo inicial fijo
            const pIntroSel = document.createElement('p');
            pIntroSel.textContent = 'La selección de estudiantes se basa en la evaluación de 3 aspectos básicos:';
            aboutTextDiv.appendChild(pIntroSel);

            // Selección dinámica
            seleccion.forEach(sel => {
                const p = document.createElement('p');
                p.textContent = `• ${sel}`;
                aboutTextDiv.appendChild(p);
            });

            // Párrafos fijos al final de Selección
            const pFijo1 = document.createElement('p');
            pFijo1.textContent = 'Los conocimientos básicos del área son evaluados mediante el examen de admisión EXANI III y examen del posgrado. Estos exámenes cubren aspectos de conocimientos básicos a nivel licenciatura.';
            aboutTextDiv.appendChild(pFijo1);

            const pFijo2 = document.createElement('p');
            pFijo2.textContent = 'Las actitudes y aptitudes de los aspirantes son medidas mediante una entrevista personal que el consejo realiza a los candidatos. Es a través de este proceso en donde se detectan los intereses de investigación y/o desarrollo de los aspirantes, así como cualidades que no pudieran ser detectadas por los exámenes de admisión.';
            aboutTextDiv.appendChild(pFijo2);

            const pFijo3 = document.createElement('p');
            pFijo3.textContent = 'Mediante los exámenes TOEFL y IELTS (o equivalentes) se mide la capacidad de hablar, escuchar, leer y escribir en inglés de los aspirantes. Aunque tanto el TOEFL como el IELTS son los exámenes de inglés más comunes, también se aceptan pruebas de inglés de otros organismos evaluadores tales como los exámenes de la Universidad de Cambridge (First, etc.).';
            aboutTextDiv.appendChild(pFijo3);

            // === H3: Consultar Convocatoria ===
            const h3Convocatoria = document.createElement('h3');
            h3Convocatoria.textContent = 'Consultar Convocatoria:';
            aboutTextDiv.appendChild(h3Convocatoria);

            const contenedorBotonConv = document.createElement('div');
            contenedorBotonConv.classList.add('button-container');
            contenedorBotonConv.innerHTML = `
        <a href="https://drive.google.com/file/d/1Kl7zjiLTmIlfWQuFOVZNgoTeKAIOSrXv/view"
          class="redirect-button" target="_blank" rel="noopener noreferrer">
          Consultar Convocatoria
        </a>`;
            aboutTextDiv.appendChild(contenedorBotonConv);

            // === H3: Solicitud Nuevo Ingreso ===
            const h3Solicitud = document.createElement('h3');
            h3Solicitud.textContent = 'Consultar Solicitud Nuevo Ingreso:';
            aboutTextDiv.appendChild(h3Solicitud);

            const contenedorBotonSolicitud = document.createElement('div');
            contenedorBotonSolicitud.classList.add('button-container');
            contenedorBotonSolicitud.innerHTML = `
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSckFvjUTxNXqQFq-KZtMv629P6uqE_uqRCsZxkCuhOSfDaiYw/viewform"
          class="redirect-button" target="_blank" rel="noopener noreferrer">
          Solicitud Nuevo Ingreso
        </a>`;
            aboutTextDiv.appendChild(contenedorBotonSolicitud);

            // Agregar texto al contenedor general
            aboutContainer.appendChild(aboutTextDiv);
            contenedor.appendChild(aboutContainer);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
});