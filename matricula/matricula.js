 // Redirige a Login.html al hacer clic en el enlace de Cerrar sesión
 document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Login/login.html";
});

  // Redirige a horario.html al hacer clic en la imagen de horario
  document.getElementById("matricula").addEventListener("click", function () {
    window.location.href = "../programa/programa.html";
});

// Redirige a la página de Menú al hacer clic en el botón de regreso
document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../menu/menu.html";
});
