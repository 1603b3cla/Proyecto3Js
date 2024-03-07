function dibujarTriangulo() {
    // Obtener la altura ingresada por el usuario
    const altura = parseInt(document.getElementById('altura').value);

    // Validar que la altura sea positiva
    if (altura <= 0 || isNaN(altura)) {
        alert("Por favor, ingrese una altura válida.");
        return;
    }

    // Inicializar la cadena de resultado
    let resultadoString = "";

    // Construir el triángulo rectángulo utilizando el ciclo for
    for (let i = 1; i <= altura; i++) {
        // Construir cada línea del triángulo
        for (let j = 2 * i - 1; j >= 1; j -= 2) {
            resultadoString += `${j} `;
        }

        // Agregar un salto de línea después de cada línea del triángulo
        resultadoString += '\n';
    }

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = resultadoString;
}