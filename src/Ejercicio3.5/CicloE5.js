function dibujarTriangulo() {
    // Obtener la altura ingresada por el usuario
    const altura = parseInt(document.getElementById('altura').value);

    // Validar que la altura sea positiva
    if (altura <= 0 || isNaN(altura)) {
        alert("Por favor, ingrese una altura válida.");
        return;
    }

    // Inicializar la matriz para almacenar el triángulo
    const triangulo = [];

    // Inicializar las variables para el ciclo do-while
    let fila = 1;

    // Construir el triángulo utilizando el ciclo do-while
    do {
        const asteriscos = '❤'.repeat(fila);
        triangulo.push(asteriscos);
        fila++;
    } while (fila <= altura);

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = triangulo.join('\n');
}