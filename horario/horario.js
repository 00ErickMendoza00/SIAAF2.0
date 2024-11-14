// Redirige a la página de Horario Profesoral
document.querySelector(".btn").addEventListener("click", function() {
    window.location.href = "../horarioProfesoral/hp.html";
});

// Redirige a la página de Login
document.querySelector(".logout").addEventListener("click", function() {
    window.location.href = "../Login/login.html";
});

// Redirige a la página de Menú al hacer clic en el botón de regreso
document.querySelector(".nav a").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../menu/menu.html";
});
