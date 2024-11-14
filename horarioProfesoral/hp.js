// Redirige a la página de Login
document.querySelector(".logout").addEventListener("click", function() {
    window.location.href = "../login/login.html";
});

// Redirige a la página de Menú al hacer clic en el botón de regreso
document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../horario/horario.html";
});

document.getElementById("claveBoton").addEventListener("click", mostrarHorario);

function mostrarHorario() {
    const docenteSeleccionado = document.getElementById("docente").value;
    const tabla = document.getElementById("tabla");
    const docenteTabla = document.getElementById("docenteTabla");

    // Datos de horarios de los docentes
    const horarios = {
        p1: {
            nombre: "Carolina Hurtado Quintana",
            horario: [
                ["06:15 - 07:00", "", "610", "510", "", ""],
                ["07:00 - 07:45", "", "451", "", "", ""],
                ["08:00 - 08:45", "", "", "", "", ""],
                ["08:45 - 09:30", "", "610", "", "", ""]
            ]
        },
        p2: {
            nombre: "Ingrid Vaneza Cañizares Narváez",
            horario: [
                ["06:15 - 07:00", "510", "", "", "451", ""],
                ["07:00 - 07:45", "610", "610", "", "", ""],
                ["08:00 - 08:45", "", "", "510", "", ""],
                ["08:45 - 09:30", "610", "", "451", "", ""]
            ]
        },
        p3: {
            nombre: "Armando Ruiz Perea",
            horario: [
                ["06:15 - 07:00", "", "", "610", "451", ""],
                ["07:00 - 07:45", "", "", "510", "", ""],
                ["08:00 - 08:45", "451", "510", "", "", ""],
                ["08:45 - 09:30", "", "451", "", "610", ""]
            ]
        }
    };

    if (horarios[docenteSeleccionado]) {
        const { nombre, horario } = horarios[docenteSeleccionado];
        docenteTabla.textContent = nombre;

        const tbody = tabla.querySelector("tbody");
        tbody.innerHTML = "";

        horario.forEach(fila => {
            const row = document.createElement("tr");
            fila.forEach(celda => {
                const cell = document.createElement("td");
                cell.textContent = celda;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });

        tabla.style.display = "table";
    } else {
        tabla.style.display = "none";
    }
}

// Función para limpiar el formulario y ocultar la tabla
function limpiarFormulario() {
    document.getElementById("docente").value = " "; // Restablece el selector
    document.getElementById("tabla").style.display = "none"; // Oculta la tabla
}
