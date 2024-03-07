function calcularInversion() {
    // Obtener los valores ingresados por el usuario
    const cantidadInvertir = parseFloat(document.getElementById('inversion').value);
    const interesAnual = parseFloat(document.getElementById('interes').value);
    const numeroAnios = parseInt(document.getElementById('anios').value);

    // Validar que los valores sean positivos y válidos
    if (cantidadInvertir <= 0 || isNaN(cantidadInvertir) ||
        interesAnual < 0 || isNaN(interesAnual) ||
        numeroAnios <= 0 || isNaN(numeroAnios)) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return;
    }

    // Calcular el capital obtenido cada año utilizando el ciclo do-while
    let capital = cantidadInvertir;
    let anio = 1;

    // Limpiar la lista de resultados antes de mostrar nuevos resultados
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "";

    do {
        capital = capital * (1 + interesAnual);

        // Crear un elemento de lista y agregarlo a la lista de resultados
        const listItem = document.createElement('li');
        listItem.textContent = `${anio} => ${capital.toFixed(2)}`;
        resultadoElement.appendChild(listItem);

        anio++;
    } while (anio <= numeroAnios);
}