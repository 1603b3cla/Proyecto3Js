function mostrarEco() {
    // Inicializar el área de resultado
    let resultadoString = "";

    // Bucle do-while infinito
    do {
        // Obtener el contenido del área de texto
        const entrada = prompt("Introduce texto (escribe 'salir' para finalizar):");

        // Verificar si el usuario quiere salir
        if (entrada.toLowerCase() === "salir") {
            alert("¡Hasta luego!");
            break; // Salir del bucle cuando el usuario escribe "salir"
        } else {
            // Mostrar el eco en el área de resultado
            resultadoString += `Eco: ${entrada}\n`;
        }
    } while (true); // El bucle se ejecuta infinitamente hasta que el usuario escribe "salir"

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = resultadoString;
}