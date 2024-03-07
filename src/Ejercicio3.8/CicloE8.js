// Contraseña establecida
const contraseñaCorrecta = "contraseña123";

// Solicitar contraseña al usuario utilizando un ciclo do-while
do {
    // Pedir al usuario que ingrese la contraseña
    const contraseñaIngresada = prompt("Ingrese la contraseña:");

    // Verificar si la contraseña es correcta
    if (contraseñaIngresada === contraseñaCorrecta) {
        alert("¡Contraseña correcta! Acceso permitido.");
        break; // Salir del ciclo si la contraseña es correcta
    } else {
        alert("Contraseña incorrecta. Inténtelo nuevamente.");
    }
} while (true); // El ciclo se ejecuta continuamente hasta que se ingresa la contraseña correcta