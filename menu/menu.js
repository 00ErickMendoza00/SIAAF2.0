document.addEventListener("DOMContentLoaded", function () {
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
        window.location.href = "../Login/login.html";
    });
});
