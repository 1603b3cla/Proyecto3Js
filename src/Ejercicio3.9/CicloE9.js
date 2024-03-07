function mostrarLetras() {
    // Obtener la palabra ingresada por el usuario
    const palabra = document.getElementById('palabra').value;

    // Verificar que se haya ingresado una palabra
    if (!palabra) {
        alert("Por favor, ingrese una palabra.");
        return;
    }

    // Inicializar la cadena de resultado
    let resultadoString = "";

    // Mostrar las letras al revés utilizando un bucle for
    for (let i = palabra.length - 1; i >= 0; i--) {
        resultadoString += palabra[i] + ' ';
    }

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Letras al revés: ${resultadoString}`;
}