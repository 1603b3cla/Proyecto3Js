function calcularTiempo() {
    // Obtener la edad ingresada por el usuario
    const edad = parseInt(document.getElementById('edad').value);

    // Variables para almacenar los resultados
    let anosVividos = 0;
    let mesesVividos = 0;
    let diasVividos = 0;
    let horasVividas = 0;
    let segundosVividos = 0;

    // Ciclo para calcular el tiempo vivido
    for (let i = 1; i <= edad; i++) {
        anosVividos += 1;
        mesesVividos += 12;
        diasVividos += 365;
        horasVividas += 365 * 24;
        segundosVividos += 365 * 24 * 60 * 60;
    }

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Has vivido aproximadamente:<br>
        - ${anosVividos} años<br>
        - ${mesesVividos} meses<br>
        - ${diasVividos} días<br>
        - ${horasVividas} horas<br>
        - ${segundosVividos} segundos`;
}