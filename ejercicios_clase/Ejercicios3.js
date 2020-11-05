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

/**
 * ACTIVIDAD 2
 * Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, mostrar un mensaje de error 
 * si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) y que devuelva la suma y la media de todos 
 * los elementos. Comprobar que todos los argumentos sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: 
 * ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos").
 */

function sumar() {
    // Si no se pasan argumentos lanza un error
    if (arguments.length < 1) {
        throw new Error("Tienes que pasar al menos un argumento");
    }
    let suma = 0;
    let contador = 0;
    // hacemos un bucle con la lista de argumentos
    for (i in arguments) {
        //Si no es un numero lo ignoramos
        if (isNaN(arguments[i])) {
            console.log("¡AVISO! El argumento número " + (i + 1) + " " + arguments[i] + " no es un número, lo ignoramos")
        } else {
            // Lo agregamos a la suma y aumentamos el contador 
            suma += arguments[i];
            contador++;
        }
    }
    return suma / contador;
}

/**
 * ACTIVIDAD 3
 * Realizar una función en JS que dado un 
DNI (comprobar que es un número entre 0 y 99999999), d
evuelva la letra asociado al mismo. Esta letra se calcula como el módulo 
(resto) de la división del número del DNI entre 23, y a partir del resto se
 escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. 
 Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene como resto 14, 
 por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.
 */

function validarDni(dni) {
    //Si es un número y está dentro del rango
    if (!isNaN(dni) && (dni >= 0 && dni < 99999999)) {
        array = "TRWAGMYFPDXBNJZSQVHLCKE".split("") //Convierte el string en un array

        resto = dni % 23; // Calculamos el resto 



    } else {
        throw new Error('');
    }

    return array[resto]; //Retornamos la letra que corresponde utilizando el resto
}

/**
 * ACTIVIDAD 4
 * Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por defecto 10, valor mínimo 
 * del elemento (por defecto 100), valor máximo (por defecto 200).
 */


/**
 * @param {number} elementos = Número de elementos del array 
 * @param {number} minimo = Valor mínimo del elemento
 * @param {number} maximo = Valor máximo del elemento
 */
function arrayAleatorio(elementos = 10, minimo = 100, maximo = 200) {
    maximo += 1; // Le agregamos 1 para poder incluirlo en el Random
    let array = new Array(elementos); //Creamos un array con el tamaño que se le indique al llamar la función

    for (let i = 0; i < array.length; i++) {
        //Obtenemos un random y lo asignamos al array
        array[i] = parseInt(Math.random() * (maximo - minimo) + minimo);

    }

    return array;
}

/**
 * ACTIVIDAD 5
 * Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.
 */

// Creamos el array aleatorio de 20 elementos entre 20 (incluido) y 100 (incluido).

let listaAleatoria = arrayAleatorio(20, 20, 100);
let listaOrdenada = actividad5(listaAleatoria);

/**
 * @param {Array} array = array que vamos a ordenar
 */
function actividad5(array) {
    // Utilizando el metodo sort podemos ordenar un array
    return array != null ? array.sort((a, b) => a - b) : false;
}


/**
 * ACTIVIDAD 6
 * Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado 
 * creado en el ejercicio anterior
 */
 // Descomenta para usar
//console.log(arrayOrdenado);
//actividad6(arrayOrdenado)
function actividad6(array) {
    //Rango del array
    let min = 0;
    let max = array.length;

    for (i in array) {
        let indice_random = parseInt(Math.random() * (max - min) + min);
        // Guardamos el num que nos salió del random
        let num_memoria = array[indice_random];
        // En esa posición guardamos el numero que está en la posición actual del bucle for
        array[indice_random] = array[i]
        // Y en la posicion del for colocamos el numero que estaba en la posicion aleatoria.
        array[i] = num_memoria;
    }
    console.log(array)
}
/**
 * ACTIVIDAD 7
 * Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) y para cada elemento x, 
 * gestionar un nuevo array de la siguiente forma:
x <= -5: Eliminar el primer elemento del array
-5 < x <= 0: Eliminar el último elemento del array
0 < x <=  10: Añadir x al principio del array
10 < x <=  10: Añadir x al final del array
Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada 
(eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras realizar la operación
 */

let array7 = arrayAleatorio(15, -10, 20);

function ejercicio7(array) {

    for (i in array) {

        if (array[i] > 10 && array[i] <= 20) { // Añadir x al final del array
            array.push(array[i]);
            console.log("Se añade " + array[i] + " al final del array, tamaño del array => " + array.length);
        } else if (array[i] > 0 && array[i] <= 10) { // Añadir x al principio del array

            array.unshift(array[i]);
            console.log("Se añade " + array[i] + " al principio del array, tamaño del array => " + array.length);

        } else if (array[i] > 5 && array[i] <= 0) { // Eliminar el último elemento del array

            array.pop();

            console.log("Se elimina el último elemento " + array[i] + ", tamaño del array => " + array.length);

        } else if (array[i] <= 5) { // Eliminar el primer elemento del array

            array.shift();
            console.log("Se elimina el primer elemento " + array[i] + " al final del array, tamaño del array => " + array.length);

        }

    }

}

/**
 * ACTIVIDAD 8
 * Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento. 
 * Probar con un array aleatorio de 20 números entre 60 y 100.
 */
function actividad8(array) {
    //Se crea un nuevo array con el tamaño del array que se pasa en la función
    let resultado = new Array(array.length);

    for (i in array) {
        resultado[i] = Math.sqrt(array[i]); //Con Math.sqrt calculamos la raiz cuadrada
    }

    return resultado;
}

/**
 * ACTIVIDAD 9
 * Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos valores 
 * (si el valor se repite, informar sólo sobre la primera vez que aparezca). Probar con un array aleatorio de 
 * 20 números entre -100 y 100.
 */
// Descomenta para usar
// //Creamos el array Aleatorio
//  let array9 = arrayAleatorio(20, -100, 100);
// console.log(array9);
// console.log(actividad9(array9))
function actividad9(array) {
    // Le asignamos a los valores maximo y minimo la primera posicion del array
    // Tambien lo hacemos con el indice que será el 0
    let min = array[0];
    let min_i = 0;
    let max = array[0];
    let max_i = 0;
    // Como ya utilizamos la primera posicion del array, empezamos el bucle con la segunda posicion (i = 1)
    for (i = 1; i < array.length; i++) {
        // Vamos preguntando si el valor actual del array es mayor o menor 

        if (array[i] > max) {
            max = array[i];
            max_i = i;
        }
        if (array[i] < min) {
            min = array[i];
            min_i = i;
        }

    }
    // Retornamos un objeto con el valor maximo y minimo y su posición en el array
    return {
        minimo: min,
        minimo_indice: min_i,
        maximo: max,
        maximo_indice: max_i,
    }
}


/**
 * ACTIVIDAD 10
 * Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, informar si es la 
 * primera vez que aparece, o si se trata de un elemento repetido.
 */

function actividad10(array) {
    // Utilizando la función de la actividad 9 obtenemos el número mayor del array
    // Esto nos servirá para llevar un control de los números repetidos
    let obj_max_min = actividad9(array);
    // Creamos un array para los repetidos del tamaño del número máximo del array
    let repetidos = new Array(obj_max_min.maximo);
    /**
     *  El array de "repetidos" lo vamos a utilizar de la siguiente manera:
     *  El indice lo vamos a utilizar como referencia con respecto al número del array original
     *  Por ejemplo, el número 20 (del array original) va en la posición 20 del array de repetidos
     * 
     *  Ahí vamos a ir sumandole un digito al valor cada vez que se repita
     * 
     *  Al principio preguntamos si es null, esto quiere decir que es la primera vez que se muestra.
     * 
     *  Si no es null quiere decir que ya se ha repetido, por lo que le seguimos sumando 1 digito al valor
     *  de esa posición.
     */

    for (i in array) { // recorremos el array
        if (repetidos[array[i]] == null) {
            console.log('Primera aparición del numero ' + array[i])
            repetidos[array[i]] = 1
        } else {
            repetidos[array[i]] += 1
            console.log('Es la ' + repetidos[array[i]] + " aparición del número " + array[i])
        }
    }

}


/*
10) Crear un array de 50 números aleatorios enteros aleatorios 
entre 10 y 20. Para cada elemento, informar si es la primera vez 
que aparece, o si se trata de un elemento repetido.
11) Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas 
veces había aparecido con anterioridad.
*/


// Descomenta para usar

// let array10 = arrayAleatorio(50, 10, 20);
// console.log(actividad10(array10));

function actividad10(array) {
    // Utilizando la función de la actividad 9 obtenemos el número mayor del array
    // Esto nos servirá para llevar un control de los números repetidos
    let obj_max_min = actividad9(array);
    // Creamos un array para los repetidos del tamaño del número máximo del array
    let repetidos = new Array(obj_max_min.maximo);
    /**
     *  El array de repetidos lo vamos a utilizar de la siguiente manera:
     *  El indice lo vamos a utilizar como referencia con respecto al número del array original
     *  Por ejemplo, el número 20 (del array original) va en la posición 20 del array de repetidos
     * 
     *  Ahí vamos a ir sumandole un digito al valor cada vez que se repita
     * 
     *  Al principio preguntamos si es null, esto quiere decir que es la primera vez que se muestra.
     * 
     *  Si no es null quiere decir que ya se ha repetido, por lo que le seguimos sumando 1 digito al valor
     *  de esa posición.
     */

    for (i in array) {
        if (repetidos[array[i]] == null) {
            console.log('Es la primera vez que aparece el número ' + array[i])
            repetidos[array[i]] = 1
        } else {
            repetidos[array[i]] += 1
            console.log('Es la ' + repetidos[array[i]] + " vez que aparece el número " + array[i])
        }
    }

}

/*
12) Escribir una función que busque la cadena "arriba" en un texto. 
La función deberá informar si encuentra o no esta cadena en el texto y, 
si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo".
 */
// QUITAR COMENTARIOS
actividad12('Buenas caballero, su habitación esta hacia arriba.')

function actividad12(cadena) {

    //este es el regex de "arriba"
    const regex = /(arriba)/
    // este es el regex para reemplazar 
    const replaceRegex = new RegExp("arriba", "g")

    if (cadena.match(regex)) { //si en cadena hay alguna cohincidencia con regex, la reemplaza por "abajo"

        console.log(cadena.replaceAll(replaceRegex, 'abajo'));
    } else {
        console.log('false') //sino, te devuelve false
    }
}


