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
};

// Redirige a la página de Horario Profesoral
document.querySelector(".btn").addEventListener("click", function() {
    window.location.href = "../horarioProfesoral/hp.html";
});

// Redirige a la página de Login
document.querySelector(".logout").addEventListener("click", function() {
    window.location.href = "../login/login.html";
});

// Redirige a la página de Menú al hacer clic en el botón de regreso
document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../menu/menu.html";
});
