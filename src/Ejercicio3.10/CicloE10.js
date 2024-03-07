function contarLetras() {
    // Obtener la frase y la letra ingresadas por el usuario
    const frase = document.getElementById('frase').value.toLowerCase(); // Convertir a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
    const letra = document.getElementById('letra').value.toLowerCase(); // Convertir a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas

    // Verificar que se haya ingresado una frase y una letra
    if (!frase || !letra) {
        alert("Por favor, ingrese una frase y una letra.");
        return;
    }

    // Inicializar el contador de apariciones de la letra
    let contador = 0;

    // Contar el número de veces que aparece la letra en la frase utilizando un bucle for
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `La letra '${letra}' aparece ${contador} veces en la frase.`;
}