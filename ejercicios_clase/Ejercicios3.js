// EJERCICIOS (III)

/**
 * ACTIVIDAD 1
 * Realizar una función que indicando un texto y un carácter (ambos obligatorios, 
 * comprobar que el segundo parámetro es realmente un único carácter), nos diga 
 * cuántas veces aparece el carácter en el texto.
 */

function validarCaracter(texto, caracter) {
    var cadena = texto;
    var letra = caracter;
    if (caracter.length != 1) {
        throw new Error("El caracter tiene que ser de un digito");
    }
    let contador = 0;

    for (letra in texto) {
        // Si el digito es igual que el caracter se le suma al contador.
        if (texto.charAt(letra) == caracter) {
            contador++;
        }
    }
    return contador;
}

validarCaracter("Hola que tal colega!", "a");