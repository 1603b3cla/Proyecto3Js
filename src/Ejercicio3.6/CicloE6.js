function mostrarTabla() {
    // Inicializar la variable para el ciclo do-while
    let multiplicador = 1;

    // Inicializar la cadena de resultado
    let resultadoString = "";

    // Construir la tabla de multiplicar utilizando el ciclo do-while
    do {
        for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
            resultadoString += `${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}\t`;
        }
        resultadoString += '\n';
        multiplicador++;
    } while (multiplicador <= 10);

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = resultadoString;
}