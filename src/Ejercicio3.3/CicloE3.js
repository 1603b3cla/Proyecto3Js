function cuentaAtras() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById('numero').value);

    // Validar que el número sea positivo
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Inicializar la variable de conteo
    let contador = numero;

    // Crear la cuenta atrás utilizando el ciclo do-while
    let cuentaAtrasString = "";
    do {
        cuentaAtrasString += contador;
        if (contador > 0) {
            cuentaAtrasString += ', ';
        }
        contador--;
    } while (contador >= 0);

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Cuenta atrás desde ${numero}: ${cuentaAtrasString}`;
}