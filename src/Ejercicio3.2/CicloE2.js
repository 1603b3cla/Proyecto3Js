function mostrarImpares() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById('numero').value);

    // Validar que el número sea positivo
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Crear un array con números impares usando el ciclo forEach
    const numerosImpares = [];
    [...Array(numero).keys()].forEach((value) => {
        const numeroActual = value + 1;
        if (numeroActual % 2 !== 0) {
            numerosImpares.push(numeroActual);
        }
    });

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Números impares hasta ${numero}: ${numerosImpares.join(', ')}`;
}