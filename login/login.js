document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const claveForm = document.getElementById("claveForm");
    const recuperarClave = document.getElementById("recuperarClave");
    const claveBoton = document.getElementById("claveBoton");

    // Evento para el formulario de inicio de sesión
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de usuario y contraseña
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        // Verificar si ambos campos están llenos
        if (!usuario || !contrasena) {
            alert("Por favor, complete ambos campos.");
            return; // Sale de la función si los campos no están llenos
        }

        // Validar credenciales
        if (usuario === "1006206159" && contrasena === "Mendoza12345") {
            // Redirige a menu/menu.html si las credenciales son correctas
            window.location.href = "../menu/menu.html";
        } else {
            // Muestra un mensaje de alerta si las credenciales son incorrectas
            alert("Credenciales incorrectas.");
        }
    });

    // Mostrar el formulario de recuperación de contraseña
    recuperarClave.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        loginForm.style.display = "none"; // Oculta el formulario de inicio de sesión
        claveForm.style.display = "block"; // Muestra el formulario de recuperación
    });

   // Manejar el envío del formulario de recuperación de contraseña
    claveBoton.addEventListener("click", function() {
        const cedula = document.getElementById("cedula").value;

        if (!cedula) {
            alert("Por favor, ingrese su número de cédula.");
        } else if (cedula === "1006206159") {
            alert("Las credenciales fueron enviadas al correo registrado: erickmendoza-09@hotmail.com");
            // Restablece los formularios
            claveForm.style.display = "none";
            loginForm.style.display = "block";
            document.getElementById("cedula").value = ""; // Limpia el campo de cédula
        } else {
            alert("La cédula ingresada no se encuentra registrada, por favor validar con registro académico.");
        }
    });


   /* document.getElementById("claveBoton").addEventListener("click", function() {
        // Obtiene el valor de la cédula ingresada
        const cedula = document.getElementById("cedula").value;
        const email = "erickmendoza-09@hotmail.com"; // Cambia esto por el correo al cual quieres enviar la solicitud
        const subject = "Solicitud de recuperación de contraseña";
        const body = `Hola, he olvidado mi contraseña. Mi número de cédula es: ${cedula}. Por favor, envíenme las instrucciones para recuperarla.`;
    
        // Construye el enlace mailto y abre el cliente de correo
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });*/
    
});
