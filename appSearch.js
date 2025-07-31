document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");

    // Mapeo de términos clave con las rutas locales
    const rutasInternas = {
        "inicio":"index.html",
        "quienes somos": "presentacion.html",
        "presentacion": "presentacion.html",
        "objetivos": "objetivos.html",
        "mision y vision": "misionVision.html",
        "estado del arte": "estadoArte.html",
        "infraestructura cientifica": "infraestructura.html",
        "nucleo academico basico": "nucleoAcademico.html",
        "lgyac": "lgac.html",
        "plan de estudios": "localizacion.html",
        "localizacion del programa": "localizacion.html",
        "sintesis del plan de estudios": "sintesisPlan.html",
        "perfil de ingreso y egreso": "ingresoEgreso.html",
        "procesos administrativos": "requisitosIngreso.html",
        "requisitos de ingreso": "requisitosIngreso.html",
        "requisitos de permanencia": "requisitosPermanencia.html",
        "requisitos de grado academico": "requisitosAcademico.html",
        "productividad": "productividad.html",
        "egresados": "egresados.html",
        "cohorte generacional": "cohorte.html",
        "contacto": "contacto.html"
        // Agrega más términos según tus secciones
    };

    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let query = this.value.trim().toLowerCase();

            if (query !== "") {
                // Verifica si la búsqueda está en el listado de rutas internas
                if (rutasInternas.hasOwnProperty(query)) {
                    // Redirige a la página interna
                    window.location.href = rutasInternas[query];
                } else {
                    // Redirige a la página externa si no hay coincidencia
                    window.open(`https://www.itdurango.edu.mx/?q=${encodeURIComponent(query)}`, "_blank");
                }
            }
        }
    });
});

