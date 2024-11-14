 // Redirige a Login.html al hacer clic en el enlace de Cerrar sesión
 document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Login/login.html";
});

// Redirige a la página de Menú al hacer clic en el botón de regreso
document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../menu/menu.html";
});

document.getElementById("descargar").addEventListener("click", function() {
    // URL del archivo PDF que deseas abrir
    var pdfUrl = "../imagenes/Impresión de constancia de matrícula.pdf"; // Cambia esta ruta por la ubicación de tu archivo PDF

    // Abrir el archivo PDF en una nueva ventana/pestaña
    window.open(pdfUrl, "_blank"); // El segundo argumento "_blank" abre en una nueva pestaña
});
