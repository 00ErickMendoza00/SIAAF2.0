document.addEventListener("DOMContentLoaded", function () {

    // Obtener los datos del estudiante desde localStorage
    const estudiante = JSON.parse(localStorage.getItem('estudiante'));

    // Verificar si los datos existen
    if (estudiante) {
        // Mostrar el nombre y apellido en la etiqueta <p>
        const nomEstu = document.getElementById('nomEstu');
        nomEstu.textContent = `${estudiante.nombre} ${estudiante.apellido}`;

        // Mostrar el nombre y apellido en la etiqueta <p> de horas
        const horas = document.getElementById('horas');
        horas.textContent = `Horas de bienestar:  ${estudiante.horas} horas`;

    } else {
        // Si no se encuentra al estudiante, redirigir al login
        window.location.href = '../login/login.html';
    }

    // Redirige a horario.html al hacer clic en la imagen de horario
    document.getElementById("horario").addEventListener("click", function () {
        window.location.href = "../horario/horario.html";
    });

    // Redirige a horario.html al hacer clic en la imagen de horario
    document.getElementById("matricula").addEventListener("click", function () {
        window.location.href = "../matricula/matricula.html";
    });

    // Redirige a Login.html al hacer clic en el enlace de Cerrar sesión
    document.getElementById("logout").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../login/login.html";
    });

    // Obtén el elemento donde se mostrará el nombre
    const nomEstu = document.querySelector('.info-text p');

    // Define el ID del estudiante (puedes cambiarlo dinámicamente si es necesario)
    const idEstudiante = 1; // Ajusta esto según el ID necesario

    

});

