document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const claveForm = document.getElementById("claveForm");
    const recuperarClave = document.getElementById("recuperarClave");
    const claveBoton = document.getElementById("claveBoton");
    

    //definir objeto estudiante

    const estudiante = [ {
        nombre: "Erick",
        apellido: "Mendoza Palacio",
        cedula: "1006206159",
        clave: "M12345",
        nacimiento: "2000-08-19" ,//formato año-mes-dia
        horas: "50"
    }, 
    {
        nombre: "Cristian",
        apellido: "Gomez Villanueva",
        cedula: "12345678",
        clave: "C12345",
        nacimiento: "2001-07-18", //formato año-mes-dia
        horas: "40"

    },
    {
        nombre: "Santiago",
        apellido: "Botina",
        cedula: "1005892044",
        clave: "S12345",
        nacimiento: "2002-06-17", //formato año-mes-dia
        horas: "30"
    },
    {
        nombre: "Juan",
        apellido: "Palma",
        cedula: "123456789",
        clave: "J12345",
        nacimiento: "1998-05-16",//formato año-mes-dia
        horas: "20"
    }
];

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
    const estudianteEncontrado = estudiante.find(estudiante => estudiante.cedula === usuario && estudiante.clave === contrasena);

    if (estudianteEncontrado) {
        // Si se encuentra el estudiante, guardamos sus datos en localStorage
        localStorage.setItem('estudiante', JSON.stringify(estudianteEncontrado));
        // Redirigir a menu/menu.html si las credenciales son correctas
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
        const nacimiento = document.getElementById("nacimiento").value;
    
        if (!cedula) {
            alert("Por favor, ingrese su número de cédula.");
        } else {
            // Buscar el estudiante correspondiente en el arreglo
            const estudianteEncontrado = estudiante.find(est => est.cedula === cedula && est.nacimiento === nacimiento);
    
            if (estudianteEncontrado) {
                alert(`Las credenciales del usuario son: \nCédula: ${estudianteEncontrado.cedula} \nClave: ${estudianteEncontrado.clave} `);
                // Restablece los formularios
                claveForm.style.display = "none";
                loginForm.style.display = "block";
                document.getElementById("cedula").value = ""; // Limpia el campo de cédula
            } else {
                alert("La cédula ingresada no se encuentra registrada, por favor validar con registro académico.");
            }
        }
    });
    

    // Obtener el botón "Volver al Login"
    const backToLoginButton = document.getElementById('backToLogin');

    // Agregar un event listener para redirigir al login
    backToLoginButton.addEventListener('click', function() {
    // Redirigir al login.html
    window.location.href = '../Login/login.html';
});

});
