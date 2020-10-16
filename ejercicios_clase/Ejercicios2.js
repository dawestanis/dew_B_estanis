/* EJERCICIOS JAVASCRIPT(II)*/


/**
 * ACTIVIDAD 1
 *Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje 
 de error cuando se produzca alguna de las siguientes situaciones (el mensaje de 
 error debe indicar qué situación(es) no se cumplieron):
 a) Al menos una de las 3 variables es negativa
 b) Las tres variables son iguales a 0
 c) Las suma de las 3 variables es mayor que 10 Y las tres variables son 
 diferentes
 */
/*
var a = prompt("Introduce el primer nummero.");
var b = prompt("introduce el segundo numero");
var c = prompt("introduce el tercer numero");

if (a < 0 || b < 0 || c < 0) {
    alert("Error, alguno de los valores introducidos es negativo.")
} else if (a == 0 && b == 0 && c == 0) {
    alert("Error, los tres valores son iguales a 0.")
} else if ((10 < (parseInt(a) + parseInt(b) + parseInt(c))) && (a != b && a != b && a != c)) {
    alert("Error, los valores suman mas de 10 y son diferentes entre si.")
}


/**
 * ACTIVIDAD 2
 * Diseñar una función que acepta un argumento x y que muestre los siguientes 
 * mensajes:
 * a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0
 * b) ‘El número es par’, si x es 2, 4 ó 6
 * c) ‘El número es impar’, si x es 1, 3 ó 5
 * d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos
 */

/*
function codigofacilito(x) {
    var respuesta = "";
    var todoCorrecto = true;
    if (x == 0) {
        respuesta += "Este es muy facil... ¡Prueba otro!";
        todoCorrecto = false;
    }
    if (x == 2 || x == 4 || x == 6) {
        respuesta += "El número es par";
        todoCorrecto = false;
    }
    if (x == 1 || x == 3 || x == 5) {
        respuesta += "El número es impar.";
        todoCorrecto = false;
    }
    if (x > 6) {
        respuesta += "Sólo se contar de 0 a 6";
        todoCorrecto = false;
    }

    if (todoCorrecto == false) {
        window.alert(respuesta)
        return false;
    }
};
var x = prompt("Dame un numero del 1 al 6.")
alert(codigofacilito(x));


/**
 * ACTIVIDAD 3
 *  Realizar un bucle for que actualice una variable i y otra j de la siguiente 
 * forma:
 * a) i comienza en 0, j comienza en 20
 * b) El bucle debe parar cuando i sea mayor que 8 ó j sea menor que 0
 * c) i se incrementa de 1 en 1, j se decrementa de 3 en 3
 * d) Dentro del bucle sólo puede estar la sentencia console.log(i, j)
 */
console.log("estoy aqui")
for (var i = 0; i <= 8; i++) {
    for (var j = 20; 0 < j; j -= 3) {
        console.log(i, j);
    }
}


/**
 * ACTIVIDAD 4
 * En el siguiente bucle while tenemos que tener cuidado porque hay operaciones 
 * que pueden dar error (no puede haber raíces cuadradas de números negativos, ni 
 * divisiones por cero). 
 * 
 * a) Cambia el bucle while usando continue y break para que si hay una raíz 
 * cuadrada de un número negativo directamente pase a la siguiente iteración. En el 
 * caso de haber una división por cero, el bucle debe detenerse inmediatamente.
 * 
 * b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más 
 * sencillo?
 * 
 * c) Cambia el bucle while original para que se ejecute sin tener que asignar 
 * un valor inicial a la variable result.
 */

let result = 1,
    arg1, arg2, res1, res2;
while (result > 0) {
    arg1 = Math.random() - 0.5;
    res1 = Math.sqrt(arg1);
    arg2 = Math.random();
    res2 = res1 / (arg1 + arg2);
    result = res1 + res2;
    console.log(result);
}

/**
 * ACTIVIDAD 5
 * La letra del NIF se calcula dividiendo la parte numérica (8 primeras cifras) 
 * por 23. A partir del resto de esta división se asigna una letra según su posición 
 * en la siguiente cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.
 * 
 * Por ejemplo, el DNI 64253469 da como resto 2 al dividir por 23 (tercera posición, 
 * ya que empieza por 0), por lo que le corresponde la letra `W`.
 * 
 * Implementar una función que calcule la letra a partir del número del NIF.
 */

function comprobarNif(nif) {
    var valido = true;
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni;
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/; //expresion regular que comprueba si el dato obtenido tiene 8 digitos y una letra de la a la z, tanto mayuscula como minuscula.

    if (expresion_regular_dni.test(nif) == true) {
        numero = nif.substr(0, nif.length - 1);
        letr = nif.substr(nif.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) { //si la letra no corresponde con las permitidas devuelve false.
            valido = false;
        } else {
            valido = true;
        }
    } else {
        valido = false;
    }
    return valido;
}


/**
 * ACTIVIDAD 6
 * Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la 
 * siguiente expresión: `C = (F − 32) * 5/9`. Implementar una función 
 * que realice esta conversión (comprueba que 32ºF son 0ºC y que 
 * 75.2ºF son 24ºC).
 */

function farenheitTocelsius(numero) {
    var farenheit = numero;
    var celsius = alert(farenheit - 32) * 5 / 9;
    return celsius;
}
farenheitTocelsius(32);

/**
 * ACTIVIDAD 7
 * En el ejercicio anterior, añadir un argumento opcional booleano de forma 
 * que si está a `False` (valor por defecto) devuelve sólo el resultado 
 * numérico (p.ej: `24`), mientras que si se indica `True` le añade la 
 * unidad `ºC` (p.ej `24ºC`).
 */

function farenheitTocelsius(numero, letra) {
    var respuesta = "";
    var farenheit = numero;
    var celsius = alert(farenheit - 32) * 5 / 9;
    if (letra == false) {
        respuesta+= "El resultado es: " + celsius;
    } else {
        respuesta+= "El resultado es: " + celsius + "ºC"
    }
}
var numero = prompt("Dame los grados Farenheit que quieres cambiar a Celsius.")
var letra = prompt("Escribe true si lo quieres con letra.")
farenheitTocelsius(numero,letra);