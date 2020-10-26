// EJERCICIOS IV

/**
 * ACTIVIDAD 1
 * 
 * Realiza 3 ejercicios anteriores utilizando operador ternario.
 */

//Actividad 7 Ejercicio2
function convertirGrados2(grados, resultadoString = false) {

    resultado = (grados - 32) * 5 / 9;
    //Comprobamos el boolean "resultadoString" para decidir si se envia el reultado 
    //o le añadimos la unidad de los grados
    return resultadoString == false ? resultado : resultado + "ºC";
}

//Actividad 12 Ejercicio 3
function actividad12Ejercicios3(cadena) {

    //este es el regex para buscar la cadena arriba
    const regex = /(arriba)/
    //regex para reemplazarlo
    const reemplazarRegex = new RegExp("arriba", "g");

    cadena.match(regex) == true ? console.log(cadena.replaceAll(reemplazarRegex, 'abajo')) : console.log('false');
}

//Actividad 5 Ejercicio 3
function actividad5Ejercicio3(array) {
    //Si utilizamos el metodo sort podemos ordenar
    return array != null ? array.sort((a, b) => a - b) : false;
}


/**
 * ACTIVIDAD 2
 * 
 * Realiza una función sumatoria utilizando “arguments”. Utiliza un bucle for. 
 * El usuario debe introducir 7 números. Resultado muéstralo en consola.
 */

function sumatorio2() {
    //Si los argumentos no corresponden con la condición entonces nos lanza un error.
    if (arguments.length != 7) {
        throw new Error("Debes introducir 7 números.")
    }
    //con el siguiente bucle imprimimos los argumentos
    for (i in arguments) {
        console.log(arguments[i]);
    }
}

/**
 * ACTIVIDAD 3
 * 
 * Realiza una función que calcule la media de 5 notas introducidas por el usuario. 
 * Utiliza “arguments”. Muestra el resultado por consola.
 */

function calcularMedia() {
    if (arguments.length != 5) {
        throw new Error("Debes introducir 5 numeros.")
    }
    // Sumamos los argumentos
    let suma = 0;
    for (i in arguments) {
        suma += arguments[i];

    }
    return suma / arguments.length; //<-- dividimos la suma por el tamaño de arguments
}

/**
 * ACTIVIDAD 4
 * 
 *  Realiza la validación de una matrícula de un coche 0000-XXX mediante expresiones regulares.
 */

function ejercicio4(matricula) {
    // Empieza por 4 numero, le sigue un guión y termina en tres letras mayusculas
    let regex = new RegExp("^[0-9]{4}-[A-Z]{3}$");

    return regex.test(matricula);
}

/*
5- Valida un nombre de usuario en twitter, empieza por @ y puede contener letras mayúsculas y minúsculas, 
números, guiones y guiones bajos.
*/

function ejercicio5(usuario) {
    // Empieza por @ y puede contener número, letras, guiones y guiones bajos
    let regex = new RegExp("^@[0-9A-Za-z_-]+$");

    return regex.test(usuario);
}

/*
6- Crear una expresión regular que valide una dirección de email. 
Para simplificar, los valores antes de la @ pueden contener cualquier 
carácter alfanumérico, y los caracteres . y -, mientras que los valores tras 
la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener
 una longitud de 2 o 3 caracteres.
*/
function ejercicio6(correo) {
    //Regex para el correo, permite caracteres alfanuméricos, puntos y guiones antes del @
    // luego solo caracteres alfanuméricos, un punto y el dominio
    let regex = new RegExp("^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$");

    return regex.test(correo);
}

/*
7- Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", 
donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".
*/

function ejercicio7(cadena) {
    // Los primeros dos digitos (dias) pueden comenzar con 0-2 y 1-9 o 1-2 y 0-9
    // Los meses si comienzan en 0 pueden contener del 1-9 y si comienzan en 1 van desde el 0-9
    // Por último el año solo puede comenzar por 1 o 2 y seguir de 3 digitos más del 0 al 9
    let regex = new RegExp("(([0-2][1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[1-2][0-9]{3})");
    return regex.test(cadena);
}


/*
8- Realiza 3 ejercicios anteriores utilizando funciones anónimas.
*/

// Actividad 6 - Ejercicios 2
// Conversor de Farenheit Celsius
let farenheitTocelsius = function (grados) {
    return (grados - 32) * 5 / 9;
}
// Actividad 7 - Ejercicios 2
// En el ejercicio anterior, añadir un argumento opcional booleano de forma que si está a `False` (valor por defecto) 
// devuelve sólo el resultado numérico (p.ej: `24`), mientras que si se indica `True` le añade la unidad `ºC` (p.ej `24ºC`).

let farenheitToCelsius2 = function (grados, resultadoStr = false) {
    resultado = (grados - 32) * 5 / 9;
    //Preguntamos por el boolean 'resultadoStr' para establecer si se envia el resultado númerico 
    //o se le añade la unidad de grados
    return resultadoStr == false ? resultado : resultado + "ºC";
}

// Actividad 10 - Ejericicios 2
// Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”.
(function () {
    let fecha = new Date()
    //devuelve un cadena con la representación al idioma de la fecha especificada
    console.log(fecha.toLocaleString())
});

/*
9- Analiza los diferentes métodos de string y crea 3 ejercicios aplicados donde 
   el usuario deba intervenir.
*/


/*
10- Analiza los diferentes métodos de arrays y crea 3 ejercicios aplicados 
    donde el usuario deba intervenir.
 */

/*
11- Realiza un programa para probar si el primer carácter de una cadena introducida por el usuario está en mayúsculas o no.
*/

//console.log(actividad11("Hla"))
function actividad11(cadena) {
    let regex = new RegExp("^[A-Z].+");

    return regex.test(cadena);
}
/*
12 - Realiza un script para buscar una fecha dentro de una cadena introducida por el usuario.
*/
//actividad12("Nací el 05/04/1982 en Donostia")


function actividad12(cadena) {
    //Expresion regular
    let regex = new RegExp("((?:[0-2][1-9]|[1-2][0-9]|3[0-1])\/(?:0[1-9]|1[0-2])\/[1-2][0-9]{3})");
    //Extraemos la fecha de la cadena
    let fecha = cadena.match(regex)[1];
    return fecha;
}

/*
13-   Escriba un programa para contar el número de palabras en una cadena.
    Nota :
    - Elimine los espacios en blanco de la posición inicial y final.
    - Convierta 2 o más espacios en 1.
    - Excluya la nueva línea con un espaciado inicial.
 */
let c = " Hola e  F"
actividad13(c)

function actividad13(cadena) {
    // Si la posición inicial está en blanco
    if (cadena.charAt(0) == " ") {
        cadena = cadena.substring(1);

    }

    // Si la posición final está en blanco

    if (cadena.charAt(cadena.length - 1) == " ") {
        cadena = cadena.substring(0, cadena.length - 1);


    }
    // Quito los dos espacios
    cadena = cadena.replace(/[ ]+/g, " ");
    //Numero de palabras
    let numero_palabra = cadena.split(" ").length;
    //Excluya la nueva línea con un espaciado
    cadena = "\t" + cadena;
    console.log(cadena);
    return numero_palabra;
}

/*
14-    Escriba una función para verificar si un valor dado por el usuario es un valor de IP o no. 
*/

function actividad14(ipString) {
    //Se repite de 1 a 3 veces los numeros entre el 0-9 con un punto al final, todo eso se repite exactamente 3 veces
    // Y luego se repite lo mismo pero sin el punto al final

    let regex = new RegExp("^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$");
    return regex.test(ipString);
}